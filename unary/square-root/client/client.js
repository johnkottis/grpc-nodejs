var grpc = require("grpc");
var schoolMethods = require('../server/protos/school_pb');
var schoolSrv = require('../server/protos/school_grpc_pb');

function main() {
    // create tge client 
    var client = new schoolSrv.TestClient(
        'localhost:50051',
        grpc.credentials.createInsecure()
    );

    // create request & response entities
    var req = new schoolMethods.Teacher();
    var res = new schoolMethods.Student();
    // pass parameters to the request
    req.setQuestion(-16);
    // echo resposnse
    client.sqrt(req, (error, res)=>{
        if (error) {
            console.error(error.message + ' - ' + error.code);
        } else {
            console.log('sqrt is '+ res)
        }
    });
}

main();
