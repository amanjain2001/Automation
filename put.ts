let chai=require('chai');
let {expect,assert}=require('chai');
let chaiHttp=require('chai-http');
chai.use(chaiHttp);

let data=require('./endPoints.json')
let expectedResponse=require('./expectedResponse.json')
let body=require('./requestBody.json')

describe('Validating put request for an API',()=>{

    it('Verifying the user can update data using put request',async function () {
        
        let response=await chai.request(data.reqresUrl)
        .put(data.putRequestEndPoint)
        .send(body.putRequestBody)
        expect(response).to.have.status(200);
    })
})