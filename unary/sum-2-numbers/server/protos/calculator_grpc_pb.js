// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var protos_calculator_pb = require('../protos/calculator_pb.js');

function serialize_calculator_SumReq(arg) {
  if (!(arg instanceof protos_calculator_pb.SumReq)) {
    throw new Error('Expected argument of type calculator.SumReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_SumReq(buffer_arg) {
  return protos_calculator_pb.SumReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_calculator_SumRes(arg) {
  if (!(arg instanceof protos_calculator_pb.SumRes)) {
    throw new Error('Expected argument of type calculator.SumRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_SumRes(buffer_arg) {
  return protos_calculator_pb.SumRes.deserializeBinary(new Uint8Array(buffer_arg));
}


var CalculatorSrvService = exports.CalculatorSrvService = {
  sum: {
    path: '/calculator.CalculatorSrv/Sum',
    requestStream: false,
    responseStream: false,
    requestType: protos_calculator_pb.SumReq,
    responseType: protos_calculator_pb.SumRes,
    requestSerialize: serialize_calculator_SumReq,
    requestDeserialize: deserialize_calculator_SumReq,
    responseSerialize: serialize_calculator_SumRes,
    responseDeserialize: deserialize_calculator_SumRes,
  },
};

exports.CalculatorSrvClient = grpc.makeGenericClientConstructor(CalculatorSrvService);
