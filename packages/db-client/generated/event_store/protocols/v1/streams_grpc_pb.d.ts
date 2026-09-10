// package: event_store.client.streams
// file: event_store/protocols/v1/streams.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as event_store_protocols_v1_streams_pb from "../../../event_store/protocols/v1/streams_pb";
import * as event_store_protocols_v1_shared_pb from "../../../event_store/protocols/v1/shared_pb";
import * as event_store_protocols_v1_status_pb from "../../../event_store/protocols/v1/status_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IStreamsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    read: IStreamsService_IRead;
    append: IStreamsService_IAppend;
    delete: IStreamsService_IDelete;
    tombstone: IStreamsService_ITombstone;
    batchAppend: IStreamsService_IBatchAppend;
}

interface IStreamsService_IRead extends grpc.MethodDefinition<event_store_protocols_v1_streams_pb.ReadReq, event_store_protocols_v1_streams_pb.ReadResp> {
    path: "/event_store.client.streams.Streams/Read";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<event_store_protocols_v1_streams_pb.ReadReq>;
    requestDeserialize: grpc.deserialize<event_store_protocols_v1_streams_pb.ReadReq>;
    responseSerialize: grpc.serialize<event_store_protocols_v1_streams_pb.ReadResp>;
    responseDeserialize: grpc.deserialize<event_store_protocols_v1_streams_pb.ReadResp>;
}
interface IStreamsService_IAppend extends grpc.MethodDefinition<event_store_protocols_v1_streams_pb.AppendReq, event_store_protocols_v1_streams_pb.AppendResp> {
    path: "/event_store.client.streams.Streams/Append";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<event_store_protocols_v1_streams_pb.AppendReq>;
    requestDeserialize: grpc.deserialize<event_store_protocols_v1_streams_pb.AppendReq>;
    responseSerialize: grpc.serialize<event_store_protocols_v1_streams_pb.AppendResp>;
    responseDeserialize: grpc.deserialize<event_store_protocols_v1_streams_pb.AppendResp>;
}
interface IStreamsService_IDelete extends grpc.MethodDefinition<event_store_protocols_v1_streams_pb.DeleteReq, event_store_protocols_v1_streams_pb.DeleteResp> {
    path: "/event_store.client.streams.Streams/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_store_protocols_v1_streams_pb.DeleteReq>;
    requestDeserialize: grpc.deserialize<event_store_protocols_v1_streams_pb.DeleteReq>;
    responseSerialize: grpc.serialize<event_store_protocols_v1_streams_pb.DeleteResp>;
    responseDeserialize: grpc.deserialize<event_store_protocols_v1_streams_pb.DeleteResp>;
}
interface IStreamsService_ITombstone extends grpc.MethodDefinition<event_store_protocols_v1_streams_pb.TombstoneReq, event_store_protocols_v1_streams_pb.TombstoneResp> {
    path: "/event_store.client.streams.Streams/Tombstone";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_store_protocols_v1_streams_pb.TombstoneReq>;
    requestDeserialize: grpc.deserialize<event_store_protocols_v1_streams_pb.TombstoneReq>;
    responseSerialize: grpc.serialize<event_store_protocols_v1_streams_pb.TombstoneResp>;
    responseDeserialize: grpc.deserialize<event_store_protocols_v1_streams_pb.TombstoneResp>;
}
interface IStreamsService_IBatchAppend extends grpc.MethodDefinition<event_store_protocols_v1_streams_pb.BatchAppendReq, event_store_protocols_v1_streams_pb.BatchAppendResp> {
    path: "/event_store.client.streams.Streams/BatchAppend";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<event_store_protocols_v1_streams_pb.BatchAppendReq>;
    requestDeserialize: grpc.deserialize<event_store_protocols_v1_streams_pb.BatchAppendReq>;
    responseSerialize: grpc.serialize<event_store_protocols_v1_streams_pb.BatchAppendResp>;
    responseDeserialize: grpc.deserialize<event_store_protocols_v1_streams_pb.BatchAppendResp>;
}

export const StreamsService: IStreamsService;

export interface IStreamsServer extends grpc.UntypedServiceImplementation {
    read: grpc.handleServerStreamingCall<event_store_protocols_v1_streams_pb.ReadReq, event_store_protocols_v1_streams_pb.ReadResp>;
    append: grpc.handleClientStreamingCall<event_store_protocols_v1_streams_pb.AppendReq, event_store_protocols_v1_streams_pb.AppendResp>;
    delete: grpc.handleUnaryCall<event_store_protocols_v1_streams_pb.DeleteReq, event_store_protocols_v1_streams_pb.DeleteResp>;
    tombstone: grpc.handleUnaryCall<event_store_protocols_v1_streams_pb.TombstoneReq, event_store_protocols_v1_streams_pb.TombstoneResp>;
    batchAppend: grpc.handleBidiStreamingCall<event_store_protocols_v1_streams_pb.BatchAppendReq, event_store_protocols_v1_streams_pb.BatchAppendResp>;
}

export interface IStreamsClient {
    read(request: event_store_protocols_v1_streams_pb.ReadReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<event_store_protocols_v1_streams_pb.ReadResp>;
    read(request: event_store_protocols_v1_streams_pb.ReadReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<event_store_protocols_v1_streams_pb.ReadResp>;
    append(callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_streams_pb.AppendResp) => void): grpc.ClientWritableStream<event_store_protocols_v1_streams_pb.AppendReq>;
    append(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_streams_pb.AppendResp) => void): grpc.ClientWritableStream<event_store_protocols_v1_streams_pb.AppendReq>;
    append(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_streams_pb.AppendResp) => void): grpc.ClientWritableStream<event_store_protocols_v1_streams_pb.AppendReq>;
    append(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_streams_pb.AppendResp) => void): grpc.ClientWritableStream<event_store_protocols_v1_streams_pb.AppendReq>;
    delete(request: event_store_protocols_v1_streams_pb.DeleteReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_streams_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    delete(request: event_store_protocols_v1_streams_pb.DeleteReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_streams_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    delete(request: event_store_protocols_v1_streams_pb.DeleteReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_streams_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    tombstone(request: event_store_protocols_v1_streams_pb.TombstoneReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_streams_pb.TombstoneResp) => void): grpc.ClientUnaryCall;
    tombstone(request: event_store_protocols_v1_streams_pb.TombstoneReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_streams_pb.TombstoneResp) => void): grpc.ClientUnaryCall;
    tombstone(request: event_store_protocols_v1_streams_pb.TombstoneReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_streams_pb.TombstoneResp) => void): grpc.ClientUnaryCall;
    batchAppend(): grpc.ClientDuplexStream<event_store_protocols_v1_streams_pb.BatchAppendReq, event_store_protocols_v1_streams_pb.BatchAppendResp>;
    batchAppend(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<event_store_protocols_v1_streams_pb.BatchAppendReq, event_store_protocols_v1_streams_pb.BatchAppendResp>;
    batchAppend(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<event_store_protocols_v1_streams_pb.BatchAppendReq, event_store_protocols_v1_streams_pb.BatchAppendResp>;
}

export class StreamsClient extends grpc.Client implements IStreamsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public read(request: event_store_protocols_v1_streams_pb.ReadReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<event_store_protocols_v1_streams_pb.ReadResp>;
    public read(request: event_store_protocols_v1_streams_pb.ReadReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<event_store_protocols_v1_streams_pb.ReadResp>;
    public append(callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_streams_pb.AppendResp) => void): grpc.ClientWritableStream<event_store_protocols_v1_streams_pb.AppendReq>;
    public append(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_streams_pb.AppendResp) => void): grpc.ClientWritableStream<event_store_protocols_v1_streams_pb.AppendReq>;
    public append(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_streams_pb.AppendResp) => void): grpc.ClientWritableStream<event_store_protocols_v1_streams_pb.AppendReq>;
    public append(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_streams_pb.AppendResp) => void): grpc.ClientWritableStream<event_store_protocols_v1_streams_pb.AppendReq>;
    public delete(request: event_store_protocols_v1_streams_pb.DeleteReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_streams_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    public delete(request: event_store_protocols_v1_streams_pb.DeleteReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_streams_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    public delete(request: event_store_protocols_v1_streams_pb.DeleteReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_streams_pb.DeleteResp) => void): grpc.ClientUnaryCall;
    public tombstone(request: event_store_protocols_v1_streams_pb.TombstoneReq, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_streams_pb.TombstoneResp) => void): grpc.ClientUnaryCall;
    public tombstone(request: event_store_protocols_v1_streams_pb.TombstoneReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_streams_pb.TombstoneResp) => void): grpc.ClientUnaryCall;
    public tombstone(request: event_store_protocols_v1_streams_pb.TombstoneReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_streams_pb.TombstoneResp) => void): grpc.ClientUnaryCall;
    public batchAppend(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<event_store_protocols_v1_streams_pb.BatchAppendReq, event_store_protocols_v1_streams_pb.BatchAppendResp>;
    public batchAppend(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<event_store_protocols_v1_streams_pb.BatchAppendReq, event_store_protocols_v1_streams_pb.BatchAppendResp>;
}
