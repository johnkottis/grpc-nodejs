var calcSrv = require("../server/protos/calculator_grpc_pb");
var calcMethods = require("../server/protos/calculator_pb");
var grpc = require("grpc");

function main() {
    // create client
    var client = new calcSrv.CalculatorSrvClient(
        'localhost:50051',
        grpc.credentials.createInsecure()
    );
    // create request entity
    var req = new calcMethods.AvgReq();
    req.setNumbersList([10,2,8]);

    //create call entity
    var call = client.avgSrv(req, (err, res) => {
        if (!err) {
            console.log('Got the response: ', res.getAvgPrice())
        } else {
            console.log("finished with error: " + err);
        }
    });

    // start streaming
    call.write(req);
    // stop streaming
    call.end();

}

main();
