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
// negative route
describe('Login API', () => {
    // Sample test case given to test / endpoint.
    it('If user credentials are wrong show error message', done => {
      chai
        .request(server)
        .post('/login')
        .type('form')
        .send({ username: 'testuser', password: 'wrongpassword' })
        .end((err, res) => {
         expect(res).to.have.status(200); 
         expect(res.text).to.include('Invalid username or password'); 
         done();
    });
});
})

// positive route
describe('Login API', () => {
  it('should redirect to /profile after successful login', done => {
    chai
      .request(server)
      .post('/login')
      .redirects(0) 
      .type('form')
      .send({ username: 'testuser', password: 'testpass123' })
      .end((err, res) => {
        expect(res).to.have.status(302); 
        expect(res).to.redirectTo(/\/profile$/); 
        done();
      });
  });
})  

// register tests



// ********************************************************************************