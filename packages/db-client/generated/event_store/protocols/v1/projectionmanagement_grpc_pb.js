// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var event_store_protocols_v1_projectionmanagement_pb = require('../../../event_store/protocols/v1/projectionmanagement_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
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

function serialize_event_store_client_projections_AbortReq(arg) {
  if (!(arg instanceof event_store_protocols_v1_projectionmanagement_pb.AbortReq)) {
    throw new Error('Expected argument of type event_store.client.projections.AbortReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_store_client_projections_AbortReq(buffer_arg) {
  return event_store_protocols_v1_projectionmanagement_pb.AbortReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_store_client_projections_AbortResp(arg) {
  if (!(arg instanceof event_store_protocols_v1_projectionmanagement_pb.AbortResp)) {
    throw new Error('Expected argument of type event_store.client.projections.AbortResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_store_client_projections_AbortResp(buffer_arg) {
  return event_store_protocols_v1_projectionmanagement_pb.AbortResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_store_client_projections_CreateReq(arg) {
  if (!(arg instanceof event_store_protocols_v1_projectionmanagement_pb.CreateReq)) {
    throw new Error('Expected argument of type event_store.client.projections.CreateReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_store_client_projections_CreateReq(buffer_arg) {
  return event_store_protocols_v1_projectionmanagement_pb.CreateReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_store_client_projections_CreateResp(arg) {
  if (!(arg instanceof event_store_protocols_v1_projectionmanagement_pb.CreateResp)) {
    throw new Error('Expected argument of type event_store.client.projections.CreateResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_store_client_projections_CreateResp(buffer_arg) {
  return event_store_protocols_v1_projectionmanagement_pb.CreateResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_store_client_projections_DeleteReq(arg) {
  if (!(arg instanceof event_store_protocols_v1_projectionmanagement_pb.DeleteReq)) {
    throw new Error('Expected argument of type event_store.client.projections.DeleteReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_store_client_projections_DeleteReq(buffer_arg) {
  return event_store_protocols_v1_projectionmanagement_pb.DeleteReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_store_client_projections_DeleteResp(arg) {
  if (!(arg instanceof event_store_protocols_v1_projectionmanagement_pb.DeleteResp)) {
    throw new Error('Expected argument of type event_store.client.projections.DeleteResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_store_client_projections_DeleteResp(buffer_arg) {
  return event_store_protocols_v1_projectionmanagement_pb.DeleteResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_store_client_projections_DisableReq(arg) {
  if (!(arg instanceof event_store_protocols_v1_projectionmanagement_pb.DisableReq)) {
    throw new Error('Expected argument of type event_store.client.projections.DisableReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_store_client_projections_DisableReq(buffer_arg) {
  return event_store_protocols_v1_projectionmanagement_pb.DisableReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_store_client_projections_DisableResp(arg) {
  if (!(arg instanceof event_store_protocols_v1_projectionmanagement_pb.DisableResp)) {
    throw new Error('Expected argument of type event_store.client.projections.DisableResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_store_client_projections_DisableResp(buffer_arg) {
  return event_store_protocols_v1_projectionmanagement_pb.DisableResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_store_client_projections_EnableReq(arg) {
  if (!(arg instanceof event_store_protocols_v1_projectionmanagement_pb.EnableReq)) {
    throw new Error('Expected argument of type event_store.client.projections.EnableReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_store_client_projections_EnableReq(buffer_arg) {
  return event_store_protocols_v1_projectionmanagement_pb.EnableReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_store_client_projections_EnableResp(arg) {
  if (!(arg instanceof event_store_protocols_v1_projectionmanagement_pb.EnableResp)) {
    throw new Error('Expected argument of type event_store.client.projections.EnableResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_store_client_projections_EnableResp(buffer_arg) {
  return event_store_protocols_v1_projectionmanagement_pb.EnableResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_store_client_projections_GetConfigReq(arg) {
  if (!(arg instanceof event_store_protocols_v1_projectionmanagement_pb.GetConfigReq)) {
    throw new Error('Expected argument of type event_store.client.projections.GetConfigReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_store_client_projections_GetConfigReq(buffer_arg) {
  return event_store_protocols_v1_projectionmanagement_pb.GetConfigReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_store_client_projections_GetConfigResp(arg) {
  if (!(arg instanceof event_store_protocols_v1_projectionmanagement_pb.GetConfigResp)) {
    throw new Error('Expected argument of type event_store.client.projections.GetConfigResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_store_client_projections_GetConfigResp(buffer_arg) {
  return event_store_protocols_v1_projectionmanagement_pb.GetConfigResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_store_client_projections_GetQueryReq(arg) {
  if (!(arg instanceof event_store_protocols_v1_projectionmanagement_pb.GetQueryReq)) {
    throw new Error('Expected argument of type event_store.client.projections.GetQueryReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_store_client_projections_GetQueryReq(buffer_arg) {
  return event_store_protocols_v1_projectionmanagement_pb.GetQueryReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_store_client_projections_GetQueryResp(arg) {
  if (!(arg instanceof event_store_protocols_v1_projectionmanagement_pb.GetQueryResp)) {
    throw new Error('Expected argument of type event_store.client.projections.GetQueryResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_store_client_projections_GetQueryResp(buffer_arg) {
  return event_store_protocols_v1_projectionmanagement_pb.GetQueryResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_store_client_projections_ReadEventsReq(arg) {
  if (!(arg instanceof event_store_protocols_v1_projectionmanagement_pb.ReadEventsReq)) {
    throw new Error('Expected argument of type event_store.client.projections.ReadEventsReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_store_client_projections_ReadEventsReq(buffer_arg) {
  return event_store_protocols_v1_projectionmanagement_pb.ReadEventsReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_store_client_projections_ReadEventsResp(arg) {
  if (!(arg instanceof event_store_protocols_v1_projectionmanagement_pb.ReadEventsResp)) {
    throw new Error('Expected argument of type event_store.client.projections.ReadEventsResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_store_client_projections_ReadEventsResp(buffer_arg) {
  return event_store_protocols_v1_projectionmanagement_pb.ReadEventsResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_store_client_projections_ResetReq(arg) {
  if (!(arg instanceof event_store_protocols_v1_projectionmanagement_pb.ResetReq)) {
    throw new Error('Expected argument of type event_store.client.projections.ResetReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_store_client_projections_ResetReq(buffer_arg) {
  return event_store_protocols_v1_projectionmanagement_pb.ResetReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_store_client_projections_ResetResp(arg) {
  if (!(arg instanceof event_store_protocols_v1_projectionmanagement_pb.ResetResp)) {
    throw new Error('Expected argument of type event_store.client.projections.ResetResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_store_client_projections_ResetResp(buffer_arg) {
  return event_store_protocols_v1_projectionmanagement_pb.ResetResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_store_client_projections_ResultReq(arg) {
  if (!(arg instanceof event_store_protocols_v1_projectionmanagement_pb.ResultReq)) {
    throw new Error('Expected argument of type event_store.client.projections.ResultReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_store_client_projections_ResultReq(buffer_arg) {
  return event_store_protocols_v1_projectionmanagement_pb.ResultReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_store_client_projections_ResultResp(arg) {
  if (!(arg instanceof event_store_protocols_v1_projectionmanagement_pb.ResultResp)) {
    throw new Error('Expected argument of type event_store.client.projections.ResultResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_store_client_projections_ResultResp(buffer_arg) {
  return event_store_protocols_v1_projectionmanagement_pb.ResultResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_store_client_projections_StateReq(arg) {
  if (!(arg instanceof event_store_protocols_v1_projectionmanagement_pb.StateReq)) {
    throw new Error('Expected argument of type event_store.client.projections.StateReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_store_client_projections_StateReq(buffer_arg) {
  return event_store_protocols_v1_projectionmanagement_pb.StateReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_store_client_projections_StateResp(arg) {
  if (!(arg instanceof event_store_protocols_v1_projectionmanagement_pb.StateResp)) {
    throw new Error('Expected argument of type event_store.client.projections.StateResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_store_client_projections_StateResp(buffer_arg) {
  return event_store_protocols_v1_projectionmanagement_pb.StateResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_store_client_projections_StatisticsReq(arg) {
  if (!(arg instanceof event_store_protocols_v1_projectionmanagement_pb.StatisticsReq)) {
    throw new Error('Expected argument of type event_store.client.projections.StatisticsReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_store_client_projections_StatisticsReq(buffer_arg) {
  return event_store_protocols_v1_projectionmanagement_pb.StatisticsReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_store_client_projections_StatisticsResp(arg) {
  if (!(arg instanceof event_store_protocols_v1_projectionmanagement_pb.StatisticsResp)) {
    throw new Error('Expected argument of type event_store.client.projections.StatisticsResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_store_client_projections_StatisticsResp(buffer_arg) {
  return event_store_protocols_v1_projectionmanagement_pb.StatisticsResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_store_client_projections_UpdateConfigReq(arg) {
  if (!(arg instanceof event_store_protocols_v1_projectionmanagement_pb.UpdateConfigReq)) {
    throw new Error('Expected argument of type event_store.client.projections.UpdateConfigReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_store_client_projections_UpdateConfigReq(buffer_arg) {
  return event_store_protocols_v1_projectionmanagement_pb.UpdateConfigReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_store_client_projections_UpdateConfigResp(arg) {
  if (!(arg instanceof event_store_protocols_v1_projectionmanagement_pb.UpdateConfigResp)) {
    throw new Error('Expected argument of type event_store.client.projections.UpdateConfigResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_store_client_projections_UpdateConfigResp(buffer_arg) {
  return event_store_protocols_v1_projectionmanagement_pb.UpdateConfigResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_store_client_projections_UpdateReq(arg) {
  if (!(arg instanceof event_store_protocols_v1_projectionmanagement_pb.UpdateReq)) {
    throw new Error('Expected argument of type event_store.client.projections.UpdateReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_store_client_projections_UpdateReq(buffer_arg) {
  return event_store_protocols_v1_projectionmanagement_pb.UpdateReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_store_client_projections_UpdateResp(arg) {
  if (!(arg instanceof event_store_protocols_v1_projectionmanagement_pb.UpdateResp)) {
    throw new Error('Expected argument of type event_store.client.projections.UpdateResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_store_client_projections_UpdateResp(buffer_arg) {
  return event_store_protocols_v1_projectionmanagement_pb.UpdateResp.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProjectionsService = exports.ProjectionsService = {
  create: {
    path: '/event_store.client.projections.Projections/Create',
    requestStream: false,
    responseStream: false,
    requestType: event_store_protocols_v1_projectionmanagement_pb.CreateReq,
    responseType: event_store_protocols_v1_projectionmanagement_pb.CreateResp,
    requestSerialize: serialize_event_store_client_projections_CreateReq,
    requestDeserialize: deserialize_event_store_client_projections_CreateReq,
    responseSerialize: serialize_event_store_client_projections_CreateResp,
    responseDeserialize: deserialize_event_store_client_projections_CreateResp,
  },
  update: {
    path: '/event_store.client.projections.Projections/Update',
    requestStream: false,
    responseStream: false,
    requestType: event_store_protocols_v1_projectionmanagement_pb.UpdateReq,
    responseType: event_store_protocols_v1_projectionmanagement_pb.UpdateResp,
    requestSerialize: serialize_event_store_client_projections_UpdateReq,
    requestDeserialize: deserialize_event_store_client_projections_UpdateReq,
    responseSerialize: serialize_event_store_client_projections_UpdateResp,
    responseDeserialize: deserialize_event_store_client_projections_UpdateResp,
  },
  getQuery: {
    path: '/event_store.client.projections.Projections/GetQuery',
    requestStream: false,
    responseStream: false,
    requestType: event_store_protocols_v1_projectionmanagement_pb.GetQueryReq,
    responseType: event_store_protocols_v1_projectionmanagement_pb.GetQueryResp,
    requestSerialize: serialize_event_store_client_projections_GetQueryReq,
    requestDeserialize: deserialize_event_store_client_projections_GetQueryReq,
    responseSerialize: serialize_event_store_client_projections_GetQueryResp,
    responseDeserialize: deserialize_event_store_client_projections_GetQueryResp,
  },
  delete: {
    path: '/event_store.client.projections.Projections/Delete',
    requestStream: false,
    responseStream: false,
    requestType: event_store_protocols_v1_projectionmanagement_pb.DeleteReq,
    responseType: event_store_protocols_v1_projectionmanagement_pb.DeleteResp,
    requestSerialize: serialize_event_store_client_projections_DeleteReq,
    requestDeserialize: deserialize_event_store_client_projections_DeleteReq,
    responseSerialize: serialize_event_store_client_projections_DeleteResp,
    responseDeserialize: deserialize_event_store_client_projections_DeleteResp,
  },
  statistics: {
    path: '/event_store.client.projections.Projections/Statistics',
    requestStream: false,
    responseStream: true,
    requestType: event_store_protocols_v1_projectionmanagement_pb.StatisticsReq,
    responseType: event_store_protocols_v1_projectionmanagement_pb.StatisticsResp,
    requestSerialize: serialize_event_store_client_projections_StatisticsReq,
    requestDeserialize: deserialize_event_store_client_projections_StatisticsReq,
    responseSerialize: serialize_event_store_client_projections_StatisticsResp,
    responseDeserialize: deserialize_event_store_client_projections_StatisticsResp,
  },
  disable: {
    path: '/event_store.client.projections.Projections/Disable',
    requestStream: false,
    responseStream: false,
    requestType: event_store_protocols_v1_projectionmanagement_pb.DisableReq,
    responseType: event_store_protocols_v1_projectionmanagement_pb.DisableResp,
    requestSerialize: serialize_event_store_client_projections_DisableReq,
    requestDeserialize: deserialize_event_store_client_projections_DisableReq,
    responseSerialize: serialize_event_store_client_projections_DisableResp,
    responseDeserialize: deserialize_event_store_client_projections_DisableResp,
  },
  enable: {
    path: '/event_store.client.projections.Projections/Enable',
    requestStream: false,
    responseStream: false,
    requestType: event_store_protocols_v1_projectionmanagement_pb.EnableReq,
    responseType: event_store_protocols_v1_projectionmanagement_pb.EnableResp,
    requestSerialize: serialize_event_store_client_projections_EnableReq,
    requestDeserialize: deserialize_event_store_client_projections_EnableReq,
    responseSerialize: serialize_event_store_client_projections_EnableResp,
    responseDeserialize: deserialize_event_store_client_projections_EnableResp,
  },
  reset: {
    path: '/event_store.client.projections.Projections/Reset',
    requestStream: false,
    responseStream: false,
    requestType: event_store_protocols_v1_projectionmanagement_pb.ResetReq,
    responseType: event_store_protocols_v1_projectionmanagement_pb.ResetResp,
    requestSerialize: serialize_event_store_client_projections_ResetReq,
    requestDeserialize: deserialize_event_store_client_projections_ResetReq,
    responseSerialize: serialize_event_store_client_projections_ResetResp,
    responseDeserialize: deserialize_event_store_client_projections_ResetResp,
  },
  abort: {
    path: '/event_store.client.projections.Projections/Abort',
    requestStream: false,
    responseStream: false,
    requestType: event_store_protocols_v1_projectionmanagement_pb.AbortReq,
    responseType: event_store_protocols_v1_projectionmanagement_pb.AbortResp,
    requestSerialize: serialize_event_store_client_projections_AbortReq,
    requestDeserialize: deserialize_event_store_client_projections_AbortReq,
    responseSerialize: serialize_event_store_client_projections_AbortResp,
    responseDeserialize: deserialize_event_store_client_projections_AbortResp,
  },
  state: {
    path: '/event_store.client.projections.Projections/State',
    requestStream: false,
    responseStream: false,
    requestType: event_store_protocols_v1_projectionmanagement_pb.StateReq,
    responseType: event_store_protocols_v1_projectionmanagement_pb.StateResp,
    requestSerialize: serialize_event_store_client_projections_StateReq,
    requestDeserialize: deserialize_event_store_client_projections_StateReq,
    responseSerialize: serialize_event_store_client_projections_StateResp,
    responseDeserialize: deserialize_event_store_client_projections_StateResp,
  },
  result: {
    path: '/event_store.client.projections.Projections/Result',
    requestStream: false,
    responseStream: false,
    requestType: event_store_protocols_v1_projectionmanagement_pb.ResultReq,
    responseType: event_store_protocols_v1_projectionmanagement_pb.ResultResp,
    requestSerialize: serialize_event_store_client_projections_ResultReq,
    requestDeserialize: deserialize_event_store_client_projections_ResultReq,
    responseSerialize: serialize_event_store_client_projections_ResultResp,
    responseDeserialize: deserialize_event_store_client_projections_ResultResp,
  },
  getConfig: {
    path: '/event_store.client.projections.Projections/GetConfig',
    requestStream: false,
    responseStream: false,
    requestType: event_store_protocols_v1_projectionmanagement_pb.GetConfigReq,
    responseType: event_store_protocols_v1_projectionmanagement_pb.GetConfigResp,
    requestSerialize: serialize_event_store_client_projections_GetConfigReq,
    requestDeserialize: deserialize_event_store_client_projections_GetConfigReq,
    responseSerialize: serialize_event_store_client_projections_GetConfigResp,
    responseDeserialize: deserialize_event_store_client_projections_GetConfigResp,
  },
  updateConfig: {
    path: '/event_store.client.projections.Projections/UpdateConfig',
    requestStream: false,
    responseStream: false,
    requestType: event_store_protocols_v1_projectionmanagement_pb.UpdateConfigReq,
    responseType: event_store_protocols_v1_projectionmanagement_pb.UpdateConfigResp,
    requestSerialize: serialize_event_store_client_projections_UpdateConfigReq,
    requestDeserialize: deserialize_event_store_client_projections_UpdateConfigReq,
    responseSerialize: serialize_event_store_client_projections_UpdateConfigResp,
    responseDeserialize: deserialize_event_store_client_projections_UpdateConfigResp,
  },
  readEvents: {
    path: '/event_store.client.projections.Projections/ReadEvents',
    requestStream: false,
    responseStream: false,
    requestType: event_store_protocols_v1_projectionmanagement_pb.ReadEventsReq,
    responseType: event_store_protocols_v1_projectionmanagement_pb.ReadEventsResp,
    requestSerialize: serialize_event_store_client_projections_ReadEventsReq,
    requestDeserialize: deserialize_event_store_client_projections_ReadEventsReq,
    responseSerialize: serialize_event_store_client_projections_ReadEventsResp,
    responseDeserialize: deserialize_event_store_client_projections_ReadEventsResp,
  },
  restartSubsystem: {
    path: '/event_store.client.projections.Projections/RestartSubsystem',
    requestStream: false,
    responseStream: false,
    requestType: event_store_protocols_v1_shared_pb.Empty,
    responseType: event_store_protocols_v1_shared_pb.Empty,
    requestSerialize: serialize_event_store_client_Empty,
    requestDeserialize: deserialize_event_store_client_Empty,
    responseSerialize: serialize_event_store_client_Empty,
    responseDeserialize: deserialize_event_store_client_Empty,
  },
};

exports.ProjectionsClient = grpc.makeGenericClientConstructor(ProjectionsService, 'Projections');
