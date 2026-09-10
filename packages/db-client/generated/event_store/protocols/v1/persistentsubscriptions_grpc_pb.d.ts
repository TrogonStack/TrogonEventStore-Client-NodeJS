// package: event_store.client.persistent_subscriptions
// file: event_store/protocols/v1/persistentsubscriptions.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as event_store_protocols_v1_persistentsubscriptions_pb from "../../../event_store/protocols/v1/persistentsubscriptions_pb";
import * as event_store_protocols_v1_shared_pb from "../../../event_store/protocols/v1/shared_pb";

interface IPersistentSubscriptionsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IPersistentSubscriptionsService_ICreate;
    update: IPersistentSubscriptionsService_IUpdate;
    delete: IPersistentSubscriptionsService_IDelete;
    read: IPersistentSubscriptionsService_IRead;
    getInfo: IPersistentSubscriptionsService_IGetInfo;
    replayParked: IPersistentSubscriptionsService_IReplayParked;
    truncateParked: IPersistentSubscriptionsService_ITruncateParked;
    list: IPersistentSubscriptionsService_IList;
    restartSubsystem: IPersistentSubscriptionsService_IRestartSubsystem;
}

interface IPersistentSubscriptionsService_ICreate extends grpc.MethodDefinition<event_store_protocols_v1_persistentsubscriptions_pb.CreateReq, event_store_protocols_v1_persistentsubscriptions_pb.CreateResp> {
    path: "/event_store.client.persistent_subscriptions.PersistentSubscriptions/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_store_protocols_v1_persistentsubscriptions_pb.CreateReq>;
    requestDeserialize: grpc.deserialize<event_store_protocols_v1_persistentsubscriptions_pb.CreateReq>;
    responseSerialize: grpc.serialize<event_store_protocols_v1_persistentsubscriptions_pb.CreateResp>;
    responseDeserialize: grpc.deserialize<event_store_protocols_v1_persistentsubscriptions_pb.CreateResp>;
}
interface IPersistentSubscriptionsService_IUpdate extends grpc.MethodDefinition<event_store_protocols_v1_persistentsubscriptions_pb.UpdateReq, event_store_protocols_v1_persistentsubscriptions_pb.UpdateResp> {
    path: "/event_store.client.persistent_subscriptions.PersistentSubscriptions/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_store_protocols_v1_persistentsubscriptions_pb.UpdateReq>;
    requestDeserialize: grpc.deserialize<event_store_protocols_v1_persistentsubscriptions_pb.UpdateReq>;
    responseSerialize: grpc.serialize<event_store_protocols_v1_persistentsubscriptions_pb.UpdateResp>;
    responseDeserialize: grpc.deserialize<event_store_protocols_v1_persistentsubscriptions_pb.UpdateResp>;
}
interface IPersistentSubscriptionsService_IDelete extends grpc.MethodDefinition<event_store_protocols_v1_persistentsubscriptions_pb.DeleteReq, event_store_protocols_v1_persistentsubscriptions_pb.DeleteResp> {
    path: "/event_store.client.persistent_subscriptions.PersistentSubscriptions/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_store_protocols_v1_persistentsubscriptions_pb.DeleteReq>;
    requestDeserialize: grpc.deserialize<event_store_protocols_v1_persistentsubscriptions_pb.DeleteReq>;
    responseSerialize: grpc.serialize<event_store_protocols_v1_persistentsubscriptions_pb.DeleteResp>;
    responseDeserialize: grpc.deserialize<event_store_protocols_v1_persistentsubscriptions_pb.DeleteResp>;
}
interface IPersistentSubscriptionsService_IRead extends grpc.MethodDefinition<event_store_protocols_v1_persistentsubscriptions_pb.ReadReq, event_store_protocols_v1_persistentsubscriptions_pb.ReadResp> {
    path: "/event_store.client.persistent_subscriptions.PersistentSubscriptions/Read";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<event_store_protocols_v1_persistentsubscriptions_pb.ReadReq>;
    requestDeserialize: grpc.deserialize<event_store_protocols_v1_persistentsubscriptions_pb.ReadReq>;
    responseSerialize: grpc.serialize<event_store_protocols_v1_persistentsubscriptions_pb.ReadResp>;
    responseDeserialize: grpc.deserialize<event_store_protocols_v1_persistentsubscriptions_pb.ReadResp>;
}
interface IPersistentSubscriptionsService_IGetInfo extends grpc.MethodDefinition<event_store_protocols_v1_persistentsubscriptions_pb.GetInfoReq, event_store_protocols_v1_persistentsubscriptions_pb.GetInfoResp> {
    path: "/event_store.client.persistent_subscriptions.PersistentSubscriptions/GetInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_store_protocols_v1_persistentsubscriptions_pb.GetInfoReq>;
    requestDeserialize: grpc.deserialize<event_store_protocols_v1_persistentsubscriptions_pb.GetInfoReq>;
    responseSerialize: grpc.serialize<event_store_protocols_v1_persistentsubscriptions_pb.GetInfoResp>;
    responseDeserialize: grpc.deserialize<event_store_protocols_v1_persistentsubscriptions_pb.GetInfoResp>;
}
interface IPersistentSubscriptionsService_IReplayParked extends grpc.MethodDefinition<event_store_protocols_v1_persistentsubscriptions_pb.ReplayParkedReq, event_store_protocols_v1_persistentsubscriptions_pb.ReplayParkedResp> {
    path: "/event_store.client.persistent_subscriptions.PersistentSubscriptions/ReplayParked";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_store_protocols_v1_persistentsubscriptions_pb.ReplayParkedReq>;
    requestDeserialize: grpc.deserialize<event_store_protocols_v1_persistentsubscriptions_pb.ReplayParkedReq>;
    responseSerialize: grpc.serialize<event_store_protocols_v1_persistentsubscriptions_pb.ReplayParkedResp>;
    responseDeserialize: grpc.deserialize<event_store_protocols_v1_persistentsubscriptions_pb.ReplayParkedResp>;
}
interface IPersistentSubscriptionsService_ITruncateParked extends grpc.MethodDefinition<event_store_protocols_v1_persistentsubscriptions_pb.TruncateParkedReq, event_store_protocols_v1_persistentsubscriptions_pb.TruncateParkedResp> {
    path: "/event_store.client.persistent_subscriptions.PersistentSubscriptions/TruncateParked";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_store_protocols_v1_persistentsubscriptions_pb.TruncateParkedReq>;
    requestDeserialize: grpc.deserialize<event_store_protocols_v1_persistentsubscriptions_pb.TruncateParkedReq>;
    responseSerialize: grpc.serialize<event_store_protocols_v1_persistentsubscriptions_pb.TruncateParkedResp>;
    responseDeserialize: grpc.deserialize<event_store_protocols_v1_persistentsubscriptions_pb.TruncateParkedResp>;
}
interface IPersistentSubscriptionsService_IList extends grpc.MethodDefinition<event_store_protocols_v1_persistentsubscriptions_pb.ListReq, event_store_protocols_v1_persistentsubscriptions_pb.ListResp> {
    path: "/event_store.client.persistent_subscriptions.PersistentSubscriptions/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_store_protocols_v1_persistentsubscriptions_pb.ListReq>;
    requestDeserialize: grpc.deserialize<event_store_protocols_v1_persistentsubscriptions_pb.ListReq>;
    responseSerialize: grpc.serialize<event_store_protocols_v1_persistentsubscriptions_pb.ListResp>;
    responseDeserialize: grpc.deserialize<event_store_protocols_v1_persistentsubscriptions_pb.ListResp>;
}
interface IPersistentSubscriptionsService_IRestartSubsystem extends grpc.MethodDefinition<event_store_protocols_v1_shared_pb.Empty, event_store_protocols_v1_shared_pb.Empty> {
    path: "/event_store.client.persistent_subscriptions.PersistentSubscriptions/RestartSubsystem";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_store_protocols_v1_shared_pb.Empty>;
    requestDeserialize: grpc.deserialize<event_store_protocols_v1_shared_pb.Empty>;
    responseSerialize: grpc.serialize<event_store_protocols_v1_shared_pb.Empty>;
    responseDeserialize: grpc.deserialize<event_store_protocols_v1_shared_pb.Empty>;
}

export const PersistentSubscriptionsService: IPersistentSubscriptionsService;

export interface IPersistentSubscriptionsServer extends grpc.UntypedServiceImplementation {
    create: grpc.handleUnaryCall<event_store_protocols_v1_persistentsubscriptions_pb.CreateReq, event_store_protocols_v1_persistentsubscriptions_pb.CreateResp>;
    update: grpc.handleUnaryCall<event_store_protocols_v1_persistentsubscriptions_pb.UpdateReq, event_store_protocols_v1_persistentsubscriptions_pb.UpdateResp>;
    delete: grpc.handleUnaryCall<event_store_protocols_v1_persistentsubscriptions_pb.DeleteReq, event_store_protocols_v1_persistentsubscriptions_pb.DeleteResp>;
    read: grpc.handleBidiStreamingCall<event_store_protocols_v1_persistentsubscriptions_pb.ReadReq, event_store_protocols_v1_persistentsubscriptions_pb.ReadResp>;
    getInfo: grpc.handleUnaryCall<event_store_protocols_v1_persistentsubscriptions_pb.GetInfoReq, event_store_protocols_v1_persistentsubscriptions_pb.GetInfoResp>;
    replayParked: grpc.handleUnaryCall<event_store_protocols_v1_persistentsubscriptions_pb.ReplayParkedReq, event_store_protocols_v1_persistentsubscriptions_pb.ReplayParkedResp>;
    truncateParked: grpc.handleUnaryCall<event_store_protocols_v1_persistentsubscriptions_pb.TruncateParkedReq, event_store_protocols_v1_persistentsubscriptions_pb.TruncateParkedResp>;
    list: grpc.handleUnaryCall<event_store_protocols_v1_persistentsubscriptions_pb.ListReq, event_store_protocols_v1_persistentsubscriptions_pb.ListResp>;
    restartSubsystem: grpc.handleUnaryCall<event_store_protocols_v1_shared_pb.Empty, event_store_protocols_v1_shared_pb.Empty>;
}

export interface IPersistentSubscriptionsClient {
    create(request: event_store_protocols_v1_persistentsubscriptions_pb.CreateReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_persistentsubscriptions_pb.CreateResp) => void): grpc.ClientUnaryCall;
    create(request: event_store_protocols_v1_persistentsubscriptions_pb.CreateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_persistentsubscriptions_pb.CreateResp) => void): grpc.ClientUnaryCall;
    create(request: event_store_protocols_v1_persistentsubscriptions_pb.CreateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_persistentsubscriptions_pb.CreateResp) => void): grpc.ClientUnaryCall;
    update(request: event_store_protocols_v1_persistentsubscriptions_pb.UpdateReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_persistentsubscriptions_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    update(request: event_store_protocols_v1_persistentsubscriptions_pb.UpdateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_persistentsubscriptions_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    update(request: event_store_protocols_v1_persistentsubscriptions_pb.UpdateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_persistentsubscriptions_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    delete(request: event_store_protocols_v1_persistentsubscriptions_pb.DeleteReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_persistentsubscriptions_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    delete(request: event_store_protocols_v1_persistentsubscriptions_pb.DeleteReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_persistentsubscriptions_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    delete(request: event_store_protocols_v1_persistentsubscriptions_pb.DeleteReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_persistentsubscriptions_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    read(): grpc.ClientDuplexStream<event_store_protocols_v1_persistentsubscriptions_pb.ReadReq, event_store_protocols_v1_persistentsubscriptions_pb.ReadResp>;
    read(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<event_store_protocols_v1_persistentsubscriptions_pb.ReadReq, event_store_protocols_v1_persistentsubscriptions_pb.ReadResp>;
    read(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<event_store_protocols_v1_persistentsubscriptions_pb.ReadReq, event_store_protocols_v1_persistentsubscriptions_pb.ReadResp>;
    getInfo(request: event_store_protocols_v1_persistentsubscriptions_pb.GetInfoReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_persistentsubscriptions_pb.GetInfoResp) => void): grpc.ClientUnaryCall;
    getInfo(request: event_store_protocols_v1_persistentsubscriptions_pb.GetInfoReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_persistentsubscriptions_pb.GetInfoResp) => void): grpc.ClientUnaryCall;
    getInfo(request: event_store_protocols_v1_persistentsubscriptions_pb.GetInfoReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_persistentsubscriptions_pb.GetInfoResp) => void): grpc.ClientUnaryCall;
    replayParked(request: event_store_protocols_v1_persistentsubscriptions_pb.ReplayParkedReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_persistentsubscriptions_pb.ReplayParkedResp) => void): grpc.ClientUnaryCall;
    replayParked(request: event_store_protocols_v1_persistentsubscriptions_pb.ReplayParkedReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_persistentsubscriptions_pb.ReplayParkedResp) => void): grpc.ClientUnaryCall;
    replayParked(request: event_store_protocols_v1_persistentsubscriptions_pb.ReplayParkedReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_persistentsubscriptions_pb.ReplayParkedResp) => void): grpc.ClientUnaryCall;
    truncateParked(request: event_store_protocols_v1_persistentsubscriptions_pb.TruncateParkedReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_persistentsubscriptions_pb.TruncateParkedResp) => void): grpc.ClientUnaryCall;
    truncateParked(request: event_store_protocols_v1_persistentsubscriptions_pb.TruncateParkedReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_persistentsubscriptions_pb.TruncateParkedResp) => void): grpc.ClientUnaryCall;
    truncateParked(request: event_store_protocols_v1_persistentsubscriptions_pb.TruncateParkedReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_persistentsubscriptions_pb.TruncateParkedResp) => void): grpc.ClientUnaryCall;
    list(request: event_store_protocols_v1_persistentsubscriptions_pb.ListReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_persistentsubscriptions_pb.ListResp) => void): grpc.ClientUnaryCall;
    list(request: event_store_protocols_v1_persistentsubscriptions_pb.ListReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_persistentsubscriptions_pb.ListResp) => void): grpc.ClientUnaryCall;
    list(request: event_store_protocols_v1_persistentsubscriptions_pb.ListReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_persistentsubscriptions_pb.ListResp) => void): grpc.ClientUnaryCall;
    restartSubsystem(request: event_store_protocols_v1_shared_pb.Empty, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    restartSubsystem(request: event_store_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    restartSubsystem(request: event_store_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class PersistentSubscriptionsClient extends grpc.Client implements IPersistentSubscriptionsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public create(request: event_store_protocols_v1_persistentsubscriptions_pb.CreateReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_persistentsubscriptions_pb.CreateResp) => void): grpc.ClientUnaryCall;
    public create(request: event_store_protocols_v1_persistentsubscriptions_pb.CreateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_persistentsubscriptions_pb.CreateResp) => void): grpc.ClientUnaryCall;
    public create(request: event_store_protocols_v1_persistentsubscriptions_pb.CreateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_persistentsubscriptions_pb.CreateResp) => void): grpc.ClientUnaryCall;
    public update(request: event_store_protocols_v1_persistentsubscriptions_pb.UpdateReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_persistentsubscriptions_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    public update(request: event_store_protocols_v1_persistentsubscriptions_pb.UpdateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_persistentsubscriptions_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    public update(request: event_store_protocols_v1_persistentsubscriptions_pb.UpdateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_persistentsubscriptions_pb.UpdateResp) => void): grpc.ClientUnaryCall;
    public delete(request: event_store_protocols_v1_persistentsubscriptions_pb.DeleteReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_persistentsubscriptions_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    public delete(request: event_store_protocols_v1_persistentsubscriptions_pb.DeleteReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_persistentsubscriptions_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    public delete(request: event_store_protocols_v1_persistentsubscriptions_pb.DeleteReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_persistentsubscriptions_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    public read(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<event_store_protocols_v1_persistentsubscriptions_pb.ReadReq, event_store_protocols_v1_persistentsubscriptions_pb.ReadResp>;
    public read(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<event_store_protocols_v1_persistentsubscriptions_pb.ReadReq, event_store_protocols_v1_persistentsubscriptions_pb.ReadResp>;
    public getInfo(request: event_store_protocols_v1_persistentsubscriptions_pb.GetInfoReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_persistentsubscriptions_pb.GetInfoResp) => void): grpc.ClientUnaryCall;
    public getInfo(request: event_store_protocols_v1_persistentsubscriptions_pb.GetInfoReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_persistentsubscriptions_pb.GetInfoResp) => void): grpc.ClientUnaryCall;
    public getInfo(request: event_store_protocols_v1_persistentsubscriptions_pb.GetInfoReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_persistentsubscriptions_pb.GetInfoResp) => void): grpc.ClientUnaryCall;
    public replayParked(request: event_store_protocols_v1_persistentsubscriptions_pb.ReplayParkedReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_persistentsubscriptions_pb.ReplayParkedResp) => void): grpc.ClientUnaryCall;
    public replayParked(request: event_store_protocols_v1_persistentsubscriptions_pb.ReplayParkedReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_persistentsubscriptions_pb.ReplayParkedResp) => void): grpc.ClientUnaryCall;
    public replayParked(request: event_store_protocols_v1_persistentsubscriptions_pb.ReplayParkedReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_persistentsubscriptions_pb.ReplayParkedResp) => void): grpc.ClientUnaryCall;
    public truncateParked(request: event_store_protocols_v1_persistentsubscriptions_pb.TruncateParkedReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_persistentsubscriptions_pb.TruncateParkedResp) => void): grpc.ClientUnaryCall;
    public truncateParked(request: event_store_protocols_v1_persistentsubscriptions_pb.TruncateParkedReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_persistentsubscriptions_pb.TruncateParkedResp) => void): grpc.ClientUnaryCall;
    public truncateParked(request: event_store_protocols_v1_persistentsubscriptions_pb.TruncateParkedReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_persistentsubscriptions_pb.TruncateParkedResp) => void): grpc.ClientUnaryCall;
    public list(request: event_store_protocols_v1_persistentsubscriptions_pb.ListReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_persistentsubscriptions_pb.ListResp) => void): grpc.ClientUnaryCall;
    public list(request: event_store_protocols_v1_persistentsubscriptions_pb.ListReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_persistentsubscriptions_pb.ListResp) => void): grpc.ClientUnaryCall;
    public list(request: event_store_protocols_v1_persistentsubscriptions_pb.ListReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_persistentsubscriptions_pb.ListResp) => void): grpc.ClientUnaryCall;
    public restartSubsystem(request: event_store_protocols_v1_shared_pb.Empty, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public restartSubsystem(request: event_store_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public restartSubsystem(request: event_store_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
}
