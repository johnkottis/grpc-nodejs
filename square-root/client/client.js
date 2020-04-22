//import all dependencies
var grpc = require("grpc");
//import methods generated from protobuffer
var mathMethods = require('../server/protos/mathematics_pb');
//import service generated from protobuffer
var MathSrv = require('../server/protos/mathematics_grpc_pb');

// return deadline
function getRPCDeadline(rpcType) {
    var timeAllowed = 15000;
    switch (rpcType) {
        case 1:
            timeAllowed = 15000
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

// Unary API
function callSqrt() {
    // create the client 
    var client = new MathSrv.TestClient(
        'localhost:50051',
        grpc.credentials.createInsecure()
    );

    // create request & response entities
    var req = new mathMethods.Problem();
    var res = new mathMethods.Solution();

    // pass parameters to the request
    req.setQuestion(16);

    // send response
    client.sqrt(req, { deadline: getRPCDeadline(1) }, (error, res) => {
        if (error) {
            console.error(error.message + ' - ' + error.code);
        } else {
            console.log('sqrt is ' + res)
        }
    });
}

// Server Streaming API
function callSqrtStrm() {
    // create the client 
    var client = new MathSrv.TestClient(
        'localhost:50051',
        grpc.credentials.createInsecure()
    );

    // create request & response entities
    var req = new mathMethods.ProblemAll();
    var res = new mathMethods.SolutionAll();

    // pass parameters to the request
    req.setQuestion(16);

    // create the request
    var call = client.sqrtStrm(req, { deadline: getRPCDeadline(1) },(error, res) => {});
    
    // Callback once we get the data back from the server
    call.on("data", (res)=>{
        console.log("Streaming data: " + res.getAnswer());
    });

    call.on("end", (res)=>{
        console.log("Streaming data ended");
    });
}

function main() {
    // callSqrt();
    callSqrtStrm();
}

main();
