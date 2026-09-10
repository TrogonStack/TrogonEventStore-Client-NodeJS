// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var event_store_protocols_v1_gossip_pb = require('../../../event_store/protocols/v1/gossip_pb.js');
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

function serialize_event_store_client_gossip_ClusterInfo(arg) {
  if (!(arg instanceof event_store_protocols_v1_gossip_pb.ClusterInfo)) {
    throw new Error('Expected argument of type event_store.client.gossip.ClusterInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_store_client_gossip_ClusterInfo(buffer_arg) {
  return event_store_protocols_v1_gossip_pb.ClusterInfo.deserializeBinary(new Uint8Array(buffer_arg));
}


var GossipService = exports.GossipService = {
  read: {
    path: '/event_store.client.gossip.Gossip/Read',
    requestStream: false,
    responseStream: false,
    requestType: event_store_protocols_v1_shared_pb.Empty,
    responseType: event_store_protocols_v1_gossip_pb.ClusterInfo,
    requestSerialize: serialize_event_store_client_Empty,
    requestDeserialize: deserialize_event_store_client_Empty,
    responseSerialize: serialize_event_store_client_gossip_ClusterInfo,
    responseDeserialize: deserialize_event_store_client_gossip_ClusterInfo,
  },
};

exports.GossipClient = grpc.makeGenericClientConstructor(GossipService, 'Gossip');
