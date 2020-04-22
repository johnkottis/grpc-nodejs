//import all dependencies
var grpc = require("grpc");
//import methods generated from protobuffer
var mathMethods = require('../server/protos/mathematics_pb');
//import service generated from protobuffer
var MathSrv = require('../server/protos/mathematics_grpc_pb');

// implement rpc streaming method
function sqrtStrm(call, callback) {
    var question = call.request.getQuestion();

    if (question >= 0) {
        // implement response 
        var solutionAll = new mathMethods.SolutionAll();
        // pass the response value
        solutionAll.setAnswer(
            Math.sqrt(question)
        );

        // implement interval to simulate the streaming delay
        let count = 0;
        intervalId = setInterval(function () {
            // create the stream
            call.write(solutionAll);
            if (++count > 9) {
                clearInterval(intervalId)
                // notify that the streaming has now ended
                call.end();
            }
        }, 1000);

        // send the response
        //callback(null, solutionAll);
    } else {
        return callback({
            code: grpc.status.INVALID_ARGUMENT,
            message: "Input is a negative number!!!"
        })
    }
}

// implement rpc method
function sqrt(call, callback) {
    var question = call.request.getQuestion();
    if (question >= 0) {
        // implement response 
        var solution = new mathMethods.Solution();

        // pass the response value
        solution.setAnswer(
            Math.sqrt(question)
        );
        // send the response
        callback(null, solution);
    } else {
        return callback({
            code: grpc.status.INVALID_ARGUMENT,
            message: "Input is a negative number!!!"
        })
    }
}

function main() {
    // create the server
    var server = new grpc.Server();

    // add the service
    server.addService(MathSrv.TestService, {
        sqrt: sqrt,
        sqrtStrm: sqrtStrm
    });

    // bind to URL and port
    server.bind("127.0.0.1:50051", grpc.ServerCredentials.createInsecure())
    // start the server
    server.start();
    console.log('Server is running')
}

main();
