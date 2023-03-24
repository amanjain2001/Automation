var chai=require('chai');
let {expect,assert}=require('chai');
let chaiHttp=require('chai-http');
chai.use(chaiHttp);

let data=require('./endPoints.json')
let expectedResponse=require('./expectedResponse.json')

describe('Validating delete request for an API',()=>{
    
    it('Verifying the user can delete data using delete request',async function () {

        let response=await chai.request(data.reqresUrl)
        .delete(data.deleteRequestEndPoint);
        expect(response).to.have.status(204);   
    })
})