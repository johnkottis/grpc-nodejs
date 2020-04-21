var calcSrv = require("../server/protos/calculator_grpc_pb");
var calcMethods = require ("../server/protos/calculator_pb");
var grpc = require("grpc");

function main() {
    var client = new calcSrv.CalculatorSrvClient(
        'localhost:50051',
        grpc.credentials.createInsecure()
    );

    var req = new calcMethods.SumReq();
    var res = new calcMethods.SumRes();

    req.setNumberOne(10);
    req.setNumberTwo(3);

    client.sum(req, (error, res)=>{
        if (!error) console.log("10 + 3 = " + res);
        else console.error("Finished with the following error: " + error);
    })
    
}

main();
