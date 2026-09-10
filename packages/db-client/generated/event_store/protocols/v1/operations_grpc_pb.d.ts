// package: event_store.client.operations
// file: event_store/protocols/v1/operations.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as event_store_protocols_v1_operations_pb from "../../../event_store/protocols/v1/operations_pb";
import * as event_store_protocols_v1_shared_pb from "../../../event_store/protocols/v1/shared_pb";

interface IOperationsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    startScavenge: IOperationsService_IStartScavenge;
    stopScavenge: IOperationsService_IStopScavenge;
    getCurrentScavenge: IOperationsService_IGetCurrentScavenge;
    getLastScavenge: IOperationsService_IGetLastScavenge;
    reloadConfig: IOperationsService_IReloadConfig;
    shutdown: IOperationsService_IShutdown;
    mergeIndexes: IOperationsService_IMergeIndexes;
    resignNode: IOperationsService_IResignNode;
    setNodePriority: IOperationsService_ISetNodePriority;
    restartPersistentSubscriptions: IOperationsService_IRestartPersistentSubscriptions;
}

interface IOperationsService_IStartScavenge extends grpc.MethodDefinition<event_store_protocols_v1_operations_pb.StartScavengeReq, event_store_protocols_v1_operations_pb.ScavengeResp> {
    path: "/event_store.client.operations.Operations/StartScavenge";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_store_protocols_v1_operations_pb.StartScavengeReq>;
    requestDeserialize: grpc.deserialize<event_store_protocols_v1_operations_pb.StartScavengeReq>;
    responseSerialize: grpc.serialize<event_store_protocols_v1_operations_pb.ScavengeResp>;
    responseDeserialize: grpc.deserialize<event_store_protocols_v1_operations_pb.ScavengeResp>;
}
interface IOperationsService_IStopScavenge extends grpc.MethodDefinition<event_store_protocols_v1_operations_pb.StopScavengeReq, event_store_protocols_v1_operations_pb.ScavengeResp> {
    path: "/event_store.client.operations.Operations/StopScavenge";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_store_protocols_v1_operations_pb.StopScavengeReq>;
    requestDeserialize: grpc.deserialize<event_store_protocols_v1_operations_pb.StopScavengeReq>;
    responseSerialize: grpc.serialize<event_store_protocols_v1_operations_pb.ScavengeResp>;
    responseDeserialize: grpc.deserialize<event_store_protocols_v1_operations_pb.ScavengeResp>;
}
interface IOperationsService_IGetCurrentScavenge extends grpc.MethodDefinition<event_store_protocols_v1_shared_pb.Empty, event_store_protocols_v1_operations_pb.ScavengeStatusResp> {
    path: "/event_store.client.operations.Operations/GetCurrentScavenge";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_store_protocols_v1_shared_pb.Empty>;
    requestDeserialize: grpc.deserialize<event_store_protocols_v1_shared_pb.Empty>;
    responseSerialize: grpc.serialize<event_store_protocols_v1_operations_pb.ScavengeStatusResp>;
    responseDeserialize: grpc.deserialize<event_store_protocols_v1_operations_pb.ScavengeStatusResp>;
}
interface IOperationsService_IGetLastScavenge extends grpc.MethodDefinition<event_store_protocols_v1_shared_pb.Empty, event_store_protocols_v1_operations_pb.ScavengeStatusResp> {
    path: "/event_store.client.operations.Operations/GetLastScavenge";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_store_protocols_v1_shared_pb.Empty>;
    requestDeserialize: grpc.deserialize<event_store_protocols_v1_shared_pb.Empty>;
    responseSerialize: grpc.serialize<event_store_protocols_v1_operations_pb.ScavengeStatusResp>;
    responseDeserialize: grpc.deserialize<event_store_protocols_v1_operations_pb.ScavengeStatusResp>;
}
interface IOperationsService_IReloadConfig extends grpc.MethodDefinition<event_store_protocols_v1_shared_pb.Empty, event_store_protocols_v1_shared_pb.Empty> {
    path: "/event_store.client.operations.Operations/ReloadConfig";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_store_protocols_v1_shared_pb.Empty>;
    requestDeserialize: grpc.deserialize<event_store_protocols_v1_shared_pb.Empty>;
    responseSerialize: grpc.serialize<event_store_protocols_v1_shared_pb.Empty>;
    responseDeserialize: grpc.deserialize<event_store_protocols_v1_shared_pb.Empty>;
}
interface IOperationsService_IShutdown extends grpc.MethodDefinition<event_store_protocols_v1_shared_pb.Empty, event_store_protocols_v1_shared_pb.Empty> {
    path: "/event_store.client.operations.Operations/Shutdown";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_store_protocols_v1_shared_pb.Empty>;
    requestDeserialize: grpc.deserialize<event_store_protocols_v1_shared_pb.Empty>;
    responseSerialize: grpc.serialize<event_store_protocols_v1_shared_pb.Empty>;
    responseDeserialize: grpc.deserialize<event_store_protocols_v1_shared_pb.Empty>;
}
interface IOperationsService_IMergeIndexes extends grpc.MethodDefinition<event_store_protocols_v1_shared_pb.Empty, event_store_protocols_v1_shared_pb.Empty> {
    path: "/event_store.client.operations.Operations/MergeIndexes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_store_protocols_v1_shared_pb.Empty>;
    requestDeserialize: grpc.deserialize<event_store_protocols_v1_shared_pb.Empty>;
    responseSerialize: grpc.serialize<event_store_protocols_v1_shared_pb.Empty>;
    responseDeserialize: grpc.deserialize<event_store_protocols_v1_shared_pb.Empty>;
}
interface IOperationsService_IResignNode extends grpc.MethodDefinition<event_store_protocols_v1_shared_pb.Empty, event_store_protocols_v1_shared_pb.Empty> {
    path: "/event_store.client.operations.Operations/ResignNode";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_store_protocols_v1_shared_pb.Empty>;
    requestDeserialize: grpc.deserialize<event_store_protocols_v1_shared_pb.Empty>;
    responseSerialize: grpc.serialize<event_store_protocols_v1_shared_pb.Empty>;
    responseDeserialize: grpc.deserialize<event_store_protocols_v1_shared_pb.Empty>;
}
interface IOperationsService_ISetNodePriority extends grpc.MethodDefinition<event_store_protocols_v1_operations_pb.SetNodePriorityReq, event_store_protocols_v1_shared_pb.Empty> {
    path: "/event_store.client.operations.Operations/SetNodePriority";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_store_protocols_v1_operations_pb.SetNodePriorityReq>;
    requestDeserialize: grpc.deserialize<event_store_protocols_v1_operations_pb.SetNodePriorityReq>;
    responseSerialize: grpc.serialize<event_store_protocols_v1_shared_pb.Empty>;
    responseDeserialize: grpc.deserialize<event_store_protocols_v1_shared_pb.Empty>;
}
interface IOperationsService_IRestartPersistentSubscriptions extends grpc.MethodDefinition<event_store_protocols_v1_shared_pb.Empty, event_store_protocols_v1_shared_pb.Empty> {
    path: "/event_store.client.operations.Operations/RestartPersistentSubscriptions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_store_protocols_v1_shared_pb.Empty>;
    requestDeserialize: grpc.deserialize<event_store_protocols_v1_shared_pb.Empty>;
    responseSerialize: grpc.serialize<event_store_protocols_v1_shared_pb.Empty>;
    responseDeserialize: grpc.deserialize<event_store_protocols_v1_shared_pb.Empty>;
}

export const OperationsService: IOperationsService;

export interface IOperationsServer extends grpc.UntypedServiceImplementation {
    startScavenge: grpc.handleUnaryCall<event_store_protocols_v1_operations_pb.StartScavengeReq, event_store_protocols_v1_operations_pb.ScavengeResp>;
    stopScavenge: grpc.handleUnaryCall<event_store_protocols_v1_operations_pb.StopScavengeReq, event_store_protocols_v1_operations_pb.ScavengeResp>;
    getCurrentScavenge: grpc.handleUnaryCall<event_store_protocols_v1_shared_pb.Empty, event_store_protocols_v1_operations_pb.ScavengeStatusResp>;
    getLastScavenge: grpc.handleUnaryCall<event_store_protocols_v1_shared_pb.Empty, event_store_protocols_v1_operations_pb.ScavengeStatusResp>;
    reloadConfig: grpc.handleUnaryCall<event_store_protocols_v1_shared_pb.Empty, event_store_protocols_v1_shared_pb.Empty>;
    shutdown: grpc.handleUnaryCall<event_store_protocols_v1_shared_pb.Empty, event_store_protocols_v1_shared_pb.Empty>;
    mergeIndexes: grpc.handleUnaryCall<event_store_protocols_v1_shared_pb.Empty, event_store_protocols_v1_shared_pb.Empty>;
    resignNode: grpc.handleUnaryCall<event_store_protocols_v1_shared_pb.Empty, event_store_protocols_v1_shared_pb.Empty>;
    setNodePriority: grpc.handleUnaryCall<event_store_protocols_v1_operations_pb.SetNodePriorityReq, event_store_protocols_v1_shared_pb.Empty>;
    restartPersistentSubscriptions: grpc.handleUnaryCall<event_store_protocols_v1_shared_pb.Empty, event_store_protocols_v1_shared_pb.Empty>;
}

export interface IOperationsClient {
    startScavenge(request: event_store_protocols_v1_operations_pb.StartScavengeReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_operations_pb.ScavengeResp) => void): grpc.ClientUnaryCall;
    startScavenge(request: event_store_protocols_v1_operations_pb.StartScavengeReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_operations_pb.ScavengeResp) => void): grpc.ClientUnaryCall;
    startScavenge(request: event_store_protocols_v1_operations_pb.StartScavengeReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_operations_pb.ScavengeResp) => void): grpc.ClientUnaryCall;
    stopScavenge(request: event_store_protocols_v1_operations_pb.StopScavengeReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_operations_pb.ScavengeResp) => void): grpc.ClientUnaryCall;
    stopScavenge(request: event_store_protocols_v1_operations_pb.StopScavengeReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_operations_pb.ScavengeResp) => void): grpc.ClientUnaryCall;
    stopScavenge(request: event_store_protocols_v1_operations_pb.StopScavengeReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_operations_pb.ScavengeResp) => void): grpc.ClientUnaryCall;
    getCurrentScavenge(request: event_store_protocols_v1_shared_pb.Empty, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_operations_pb.ScavengeStatusResp) => void): grpc.ClientUnaryCall;
    getCurrentScavenge(request: event_store_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_operations_pb.ScavengeStatusResp) => void): grpc.ClientUnaryCall;
    getCurrentScavenge(request: event_store_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_operations_pb.ScavengeStatusResp) => void): grpc.ClientUnaryCall;
    getLastScavenge(request: event_store_protocols_v1_shared_pb.Empty, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_operations_pb.ScavengeStatusResp) => void): grpc.ClientUnaryCall;
    getLastScavenge(request: event_store_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_operations_pb.ScavengeStatusResp) => void): grpc.ClientUnaryCall;
    getLastScavenge(request: event_store_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_operations_pb.ScavengeStatusResp) => void): grpc.ClientUnaryCall;
    reloadConfig(request: event_store_protocols_v1_shared_pb.Empty, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    reloadConfig(request: event_store_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    reloadConfig(request: event_store_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    shutdown(request: event_store_protocols_v1_shared_pb.Empty, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    shutdown(request: event_store_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    shutdown(request: event_store_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    mergeIndexes(request: event_store_protocols_v1_shared_pb.Empty, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    mergeIndexes(request: event_store_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    mergeIndexes(request: event_store_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    resignNode(request: event_store_protocols_v1_shared_pb.Empty, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    resignNode(request: event_store_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    resignNode(request: event_store_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    setNodePriority(request: event_store_protocols_v1_operations_pb.SetNodePriorityReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    setNodePriority(request: event_store_protocols_v1_operations_pb.SetNodePriorityReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    setNodePriority(request: event_store_protocols_v1_operations_pb.SetNodePriorityReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    restartPersistentSubscriptions(request: event_store_protocols_v1_shared_pb.Empty, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    restartPersistentSubscriptions(request: event_store_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    restartPersistentSubscriptions(request: event_store_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class OperationsClient extends grpc.Client implements IOperationsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public startScavenge(request: event_store_protocols_v1_operations_pb.StartScavengeReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_operations_pb.ScavengeResp) => void): grpc.ClientUnaryCall;
    public startScavenge(request: event_store_protocols_v1_operations_pb.StartScavengeReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_operations_pb.ScavengeResp) => void): grpc.ClientUnaryCall;
    public startScavenge(request: event_store_protocols_v1_operations_pb.StartScavengeReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_operations_pb.ScavengeResp) => void): grpc.ClientUnaryCall;
    public stopScavenge(request: event_store_protocols_v1_operations_pb.StopScavengeReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_operations_pb.ScavengeResp) => void): grpc.ClientUnaryCall;
    public stopScavenge(request: event_store_protocols_v1_operations_pb.StopScavengeReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_operations_pb.ScavengeResp) => void): grpc.ClientUnaryCall;
    public stopScavenge(request: event_store_protocols_v1_operations_pb.StopScavengeReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_operations_pb.ScavengeResp) => void): grpc.ClientUnaryCall;
    public getCurrentScavenge(request: event_store_protocols_v1_shared_pb.Empty, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_operations_pb.ScavengeStatusResp) => void): grpc.ClientUnaryCall;
    public getCurrentScavenge(request: event_store_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_operations_pb.ScavengeStatusResp) => void): grpc.ClientUnaryCall;
    public getCurrentScavenge(request: event_store_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_operations_pb.ScavengeStatusResp) => void): grpc.ClientUnaryCall;
    public getLastScavenge(request: event_store_protocols_v1_shared_pb.Empty, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_operations_pb.ScavengeStatusResp) => void): grpc.ClientUnaryCall;
    public getLastScavenge(request: event_store_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_operations_pb.ScavengeStatusResp) => void): grpc.ClientUnaryCall;
    public getLastScavenge(request: event_store_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_operations_pb.ScavengeStatusResp) => void): grpc.ClientUnaryCall;
    public reloadConfig(request: event_store_protocols_v1_shared_pb.Empty, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public reloadConfig(request: event_store_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public reloadConfig(request: event_store_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public shutdown(request: event_store_protocols_v1_shared_pb.Empty, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public shutdown(request: event_store_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public shutdown(request: event_store_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public mergeIndexes(request: event_store_protocols_v1_shared_pb.Empty, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public mergeIndexes(request: event_store_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public mergeIndexes(request: event_store_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public resignNode(request: event_store_protocols_v1_shared_pb.Empty, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public resignNode(request: event_store_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public resignNode(request: event_store_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public setNodePriority(request: event_store_protocols_v1_operations_pb.SetNodePriorityReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public setNodePriority(request: event_store_protocols_v1_operations_pb.SetNodePriorityReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public setNodePriority(request: event_store_protocols_v1_operations_pb.SetNodePriorityReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public restartPersistentSubscriptions(request: event_store_protocols_v1_shared_pb.Empty, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public restartPersistentSubscriptions(request: event_store_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
    public restartPersistentSubscriptions(request: event_store_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_shared_pb.Empty) => void): grpc.ClientUnaryCall;
}
