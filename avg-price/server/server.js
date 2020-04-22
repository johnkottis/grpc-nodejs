var calcSrv = require("../server/protos/calculator_grpc_pb");
var calcMethods = require("../server/protos/calculator_pb");
var grpc = require("grpc");

function avgSrv(call, callback) {
    var numbers=0;
    var counter=0;
    // callback once you receive the data
    call.on("data", req => {
        numbers += req.getNumbers();
        counter++;
        console.log("numbers Reveived: ", req.getNumbers());
    });
    // error logging
    call.on("error", err => {
        console.log("Finished with an error: ", err);
    });
    // create and send response once all data are received
    call.on("end", () => {

        var res = new calcMethods.AvgRes();
        console.log()
        res.setAvgPrice(numbers/counter);

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
