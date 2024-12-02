const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
    it('responds with Hello, Jenkins!', async () => {
        const response = await request(app).get('/');
        expect(response.text).toBe('Hello, Jenkins!');
        expect(response.statusCode).toBe(200);
    });
});
