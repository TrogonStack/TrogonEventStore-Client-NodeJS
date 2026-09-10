// package: event_store.client.projections
// file: event_store/protocols/v1/projectionmanagement.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as event_store_protocols_v1_shared_pb from "../../../event_store/protocols/v1/shared_pb";

export class CreateReq extends jspb.Message {

    hasOptions(): boolean;
    clearOptions(): void;
    getOptions(): CreateReq.Options | undefined;
    setOptions(value?: CreateReq.Options): CreateReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateReq.AsObject;
    static toObject(includeInstance: boolean, msg: CreateReq): CreateReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateReq;
    static deserializeBinaryFromReader(message: CreateReq, reader: jspb.BinaryReader): CreateReq;
}

export namespace CreateReq {
    export type AsObject = {
        options?: CreateReq.Options.AsObject,
    }


    export class Options extends jspb.Message {

        hasOneTime(): boolean;
        clearOneTime(): void;
        getOneTime(): event_store_protocols_v1_shared_pb.Empty | undefined;
        setOneTime(value?: event_store_protocols_v1_shared_pb.Empty): Options;

        hasTransient(): boolean;
        clearTransient(): void;
        getTransient(): CreateReq.Options.Transient | undefined;
        setTransient(value?: CreateReq.Options.Transient): Options;

        hasContinuous(): boolean;
        clearContinuous(): void;
        getContinuous(): CreateReq.Options.Continuous | undefined;
        setContinuous(value?: CreateReq.Options.Continuous): Options;
        getQuery(): string;
        setQuery(value: string): Options;
        getHandlerType(): string;
        setHandlerType(value: string): Options;

        hasEnabled(): boolean;
        clearEnabled(): void;
        getEnabled(): boolean;
        setEnabled(value: boolean): Options;

        hasNoEnabledOption(): boolean;
        clearNoEnabledOption(): void;
        getNoEnabledOption(): event_store_protocols_v1_shared_pb.Empty | undefined;
        setNoEnabledOption(value?: event_store_protocols_v1_shared_pb.Empty): Options;

        hasName(): boolean;
        clearName(): void;
        getName(): string | undefined;
        setName(value: string): Options;
        getCheckpointsEnabled(): boolean;
        setCheckpointsEnabled(value: boolean): Options;
        getEmitEnabled(): boolean;
        setEmitEnabled(value: boolean): Options;
        getTrackEmittedStreams(): boolean;
        setTrackEmittedStreams(value: boolean): Options;

        getAnnotationsMap(): jspb.Map<string, string>;
        clearAnnotationsMap(): void;

        getModeCase(): Options.ModeCase;
        getEnabledOptionCase(): Options.EnabledOptionCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Options.AsObject;
        static toObject(includeInstance: boolean, msg: Options): Options.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Options, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Options;
        static deserializeBinaryFromReader(message: Options, reader: jspb.BinaryReader): Options;
    }

    export namespace Options {
        export type AsObject = {
            oneTime?: event_store_protocols_v1_shared_pb.Empty.AsObject,
            pb_transient?: CreateReq.Options.Transient.AsObject,
            continuous?: CreateReq.Options.Continuous.AsObject,
            query: string,
            handlerType: string,
            enabled: boolean,
            noEnabledOption?: event_store_protocols_v1_shared_pb.Empty.AsObject,
            name?: string,
            checkpointsEnabled: boolean,
            emitEnabled: boolean,
            trackEmittedStreams: boolean,

            annotationsMap: Array<[string, string]>,
        }


        export class Transient extends jspb.Message {
            getName(): string;
            setName(value: string): Transient;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Transient.AsObject;
            static toObject(includeInstance: boolean, msg: Transient): Transient.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Transient, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Transient;
            static deserializeBinaryFromReader(message: Transient, reader: jspb.BinaryReader): Transient;
        }

        export namespace Transient {
            export type AsObject = {
                name: string,
            }
        }

        export class Continuous extends jspb.Message {
            getName(): string;
            setName(value: string): Continuous;
            getEmitEnabled(): boolean;
            setEmitEnabled(value: boolean): Continuous;
            getTrackEmittedStreams(): boolean;
            setTrackEmittedStreams(value: boolean): Continuous;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Continuous.AsObject;
            static toObject(includeInstance: boolean, msg: Continuous): Continuous.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Continuous, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Continuous;
            static deserializeBinaryFromReader(message: Continuous, reader: jspb.BinaryReader): Continuous;
        }

        export namespace Continuous {
            export type AsObject = {
                name: string,
                emitEnabled: boolean,
                trackEmittedStreams: boolean,
            }
        }


        export enum ModeCase {
            MODE_NOT_SET = 0,
            ONE_TIME = 1,
            TRANSIENT = 2,
            CONTINUOUS = 3,
        }

        export enum EnabledOptionCase {
            ENABLED_OPTION_NOT_SET = 0,
            ENABLED = 6,
            NO_ENABLED_OPTION = 7,
        }

    }

}

export class CreateResp extends jspb.Message {

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateResp.AsObject;
    static toObject(includeInstance: boolean, msg: CreateResp): CreateResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateResp;
    static deserializeBinaryFromReader(message: CreateResp, reader: jspb.BinaryReader): CreateResp;
}

export namespace CreateResp {
    export type AsObject = {
    }
}

export class UpdateReq extends jspb.Message {

    hasOptions(): boolean;
    clearOptions(): void;
    getOptions(): UpdateReq.Options | undefined;
    setOptions(value?: UpdateReq.Options): UpdateReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateReq.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateReq): UpdateReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateReq;
    static deserializeBinaryFromReader(message: UpdateReq, reader: jspb.BinaryReader): UpdateReq;
}

export namespace UpdateReq {
    export type AsObject = {
        options?: UpdateReq.Options.AsObject,
    }


    export class Options extends jspb.Message {
        getName(): string;
        setName(value: string): Options;
        getQuery(): string;
        setQuery(value: string): Options;

        hasEmitEnabled(): boolean;
        clearEmitEnabled(): void;
        getEmitEnabled(): boolean;
        setEmitEnabled(value: boolean): Options;

        hasNoEmitOptions(): boolean;
        clearNoEmitOptions(): void;
        getNoEmitOptions(): event_store_protocols_v1_shared_pb.Empty | undefined;
        setNoEmitOptions(value?: event_store_protocols_v1_shared_pb.Empty): Options;

        getAnnotationsMap(): jspb.Map<string, string>;
        clearAnnotationsMap(): void;

        getEmitOptionCase(): Options.EmitOptionCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Options.AsObject;
        static toObject(includeInstance: boolean, msg: Options): Options.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Options, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Options;
        static deserializeBinaryFromReader(message: Options, reader: jspb.BinaryReader): Options;
    }

    export namespace Options {
        export type AsObject = {
            name: string,
            query: string,
            emitEnabled: boolean,
            noEmitOptions?: event_store_protocols_v1_shared_pb.Empty.AsObject,

            annotationsMap: Array<[string, string]>,
        }

        export enum EmitOptionCase {
            EMIT_OPTION_NOT_SET = 0,
            EMIT_ENABLED = 3,
            NO_EMIT_OPTIONS = 4,
        }

    }

}

export class UpdateResp extends jspb.Message {

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateResp.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateResp): UpdateResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateResp;
    static deserializeBinaryFromReader(message: UpdateResp, reader: jspb.BinaryReader): UpdateResp;
}

export namespace UpdateResp {
    export type AsObject = {
    }
}

export class GetQueryReq extends jspb.Message {

    hasOptions(): boolean;
    clearOptions(): void;
    getOptions(): GetQueryReq.Options | undefined;
    setOptions(value?: GetQueryReq.Options): GetQueryReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetQueryReq.AsObject;
    static toObject(includeInstance: boolean, msg: GetQueryReq): GetQueryReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetQueryReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetQueryReq;
    static deserializeBinaryFromReader(message: GetQueryReq, reader: jspb.BinaryReader): GetQueryReq;
}

export namespace GetQueryReq {
    export type AsObject = {
        options?: GetQueryReq.Options.AsObject,
    }


    export class Options extends jspb.Message {
        getName(): string;
        setName(value: string): Options;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Options.AsObject;
        static toObject(includeInstance: boolean, msg: Options): Options.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Options, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Options;
        static deserializeBinaryFromReader(message: Options, reader: jspb.BinaryReader): Options;
    }

    export namespace Options {
        export type AsObject = {
            name: string,
        }
    }

}

export class GetQueryResp extends jspb.Message {

    hasDetails(): boolean;
    clearDetails(): void;
    getDetails(): GetQueryResp.Details | undefined;
    setDetails(value?: GetQueryResp.Details): GetQueryResp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetQueryResp.AsObject;
    static toObject(includeInstance: boolean, msg: GetQueryResp): GetQueryResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetQueryResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetQueryResp;
    static deserializeBinaryFromReader(message: GetQueryResp, reader: jspb.BinaryReader): GetQueryResp;
}

export namespace GetQueryResp {
    export type AsObject = {
        details?: GetQueryResp.Details.AsObject,
    }


    export class Details extends jspb.Message {
        getName(): string;
        setName(value: string): Details;
        getQuery(): string;
        setQuery(value: string): Details;
        getEmitEnabled(): boolean;
        setEmitEnabled(value: boolean): Details;
        getProjectionType(): string;
        setProjectionType(value: string): Details;

        hasTrackEmittedStreams(): boolean;
        clearTrackEmittedStreams(): void;
        getTrackEmittedStreams(): boolean | undefined;
        setTrackEmittedStreams(value: boolean): Details;

        hasCheckpointsEnabled(): boolean;
        clearCheckpointsEnabled(): void;
        getCheckpointsEnabled(): boolean | undefined;
        setCheckpointsEnabled(value: boolean): Details;
        getDefinitionJson(): string;
        setDefinitionJson(value: string): Details;
        getOutputConfigJson(): string;
        setOutputConfigJson(value: string): Details;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Details.AsObject;
        static toObject(includeInstance: boolean, msg: Details): Details.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Details, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Details;
        static deserializeBinaryFromReader(message: Details, reader: jspb.BinaryReader): Details;
    }

    export namespace Details {
        export type AsObject = {
            name: string,
            query: string,
            emitEnabled: boolean,
            projectionType: string,
            trackEmittedStreams?: boolean,
            checkpointsEnabled?: boolean,
            definitionJson: string,
            outputConfigJson: string,
        }
    }

}

export class DeleteReq extends jspb.Message {

    hasOptions(): boolean;
    clearOptions(): void;
    getOptions(): DeleteReq.Options | undefined;
    setOptions(value?: DeleteReq.Options): DeleteReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteReq.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteReq): DeleteReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteReq;
    static deserializeBinaryFromReader(message: DeleteReq, reader: jspb.BinaryReader): DeleteReq;
}

export namespace DeleteReq {
    export type AsObject = {
        options?: DeleteReq.Options.AsObject,
    }


    export class Options extends jspb.Message {
        getName(): string;
        setName(value: string): Options;
        getDeleteEmittedStreams(): boolean;
        setDeleteEmittedStreams(value: boolean): Options;
        getDeleteStateStream(): boolean;
        setDeleteStateStream(value: boolean): Options;
        getDeleteCheckpointStream(): boolean;
        setDeleteCheckpointStream(value: boolean): Options;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Options.AsObject;
        static toObject(includeInstance: boolean, msg: Options): Options.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Options, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Options;
        static deserializeBinaryFromReader(message: Options, reader: jspb.BinaryReader): Options;
    }

    export namespace Options {
        export type AsObject = {
            name: string,
            deleteEmittedStreams: boolean,
            deleteStateStream: boolean,
            deleteCheckpointStream: boolean,
        }
    }

}

export class DeleteResp extends jspb.Message {

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteResp.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteResp): DeleteResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteResp;
    static deserializeBinaryFromReader(message: DeleteResp, reader: jspb.BinaryReader): DeleteResp;
}

export namespace DeleteResp {
    export type AsObject = {
    }
}

export class StatisticsReq extends jspb.Message {

    hasOptions(): boolean;
    clearOptions(): void;
    getOptions(): StatisticsReq.Options | undefined;
    setOptions(value?: StatisticsReq.Options): StatisticsReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StatisticsReq.AsObject;
    static toObject(includeInstance: boolean, msg: StatisticsReq): StatisticsReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StatisticsReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StatisticsReq;
    static deserializeBinaryFromReader(message: StatisticsReq, reader: jspb.BinaryReader): StatisticsReq;
}

export namespace StatisticsReq {
    export type AsObject = {
        options?: StatisticsReq.Options.AsObject,
    }


    export class Options extends jspb.Message {

        hasName(): boolean;
        clearName(): void;
        getName(): string;
        setName(value: string): Options;

        hasAll(): boolean;
        clearAll(): void;
        getAll(): event_store_protocols_v1_shared_pb.Empty | undefined;
        setAll(value?: event_store_protocols_v1_shared_pb.Empty): Options;

        hasTransient(): boolean;
        clearTransient(): void;
        getTransient(): event_store_protocols_v1_shared_pb.Empty | undefined;
        setTransient(value?: event_store_protocols_v1_shared_pb.Empty): Options;

        hasContinuous(): boolean;
        clearContinuous(): void;
        getContinuous(): event_store_protocols_v1_shared_pb.Empty | undefined;
        setContinuous(value?: event_store_protocols_v1_shared_pb.Empty): Options;

        hasOneTime(): boolean;
        clearOneTime(): void;
        getOneTime(): event_store_protocols_v1_shared_pb.Empty | undefined;
        setOneTime(value?: event_store_protocols_v1_shared_pb.Empty): Options;

        hasAllNonTransient(): boolean;
        clearAllNonTransient(): void;
        getAllNonTransient(): event_store_protocols_v1_shared_pb.Empty | undefined;
        setAllNonTransient(value?: event_store_protocols_v1_shared_pb.Empty): Options;

        getModeCase(): Options.ModeCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Options.AsObject;
        static toObject(includeInstance: boolean, msg: Options): Options.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Options, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Options;
        static deserializeBinaryFromReader(message: Options, reader: jspb.BinaryReader): Options;
    }

    export namespace Options {
        export type AsObject = {
            name: string,
            all?: event_store_protocols_v1_shared_pb.Empty.AsObject,
            pb_transient?: event_store_protocols_v1_shared_pb.Empty.AsObject,
            continuous?: event_store_protocols_v1_shared_pb.Empty.AsObject,
            oneTime?: event_store_protocols_v1_shared_pb.Empty.AsObject,
            allNonTransient?: event_store_protocols_v1_shared_pb.Empty.AsObject,
        }

        export enum ModeCase {
            MODE_NOT_SET = 0,
            NAME = 1,
            ALL = 2,
            TRANSIENT = 3,
            CONTINUOUS = 4,
            ONE_TIME = 5,
            ALL_NON_TRANSIENT = 6,
        }

    }

}

export class StatisticsResp extends jspb.Message {

    hasDetails(): boolean;
    clearDetails(): void;
    getDetails(): StatisticsResp.Details | undefined;
    setDetails(value?: StatisticsResp.Details): StatisticsResp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StatisticsResp.AsObject;
    static toObject(includeInstance: boolean, msg: StatisticsResp): StatisticsResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StatisticsResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StatisticsResp;
    static deserializeBinaryFromReader(message: StatisticsResp, reader: jspb.BinaryReader): StatisticsResp;
}

export namespace StatisticsResp {
    export type AsObject = {
        details?: StatisticsResp.Details.AsObject,
    }


    export class Details extends jspb.Message {
        getCoreprocessingtime(): string;
        setCoreprocessingtime(value: string): Details;
        getVersion(): string;
        setVersion(value: string): Details;
        getEpoch(): string;
        setEpoch(value: string): Details;
        getEffectivename(): string;
        setEffectivename(value: string): Details;
        getWritesinprogress(): number;
        setWritesinprogress(value: number): Details;
        getReadsinprogress(): number;
        setReadsinprogress(value: number): Details;
        getPartitionscached(): number;
        setPartitionscached(value: number): Details;
        getStatus(): string;
        setStatus(value: string): Details;
        getStatereason(): string;
        setStatereason(value: string): Details;
        getName(): string;
        setName(value: string): Details;
        getMode(): string;
        setMode(value: string): Details;
        getPosition(): string;
        setPosition(value: string): Details;
        getProgress(): number;
        setProgress(value: number): Details;
        getLastcheckpoint(): string;
        setLastcheckpoint(value: string): Details;
        getEventsprocessedafterrestart(): string;
        setEventsprocessedafterrestart(value: string): Details;
        getCheckpointstatus(): string;
        setCheckpointstatus(value: string): Details;
        getBufferedevents(): string;
        setBufferedevents(value: string): Details;
        getWritependingeventsbeforecheckpoint(): number;
        setWritependingeventsbeforecheckpoint(value: number): Details;
        getWritependingeventsaftercheckpoint(): number;
        setWritependingeventsaftercheckpoint(value: number): Details;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Details.AsObject;
        static toObject(includeInstance: boolean, msg: Details): Details.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Details, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Details;
        static deserializeBinaryFromReader(message: Details, reader: jspb.BinaryReader): Details;
    }

    export namespace Details {
        export type AsObject = {
            coreprocessingtime: string,
            version: string,
            epoch: string,
            effectivename: string,
            writesinprogress: number,
            readsinprogress: number,
            partitionscached: number,
            status: string,
            statereason: string,
            name: string,
            mode: string,
            position: string,
            progress: number,
            lastcheckpoint: string,
            eventsprocessedafterrestart: string,
            checkpointstatus: string,
            bufferedevents: string,
            writependingeventsbeforecheckpoint: number,
            writependingeventsaftercheckpoint: number,
        }
    }

}

export class StateReq extends jspb.Message {

    hasOptions(): boolean;
    clearOptions(): void;
    getOptions(): StateReq.Options | undefined;
    setOptions(value?: StateReq.Options): StateReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StateReq.AsObject;
    static toObject(includeInstance: boolean, msg: StateReq): StateReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StateReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StateReq;
    static deserializeBinaryFromReader(message: StateReq, reader: jspb.BinaryReader): StateReq;
}

export namespace StateReq {
    export type AsObject = {
        options?: StateReq.Options.AsObject,
    }


    export class Options extends jspb.Message {
        getName(): string;
        setName(value: string): Options;
        getPartition(): string;
        setPartition(value: string): Options;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Options.AsObject;
        static toObject(includeInstance: boolean, msg: Options): Options.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Options, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Options;
        static deserializeBinaryFromReader(message: Options, reader: jspb.BinaryReader): Options;
    }

    export namespace Options {
        export type AsObject = {
            name: string,
            partition: string,
        }
    }

}

export class StateResp extends jspb.Message {

    hasState(): boolean;
    clearState(): void;
    getState(): google_protobuf_struct_pb.Value | undefined;
    setState(value?: google_protobuf_struct_pb.Value): StateResp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StateResp.AsObject;
    static toObject(includeInstance: boolean, msg: StateResp): StateResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StateResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StateResp;
    static deserializeBinaryFromReader(message: StateResp, reader: jspb.BinaryReader): StateResp;
}

export namespace StateResp {
    export type AsObject = {
        state?: google_protobuf_struct_pb.Value.AsObject,
    }
}

export class ResultReq extends jspb.Message {

    hasOptions(): boolean;
    clearOptions(): void;
    getOptions(): ResultReq.Options | undefined;
    setOptions(value?: ResultReq.Options): ResultReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResultReq.AsObject;
    static toObject(includeInstance: boolean, msg: ResultReq): ResultReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResultReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResultReq;
    static deserializeBinaryFromReader(message: ResultReq, reader: jspb.BinaryReader): ResultReq;
}

export namespace ResultReq {
    export type AsObject = {
        options?: ResultReq.Options.AsObject,
    }


    export class Options extends jspb.Message {
        getName(): string;
        setName(value: string): Options;
        getPartition(): string;
        setPartition(value: string): Options;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Options.AsObject;
        static toObject(includeInstance: boolean, msg: Options): Options.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Options, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Options;
        static deserializeBinaryFromReader(message: Options, reader: jspb.BinaryReader): Options;
    }

    export namespace Options {
        export type AsObject = {
            name: string,
            partition: string,
        }
    }

}

export class ResultResp extends jspb.Message {

    hasResult(): boolean;
    clearResult(): void;
    getResult(): google_protobuf_struct_pb.Value | undefined;
    setResult(value?: google_protobuf_struct_pb.Value): ResultResp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResultResp.AsObject;
    static toObject(includeInstance: boolean, msg: ResultResp): ResultResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResultResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResultResp;
    static deserializeBinaryFromReader(message: ResultResp, reader: jspb.BinaryReader): ResultResp;
}

export namespace ResultResp {
    export type AsObject = {
        result?: google_protobuf_struct_pb.Value.AsObject,
    }
}

export class GetConfigReq extends jspb.Message {

    hasOptions(): boolean;
    clearOptions(): void;
    getOptions(): GetConfigReq.Options | undefined;
    setOptions(value?: GetConfigReq.Options): GetConfigReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetConfigReq.AsObject;
    static toObject(includeInstance: boolean, msg: GetConfigReq): GetConfigReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetConfigReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetConfigReq;
    static deserializeBinaryFromReader(message: GetConfigReq, reader: jspb.BinaryReader): GetConfigReq;
}

export namespace GetConfigReq {
    export type AsObject = {
        options?: GetConfigReq.Options.AsObject,
    }


    export class Options extends jspb.Message {
        getName(): string;
        setName(value: string): Options;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Options.AsObject;
        static toObject(includeInstance: boolean, msg: Options): Options.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Options, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Options;
        static deserializeBinaryFromReader(message: Options, reader: jspb.BinaryReader): Options;
    }

    export namespace Options {
        export type AsObject = {
            name: string,
        }
    }

}

export class GetConfigResp extends jspb.Message {

    hasDetails(): boolean;
    clearDetails(): void;
    getDetails(): GetConfigResp.Details | undefined;
    setDetails(value?: GetConfigResp.Details): GetConfigResp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetConfigResp.AsObject;
    static toObject(includeInstance: boolean, msg: GetConfigResp): GetConfigResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetConfigResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetConfigResp;
    static deserializeBinaryFromReader(message: GetConfigResp, reader: jspb.BinaryReader): GetConfigResp;
}

export namespace GetConfigResp {
    export type AsObject = {
        details?: GetConfigResp.Details.AsObject,
    }


    export class Details extends jspb.Message {
        getEmitEnabled(): boolean;
        setEmitEnabled(value: boolean): Details;
        getTrackEmittedStreams(): boolean;
        setTrackEmittedStreams(value: boolean): Details;
        getCheckpointAfterMs(): number;
        setCheckpointAfterMs(value: number): Details;
        getCheckpointHandledThreshold(): number;
        setCheckpointHandledThreshold(value: number): Details;
        getCheckpointUnhandledBytesThreshold(): number;
        setCheckpointUnhandledBytesThreshold(value: number): Details;
        getPendingEventsThreshold(): number;
        setPendingEventsThreshold(value: number): Details;
        getMaxWriteBatchLength(): number;
        setMaxWriteBatchLength(value: number): Details;
        getMaxAllowedWritesInFlight(): number;
        setMaxAllowedWritesInFlight(value: number): Details;

        hasProjectionExecutionTimeout(): boolean;
        clearProjectionExecutionTimeout(): void;
        getProjectionExecutionTimeout(): number | undefined;
        setProjectionExecutionTimeout(value: number): Details;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Details.AsObject;
        static toObject(includeInstance: boolean, msg: Details): Details.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Details, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Details;
        static deserializeBinaryFromReader(message: Details, reader: jspb.BinaryReader): Details;
    }

    export namespace Details {
        export type AsObject = {
            emitEnabled: boolean,
            trackEmittedStreams: boolean,
            checkpointAfterMs: number,
            checkpointHandledThreshold: number,
            checkpointUnhandledBytesThreshold: number,
            pendingEventsThreshold: number,
            maxWriteBatchLength: number,
            maxAllowedWritesInFlight: number,
            projectionExecutionTimeout?: number,
        }
    }

}

export class UpdateConfigReq extends jspb.Message {

    hasOptions(): boolean;
    clearOptions(): void;
    getOptions(): UpdateConfigReq.Options | undefined;
    setOptions(value?: UpdateConfigReq.Options): UpdateConfigReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateConfigReq.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateConfigReq): UpdateConfigReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateConfigReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateConfigReq;
    static deserializeBinaryFromReader(message: UpdateConfigReq, reader: jspb.BinaryReader): UpdateConfigReq;
}

export namespace UpdateConfigReq {
    export type AsObject = {
        options?: UpdateConfigReq.Options.AsObject,
    }


    export class Options extends jspb.Message {
        getName(): string;
        setName(value: string): Options;
        getEmitEnabled(): boolean;
        setEmitEnabled(value: boolean): Options;
        getTrackEmittedStreams(): boolean;
        setTrackEmittedStreams(value: boolean): Options;
        getCheckpointAfterMs(): number;
        setCheckpointAfterMs(value: number): Options;
        getCheckpointHandledThreshold(): number;
        setCheckpointHandledThreshold(value: number): Options;
        getCheckpointUnhandledBytesThreshold(): number;
        setCheckpointUnhandledBytesThreshold(value: number): Options;
        getPendingEventsThreshold(): number;
        setPendingEventsThreshold(value: number): Options;
        getMaxWriteBatchLength(): number;
        setMaxWriteBatchLength(value: number): Options;
        getMaxAllowedWritesInFlight(): number;
        setMaxAllowedWritesInFlight(value: number): Options;

        hasProjectionExecutionTimeout(): boolean;
        clearProjectionExecutionTimeout(): void;
        getProjectionExecutionTimeout(): number | undefined;
        setProjectionExecutionTimeout(value: number): Options;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Options.AsObject;
        static toObject(includeInstance: boolean, msg: Options): Options.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Options, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Options;
        static deserializeBinaryFromReader(message: Options, reader: jspb.BinaryReader): Options;
    }

    export namespace Options {
        export type AsObject = {
            name: string,
            emitEnabled: boolean,
            trackEmittedStreams: boolean,
            checkpointAfterMs: number,
            checkpointHandledThreshold: number,
            checkpointUnhandledBytesThreshold: number,
            pendingEventsThreshold: number,
            maxWriteBatchLength: number,
            maxAllowedWritesInFlight: number,
            projectionExecutionTimeout?: number,
        }
    }

}

export class UpdateConfigResp extends jspb.Message {

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateConfigResp.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateConfigResp): UpdateConfigResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateConfigResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateConfigResp;
    static deserializeBinaryFromReader(message: UpdateConfigResp, reader: jspb.BinaryReader): UpdateConfigResp;
}

export namespace UpdateConfigResp {
    export type AsObject = {
    }
}

export class ResetReq extends jspb.Message {

    hasOptions(): boolean;
    clearOptions(): void;
    getOptions(): ResetReq.Options | undefined;
    setOptions(value?: ResetReq.Options): ResetReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResetReq.AsObject;
    static toObject(includeInstance: boolean, msg: ResetReq): ResetReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResetReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResetReq;
    static deserializeBinaryFromReader(message: ResetReq, reader: jspb.BinaryReader): ResetReq;
}

export namespace ResetReq {
    export type AsObject = {
        options?: ResetReq.Options.AsObject,
    }


    export class Options extends jspb.Message {
        getName(): string;
        setName(value: string): Options;
        getWriteCheckpoint(): boolean;
        setWriteCheckpoint(value: boolean): Options;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Options.AsObject;
        static toObject(includeInstance: boolean, msg: Options): Options.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Options, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Options;
        static deserializeBinaryFromReader(message: Options, reader: jspb.BinaryReader): Options;
    }

    export namespace Options {
        export type AsObject = {
            name: string,
            writeCheckpoint: boolean,
        }
    }

}

export class ResetResp extends jspb.Message {

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResetResp.AsObject;
    static toObject(includeInstance: boolean, msg: ResetResp): ResetResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResetResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResetResp;
    static deserializeBinaryFromReader(message: ResetResp, reader: jspb.BinaryReader): ResetResp;
}

export namespace ResetResp {
    export type AsObject = {
    }
}

export class AbortReq extends jspb.Message {

    hasOptions(): boolean;
    clearOptions(): void;
    getOptions(): AbortReq.Options | undefined;
    setOptions(value?: AbortReq.Options): AbortReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AbortReq.AsObject;
    static toObject(includeInstance: boolean, msg: AbortReq): AbortReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AbortReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AbortReq;
    static deserializeBinaryFromReader(message: AbortReq, reader: jspb.BinaryReader): AbortReq;
}

export namespace AbortReq {
    export type AsObject = {
        options?: AbortReq.Options.AsObject,
    }


    export class Options extends jspb.Message {
        getName(): string;
        setName(value: string): Options;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Options.AsObject;
        static toObject(includeInstance: boolean, msg: Options): Options.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Options, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Options;
        static deserializeBinaryFromReader(message: Options, reader: jspb.BinaryReader): Options;
    }

    export namespace Options {
        export type AsObject = {
            name: string,
        }
    }

}

export class AbortResp extends jspb.Message {

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AbortResp.AsObject;
    static toObject(includeInstance: boolean, msg: AbortResp): AbortResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AbortResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AbortResp;
    static deserializeBinaryFromReader(message: AbortResp, reader: jspb.BinaryReader): AbortResp;
}

export namespace AbortResp {
    export type AsObject = {
    }
}

export class EnableReq extends jspb.Message {

    hasOptions(): boolean;
    clearOptions(): void;
    getOptions(): EnableReq.Options | undefined;
    setOptions(value?: EnableReq.Options): EnableReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EnableReq.AsObject;
    static toObject(includeInstance: boolean, msg: EnableReq): EnableReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EnableReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EnableReq;
    static deserializeBinaryFromReader(message: EnableReq, reader: jspb.BinaryReader): EnableReq;
}

export namespace EnableReq {
    export type AsObject = {
        options?: EnableReq.Options.AsObject,
    }


    export class Options extends jspb.Message {
        getName(): string;
        setName(value: string): Options;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Options.AsObject;
        static toObject(includeInstance: boolean, msg: Options): Options.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Options, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Options;
        static deserializeBinaryFromReader(message: Options, reader: jspb.BinaryReader): Options;
    }

    export namespace Options {
        export type AsObject = {
            name: string,
        }
    }

}

export class EnableResp extends jspb.Message {

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EnableResp.AsObject;
    static toObject(includeInstance: boolean, msg: EnableResp): EnableResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EnableResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EnableResp;
    static deserializeBinaryFromReader(message: EnableResp, reader: jspb.BinaryReader): EnableResp;
}

export namespace EnableResp {
    export type AsObject = {
    }
}

export class DisableReq extends jspb.Message {

    hasOptions(): boolean;
    clearOptions(): void;
    getOptions(): DisableReq.Options | undefined;
    setOptions(value?: DisableReq.Options): DisableReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DisableReq.AsObject;
    static toObject(includeInstance: boolean, msg: DisableReq): DisableReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DisableReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DisableReq;
    static deserializeBinaryFromReader(message: DisableReq, reader: jspb.BinaryReader): DisableReq;
}

export namespace DisableReq {
    export type AsObject = {
        options?: DisableReq.Options.AsObject,
    }


    export class Options extends jspb.Message {
        getName(): string;
        setName(value: string): Options;
        getWriteCheckpoint(): boolean;
        setWriteCheckpoint(value: boolean): Options;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Options.AsObject;
        static toObject(includeInstance: boolean, msg: Options): Options.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Options, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Options;
        static deserializeBinaryFromReader(message: Options, reader: jspb.BinaryReader): Options;
    }

    export namespace Options {
        export type AsObject = {
            name: string,
            writeCheckpoint: boolean,
        }
    }

}

export class DisableResp extends jspb.Message {

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DisableResp.AsObject;
    static toObject(includeInstance: boolean, msg: DisableResp): DisableResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DisableResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DisableResp;
    static deserializeBinaryFromReader(message: DisableResp, reader: jspb.BinaryReader): DisableResp;
}

export namespace DisableResp {
    export type AsObject = {
    }
}

export class ReadEventsReq extends jspb.Message {

    hasOptions(): boolean;
    clearOptions(): void;
    getOptions(): ReadEventsReq.Options | undefined;
    setOptions(value?: ReadEventsReq.Options): ReadEventsReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadEventsReq.AsObject;
    static toObject(includeInstance: boolean, msg: ReadEventsReq): ReadEventsReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadEventsReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadEventsReq;
    static deserializeBinaryFromReader(message: ReadEventsReq, reader: jspb.BinaryReader): ReadEventsReq;
}

export namespace ReadEventsReq {
    export type AsObject = {
        options?: ReadEventsReq.Options.AsObject,
    }


    export class Options extends jspb.Message {
        getQuerySourcesJson(): string;
        setQuerySourcesJson(value: string): Options;
        getPositionJson(): string;
        setPositionJson(value: string): Options;
        getMaxEvents(): number;
        setMaxEvents(value: number): Options;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Options.AsObject;
        static toObject(includeInstance: boolean, msg: Options): Options.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Options, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Options;
        static deserializeBinaryFromReader(message: Options, reader: jspb.BinaryReader): Options;
    }

    export namespace Options {
        export type AsObject = {
            querySourcesJson: string,
            positionJson: string,
            maxEvents: number,
        }
    }

}

export class ReadEventsResp extends jspb.Message {

    hasDetails(): boolean;
    clearDetails(): void;
    getDetails(): ReadEventsResp.Details | undefined;
    setDetails(value?: ReadEventsResp.Details): ReadEventsResp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadEventsResp.AsObject;
    static toObject(includeInstance: boolean, msg: ReadEventsResp): ReadEventsResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadEventsResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadEventsResp;
    static deserializeBinaryFromReader(message: ReadEventsResp, reader: jspb.BinaryReader): ReadEventsResp;
}

export namespace ReadEventsResp {
    export type AsObject = {
        details?: ReadEventsResp.Details.AsObject,
    }


    export class Details extends jspb.Message {
        getCorrelationId(): string;
        setCorrelationId(value: string): Details;
        getReaderPositionJson(): string;
        setReaderPositionJson(value: string): Details;
        clearEventsList(): void;
        getEventsList(): Array<ReadEventsResp.Details.Event>;
        setEventsList(value: Array<ReadEventsResp.Details.Event>): Details;
        addEvents(value?: ReadEventsResp.Details.Event, index?: number): ReadEventsResp.Details.Event;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Details.AsObject;
        static toObject(includeInstance: boolean, msg: Details): Details.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Details, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Details;
        static deserializeBinaryFromReader(message: Details, reader: jspb.BinaryReader): Details;
    }

    export namespace Details {
        export type AsObject = {
            correlationId: string,
            readerPositionJson: string,
            eventsList: Array<ReadEventsResp.Details.Event.AsObject>,
        }


        export class Event extends jspb.Message {
            getEventStreamId(): string;
            setEventStreamId(value: string): Event;
            getEventNumber(): string;
            setEventNumber(value: string): Event;
            getEventType(): string;
            setEventType(value: string): Event;

            hasData(): boolean;
            clearData(): void;
            getData(): google_protobuf_struct_pb.Value | undefined;
            setData(value?: google_protobuf_struct_pb.Value): Event;

            hasMetadata(): boolean;
            clearMetadata(): void;
            getMetadata(): google_protobuf_struct_pb.Value | undefined;
            setMetadata(value?: google_protobuf_struct_pb.Value): Event;

            hasLinkMetadata(): boolean;
            clearLinkMetadata(): void;
            getLinkMetadata(): google_protobuf_struct_pb.Value | undefined;
            setLinkMetadata(value?: google_protobuf_struct_pb.Value): Event;
            getIsJson(): boolean;
            setIsJson(value: boolean): Event;
            getReaderPositionJson(): string;
            setReaderPositionJson(value: string): Event;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Event.AsObject;
            static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Event;
            static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
        }

        export namespace Event {
            export type AsObject = {
                eventStreamId: string,
                eventNumber: string,
                eventType: string,
                data?: google_protobuf_struct_pb.Value.AsObject,
                metadata?: google_protobuf_struct_pb.Value.AsObject,
                linkMetadata?: google_protobuf_struct_pb.Value.AsObject,
                isJson: boolean,
                readerPositionJson: string,
            }
        }

    }

}
