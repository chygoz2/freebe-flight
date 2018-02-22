const chai = require('chai');
const chaiHttp = require('chai-http');
const nock = require('nock');
const axios = require('axios');

const server = require('../server');
const getHeaderConfig = require('../controllers/get_header_config');
const { input, flightSearchResponse } = require('./nock_responses/flight_search_mock_data');

const should = chai.should();
const expect = chai.expect;
const assert = chai.assert;

chai.use(chaiHttp);

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

    describe('/GET Airports by Search Term', () => {
        it('it should return airport(s) that contain a search query', (done) => {
            chai.request(server)
                .get('/api/search/enugu')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body[0].should.be.a('object');
                    res.body[0].should.have.property('iataCode');
                    assert.equal(res.body[0].iataCode, "ENU");
                    done();
                });
        });
    });
});

describe('Flights', () => {
    describe('/POST Search Flights', () => {
        beforeEach(() => {
            nock('http://127.0.0.1:3000')
              .post('/api/flights/search', input)
              .reply(200, flightSearchResponse);
        });
        it('it should return flights on the specified date', async (done) => {
            const config = await getHeaderConfig();
            axios
                .post('http://127.0.0.1:3000/api/flights/search', input, config)
                .then(res => {
                    const { data } = res;
                    expect(res.status).to.equal(200);
                    expect(typeof data).to.equal('object');
                    assert.equal(data.data.airlineItineraries[0].airlineCode, "9J");
                    assert.equal(data.data.airlineItineraries[0].pricedItineraries[0].totalFare, 2700000);
                    done();
                });
        })
    })
});