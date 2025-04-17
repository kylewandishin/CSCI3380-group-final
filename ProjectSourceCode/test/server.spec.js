// ********************** Initialize server **********************************

const server = require('../src/index'); //TODO: Make sure the path to your index.js is correctly added

// ********************** Import Libraries ***********************************

const chai = require('chai'); // Chai HTTP provides an interface for live integration testing of the API's.
const chaiHttp = require('chai-http');
chai.should();
chai.use(chaiHttp);
const { assert, expect } = chai;

// ********************** DEFAULT WELCOME TESTCASE ****************************

describe('Server!', () => {
  // Sample test case given to test / endpoint.
  it('Returns the default welcome message', (done) => {
    chai
      .request(server)
      .get('/health')
      .end((err, res) => {
        expect(res.body.status).to.equals('success');
        assert.strictEqual(res.body.message, 'Welcome!');
        done();
      });
  });
});

// *********************** TODO: WRITE 2 UNIT TESTCASES **************************
// negative route
describe('Login API', () => {
  // Sample test case given to test / endpoint.
  it('correct user credentials', (done) => {
    chai
      .request(server)
      .post('/login')
      .type('form')
      .send({ username: 'streetking456', password: 'grafftrak' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.redirectTo(/\/map$/);
        done();
      });

    it('incorrect user credentials', (done) => {
      chai
        .request(server)
        .post('/login')
        .type('form')
        .send({ username: 'streetking456', password: 'wrongpassword' })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res).to.redirectTo(/\/login$/);
          done();
        });
    });
  });
});

describe('Register API', () => {
  // Sample test case given to test / endpoint.
  it('should return an error if the username already exists in the database', (done) => {
    chai
      .request(server)
      .post('/register')
      .type('form')
      .send({ username: 'existingUser', password: 'password123' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.include('Username already exists');
        done();
      });
  });

  it('should return an error if the password is missing', (done) => {
    chai
      .request(server)
      .post('/register')
      .type('form')
      .send({ username: 'newUser' }) // Missing password
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.text).to.include('Password is required');
        done();
      });
  });

  it('should return an error if the username is missing', (done) => {
    chai
      .request(server)
      .post('/register')
      .type('form')
      .send({ password: 'newPassword123' }) // Missing username
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.text).to.include('Username is required');
        done();
      });
  });
});

// ********************** END OF FILE **********************************
