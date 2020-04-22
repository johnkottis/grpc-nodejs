// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var protos_mathematics_pb = require('../protos/mathematics_pb.js');

function serialize_mathematics_Problem(arg) {
  if (!(arg instanceof protos_mathematics_pb.Problem)) {
    throw new Error('Expected argument of type mathematics.Problem');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mathematics_Problem(buffer_arg) {
  return protos_mathematics_pb.Problem.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mathematics_ProblemAll(arg) {
  if (!(arg instanceof protos_mathematics_pb.ProblemAll)) {
    throw new Error('Expected argument of type mathematics.ProblemAll');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mathematics_ProblemAll(buffer_arg) {
  return protos_mathematics_pb.ProblemAll.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mathematics_Solution(arg) {
  if (!(arg instanceof protos_mathematics_pb.Solution)) {
    throw new Error('Expected argument of type mathematics.Solution');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mathematics_Solution(buffer_arg) {
  return protos_mathematics_pb.Solution.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mathematics_SolutionAll(arg) {
  if (!(arg instanceof protos_mathematics_pb.SolutionAll)) {
    throw new Error('Expected argument of type mathematics.SolutionAll');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mathematics_SolutionAll(buffer_arg) {
  return protos_mathematics_pb.SolutionAll.deserializeBinary(new Uint8Array(buffer_arg));
}


var TestService = exports.TestService = {
  // Unary Service
sqrt: {
    path: '/mathematics.Test/sqrt',
    requestStream: false,
    responseStream: false,
    requestType: protos_mathematics_pb.Problem,
    responseType: protos_mathematics_pb.Solution,
    requestSerialize: serialize_mathematics_Problem,
    requestDeserialize: deserialize_mathematics_Problem,
    responseSerialize: serialize_mathematics_Solution,
    responseDeserialize: deserialize_mathematics_Solution,
  },
  // Streaming Service
sqrtStrm: {
    path: '/mathematics.Test/sqrtStrm',
    requestStream: false,
    responseStream: true,
    requestType: protos_mathematics_pb.ProblemAll,
    responseType: protos_mathematics_pb.SolutionAll,
    requestSerialize: serialize_mathematics_ProblemAll,
    requestDeserialize: deserialize_mathematics_ProblemAll,
    responseSerialize: serialize_mathematics_SolutionAll,
    responseDeserialize: deserialize_mathematics_SolutionAll,
  },
};

exports.TestClient = grpc.makeGenericClientConstructor(TestService);
