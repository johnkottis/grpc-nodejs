var calcSrv = require("../server/protos/calculator_grpc_pb");
var calcMethods = require("../server/protos/calculator_pb");
var grpc = require("grpc");

function avgSrv(call, callback) {
    // callback once you receive the data
    call.on("data", req => {
        console.log("Request Reveived: ", req);
        var numbers = req.getNumbersList();
        console.log("numbers Reveived: ", numbers);
    });
    // error logging
    call.on("error", err => {
        console.log("Finished with an error: ", err);
    });
    // create and send response once all data are received
    call.on("end", () => {
 
        var res = new calcMethods.AvgRes();
        res.setAvgPrice(5);

        callback(null, res);
        console.log("Finished!");
    });
}

function main() {
    var server = new grpc.Server();

    server.addService(calcSrv.CalculatorSrvService, { avgSrv: avgSrv });
    server.bind("127.0.0.1:50051", grpc.ServerCredentials.createInsecure());
    console.log("Server is running on 127.0.0.1");

    server.start();
}

main();
