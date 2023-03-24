var chai=require('chai');
let {expect}=require('chai');
let chaiHttp=require('chai-http');
chai.use(chaiHttp);

let data=require('./endPoints.json')
let expectedResponse=require('./expectedResponse.json')

describe('Validating get request for an API',()=>{

    it('Verifying the user can get data using get request',async function () {

        let getResponse=await chai.request(data.aviationStackUrl)
        .get(data.getRequestEndPoint+data.accessKey);
        expect(getResponse).to.have.status(200);
        expect(getResponse.body.data[0]).to.have.deep.equal(expectedResponse.getResponseBody)
    })
})