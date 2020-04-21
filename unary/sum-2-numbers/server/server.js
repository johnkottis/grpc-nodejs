var calcSrv = require("../server/protos/calculator_grpc_pb");
var calcMethods = require ("../server/protos/calculator_pb");
var grpc = require("grpc");

function sum(call, callback) {
    var sumRes = new calcMethods.SumRes();

    sumRes.setSumResult(
        call.request.getNumberOne() + call.request.getNumberTwo()
    )

    callback(null, sumRes);

}

function main() {
    var server = new grpc.Server();
    server.addService(calcSrv.CalculatorSrvService, {sum:sum});
    server.bind("127.0.0.1:50051", grpc.ServerCredentials.createInsecure());
    console.log("Server is running on 127.0.0.1");

    server.start();
}

main();
