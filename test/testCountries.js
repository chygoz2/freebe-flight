const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();
const expect = chai.expect();
const assert = chai.assert;

chai.use(chaiHttp);
process.env.NODE_ENV = 'test';

describe('Countries', () => {
    describe('/GET Countries', () => {
        it('it should return a list of countries', (done) => {
            chai.request(server)
                .get('/api/countries')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('status');
                    res.body.should.have.property('message');
                    res.body.should.have.property('countries');
                    res.body.countries.should.be.a('array');
                    assert.isAbove(res.body.countries.length, 0);
                    done();
                });
        });
    });

    describe('/GET Country', () => {
        it('it should return details of a particular country', (done) => {
            chai.request(server)
                .get('/api/countries/NG')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('country');
                    res.body.country.should.be.a('object');
                    res.body.country.should.have.property('code');
                    res.body.country.should.have.property('name');
                    assert.equal(res.body.country.name, "NIGERIA");
                    assert.equal(res.body.country.capital, "Abuja");
                    done();
                });
        });
    });
});