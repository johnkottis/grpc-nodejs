//import all dependencies
var grpc = require("grpc");
//import methods generated from protobuffer
var schoolMethods = require('../server/protos/school_pb');
//import service generated from protobuffer
var schoolSrv = require('../server/protos/school_grpc_pb');

// implement rpc method
function sqrt(call, callback) {
    // implement response entity
    var answer = new schoolMethods.Student();

    // pass the response value
    answer.setAnswer(
        Math.sqrt(call.request.getQuestion())
    );
    // send the response
    callback(null, answer);
}


function main() {
    // create the server
    var server = new grpc.Server();

    // add the service
    server.addService(schoolSrv.TestService, {sqrt:sqrt});

    // bind to URL and port
    server.bind("127.0.0.1:50051", grpc.ServerCredentials.createInsecure())
    // start the server
    server.start();
}

main();
