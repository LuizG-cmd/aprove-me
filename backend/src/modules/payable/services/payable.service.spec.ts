const supertest = require('supertest');

const build = require('../../../app')


afterAll(() => build.close());


test("create payable", async ()=>{
    
    const response = await supertest(build.server)
    .post('/integrations/')
    .send({
        value:25.00,
        simpledate: "2025/01/28",
        assignorId: "0e654d8d-c3a5-4091-b2dd-85f03de34171"

    })
    .expect(200)
    .end(function(err, response) {
        if (err) return err;
        return response
      });
})