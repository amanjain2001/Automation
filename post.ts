var chai=require('chai');
let {expect,assert}=require('chai');
let chaiHttp=require('chai-http');
chai.use(chaiHttp);

let data=require('./endPoints.json')
let expectedResponse=require('./expectedResponse.json');
let body=require('./requestBody.json')

describe('Validating post request for an API',()=>{

    it('Verifying the user can add data using post request',async function () {
        
        let postResponse=await chai.request(data.reqresUrl)
        .post(data.postRequestEndPoint)
        .send(body.postRequestBody)
        expect(postResponse).to.have.status(201);
        expect(postResponse.body.name).to.equal(expectedResponse.postResponseBodyName);
        expect(postResponse.body.job).to.equal(expectedResponse.postResponseBodyJob)
    })
})