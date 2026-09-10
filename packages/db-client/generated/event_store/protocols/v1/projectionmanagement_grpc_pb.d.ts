// package: event_store.client.projections
// file: event_store/protocols/v1/projectionmanagement.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as event_store_protocols_v1_projectionmanagement_pb from "../../../event_store/protocols/v1/projectionmanagement_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as event_store_protocols_v1_shared_pb from "../../../event_store/protocols/v1/shared_pb";

interface IProjectionsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IProjectionsService_ICreate;
    update: IProjectionsService_IUpdate;
    getQuery: IProjectionsService_IGetQuery;
    delete: IProjectionsService_IDelete;
    statistics: IProjectionsService_IStatistics;
    disable: IProjectionsService_IDisable;
    enable: IProjectionsService_IEnable;
    reset: IProjectionsService_IReset;
    abort: IProjectionsService_IAbort;
    state: IProjectionsService_IState;
    result: IProjectionsService_IResult;
    getConfig: IProjectionsService_IGetConfig;
    updateConfig: IProjectionsService_IUpdateConfig;
    readEvents: IProjectionsService_IReadEvents;
    restartSubsystem: IProjectionsService_IRestartSubsystem;
}

interface IProjectionsService_ICreate extends grpc.MethodDefinition<event_store_protocols_v1_projectionmanagement_pb.CreateReq, event_store_protocols_v1_projectionmanagement_pb.CreateResp> {
    path: "/event_store.client.projections.Projections/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_store_protocols_v1_projectionmanagement_pb.CreateReq>;
    requestDeserialize: grpc.deserialize<event_store_protocols_v1_projectionmanagement_pb.CreateReq>;
    responseSerialize: grpc.serialize<event_store_protocols_v1_projectionmanagement_pb.CreateResp>;
    responseDeserialize: grpc.deserialize<event_store_protocols_v1_projectionmanagement_pb.CreateResp>;
}
interface IProjectionsService_IUpdate extends grpc.MethodDefinition<event_store_protocols_v1_projectionmanagement_pb.UpdateReq, event_store_protocols_v1_projectionmanagement_pb.UpdateResp> {
    path: "/event_store.client.projections.Projections/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_store_protocols_v1_projectionmanagement_pb.UpdateReq>;
    requestDeserialize: grpc.deserialize<event_store_protocols_v1_projectionmanagement_pb.UpdateReq>;
    responseSerialize: grpc.serialize<event_store_protocols_v1_projectionmanagement_pb.UpdateResp>;
    responseDeserialize: grpc.deserialize<event_store_protocols_v1_projectionmanagement_pb.UpdateResp>;
}
interface IProjectionsService_IGetQuery extends grpc.MethodDefinition<event_store_protocols_v1_projectionmanagement_pb.GetQueryReq, event_store_protocols_v1_projectionmanagement_pb.GetQueryResp> {
    path: "/event_store.client.projections.Projections/GetQuery";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_store_protocols_v1_projectionmanagement_pb.GetQueryReq>;
    requestDeserialize: grpc.deserialize<event_store_protocols_v1_projectionmanagement_pb.GetQueryReq>;
    responseSerialize: grpc.serialize<event_store_protocols_v1_projectionmanagement_pb.GetQueryResp>;
    responseDeserialize: grpc.deserialize<event_store_protocols_v1_projectionmanagement_pb.GetQueryResp>;
}
interface IProjectionsService_IDelete extends grpc.MethodDefinition<event_store_protocols_v1_projectionmanagement_pb.DeleteReq, event_store_protocols_v1_projectionmanagement_pb.DeleteResp> {
    path: "/event_store.client.projections.Projections/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_store_protocols_v1_projectionmanagement_pb.DeleteReq>;
    requestDeserialize: grpc.deserialize<event_store_protocols_v1_projectionmanagement_pb.DeleteReq>;
    responseSerialize: grpc.serialize<event_store_protocols_v1_projectionmanagement_pb.DeleteResp>;
    responseDeserialize: grpc.deserialize<event_store_protocols_v1_projectionmanagement_pb.DeleteResp>;
}
interface IProjectionsService_IStatistics extends grpc.MethodDefinition<event_store_protocols_v1_projectionmanagement_pb.StatisticsReq, event_store_protocols_v1_projectionmanagement_pb.StatisticsResp> {
    path: "/event_store.client.projections.Projections/Statistics";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<event_store_protocols_v1_projectionmanagement_pb.StatisticsReq>;
    requestDeserialize: grpc.deserialize<event_store_protocols_v1_projectionmanagement_pb.StatisticsReq>;
    responseSerialize: grpc.serialize<event_store_protocols_v1_projectionmanagement_pb.StatisticsResp>;
    responseDeserialize: grpc.deserialize<event_store_protocols_v1_projectionmanagement_pb.StatisticsResp>;
}
interface IProjectionsService_IDisable extends grpc.MethodDefinition<event_store_protocols_v1_projectionmanagement_pb.DisableReq, event_store_protocols_v1_projectionmanagement_pb.DisableResp> {
    path: "/event_store.client.projections.Projections/Disable";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_store_protocols_v1_projectionmanagement_pb.DisableReq>;
    requestDeserialize: grpc.deserialize<event_store_protocols_v1_projectionmanagement_pb.DisableReq>;
    responseSerialize: grpc.serialize<event_store_protocols_v1_projectionmanagement_pb.DisableResp>;
    responseDeserialize: grpc.deserialize<event_store_protocols_v1_projectionmanagement_pb.DisableResp>;
}
interface IProjectionsService_IEnable extends grpc.MethodDefinition<event_store_protocols_v1_projectionmanagement_pb.EnableReq, event_store_protocols_v1_projectionmanagement_pb.EnableResp> {
    path: "/event_store.client.projections.Projections/Enable";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_store_protocols_v1_projectionmanagement_pb.EnableReq>;
    requestDeserialize: grpc.deserialize<event_store_protocols_v1_projectionmanagement_pb.EnableReq>;
    responseSerialize: grpc.serialize<event_store_protocols_v1_projectionmanagement_pb.EnableResp>;
    responseDeserialize: grpc.deserialize<event_store_protocols_v1_projectionmanagement_pb.EnableResp>;
}
interface IProjectionsService_IReset extends grpc.MethodDefinition<event_store_protocols_v1_projectionmanagement_pb.ResetReq, event_store_protocols_v1_projectionmanagement_pb.ResetResp> {
    path: "/event_store.client.projections.Projections/Reset";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_store_protocols_v1_projectionmanagement_pb.ResetReq>;
    requestDeserialize: grpc.deserialize<event_store_protocols_v1_projectionmanagement_pb.ResetReq>;
    responseSerialize: grpc.serialize<event_store_protocols_v1_projectionmanagement_pb.ResetResp>;
    responseDeserialize: grpc.deserialize<event_store_protocols_v1_projectionmanagement_pb.ResetResp>;
}
interface IProjectionsService_IAbort extends grpc.MethodDefinition<event_store_protocols_v1_projectionmanagement_pb.AbortReq, event_store_protocols_v1_projectionmanagement_pb.AbortResp> {
    path: "/event_store.client.projections.Projections/Abort";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_store_protocols_v1_projectionmanagement_pb.AbortReq>;
    requestDeserialize: grpc.deserialize<event_store_protocols_v1_projectionmanagement_pb.AbortReq>;
    responseSerialize: grpc.serialize<event_store_protocols_v1_projectionmanagement_pb.AbortResp>;
    responseDeserialize: grpc.deserialize<event_store_protocols_v1_projectionmanagement_pb.AbortResp>;
}
interface IProjectionsService_IState extends grpc.MethodDefinition<event_store_protocols_v1_projectionmanagement_pb.StateReq, event_store_protocols_v1_projectionmanagement_pb.StateResp> {
    path: "/event_store.client.projections.Projections/State";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_store_protocols_v1_projectionmanagement_pb.StateReq>;
    requestDeserialize: grpc.deserialize<event_store_protocols_v1_projectionmanagement_pb.StateReq>;
    responseSerialize: grpc.serialize<event_store_protocols_v1_projectionmanagement_pb.StateResp>;
    responseDeserialize: grpc.deserialize<event_store_protocols_v1_projectionmanagement_pb.StateResp>;
}
interface IProjectionsService_IResult extends grpc.MethodDefinition<event_store_protocols_v1_projectionmanagement_pb.ResultReq, event_store_protocols_v1_projectionmanagement_pb.ResultResp> {
    path: "/event_store.client.projections.Projections/Result";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_store_protocols_v1_projectionmanagement_pb.ResultReq>;
    requestDeserialize: grpc.deserialize<event_store_protocols_v1_projectionmanagement_pb.ResultReq>;
    responseSerialize: grpc.serialize<event_store_protocols_v1_projectionmanagement_pb.ResultResp>;
    responseDeserialize: grpc.deserialize<event_store_protocols_v1_projectionmanagement_pb.ResultResp>;
}
interface IProjectionsService_IGetConfig extends grpc.MethodDefinition<event_store_protocols_v1_projectionmanagement_pb.GetConfigReq, event_store_protocols_v1_projectionmanagement_pb.GetConfigResp> {
    path: "/event_store.client.projections.Projections/GetConfig";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_store_protocols_v1_projectionmanagement_pb.GetConfigReq>;
    requestDeserialize: grpc.deserialize<event_store_protocols_v1_projectionmanagement_pb.GetConfigReq>;
    responseSerialize: grpc.serialize<event_store_protocols_v1_projectionmanagement_pb.GetConfigResp>;
    responseDeserialize: grpc.deserialize<event_store_protocols_v1_projectionmanagement_pb.GetConfigResp>;
}
interface IProjectionsService_IUpdateConfig extends grpc.MethodDefinition<event_store_protocols_v1_projectionmanagement_pb.UpdateConfigReq, event_store_protocols_v1_projectionmanagement_pb.UpdateConfigResp> {
    path: "/event_store.client.projections.Projections/UpdateConfig";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_store_protocols_v1_projectionmanagement_pb.UpdateConfigReq>;
    requestDeserialize: grpc.deserialize<event_store_protocols_v1_projectionmanagement_pb.UpdateConfigReq>;
    responseSerialize: grpc.serialize<event_store_protocols_v1_projectionmanagement_pb.UpdateConfigResp>;
    responseDeserialize: grpc.deserialize<event_store_protocols_v1_projectionmanagement_pb.UpdateConfigResp>;
}
interface IProjectionsService_IReadEvents extends grpc.MethodDefinition<event_store_protocols_v1_projectionmanagement_pb.ReadEventsReq, event_store_protocols_v1_projectionmanagement_pb.ReadEventsResp> {
    path: "/event_store.client.projections.Projections/ReadEvents";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_store_protocols_v1_projectionmanagement_pb.ReadEventsReq>;
    requestDeserialize: grpc.deserialize<event_store_protocols_v1_projectionmanagement_pb.ReadEventsReq>;
    responseSerialize: grpc.serialize<event_store_protocols_v1_projectionmanagement_pb.ReadEventsResp>;
    responseDeserialize: grpc.deserialize<event_store_protocols_v1_projectionmanagement_pb.ReadEventsResp>;
}
interface IProjectionsService_IRestartSubsystem extends grpc.MethodDefinition<event_store_protocols_v1_shared_pb.Empty, event_store_protocols_v1_shared_pb.Empty> {
    path: "/event_store.client.projections.Projections/RestartSubsystem";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_store_protocols_v1_shared_pb.Empty>;
    requestDeserialize: grpc.deserialize<event_store_protocols_v1_shared_pb.Empty>;
    responseSerialize: grpc.serialize<event_store_protocols_v1_shared_pb.Empty>;
    responseDeserialize: grpc.deserialize<event_store_protocols_v1_shared_pb.Empty>;
}

export const ProjectionsService: IProjectionsService;

export interface IProjectionsServer extends grpc.UntypedServiceImplementation {
    create: grpc.handleUnaryCall<event_store_protocols_v1_projectionmanagement_pb.CreateReq, event_store_protocols_v1_projectionmanagement_pb.CreateResp>;
    update: grpc.handleUnaryCall<event_store_protocols_v1_projectionmanagement_pb.UpdateReq, event_store_protocols_v1_projectionmanagement_pb.UpdateResp>;
    getQuery: grpc.handleUnaryCall<event_store_protocols_v1_projectionmanagement_pb.GetQueryReq, event_store_protocols_v1_projectionmanagement_pb.GetQueryResp>;
    delete: grpc.handleUnaryCall<event_store_protocols_v1_projectionmanagement_pb.DeleteReq, event_store_protocols_v1_projectionmanagement_pb.DeleteResp>;
    statistics: grpc.handleServerStreamingCall<event_store_protocols_v1_projectionmanagement_pb.StatisticsReq, event_store_protocols_v1_projectionmanagement_pb.StatisticsResp>;
    disable: grpc.handleUnaryCall<event_store_protocols_v1_projectionmanagement_pb.DisableReq, event_store_protocols_v1_projectionmanagement_pb.DisableResp>;
    enable: grpc.handleUnaryCall<event_store_protocols_v1_projectionmanagement_pb.EnableReq, event_store_protocols_v1_projectionmanagement_pb.EnableResp>;
    reset: grpc.handleUnaryCall<event_store_protocols_v1_projectionmanagement_pb.ResetReq, event_store_protocols_v1_projectionmanagement_pb.ResetResp>;
    abort: grpc.handleUnaryCall<event_store_protocols_v1_projectionmanagement_pb.AbortReq, event_store_protocols_v1_projectionmanagement_pb.AbortResp>;
    state: grpc.handleUnaryCall<event_store_protocols_v1_projectionmanagement_pb.StateReq, event_store_protocols_v1_projectionmanagement_pb.StateResp>;
    result: grpc.handleUnaryCall<event_store_protocols_v1_projectionmanagement_pb.ResultReq, event_store_protocols_v1_projectionmanagement_pb.ResultResp>;
    getConfig: grpc.handleUnaryCall<event_store_protocols_v1_projectionmanagement_pb.GetConfigReq, event_store_protocols_v1_projectionmanagement_pb.GetConfigResp>;
    updateConfig: grpc.handleUnaryCall<event_store_protocols_v1_projectionmanagement_pb.UpdateConfigReq, event_store_protocols_v1_projectionmanagement_pb.UpdateConfigResp>;
    readEvents: grpc.handleUnaryCall<event_store_protocols_v1_projectionmanagement_pb.ReadEventsReq, event_store_protocols_v1_projectionmanagement_pb.ReadEventsResp>;
    restartSubsystem: grpc.handleUnaryCall<event_store_protocols_v1_shared_pb.Empty, event_store_protocols_v1_shared_pb.Empty>;
}

export interface IProjectionsClient {
    create(request: event_store_protocols_v1_projectionmanagement_pb.CreateReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.CreateResp) => void): grpc.ClientUnaryCall;
    create(request: event_store_protocols_v1_projectionmanagement_pb.CreateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.CreateResp) => void): grpc.ClientUnaryCall;
    create(request: event_store_protocols_v1_projectionmanagement_pb.CreateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.CreateResp) => void): grpc.ClientUnaryCall;
    update(request: event_store_protocols_v1_projectionmanagement_pb.UpdateReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    update(request: event_store_protocols_v1_projectionmanagement_pb.UpdateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    update(request: event_store_protocols_v1_projectionmanagement_pb.UpdateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    getQuery(request: event_store_protocols_v1_projectionmanagement_pb.GetQueryReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.GetQueryResp) => void): grpc.ClientUnaryCall;
    getQuery(request: event_store_protocols_v1_projectionmanagement_pb.GetQueryReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.GetQueryResp) => void): grpc.ClientUnaryCall;
    getQuery(request: event_store_protocols_v1_projectionmanagement_pb.GetQueryReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.GetQueryResp) => void): grpc.ClientUnaryCall;
    delete(request: event_store_protocols_v1_projectionmanagement_pb.DeleteReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    delete(request: event_store_protocols_v1_projectionmanagement_pb.DeleteReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    delete(request: event_store_protocols_v1_projectionmanagement_pb.DeleteReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    statistics(request: event_store_protocols_v1_projectionmanagement_pb.StatisticsReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<event_store_protocols_v1_projectionmanagement_pb.StatisticsResp>;
    statistics(request: event_store_protocols_v1_projectionmanagement_pb.StatisticsReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<event_store_protocols_v1_projectionmanagement_pb.StatisticsResp>;
    disable(request: event_store_protocols_v1_projectionmanagement_pb.DisableReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.DisableResp) => void): grpc.ClientUnaryCall;
    disable(request: event_store_protocols_v1_projectionmanagement_pb.DisableReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.DisableResp) => void): grpc.ClientUnaryCall;
    disable(request: event_store_protocols_v1_projectionmanagement_pb.DisableReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.DisableResp) => void): grpc.ClientUnaryCall;
    enable(request: event_store_protocols_v1_projectionmanagement_pb.EnableReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.EnableResp) => void): grpc.ClientUnaryCall;
    enable(request: event_store_protocols_v1_projectionmanagement_pb.EnableReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.EnableResp) => void): grpc.ClientUnaryCall;
    enable(request: event_store_protocols_v1_projectionmanagement_pb.EnableReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.EnableResp) => void): grpc.ClientUnaryCall;
    reset(request: event_store_protocols_v1_projectionmanagement_pb.ResetReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.ResetResp) => void): grpc.ClientUnaryCall;
    reset(request: event_store_protocols_v1_projectionmanagement_pb.ResetReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.ResetResp) => void): grpc.ClientUnaryCall;
    reset(request: event_store_protocols_v1_projectionmanagement_pb.ResetReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.ResetResp) => void): grpc.ClientUnaryCall;
    abort(request: event_store_protocols_v1_projectionmanagement_pb.AbortReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.AbortResp) => void): grpc.ClientUnaryCall;
    abort(request: event_store_protocols_v1_projectionmanagement_pb.AbortReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.AbortResp) => void): grpc.ClientUnaryCall;
    abort(request: event_store_protocols_v1_projectionmanagement_pb.AbortReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.AbortResp) => void): grpc.ClientUnaryCall;
    state(request: event_store_protocols_v1_projectionmanagement_pb.StateReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.StateResp) => void): grpc.ClientUnaryCall;
    state(request: event_store_protocols_v1_projectionmanagement_pb.StateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.StateResp) => void): grpc.ClientUnaryCall;
    state(request: event_store_protocols_v1_projectionmanagement_pb.StateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.StateResp) => void): grpc.ClientUnaryCall;
    result(request: event_store_protocols_v1_projectionmanagement_pb.ResultReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.ResultResp) => void): grpc.ClientUnaryCall;
    result(request: event_store_protocols_v1_projectionmanagement_pb.ResultReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.ResultResp) => void): grpc.ClientUnaryCall;
    result(request: event_store_protocols_v1_projectionmanagement_pb.ResultReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.ResultResp) => void): grpc.ClientUnaryCall;
    getConfig(request: event_store_protocols_v1_projectionmanagement_pb.GetConfigReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.GetConfigResp) => void): grpc.ClientUnaryCall;
    getConfig(request: event_store_protocols_v1_projectionmanagement_pb.GetConfigReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.GetConfigResp) => void): grpc.ClientUnaryCall;
    getConfig(request: event_store_protocols_v1_projectionmanagement_pb.GetConfigReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.GetConfigResp) => void): grpc.ClientUnaryCall;
    updateConfig(request: event_store_protocols_v1_projectionmanagement_pb.UpdateConfigReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.UpdateConfigResp) => void): grpc.ClientUnaryCall;
    updateConfig(request: event_store_protocols_v1_projectionmanagement_pb.UpdateConfigReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.UpdateConfigResp) => void): grpc.ClientUnaryCall;
    updateConfig(request: event_store_protocols_v1_projectionmanagement_pb.UpdateConfigReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.UpdateConfigResp) => void): grpc.ClientUnaryCall;
    readEvents(request: event_store_protocols_v1_projectionmanagement_pb.ReadEventsReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.ReadEventsResp) => void): grpc.ClientUnaryCall;
    readEvents(request: event_store_protocols_v1_projectionmanagement_pb.ReadEventsReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.ReadEventsResp) => void): grpc.ClientUnaryCall;
    readEvents(request: event_store_protocols_v1_projectionmanagement_pb.ReadEventsReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.ReadEventsResp) => void): grpc.ClientUnaryCall;
    restartSubsystem(request: event_store_protocols_v1_shared_pb.Empty, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    restartSubsystem(request: event_store_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    restartSubsystem(request: event_store_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class ProjectionsClient extends grpc.Client implements IProjectionsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public create(request: event_store_protocols_v1_projectionmanagement_pb.CreateReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.CreateResp) => void): grpc.ClientUnaryCall;
    public create(request: event_store_protocols_v1_projectionmanagement_pb.CreateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.CreateResp) => void): grpc.ClientUnaryCall;
    public create(request: event_store_protocols_v1_projectionmanagement_pb.CreateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.CreateResp) => void): grpc.ClientUnaryCall;
    public update(request: event_store_protocols_v1_projectionmanagement_pb.UpdateReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    public update(request: event_store_protocols_v1_projectionmanagement_pb.UpdateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    public update(request: event_store_protocols_v1_projectionmanagement_pb.UpdateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    public getQuery(request: event_store_protocols_v1_projectionmanagement_pb.GetQueryReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.GetQueryResp) => void): grpc.ClientUnaryCall;
    public getQuery(request: event_store_protocols_v1_projectionmanagement_pb.GetQueryReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.GetQueryResp) => void): grpc.ClientUnaryCall;
    public getQuery(request: event_store_protocols_v1_projectionmanagement_pb.GetQueryReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.GetQueryResp) => void): grpc.ClientUnaryCall;
    public delete(request: event_store_protocols_v1_projectionmanagement_pb.DeleteReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    public delete(request: event_store_protocols_v1_projectionmanagement_pb.DeleteReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    public delete(request: event_store_protocols_v1_projectionmanagement_pb.DeleteReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    public statistics(request: event_store_protocols_v1_projectionmanagement_pb.StatisticsReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<event_store_protocols_v1_projectionmanagement_pb.StatisticsResp>;
    public statistics(request: event_store_protocols_v1_projectionmanagement_pb.StatisticsReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<event_store_protocols_v1_projectionmanagement_pb.StatisticsResp>;
    public disable(request: event_store_protocols_v1_projectionmanagement_pb.DisableReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.DisableResp) => void): grpc.ClientUnaryCall;
    public disable(request: event_store_protocols_v1_projectionmanagement_pb.DisableReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.DisableResp) => void): grpc.ClientUnaryCall;
    public disable(request: event_store_protocols_v1_projectionmanagement_pb.DisableReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.DisableResp) => void): grpc.ClientUnaryCall;
    public enable(request: event_store_protocols_v1_projectionmanagement_pb.EnableReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.EnableResp) => void): grpc.ClientUnaryCall;
    public enable(request: event_store_protocols_v1_projectionmanagement_pb.EnableReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.EnableResp) => void): grpc.ClientUnaryCall;
    public enable(request: event_store_protocols_v1_projectionmanagement_pb.EnableReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.EnableResp) => void): grpc.ClientUnaryCall;
    public reset(request: event_store_protocols_v1_projectionmanagement_pb.ResetReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.ResetResp) => void): grpc.ClientUnaryCall;
    public reset(request: event_store_protocols_v1_projectionmanagement_pb.ResetReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.ResetResp) => void): grpc.ClientUnaryCall;
    public reset(request: event_store_protocols_v1_projectionmanagement_pb.ResetReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.ResetResp) => void): grpc.ClientUnaryCall;
    public abort(request: event_store_protocols_v1_projectionmanagement_pb.AbortReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.AbortResp) => void): grpc.ClientUnaryCall;
    public abort(request: event_store_protocols_v1_projectionmanagement_pb.AbortReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.AbortResp) => void): grpc.ClientUnaryCall;
    public abort(request: event_store_protocols_v1_projectionmanagement_pb.AbortReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.AbortResp) => void): grpc.ClientUnaryCall;
    public state(request: event_store_protocols_v1_projectionmanagement_pb.StateReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.StateResp) => void): grpc.ClientUnaryCall;
    public state(request: event_store_protocols_v1_projectionmanagement_pb.StateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.StateResp) => void): grpc.ClientUnaryCall;
    public state(request: event_store_protocols_v1_projectionmanagement_pb.StateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.StateResp) => void): grpc.ClientUnaryCall;
    public result(request: event_store_protocols_v1_projectionmanagement_pb.ResultReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.ResultResp) => void): grpc.ClientUnaryCall;
    public result(request: event_store_protocols_v1_projectionmanagement_pb.ResultReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.ResultResp) => void): grpc.ClientUnaryCall;
    public result(request: event_store_protocols_v1_projectionmanagement_pb.ResultReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.ResultResp) => void): grpc.ClientUnaryCall;
    public getConfig(request: event_store_protocols_v1_projectionmanagement_pb.GetConfigReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.GetConfigResp) => void): grpc.ClientUnaryCall;
    public getConfig(request: event_store_protocols_v1_projectionmanagement_pb.GetConfigReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.GetConfigResp) => void): grpc.ClientUnaryCall;
    public getConfig(request: event_store_protocols_v1_projectionmanagement_pb.GetConfigReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.GetConfigResp) => void): grpc.ClientUnaryCall;
    public updateConfig(request: event_store_protocols_v1_projectionmanagement_pb.UpdateConfigReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.UpdateConfigResp) => void): grpc.ClientUnaryCall;
    public updateConfig(request: event_store_protocols_v1_projectionmanagement_pb.UpdateConfigReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.UpdateConfigResp) => void): grpc.ClientUnaryCall;
    public updateConfig(request: event_store_protocols_v1_projectionmanagement_pb.UpdateConfigReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.UpdateConfigResp) => void): grpc.ClientUnaryCall;
    public readEvents(request: event_store_protocols_v1_projectionmanagement_pb.ReadEventsReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.ReadEventsResp) => void): grpc.ClientUnaryCall;
    public readEvents(request: event_store_protocols_v1_projectionmanagement_pb.ReadEventsReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.ReadEventsResp) => void): grpc.ClientUnaryCall;
    public readEvents(request: event_store_protocols_v1_projectionmanagement_pb.ReadEventsReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_projectionmanagement_pb.ReadEventsResp) => void): grpc.ClientUnaryCall;
    public restartSubsystem(request: event_store_protocols_v1_shared_pb.Empty, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public restartSubsystem(request: event_store_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public restartSubsystem(request: event_store_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
}
