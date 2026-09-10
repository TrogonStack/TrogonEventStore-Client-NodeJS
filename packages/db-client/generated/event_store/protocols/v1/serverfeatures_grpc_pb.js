// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var event_store_protocols_v1_serverfeatures_pb = require('../../../event_store/protocols/v1/serverfeatures_pb.js');
var event_store_protocols_v1_shared_pb = require('../../../event_store/protocols/v1/shared_pb.js');

function serialize_event_store_client_Empty(arg) {
  if (!(arg instanceof event_store_protocols_v1_shared_pb.Empty)) {
    throw new Error('Expected argument of type event_store.client.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_store_client_Empty(buffer_arg) {
  return event_store_protocols_v1_shared_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_store_client_server_features_SupportedMethods(arg) {
  if (!(arg instanceof event_store_protocols_v1_serverfeatures_pb.SupportedMethods)) {
    throw new Error('Expected argument of type event_store.client.server_features.SupportedMethods');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_store_client_server_features_SupportedMethods(buffer_arg) {
  return event_store_protocols_v1_serverfeatures_pb.SupportedMethods.deserializeBinary(new Uint8Array(buffer_arg));
}


var ServerFeaturesService = exports.ServerFeaturesService = {
  getSupportedMethods: {
    path: '/event_store.client.server_features.ServerFeatures/GetSupportedMethods',
    requestStream: false,
    responseStream: false,
    requestType: event_store_protocols_v1_shared_pb.Empty,
    responseType: event_store_protocols_v1_serverfeatures_pb.SupportedMethods,
    requestSerialize: serialize_event_store_client_Empty,
    requestDeserialize: deserialize_event_store_client_Empty,
    responseSerialize: serialize_event_store_client_server_features_SupportedMethods,
    responseDeserialize: deserialize_event_store_client_server_features_SupportedMethods,
  },
};

exports.ServerFeaturesClient = grpc.makeGenericClientConstructor(ServerFeaturesService, 'ServerFeatures');
