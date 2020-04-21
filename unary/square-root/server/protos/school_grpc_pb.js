// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var protos_school_pb = require('../protos/school_pb.js');

function serialize_mathematics_Student(arg) {
  if (!(arg instanceof protos_school_pb.Student)) {
    throw new Error('Expected argument of type mathematics.Student');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mathematics_Student(buffer_arg) {
  return protos_school_pb.Student.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mathematics_Teacher(arg) {
  if (!(arg instanceof protos_school_pb.Teacher)) {
    throw new Error('Expected argument of type mathematics.Teacher');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mathematics_Teacher(buffer_arg) {
  return protos_school_pb.Teacher.deserializeBinary(new Uint8Array(buffer_arg));
}


var TestService = exports.TestService = {
  sqrt: {
    path: '/mathematics.Test/sqrt',
    requestStream: false,
    responseStream: false,
    requestType: protos_school_pb.Teacher,
    responseType: protos_school_pb.Student,
    requestSerialize: serialize_mathematics_Teacher,
    requestDeserialize: deserialize_mathematics_Teacher,
    responseSerialize: serialize_mathematics_Student,
    responseDeserialize: deserialize_mathematics_Student,
  },
};

exports.TestClient = grpc.makeGenericClientConstructor(TestService);
