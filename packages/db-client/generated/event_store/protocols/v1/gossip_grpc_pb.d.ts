// package: event_store.client.gossip
// file: event_store/protocols/v1/gossip.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as event_store_protocols_v1_gossip_pb from "../../../event_store/protocols/v1/gossip_pb";
import * as event_store_protocols_v1_shared_pb from "../../../event_store/protocols/v1/shared_pb";

interface IGossipService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    read: IGossipService_IRead;
}

interface IGossipService_IRead extends grpc.MethodDefinition<event_store_protocols_v1_shared_pb.Empty, event_store_protocols_v1_gossip_pb.ClusterInfo> {
    path: "/event_store.client.gossip.Gossip/Read";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<event_store_protocols_v1_shared_pb.Empty>;
    requestDeserialize: grpc.deserialize<event_store_protocols_v1_shared_pb.Empty>;
    responseSerialize: grpc.serialize<event_store_protocols_v1_gossip_pb.ClusterInfo>;
    responseDeserialize: grpc.deserialize<event_store_protocols_v1_gossip_pb.ClusterInfo>;
}

export const GossipService: IGossipService;

export interface IGossipServer extends grpc.UntypedServiceImplementation {
    read: grpc.handleUnaryCall<event_store_protocols_v1_shared_pb.Empty, event_store_protocols_v1_gossip_pb.ClusterInfo>;
}

export interface IGossipClient {
    read(request: event_store_protocols_v1_shared_pb.Empty, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_gossip_pb.ClusterInfo) => void): grpc.ClientUnaryCall;
    read(request: event_store_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_gossip_pb.ClusterInfo) => void): grpc.ClientUnaryCall;
    read(request: event_store_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_gossip_pb.ClusterInfo) => void): grpc.ClientUnaryCall;
}

export class GossipClient extends grpc.Client implements IGossipClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public read(request: event_store_protocols_v1_shared_pb.Empty, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_gossip_pb.ClusterInfo) => void): grpc.ClientUnaryCall;
    public read(request: event_store_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_gossip_pb.ClusterInfo) => void): grpc.ClientUnaryCall;
    public read(request: event_store_protocols_v1_shared_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: event_store_protocols_v1_gossip_pb.ClusterInfo) => void): grpc.ClientUnaryCall;
}
