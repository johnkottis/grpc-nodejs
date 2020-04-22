// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var protos_calculator_pb = require('../protos/calculator_pb.js');

function serialize_calculator_AvgReq(arg) {
  if (!(arg instanceof protos_calculator_pb.AvgReq)) {
    throw new Error('Expected argument of type calculator.AvgReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_AvgReq(buffer_arg) {
  return protos_calculator_pb.AvgReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_calculator_AvgRes(arg) {
  if (!(arg instanceof protos_calculator_pb.AvgRes)) {
    throw new Error('Expected argument of type calculator.AvgRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_AvgRes(buffer_arg) {
  return protos_calculator_pb.AvgRes.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service avgSrv
var CalculatorSrvService = exports.CalculatorSrvService = {
  avgSrv: {
    path: '/calculator.CalculatorSrv/avgSrv',
    requestStream: true,
    responseStream: false,
    requestType: protos_calculator_pb.AvgReq,
    responseType: protos_calculator_pb.AvgRes,
    requestSerialize: serialize_calculator_AvgReq,
    requestDeserialize: deserialize_calculator_AvgReq,
    responseSerialize: serialize_calculator_AvgRes,
    responseDeserialize: deserialize_calculator_AvgRes,
  },
};

exports.CalculatorSrvClient = grpc.makeGenericClientConstructor(CalculatorSrvService);
