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

    

    //create call entity
    var call = client.avgSrv(req, (err, res) => {
        if (!err) {
            console.log('Got the response: ', res.getAvgPrice())
        } else {
            console.log("finished with error: " + err);
        }
    });

    // implement interval to simulate the streaming delay
    let count = 0;
    intervalId = setInterval(function () {
        req.setNumbers(Math.floor(Math.random() * 10));
        // create the stream
        call.write(req);
        console.log('My request was: ', req.getNumbers())
        if (++count > 3) {
            clearInterval(intervalId)
            // notify that the streaming has now ended
            call.end();
        }
    }, 1000);

}

main();
