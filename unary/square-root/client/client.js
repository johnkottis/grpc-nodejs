var grpc = require("grpc");
var schoolMethods = require('../server/protos/school_pb');
var schoolSrv = require('../server/protos/school_grpc_pb');

// return deadline
function getRPCDeadline(rpcType) {

    timeAllowed = 5000
    switch (rpcType) {
        case 1:
            timeAllowed = 5000
            break
        case 2:
            timeAllowed = 7000
            break
        default:
            console.log("Invalid RPC Type: Using Default Timeout")
    }

    // deadline = timestamp + waiting time
    return new Date(Date.now() + timeAllowed)

}

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
    client.sqrt(req, { deadline: getRPCDeadline(1) }, (error, res) => {
        if (error) {
            console.error(error.message + ' - ' + error.code);
        } else {
            console.log('sqrt is ' + res)
        }
    });
}

main();
