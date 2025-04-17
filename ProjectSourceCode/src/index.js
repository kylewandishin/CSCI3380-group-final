// *****************************************************
// <!-- Section 1 : Import Dependencies -->
// *****************************************************

const express = require('express'); // To build an application server or API
const app = express();
const handlebars = require('express-handlebars');
const path = require('path');
const pgp = require('pg-promise')(); // To connect to the Postgres DB from the node server
const bodyParser = require('body-parser');
const session = require('express-session'); // To set the session object. To store or access session data, use the `req.session`, which is (generally) serialized as JSON by the store.
const bcrypt = require('bcryptjs'); //  To hash passwords
const axios = require('axios'); // To make HTTP requests from our server. We'll learn more about it in Part C.

// *****************************************************
// <!-- Section 2 : Connect to DB -->
// *****************************************************

// create `ExpressHandlebars` instance and configure the layouts and partials dir.
const hbs = handlebars.create({
  extname: 'hbs',
  layoutsDir: __dirname + '/views/layouts',
  partialsDir: __dirname + '/views/partials',
});

// database configuration
const dbConfig = {
  host: 'db', // the database server
  port: 5432, // the database port
  database: process.env.POSTGRES_DB, // the database name
  user: process.env.POSTGRES_USER, // the user account to connect with
  password: process.env.POSTGRES_PASSWORD, // the password of the user account
};

const db = pgp(dbConfig);

// test your database
db.connect()
  .then((obj) => {
    console.log('Database connection successful'); // you can view this message in the docker compose logs
    obj.done(); // success, release the connection;
  })
  .catch((error) => {
    console.log('ERROR:', error.message || error);
  });

// *****************************************************
// <!-- Section 3 : App Settings -->
// *****************************************************

// Register `hbs` as our view engine using its bound `engine()` function.
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json()); // specify the usage of JSON for parsing request body.
app.use(express.static('src/resources'));
// initialize session variables
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
  }),
);

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.get('/', (req, res) => {
  res.redirect('/login');
});
app.get('/register', (req, res) => {
  res.render('pages/register');
});
app.post('/register', async (req, res) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 10);
    await db.query('INSERT INTO users (username, password) VALUES ($1, $2)', [
      req.body.username,
      hash,
    ]);
    res.redirect('/login');
  } catch (error) {
    console.error('Registration error:', error);
    res.redirect('/register');
  }
});
app.get('/login', (req, res) => {
  res.render('pages/login');
});
app.post('/login', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM users WHERE username = $1', [
      req.body.username,
    ]);
    if (!result || result.length === 0) {
      return res.redirect('/register');
    }
    const user = result[0];
    const match = await bcrypt.compare(req.body.password, user.password);
    console.log('Password match:', match, req.body.password, user.password);
    if (!match) {
      return res.render('pages/login', {
        message: 'Incorrect username or password.',
      });
    }
    req.session.user = user;
    req.session.save((err) => {
      if (err) {
        console.error('Session save error:', err);
        return res.redirect('/login');
      }
      res.redirect('/map');
    });
  } catch (error) {
    console.error('Login error:', error);
    res.render('pages/login', {
      message: 'An error occurred. Please try again.',
    });
  }
});
/*
const auth = (req, res, next) => {
  if (!req.session.user) {
    return res.redirect('/login');
  }
  next();
};
//app.use(auth);
*/


app.get('/map', async (req, res) => {
  try {
    const markers = await db.any(`
      SELECT 
        gp.id AS graffiti_id,
        gp.latitude AS lat,
        gp.longitude AS lng,
        gp.image_url AS img,
        gp.description AS text,
        COALESCE(JSON_AGG(
          JSON_BUILD_OBJECT(
            'username', u.username,
            'comment_text', c.comment_text
          )
        ) FILTER (WHERE c.id IS NOT NULL), '[]') AS comments
      FROM graffiti_posts gp
      LEFT JOIN comments c ON c.graffiti_id = gp.id
      LEFT JOIN users u ON u.id = c.user_id
      GROUP BY gp.id
    `);

    res.render('pages/map', {
      centerLat: 40.019,
      centerLng: -105.2747,
      zoom: 14,
      markers: markers,
    });
  } catch (error) {
    console.error('Error fetching graffiti posts:', error);
    res.status(500).send('Database error');
  }
});

app.post('/comment', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { graffiti_id, comment_text } = req.body;

  try {
    await db.none(
      'INSERT INTO comments (user_id, graffiti_id, comment_text) VALUES ($1, $2, $3)',
      [req.session.user.id, graffiti_id, comment_text]
    );
    res.status(200).json({ message: 'Comment added successfully' });
  } catch (error) {
    console.error('Error inserting comment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/profile', (req, res) => {
  res.render('pages/profile');
});

app.get('/logout', (req, res) => {
  req.session.destroy(function (err) {
    res.render('pages/logout');
  });
});


app.listen(3000);
console.log('Server is listening on port 3000');
