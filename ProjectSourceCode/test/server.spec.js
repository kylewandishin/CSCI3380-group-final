// ********************** Initialize server **********************************

const server = require('../src/index'); //TODO: Make sure the path to your index.js is correctly added

// ********************** Import Libraries ***********************************

const chai = require('chai'); // Chai HTTP provides an interface for live integration testing of the API's.
const chaiHttp = require('chai-http');
chai.should();
chai.use(chaiHttp);
const {assert, expect} = chai;

// ********************** DEFAULT WELCOME TESTCASE ****************************

describe('Server!', () => {
  // Sample test case given to test / endpoint.
  it('Returns the default welcome message', done => {
    chai
      .request(server)
      .get('/welcome')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals('success');
        assert.strictEqual(res.body.message, 'Welcome!');
        done();
      });
  });
});

// *********************** TODO: WRITE 2 UNIT TESTCASES **************************

describe('Login API', () => {
    // Sample test case given to test / endpoint.
    it('If user credentials are wrong show error message', done => {
      chai
        .request(server)
        .post('/login')
        .type('form')
        .send({ username: 'testuser', password: 'wrongpassword' })
        .end((err, res) => {
         expect(res).to.have.status(200); // still renders login page
         expect(res.text).to.include('Invalid username or password'); // or any error string you render
         done();
    });
});

it(' should show error and stay on login page with wrong credentials', done => {
  chai
    .request(server)
    .post('/login')
    .type('form')
    .send({ username: 'testuser', password: 'wrongpassword' }) // invalid
    .end((err, res) => {
      expect(res).to.have.status(200); // still renders login page
      expect(res.text).to.include('Invalid username or password');
      done();
    });
});
})     


// ********************************************************************************