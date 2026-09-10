// source: event_store/protocols/v1/projectionmanagement.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var event_store_protocols_v1_shared_pb = require('../../../event_store/protocols/v1/shared_pb.js');
goog.object.extend(proto, event_store_protocols_v1_shared_pb);
goog.exportSymbol('proto.event_store.client.projections.AbortReq', null, global);
goog.exportSymbol('proto.event_store.client.projections.AbortReq.Options', null, global);
goog.exportSymbol('proto.event_store.client.projections.AbortResp', null, global);
goog.exportSymbol('proto.event_store.client.projections.CreateReq', null, global);
goog.exportSymbol('proto.event_store.client.projections.CreateReq.Options', null, global);
goog.exportSymbol('proto.event_store.client.projections.CreateReq.Options.Continuous', null, global);
goog.exportSymbol('proto.event_store.client.projections.CreateReq.Options.EnabledOptionCase', null, global);
goog.exportSymbol('proto.event_store.client.projections.CreateReq.Options.ModeCase', null, global);
goog.exportSymbol('proto.event_store.client.projections.CreateReq.Options.Transient', null, global);
goog.exportSymbol('proto.event_store.client.projections.CreateResp', null, global);
goog.exportSymbol('proto.event_store.client.projections.DeleteReq', null, global);
goog.exportSymbol('proto.event_store.client.projections.DeleteReq.Options', null, global);
goog.exportSymbol('proto.event_store.client.projections.DeleteResp', null, global);
goog.exportSymbol('proto.event_store.client.projections.DisableReq', null, global);
goog.exportSymbol('proto.event_store.client.projections.DisableReq.Options', null, global);
goog.exportSymbol('proto.event_store.client.projections.DisableResp', null, global);
goog.exportSymbol('proto.event_store.client.projections.EnableReq', null, global);
goog.exportSymbol('proto.event_store.client.projections.EnableReq.Options', null, global);
goog.exportSymbol('proto.event_store.client.projections.EnableResp', null, global);
goog.exportSymbol('proto.event_store.client.projections.GetConfigReq', null, global);
goog.exportSymbol('proto.event_store.client.projections.GetConfigReq.Options', null, global);
goog.exportSymbol('proto.event_store.client.projections.GetConfigResp', null, global);
goog.exportSymbol('proto.event_store.client.projections.GetConfigResp.Details', null, global);
goog.exportSymbol('proto.event_store.client.projections.GetQueryReq', null, global);
goog.exportSymbol('proto.event_store.client.projections.GetQueryReq.Options', null, global);
goog.exportSymbol('proto.event_store.client.projections.GetQueryResp', null, global);
goog.exportSymbol('proto.event_store.client.projections.GetQueryResp.Details', null, global);
goog.exportSymbol('proto.event_store.client.projections.ReadEventsReq', null, global);
goog.exportSymbol('proto.event_store.client.projections.ReadEventsReq.Options', null, global);
goog.exportSymbol('proto.event_store.client.projections.ReadEventsResp', null, global);
goog.exportSymbol('proto.event_store.client.projections.ReadEventsResp.Details', null, global);
goog.exportSymbol('proto.event_store.client.projections.ReadEventsResp.Details.Event', null, global);
goog.exportSymbol('proto.event_store.client.projections.ResetReq', null, global);
goog.exportSymbol('proto.event_store.client.projections.ResetReq.Options', null, global);
goog.exportSymbol('proto.event_store.client.projections.ResetResp', null, global);
goog.exportSymbol('proto.event_store.client.projections.ResultReq', null, global);
goog.exportSymbol('proto.event_store.client.projections.ResultReq.Options', null, global);
goog.exportSymbol('proto.event_store.client.projections.ResultResp', null, global);
goog.exportSymbol('proto.event_store.client.projections.StateReq', null, global);
goog.exportSymbol('proto.event_store.client.projections.StateReq.Options', null, global);
goog.exportSymbol('proto.event_store.client.projections.StateResp', null, global);
goog.exportSymbol('proto.event_store.client.projections.StatisticsReq', null, global);
goog.exportSymbol('proto.event_store.client.projections.StatisticsReq.Options', null, global);
goog.exportSymbol('proto.event_store.client.projections.StatisticsReq.Options.ModeCase', null, global);
goog.exportSymbol('proto.event_store.client.projections.StatisticsResp', null, global);
goog.exportSymbol('proto.event_store.client.projections.StatisticsResp.Details', null, global);
goog.exportSymbol('proto.event_store.client.projections.UpdateConfigReq', null, global);
goog.exportSymbol('proto.event_store.client.projections.UpdateConfigReq.Options', null, global);
goog.exportSymbol('proto.event_store.client.projections.UpdateConfigResp', null, global);
goog.exportSymbol('proto.event_store.client.projections.UpdateReq', null, global);
goog.exportSymbol('proto.event_store.client.projections.UpdateReq.Options', null, global);
goog.exportSymbol('proto.event_store.client.projections.UpdateReq.Options.EmitOptionCase', null, global);
goog.exportSymbol('proto.event_store.client.projections.UpdateResp', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.CreateReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.CreateReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.CreateReq.displayName = 'proto.event_store.client.projections.CreateReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.CreateReq.Options = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.event_store.client.projections.CreateReq.Options.oneofGroups_);
};
goog.inherits(proto.event_store.client.projections.CreateReq.Options, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.CreateReq.Options.displayName = 'proto.event_store.client.projections.CreateReq.Options';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.CreateReq.Options.Transient = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.CreateReq.Options.Transient, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.CreateReq.Options.Transient.displayName = 'proto.event_store.client.projections.CreateReq.Options.Transient';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.CreateReq.Options.Continuous = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.CreateReq.Options.Continuous, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.CreateReq.Options.Continuous.displayName = 'proto.event_store.client.projections.CreateReq.Options.Continuous';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.CreateResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.CreateResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.CreateResp.displayName = 'proto.event_store.client.projections.CreateResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.UpdateReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.UpdateReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.UpdateReq.displayName = 'proto.event_store.client.projections.UpdateReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.UpdateReq.Options = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.event_store.client.projections.UpdateReq.Options.oneofGroups_);
};
goog.inherits(proto.event_store.client.projections.UpdateReq.Options, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.UpdateReq.Options.displayName = 'proto.event_store.client.projections.UpdateReq.Options';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.UpdateResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.UpdateResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.UpdateResp.displayName = 'proto.event_store.client.projections.UpdateResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.GetQueryReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.GetQueryReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.GetQueryReq.displayName = 'proto.event_store.client.projections.GetQueryReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.GetQueryReq.Options = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.GetQueryReq.Options, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.GetQueryReq.Options.displayName = 'proto.event_store.client.projections.GetQueryReq.Options';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.GetQueryResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.GetQueryResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.GetQueryResp.displayName = 'proto.event_store.client.projections.GetQueryResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.GetQueryResp.Details = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.GetQueryResp.Details, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.GetQueryResp.Details.displayName = 'proto.event_store.client.projections.GetQueryResp.Details';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.DeleteReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.DeleteReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.DeleteReq.displayName = 'proto.event_store.client.projections.DeleteReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.DeleteReq.Options = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.DeleteReq.Options, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.DeleteReq.Options.displayName = 'proto.event_store.client.projections.DeleteReq.Options';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.DeleteResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.DeleteResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.DeleteResp.displayName = 'proto.event_store.client.projections.DeleteResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.StatisticsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.StatisticsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.StatisticsReq.displayName = 'proto.event_store.client.projections.StatisticsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.StatisticsReq.Options = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.event_store.client.projections.StatisticsReq.Options.oneofGroups_);
};
goog.inherits(proto.event_store.client.projections.StatisticsReq.Options, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.StatisticsReq.Options.displayName = 'proto.event_store.client.projections.StatisticsReq.Options';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.StatisticsResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.StatisticsResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.StatisticsResp.displayName = 'proto.event_store.client.projections.StatisticsResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.StatisticsResp.Details = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.StatisticsResp.Details, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.StatisticsResp.Details.displayName = 'proto.event_store.client.projections.StatisticsResp.Details';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.StateReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.StateReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.StateReq.displayName = 'proto.event_store.client.projections.StateReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.StateReq.Options = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.StateReq.Options, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.StateReq.Options.displayName = 'proto.event_store.client.projections.StateReq.Options';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.StateResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.StateResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.StateResp.displayName = 'proto.event_store.client.projections.StateResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.ResultReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.ResultReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.ResultReq.displayName = 'proto.event_store.client.projections.ResultReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.ResultReq.Options = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.ResultReq.Options, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.ResultReq.Options.displayName = 'proto.event_store.client.projections.ResultReq.Options';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.ResultResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.ResultResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.ResultResp.displayName = 'proto.event_store.client.projections.ResultResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.GetConfigReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.GetConfigReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.GetConfigReq.displayName = 'proto.event_store.client.projections.GetConfigReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.GetConfigReq.Options = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.GetConfigReq.Options, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.GetConfigReq.Options.displayName = 'proto.event_store.client.projections.GetConfigReq.Options';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.GetConfigResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.GetConfigResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.GetConfigResp.displayName = 'proto.event_store.client.projections.GetConfigResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.GetConfigResp.Details = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.GetConfigResp.Details, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.GetConfigResp.Details.displayName = 'proto.event_store.client.projections.GetConfigResp.Details';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.UpdateConfigReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.UpdateConfigReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.UpdateConfigReq.displayName = 'proto.event_store.client.projections.UpdateConfigReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.UpdateConfigReq.Options = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.UpdateConfigReq.Options, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.UpdateConfigReq.Options.displayName = 'proto.event_store.client.projections.UpdateConfigReq.Options';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.UpdateConfigResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.UpdateConfigResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.UpdateConfigResp.displayName = 'proto.event_store.client.projections.UpdateConfigResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.ResetReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.ResetReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.ResetReq.displayName = 'proto.event_store.client.projections.ResetReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.ResetReq.Options = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.ResetReq.Options, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.ResetReq.Options.displayName = 'proto.event_store.client.projections.ResetReq.Options';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.ResetResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.ResetResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.ResetResp.displayName = 'proto.event_store.client.projections.ResetResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.AbortReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.AbortReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.AbortReq.displayName = 'proto.event_store.client.projections.AbortReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.AbortReq.Options = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.AbortReq.Options, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.AbortReq.Options.displayName = 'proto.event_store.client.projections.AbortReq.Options';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.AbortResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.AbortResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.AbortResp.displayName = 'proto.event_store.client.projections.AbortResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.EnableReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.EnableReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.EnableReq.displayName = 'proto.event_store.client.projections.EnableReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.EnableReq.Options = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.EnableReq.Options, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.EnableReq.Options.displayName = 'proto.event_store.client.projections.EnableReq.Options';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.EnableResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.EnableResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.EnableResp.displayName = 'proto.event_store.client.projections.EnableResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.DisableReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.DisableReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.DisableReq.displayName = 'proto.event_store.client.projections.DisableReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.DisableReq.Options = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.DisableReq.Options, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.DisableReq.Options.displayName = 'proto.event_store.client.projections.DisableReq.Options';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.DisableResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.DisableResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.DisableResp.displayName = 'proto.event_store.client.projections.DisableResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.ReadEventsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.ReadEventsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.ReadEventsReq.displayName = 'proto.event_store.client.projections.ReadEventsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.ReadEventsReq.Options = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.ReadEventsReq.Options, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.ReadEventsReq.Options.displayName = 'proto.event_store.client.projections.ReadEventsReq.Options';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.ReadEventsResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.ReadEventsResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.ReadEventsResp.displayName = 'proto.event_store.client.projections.ReadEventsResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.ReadEventsResp.Details = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.event_store.client.projections.ReadEventsResp.Details.repeatedFields_, null);
};
goog.inherits(proto.event_store.client.projections.ReadEventsResp.Details, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.ReadEventsResp.Details.displayName = 'proto.event_store.client.projections.ReadEventsResp.Details';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.projections.ReadEventsResp.Details.Event = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.projections.ReadEventsResp.Details.Event, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.projections.ReadEventsResp.Details.Event.displayName = 'proto.event_store.client.projections.ReadEventsResp.Details.Event';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.CreateReq.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.CreateReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.CreateReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.CreateReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    options: (f = msg.getOptions()) && proto.event_store.client.projections.CreateReq.Options.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.CreateReq}
 */
proto.event_store.client.projections.CreateReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.CreateReq;
  return proto.event_store.client.projections.CreateReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.CreateReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.CreateReq}
 */
proto.event_store.client.projections.CreateReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.event_store.client.projections.CreateReq.Options;
      reader.readMessage(value,proto.event_store.client.projections.CreateReq.Options.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.CreateReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.CreateReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.CreateReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.CreateReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.event_store.client.projections.CreateReq.Options.serializeBinaryToWriter
    );
  }
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.event_store.client.projections.CreateReq.Options.oneofGroups_ = [[1,2,3],[6,7]];

/**
 * @enum {number}
 */
proto.event_store.client.projections.CreateReq.Options.ModeCase = {
  MODE_NOT_SET: 0,
  ONE_TIME: 1,
  TRANSIENT: 2,
  CONTINUOUS: 3
};

/**
 * @return {proto.event_store.client.projections.CreateReq.Options.ModeCase}
 */
proto.event_store.client.projections.CreateReq.Options.prototype.getModeCase = function() {
  return /** @type {proto.event_store.client.projections.CreateReq.Options.ModeCase} */(jspb.Message.computeOneofCase(this, proto.event_store.client.projections.CreateReq.Options.oneofGroups_[0]));
};

/**
 * @enum {number}
 */
proto.event_store.client.projections.CreateReq.Options.EnabledOptionCase = {
  ENABLED_OPTION_NOT_SET: 0,
  ENABLED: 6,
  NO_ENABLED_OPTION: 7
};

/**
 * @return {proto.event_store.client.projections.CreateReq.Options.EnabledOptionCase}
 */
proto.event_store.client.projections.CreateReq.Options.prototype.getEnabledOptionCase = function() {
  return /** @type {proto.event_store.client.projections.CreateReq.Options.EnabledOptionCase} */(jspb.Message.computeOneofCase(this, proto.event_store.client.projections.CreateReq.Options.oneofGroups_[1]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.CreateReq.Options.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.CreateReq.Options.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.CreateReq.Options} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.CreateReq.Options.toObject = function(includeInstance, msg) {
  var f, obj = {
    oneTime: (f = msg.getOneTime()) && event_store_protocols_v1_shared_pb.Empty.toObject(includeInstance, f),
    pb_transient: (f = msg.getTransient()) && proto.event_store.client.projections.CreateReq.Options.Transient.toObject(includeInstance, f),
    continuous: (f = msg.getContinuous()) && proto.event_store.client.projections.CreateReq.Options.Continuous.toObject(includeInstance, f),
    query: jspb.Message.getFieldWithDefault(msg, 4, ""),
    handlerType: jspb.Message.getFieldWithDefault(msg, 5, ""),
    enabled: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    noEnabledOption: (f = msg.getNoEnabledOption()) && event_store_protocols_v1_shared_pb.Empty.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 8, ""),
    checkpointsEnabled: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    emitEnabled: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    trackEmittedStreams: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    annotationsMap: (f = msg.getAnnotationsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.CreateReq.Options}
 */
proto.event_store.client.projections.CreateReq.Options.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.CreateReq.Options;
  return proto.event_store.client.projections.CreateReq.Options.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.CreateReq.Options} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.CreateReq.Options}
 */
proto.event_store.client.projections.CreateReq.Options.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new event_store_protocols_v1_shared_pb.Empty;
      reader.readMessage(value,event_store_protocols_v1_shared_pb.Empty.deserializeBinaryFromReader);
      msg.setOneTime(value);
      break;
    case 2:
      var value = new proto.event_store.client.projections.CreateReq.Options.Transient;
      reader.readMessage(value,proto.event_store.client.projections.CreateReq.Options.Transient.deserializeBinaryFromReader);
      msg.setTransient(value);
      break;
    case 3:
      var value = new proto.event_store.client.projections.CreateReq.Options.Continuous;
      reader.readMessage(value,proto.event_store.client.projections.CreateReq.Options.Continuous.deserializeBinaryFromReader);
      msg.setContinuous(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setHandlerType(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 7:
      var value = new event_store_protocols_v1_shared_pb.Empty;
      reader.readMessage(value,event_store_protocols_v1_shared_pb.Empty.deserializeBinaryFromReader);
      msg.setNoEnabledOption(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCheckpointsEnabled(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEmitEnabled(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTrackEmittedStreams(value);
      break;
    case 12:
      var value = msg.getAnnotationsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.CreateReq.Options.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.CreateReq.Options.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.CreateReq.Options} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.CreateReq.Options.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOneTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      event_store_protocols_v1_shared_pb.Empty.serializeBinaryToWriter
    );
  }
  f = message.getTransient();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.event_store.client.projections.CreateReq.Options.Transient.serializeBinaryToWriter
    );
  }
  f = message.getContinuous();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.event_store.client.projections.CreateReq.Options.Continuous.serializeBinaryToWriter
    );
  }
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getHandlerType();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getNoEnabledOption();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      event_store_protocols_v1_shared_pb.Empty.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getCheckpointsEnabled();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getEmitEnabled();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getTrackEmittedStreams();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getAnnotationsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(12, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.CreateReq.Options.Transient.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.CreateReq.Options.Transient.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.CreateReq.Options.Transient} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.CreateReq.Options.Transient.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.CreateReq.Options.Transient}
 */
proto.event_store.client.projections.CreateReq.Options.Transient.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.CreateReq.Options.Transient;
  return proto.event_store.client.projections.CreateReq.Options.Transient.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.CreateReq.Options.Transient} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.CreateReq.Options.Transient}
 */
proto.event_store.client.projections.CreateReq.Options.Transient.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.CreateReq.Options.Transient.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.CreateReq.Options.Transient.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.CreateReq.Options.Transient} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.CreateReq.Options.Transient.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.event_store.client.projections.CreateReq.Options.Transient.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.CreateReq.Options.Transient} returns this
 */
proto.event_store.client.projections.CreateReq.Options.Transient.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.CreateReq.Options.Continuous.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.CreateReq.Options.Continuous.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.CreateReq.Options.Continuous} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.CreateReq.Options.Continuous.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    emitEnabled: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    trackEmittedStreams: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.CreateReq.Options.Continuous}
 */
proto.event_store.client.projections.CreateReq.Options.Continuous.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.CreateReq.Options.Continuous;
  return proto.event_store.client.projections.CreateReq.Options.Continuous.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.CreateReq.Options.Continuous} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.CreateReq.Options.Continuous}
 */
proto.event_store.client.projections.CreateReq.Options.Continuous.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEmitEnabled(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTrackEmittedStreams(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.CreateReq.Options.Continuous.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.CreateReq.Options.Continuous.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.CreateReq.Options.Continuous} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.CreateReq.Options.Continuous.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmitEnabled();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getTrackEmittedStreams();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.event_store.client.projections.CreateReq.Options.Continuous.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.CreateReq.Options.Continuous} returns this
 */
proto.event_store.client.projections.CreateReq.Options.Continuous.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool emit_enabled = 2;
 * @return {boolean}
 */
proto.event_store.client.projections.CreateReq.Options.Continuous.prototype.getEmitEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.event_store.client.projections.CreateReq.Options.Continuous} returns this
 */
proto.event_store.client.projections.CreateReq.Options.Continuous.prototype.setEmitEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool track_emitted_streams = 3;
 * @return {boolean}
 */
proto.event_store.client.projections.CreateReq.Options.Continuous.prototype.getTrackEmittedStreams = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.event_store.client.projections.CreateReq.Options.Continuous} returns this
 */
proto.event_store.client.projections.CreateReq.Options.Continuous.prototype.setTrackEmittedStreams = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional event_store.client.Empty one_time = 1;
 * @return {?proto.event_store.client.Empty}
 */
proto.event_store.client.projections.CreateReq.Options.prototype.getOneTime = function() {
  return /** @type{?proto.event_store.client.Empty} */ (
    jspb.Message.getWrapperField(this, event_store_protocols_v1_shared_pb.Empty, 1));
};


/**
 * @param {?proto.event_store.client.Empty|undefined} value
 * @return {!proto.event_store.client.projections.CreateReq.Options} returns this
*/
proto.event_store.client.projections.CreateReq.Options.prototype.setOneTime = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.event_store.client.projections.CreateReq.Options.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.event_store.client.projections.CreateReq.Options} returns this
 */
proto.event_store.client.projections.CreateReq.Options.prototype.clearOneTime = function() {
  return this.setOneTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.projections.CreateReq.Options.prototype.hasOneTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Transient transient = 2;
 * @return {?proto.event_store.client.projections.CreateReq.Options.Transient}
 */
proto.event_store.client.projections.CreateReq.Options.prototype.getTransient = function() {
  return /** @type{?proto.event_store.client.projections.CreateReq.Options.Transient} */ (
    jspb.Message.getWrapperField(this, proto.event_store.client.projections.CreateReq.Options.Transient, 2));
};


/**
 * @param {?proto.event_store.client.projections.CreateReq.Options.Transient|undefined} value
 * @return {!proto.event_store.client.projections.CreateReq.Options} returns this
*/
proto.event_store.client.projections.CreateReq.Options.prototype.setTransient = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.event_store.client.projections.CreateReq.Options.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.event_store.client.projections.CreateReq.Options} returns this
 */
proto.event_store.client.projections.CreateReq.Options.prototype.clearTransient = function() {
  return this.setTransient(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.projections.CreateReq.Options.prototype.hasTransient = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Continuous continuous = 3;
 * @return {?proto.event_store.client.projections.CreateReq.Options.Continuous}
 */
proto.event_store.client.projections.CreateReq.Options.prototype.getContinuous = function() {
  return /** @type{?proto.event_store.client.projections.CreateReq.Options.Continuous} */ (
    jspb.Message.getWrapperField(this, proto.event_store.client.projections.CreateReq.Options.Continuous, 3));
};


/**
 * @param {?proto.event_store.client.projections.CreateReq.Options.Continuous|undefined} value
 * @return {!proto.event_store.client.projections.CreateReq.Options} returns this
*/
proto.event_store.client.projections.CreateReq.Options.prototype.setContinuous = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.event_store.client.projections.CreateReq.Options.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.event_store.client.projections.CreateReq.Options} returns this
 */
proto.event_store.client.projections.CreateReq.Options.prototype.clearContinuous = function() {
  return this.setContinuous(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.projections.CreateReq.Options.prototype.hasContinuous = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string query = 4;
 * @return {string}
 */
proto.event_store.client.projections.CreateReq.Options.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.CreateReq.Options} returns this
 */
proto.event_store.client.projections.CreateReq.Options.prototype.setQuery = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string handler_type = 5;
 * @return {string}
 */
proto.event_store.client.projections.CreateReq.Options.prototype.getHandlerType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.CreateReq.Options} returns this
 */
proto.event_store.client.projections.CreateReq.Options.prototype.setHandlerType = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool enabled = 6;
 * @return {boolean}
 */
proto.event_store.client.projections.CreateReq.Options.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.event_store.client.projections.CreateReq.Options} returns this
 */
proto.event_store.client.projections.CreateReq.Options.prototype.setEnabled = function(value) {
  return jspb.Message.setOneofField(this, 6, proto.event_store.client.projections.CreateReq.Options.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.event_store.client.projections.CreateReq.Options} returns this
 */
proto.event_store.client.projections.CreateReq.Options.prototype.clearEnabled = function() {
  return jspb.Message.setOneofField(this, 6, proto.event_store.client.projections.CreateReq.Options.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.projections.CreateReq.Options.prototype.hasEnabled = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional event_store.client.Empty no_enabled_option = 7;
 * @return {?proto.event_store.client.Empty}
 */
proto.event_store.client.projections.CreateReq.Options.prototype.getNoEnabledOption = function() {
  return /** @type{?proto.event_store.client.Empty} */ (
    jspb.Message.getWrapperField(this, event_store_protocols_v1_shared_pb.Empty, 7));
};


/**
 * @param {?proto.event_store.client.Empty|undefined} value
 * @return {!proto.event_store.client.projections.CreateReq.Options} returns this
*/
proto.event_store.client.projections.CreateReq.Options.prototype.setNoEnabledOption = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.event_store.client.projections.CreateReq.Options.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.event_store.client.projections.CreateReq.Options} returns this
 */
proto.event_store.client.projections.CreateReq.Options.prototype.clearNoEnabledOption = function() {
  return this.setNoEnabledOption(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.projections.CreateReq.Options.prototype.hasNoEnabledOption = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string name = 8;
 * @return {string}
 */
proto.event_store.client.projections.CreateReq.Options.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.CreateReq.Options} returns this
 */
proto.event_store.client.projections.CreateReq.Options.prototype.setName = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.event_store.client.projections.CreateReq.Options} returns this
 */
proto.event_store.client.projections.CreateReq.Options.prototype.clearName = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.projections.CreateReq.Options.prototype.hasName = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool checkpoints_enabled = 9;
 * @return {boolean}
 */
proto.event_store.client.projections.CreateReq.Options.prototype.getCheckpointsEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.event_store.client.projections.CreateReq.Options} returns this
 */
proto.event_store.client.projections.CreateReq.Options.prototype.setCheckpointsEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional bool emit_enabled = 10;
 * @return {boolean}
 */
proto.event_store.client.projections.CreateReq.Options.prototype.getEmitEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.event_store.client.projections.CreateReq.Options} returns this
 */
proto.event_store.client.projections.CreateReq.Options.prototype.setEmitEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional bool track_emitted_streams = 11;
 * @return {boolean}
 */
proto.event_store.client.projections.CreateReq.Options.prototype.getTrackEmittedStreams = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.event_store.client.projections.CreateReq.Options} returns this
 */
proto.event_store.client.projections.CreateReq.Options.prototype.setTrackEmittedStreams = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * map<string, string> annotations = 12;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.event_store.client.projections.CreateReq.Options.prototype.getAnnotationsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 12, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.event_store.client.projections.CreateReq.Options} returns this
 */
proto.event_store.client.projections.CreateReq.Options.prototype.clearAnnotationsMap = function() {
  this.getAnnotationsMap().clear();
  return this;};


/**
 * optional Options options = 1;
 * @return {?proto.event_store.client.projections.CreateReq.Options}
 */
proto.event_store.client.projections.CreateReq.prototype.getOptions = function() {
  return /** @type{?proto.event_store.client.projections.CreateReq.Options} */ (
    jspb.Message.getWrapperField(this, proto.event_store.client.projections.CreateReq.Options, 1));
};


/**
 * @param {?proto.event_store.client.projections.CreateReq.Options|undefined} value
 * @return {!proto.event_store.client.projections.CreateReq} returns this
*/
proto.event_store.client.projections.CreateReq.prototype.setOptions = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.event_store.client.projections.CreateReq} returns this
 */
proto.event_store.client.projections.CreateReq.prototype.clearOptions = function() {
  return this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.projections.CreateReq.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.CreateResp.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.CreateResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.CreateResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.CreateResp.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.CreateResp}
 */
proto.event_store.client.projections.CreateResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.CreateResp;
  return proto.event_store.client.projections.CreateResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.CreateResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.CreateResp}
 */
proto.event_store.client.projections.CreateResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.CreateResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.CreateResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.CreateResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.CreateResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.UpdateReq.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.UpdateReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.UpdateReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.UpdateReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    options: (f = msg.getOptions()) && proto.event_store.client.projections.UpdateReq.Options.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.UpdateReq}
 */
proto.event_store.client.projections.UpdateReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.UpdateReq;
  return proto.event_store.client.projections.UpdateReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.UpdateReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.UpdateReq}
 */
proto.event_store.client.projections.UpdateReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.event_store.client.projections.UpdateReq.Options;
      reader.readMessage(value,proto.event_store.client.projections.UpdateReq.Options.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.UpdateReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.UpdateReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.UpdateReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.UpdateReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.event_store.client.projections.UpdateReq.Options.serializeBinaryToWriter
    );
  }
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.event_store.client.projections.UpdateReq.Options.oneofGroups_ = [[3,4]];

/**
 * @enum {number}
 */
proto.event_store.client.projections.UpdateReq.Options.EmitOptionCase = {
  EMIT_OPTION_NOT_SET: 0,
  EMIT_ENABLED: 3,
  NO_EMIT_OPTIONS: 4
};

/**
 * @return {proto.event_store.client.projections.UpdateReq.Options.EmitOptionCase}
 */
proto.event_store.client.projections.UpdateReq.Options.prototype.getEmitOptionCase = function() {
  return /** @type {proto.event_store.client.projections.UpdateReq.Options.EmitOptionCase} */(jspb.Message.computeOneofCase(this, proto.event_store.client.projections.UpdateReq.Options.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.UpdateReq.Options.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.UpdateReq.Options.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.UpdateReq.Options} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.UpdateReq.Options.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    query: jspb.Message.getFieldWithDefault(msg, 2, ""),
    emitEnabled: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    noEmitOptions: (f = msg.getNoEmitOptions()) && event_store_protocols_v1_shared_pb.Empty.toObject(includeInstance, f),
    annotationsMap: (f = msg.getAnnotationsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.UpdateReq.Options}
 */
proto.event_store.client.projections.UpdateReq.Options.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.UpdateReq.Options;
  return proto.event_store.client.projections.UpdateReq.Options.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.UpdateReq.Options} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.UpdateReq.Options}
 */
proto.event_store.client.projections.UpdateReq.Options.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEmitEnabled(value);
      break;
    case 4:
      var value = new event_store_protocols_v1_shared_pb.Empty;
      reader.readMessage(value,event_store_protocols_v1_shared_pb.Empty.deserializeBinaryFromReader);
      msg.setNoEmitOptions(value);
      break;
    case 5:
      var value = msg.getAnnotationsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.UpdateReq.Options.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.UpdateReq.Options.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.UpdateReq.Options} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.UpdateReq.Options.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getNoEmitOptions();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      event_store_protocols_v1_shared_pb.Empty.serializeBinaryToWriter
    );
  }
  f = message.getAnnotationsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.event_store.client.projections.UpdateReq.Options.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.UpdateReq.Options} returns this
 */
proto.event_store.client.projections.UpdateReq.Options.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string query = 2;
 * @return {string}
 */
proto.event_store.client.projections.UpdateReq.Options.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.UpdateReq.Options} returns this
 */
proto.event_store.client.projections.UpdateReq.Options.prototype.setQuery = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool emit_enabled = 3;
 * @return {boolean}
 */
proto.event_store.client.projections.UpdateReq.Options.prototype.getEmitEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.event_store.client.projections.UpdateReq.Options} returns this
 */
proto.event_store.client.projections.UpdateReq.Options.prototype.setEmitEnabled = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.event_store.client.projections.UpdateReq.Options.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.event_store.client.projections.UpdateReq.Options} returns this
 */
proto.event_store.client.projections.UpdateReq.Options.prototype.clearEmitEnabled = function() {
  return jspb.Message.setOneofField(this, 3, proto.event_store.client.projections.UpdateReq.Options.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.projections.UpdateReq.Options.prototype.hasEmitEnabled = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional event_store.client.Empty no_emit_options = 4;
 * @return {?proto.event_store.client.Empty}
 */
proto.event_store.client.projections.UpdateReq.Options.prototype.getNoEmitOptions = function() {
  return /** @type{?proto.event_store.client.Empty} */ (
    jspb.Message.getWrapperField(this, event_store_protocols_v1_shared_pb.Empty, 4));
};


/**
 * @param {?proto.event_store.client.Empty|undefined} value
 * @return {!proto.event_store.client.projections.UpdateReq.Options} returns this
*/
proto.event_store.client.projections.UpdateReq.Options.prototype.setNoEmitOptions = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.event_store.client.projections.UpdateReq.Options.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.event_store.client.projections.UpdateReq.Options} returns this
 */
proto.event_store.client.projections.UpdateReq.Options.prototype.clearNoEmitOptions = function() {
  return this.setNoEmitOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.projections.UpdateReq.Options.prototype.hasNoEmitOptions = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * map<string, string> annotations = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.event_store.client.projections.UpdateReq.Options.prototype.getAnnotationsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.event_store.client.projections.UpdateReq.Options} returns this
 */
proto.event_store.client.projections.UpdateReq.Options.prototype.clearAnnotationsMap = function() {
  this.getAnnotationsMap().clear();
  return this;};


/**
 * optional Options options = 1;
 * @return {?proto.event_store.client.projections.UpdateReq.Options}
 */
proto.event_store.client.projections.UpdateReq.prototype.getOptions = function() {
  return /** @type{?proto.event_store.client.projections.UpdateReq.Options} */ (
    jspb.Message.getWrapperField(this, proto.event_store.client.projections.UpdateReq.Options, 1));
};


/**
 * @param {?proto.event_store.client.projections.UpdateReq.Options|undefined} value
 * @return {!proto.event_store.client.projections.UpdateReq} returns this
*/
proto.event_store.client.projections.UpdateReq.prototype.setOptions = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.event_store.client.projections.UpdateReq} returns this
 */
proto.event_store.client.projections.UpdateReq.prototype.clearOptions = function() {
  return this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.projections.UpdateReq.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.UpdateResp.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.UpdateResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.UpdateResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.UpdateResp.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.UpdateResp}
 */
proto.event_store.client.projections.UpdateResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.UpdateResp;
  return proto.event_store.client.projections.UpdateResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.UpdateResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.UpdateResp}
 */
proto.event_store.client.projections.UpdateResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.UpdateResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.UpdateResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.UpdateResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.UpdateResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.GetQueryReq.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.GetQueryReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.GetQueryReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.GetQueryReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    options: (f = msg.getOptions()) && proto.event_store.client.projections.GetQueryReq.Options.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.GetQueryReq}
 */
proto.event_store.client.projections.GetQueryReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.GetQueryReq;
  return proto.event_store.client.projections.GetQueryReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.GetQueryReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.GetQueryReq}
 */
proto.event_store.client.projections.GetQueryReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.event_store.client.projections.GetQueryReq.Options;
      reader.readMessage(value,proto.event_store.client.projections.GetQueryReq.Options.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.GetQueryReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.GetQueryReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.GetQueryReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.GetQueryReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.event_store.client.projections.GetQueryReq.Options.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.GetQueryReq.Options.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.GetQueryReq.Options.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.GetQueryReq.Options} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.GetQueryReq.Options.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.GetQueryReq.Options}
 */
proto.event_store.client.projections.GetQueryReq.Options.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.GetQueryReq.Options;
  return proto.event_store.client.projections.GetQueryReq.Options.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.GetQueryReq.Options} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.GetQueryReq.Options}
 */
proto.event_store.client.projections.GetQueryReq.Options.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.GetQueryReq.Options.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.GetQueryReq.Options.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.GetQueryReq.Options} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.GetQueryReq.Options.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.event_store.client.projections.GetQueryReq.Options.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.GetQueryReq.Options} returns this
 */
proto.event_store.client.projections.GetQueryReq.Options.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Options options = 1;
 * @return {?proto.event_store.client.projections.GetQueryReq.Options}
 */
proto.event_store.client.projections.GetQueryReq.prototype.getOptions = function() {
  return /** @type{?proto.event_store.client.projections.GetQueryReq.Options} */ (
    jspb.Message.getWrapperField(this, proto.event_store.client.projections.GetQueryReq.Options, 1));
};


/**
 * @param {?proto.event_store.client.projections.GetQueryReq.Options|undefined} value
 * @return {!proto.event_store.client.projections.GetQueryReq} returns this
*/
proto.event_store.client.projections.GetQueryReq.prototype.setOptions = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.event_store.client.projections.GetQueryReq} returns this
 */
proto.event_store.client.projections.GetQueryReq.prototype.clearOptions = function() {
  return this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.projections.GetQueryReq.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.GetQueryResp.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.GetQueryResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.GetQueryResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.GetQueryResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    details: (f = msg.getDetails()) && proto.event_store.client.projections.GetQueryResp.Details.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.GetQueryResp}
 */
proto.event_store.client.projections.GetQueryResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.GetQueryResp;
  return proto.event_store.client.projections.GetQueryResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.GetQueryResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.GetQueryResp}
 */
proto.event_store.client.projections.GetQueryResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.event_store.client.projections.GetQueryResp.Details;
      reader.readMessage(value,proto.event_store.client.projections.GetQueryResp.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.GetQueryResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.GetQueryResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.GetQueryResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.GetQueryResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.event_store.client.projections.GetQueryResp.Details.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.GetQueryResp.Details.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.GetQueryResp.Details.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.GetQueryResp.Details} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.GetQueryResp.Details.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    query: jspb.Message.getFieldWithDefault(msg, 2, ""),
    emitEnabled: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    projectionType: jspb.Message.getFieldWithDefault(msg, 4, ""),
    trackEmittedStreams: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    checkpointsEnabled: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    definitionJson: jspb.Message.getFieldWithDefault(msg, 7, ""),
    outputConfigJson: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.GetQueryResp.Details}
 */
proto.event_store.client.projections.GetQueryResp.Details.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.GetQueryResp.Details;
  return proto.event_store.client.projections.GetQueryResp.Details.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.GetQueryResp.Details} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.GetQueryResp.Details}
 */
proto.event_store.client.projections.GetQueryResp.Details.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEmitEnabled(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectionType(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTrackEmittedStreams(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCheckpointsEnabled(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefinitionJson(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setOutputConfigJson(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.GetQueryResp.Details.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.GetQueryResp.Details.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.GetQueryResp.Details} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.GetQueryResp.Details.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEmitEnabled();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getProjectionType();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getDefinitionJson();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getOutputConfigJson();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.event_store.client.projections.GetQueryResp.Details.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.GetQueryResp.Details} returns this
 */
proto.event_store.client.projections.GetQueryResp.Details.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string query = 2;
 * @return {string}
 */
proto.event_store.client.projections.GetQueryResp.Details.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.GetQueryResp.Details} returns this
 */
proto.event_store.client.projections.GetQueryResp.Details.prototype.setQuery = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool emit_enabled = 3;
 * @return {boolean}
 */
proto.event_store.client.projections.GetQueryResp.Details.prototype.getEmitEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.event_store.client.projections.GetQueryResp.Details} returns this
 */
proto.event_store.client.projections.GetQueryResp.Details.prototype.setEmitEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string projection_type = 4;
 * @return {string}
 */
proto.event_store.client.projections.GetQueryResp.Details.prototype.getProjectionType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.GetQueryResp.Details} returns this
 */
proto.event_store.client.projections.GetQueryResp.Details.prototype.setProjectionType = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool track_emitted_streams = 5;
 * @return {boolean}
 */
proto.event_store.client.projections.GetQueryResp.Details.prototype.getTrackEmittedStreams = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.event_store.client.projections.GetQueryResp.Details} returns this
 */
proto.event_store.client.projections.GetQueryResp.Details.prototype.setTrackEmittedStreams = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.event_store.client.projections.GetQueryResp.Details} returns this
 */
proto.event_store.client.projections.GetQueryResp.Details.prototype.clearTrackEmittedStreams = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.projections.GetQueryResp.Details.prototype.hasTrackEmittedStreams = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool checkpoints_enabled = 6;
 * @return {boolean}
 */
proto.event_store.client.projections.GetQueryResp.Details.prototype.getCheckpointsEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.event_store.client.projections.GetQueryResp.Details} returns this
 */
proto.event_store.client.projections.GetQueryResp.Details.prototype.setCheckpointsEnabled = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.event_store.client.projections.GetQueryResp.Details} returns this
 */
proto.event_store.client.projections.GetQueryResp.Details.prototype.clearCheckpointsEnabled = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.projections.GetQueryResp.Details.prototype.hasCheckpointsEnabled = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string definition_json = 7;
 * @return {string}
 */
proto.event_store.client.projections.GetQueryResp.Details.prototype.getDefinitionJson = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.GetQueryResp.Details} returns this
 */
proto.event_store.client.projections.GetQueryResp.Details.prototype.setDefinitionJson = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string output_config_json = 8;
 * @return {string}
 */
proto.event_store.client.projections.GetQueryResp.Details.prototype.getOutputConfigJson = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.GetQueryResp.Details} returns this
 */
proto.event_store.client.projections.GetQueryResp.Details.prototype.setOutputConfigJson = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional Details details = 1;
 * @return {?proto.event_store.client.projections.GetQueryResp.Details}
 */
proto.event_store.client.projections.GetQueryResp.prototype.getDetails = function() {
  return /** @type{?proto.event_store.client.projections.GetQueryResp.Details} */ (
    jspb.Message.getWrapperField(this, proto.event_store.client.projections.GetQueryResp.Details, 1));
};


/**
 * @param {?proto.event_store.client.projections.GetQueryResp.Details|undefined} value
 * @return {!proto.event_store.client.projections.GetQueryResp} returns this
*/
proto.event_store.client.projections.GetQueryResp.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.event_store.client.projections.GetQueryResp} returns this
 */
proto.event_store.client.projections.GetQueryResp.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.projections.GetQueryResp.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.DeleteReq.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.DeleteReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.DeleteReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.DeleteReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    options: (f = msg.getOptions()) && proto.event_store.client.projections.DeleteReq.Options.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.DeleteReq}
 */
proto.event_store.client.projections.DeleteReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.DeleteReq;
  return proto.event_store.client.projections.DeleteReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.DeleteReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.DeleteReq}
 */
proto.event_store.client.projections.DeleteReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.event_store.client.projections.DeleteReq.Options;
      reader.readMessage(value,proto.event_store.client.projections.DeleteReq.Options.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.DeleteReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.DeleteReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.DeleteReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.DeleteReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.event_store.client.projections.DeleteReq.Options.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.DeleteReq.Options.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.DeleteReq.Options.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.DeleteReq.Options} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.DeleteReq.Options.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    deleteEmittedStreams: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    deleteStateStream: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    deleteCheckpointStream: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.DeleteReq.Options}
 */
proto.event_store.client.projections.DeleteReq.Options.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.DeleteReq.Options;
  return proto.event_store.client.projections.DeleteReq.Options.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.DeleteReq.Options} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.DeleteReq.Options}
 */
proto.event_store.client.projections.DeleteReq.Options.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeleteEmittedStreams(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeleteStateStream(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeleteCheckpointStream(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.DeleteReq.Options.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.DeleteReq.Options.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.DeleteReq.Options} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.DeleteReq.Options.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDeleteEmittedStreams();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getDeleteStateStream();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getDeleteCheckpointStream();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.event_store.client.projections.DeleteReq.Options.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.DeleteReq.Options} returns this
 */
proto.event_store.client.projections.DeleteReq.Options.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool delete_emitted_streams = 2;
 * @return {boolean}
 */
proto.event_store.client.projections.DeleteReq.Options.prototype.getDeleteEmittedStreams = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.event_store.client.projections.DeleteReq.Options} returns this
 */
proto.event_store.client.projections.DeleteReq.Options.prototype.setDeleteEmittedStreams = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool delete_state_stream = 3;
 * @return {boolean}
 */
proto.event_store.client.projections.DeleteReq.Options.prototype.getDeleteStateStream = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.event_store.client.projections.DeleteReq.Options} returns this
 */
proto.event_store.client.projections.DeleteReq.Options.prototype.setDeleteStateStream = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool delete_checkpoint_stream = 4;
 * @return {boolean}
 */
proto.event_store.client.projections.DeleteReq.Options.prototype.getDeleteCheckpointStream = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.event_store.client.projections.DeleteReq.Options} returns this
 */
proto.event_store.client.projections.DeleteReq.Options.prototype.setDeleteCheckpointStream = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional Options options = 1;
 * @return {?proto.event_store.client.projections.DeleteReq.Options}
 */
proto.event_store.client.projections.DeleteReq.prototype.getOptions = function() {
  return /** @type{?proto.event_store.client.projections.DeleteReq.Options} */ (
    jspb.Message.getWrapperField(this, proto.event_store.client.projections.DeleteReq.Options, 1));
};


/**
 * @param {?proto.event_store.client.projections.DeleteReq.Options|undefined} value
 * @return {!proto.event_store.client.projections.DeleteReq} returns this
*/
proto.event_store.client.projections.DeleteReq.prototype.setOptions = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.event_store.client.projections.DeleteReq} returns this
 */
proto.event_store.client.projections.DeleteReq.prototype.clearOptions = function() {
  return this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.projections.DeleteReq.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.DeleteResp.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.DeleteResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.DeleteResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.DeleteResp.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.DeleteResp}
 */
proto.event_store.client.projections.DeleteResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.DeleteResp;
  return proto.event_store.client.projections.DeleteResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.DeleteResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.DeleteResp}
 */
proto.event_store.client.projections.DeleteResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.DeleteResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.DeleteResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.DeleteResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.DeleteResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.StatisticsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.StatisticsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.StatisticsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.StatisticsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    options: (f = msg.getOptions()) && proto.event_store.client.projections.StatisticsReq.Options.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.StatisticsReq}
 */
proto.event_store.client.projections.StatisticsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.StatisticsReq;
  return proto.event_store.client.projections.StatisticsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.StatisticsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.StatisticsReq}
 */
proto.event_store.client.projections.StatisticsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.event_store.client.projections.StatisticsReq.Options;
      reader.readMessage(value,proto.event_store.client.projections.StatisticsReq.Options.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.StatisticsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.StatisticsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.StatisticsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.StatisticsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.event_store.client.projections.StatisticsReq.Options.serializeBinaryToWriter
    );
  }
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.event_store.client.projections.StatisticsReq.Options.oneofGroups_ = [[1,2,3,4,5,6]];

/**
 * @enum {number}
 */
proto.event_store.client.projections.StatisticsReq.Options.ModeCase = {
  MODE_NOT_SET: 0,
  NAME: 1,
  ALL: 2,
  TRANSIENT: 3,
  CONTINUOUS: 4,
  ONE_TIME: 5,
  ALL_NON_TRANSIENT: 6
};

/**
 * @return {proto.event_store.client.projections.StatisticsReq.Options.ModeCase}
 */
proto.event_store.client.projections.StatisticsReq.Options.prototype.getModeCase = function() {
  return /** @type {proto.event_store.client.projections.StatisticsReq.Options.ModeCase} */(jspb.Message.computeOneofCase(this, proto.event_store.client.projections.StatisticsReq.Options.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.StatisticsReq.Options.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.StatisticsReq.Options.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.StatisticsReq.Options} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.StatisticsReq.Options.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    all: (f = msg.getAll()) && event_store_protocols_v1_shared_pb.Empty.toObject(includeInstance, f),
    pb_transient: (f = msg.getTransient()) && event_store_protocols_v1_shared_pb.Empty.toObject(includeInstance, f),
    continuous: (f = msg.getContinuous()) && event_store_protocols_v1_shared_pb.Empty.toObject(includeInstance, f),
    oneTime: (f = msg.getOneTime()) && event_store_protocols_v1_shared_pb.Empty.toObject(includeInstance, f),
    allNonTransient: (f = msg.getAllNonTransient()) && event_store_protocols_v1_shared_pb.Empty.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.StatisticsReq.Options}
 */
proto.event_store.client.projections.StatisticsReq.Options.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.StatisticsReq.Options;
  return proto.event_store.client.projections.StatisticsReq.Options.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.StatisticsReq.Options} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.StatisticsReq.Options}
 */
proto.event_store.client.projections.StatisticsReq.Options.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new event_store_protocols_v1_shared_pb.Empty;
      reader.readMessage(value,event_store_protocols_v1_shared_pb.Empty.deserializeBinaryFromReader);
      msg.setAll(value);
      break;
    case 3:
      var value = new event_store_protocols_v1_shared_pb.Empty;
      reader.readMessage(value,event_store_protocols_v1_shared_pb.Empty.deserializeBinaryFromReader);
      msg.setTransient(value);
      break;
    case 4:
      var value = new event_store_protocols_v1_shared_pb.Empty;
      reader.readMessage(value,event_store_protocols_v1_shared_pb.Empty.deserializeBinaryFromReader);
      msg.setContinuous(value);
      break;
    case 5:
      var value = new event_store_protocols_v1_shared_pb.Empty;
      reader.readMessage(value,event_store_protocols_v1_shared_pb.Empty.deserializeBinaryFromReader);
      msg.setOneTime(value);
      break;
    case 6:
      var value = new event_store_protocols_v1_shared_pb.Empty;
      reader.readMessage(value,event_store_protocols_v1_shared_pb.Empty.deserializeBinaryFromReader);
      msg.setAllNonTransient(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.StatisticsReq.Options.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.StatisticsReq.Options.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.StatisticsReq.Options} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.StatisticsReq.Options.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAll();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      event_store_protocols_v1_shared_pb.Empty.serializeBinaryToWriter
    );
  }
  f = message.getTransient();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      event_store_protocols_v1_shared_pb.Empty.serializeBinaryToWriter
    );
  }
  f = message.getContinuous();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      event_store_protocols_v1_shared_pb.Empty.serializeBinaryToWriter
    );
  }
  f = message.getOneTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      event_store_protocols_v1_shared_pb.Empty.serializeBinaryToWriter
    );
  }
  f = message.getAllNonTransient();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      event_store_protocols_v1_shared_pb.Empty.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.event_store.client.projections.StatisticsReq.Options.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.StatisticsReq.Options} returns this
 */
proto.event_store.client.projections.StatisticsReq.Options.prototype.setName = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.event_store.client.projections.StatisticsReq.Options.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.event_store.client.projections.StatisticsReq.Options} returns this
 */
proto.event_store.client.projections.StatisticsReq.Options.prototype.clearName = function() {
  return jspb.Message.setOneofField(this, 1, proto.event_store.client.projections.StatisticsReq.Options.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.projections.StatisticsReq.Options.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional event_store.client.Empty all = 2;
 * @return {?proto.event_store.client.Empty}
 */
proto.event_store.client.projections.StatisticsReq.Options.prototype.getAll = function() {
  return /** @type{?proto.event_store.client.Empty} */ (
    jspb.Message.getWrapperField(this, event_store_protocols_v1_shared_pb.Empty, 2));
};


/**
 * @param {?proto.event_store.client.Empty|undefined} value
 * @return {!proto.event_store.client.projections.StatisticsReq.Options} returns this
*/
proto.event_store.client.projections.StatisticsReq.Options.prototype.setAll = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.event_store.client.projections.StatisticsReq.Options.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.event_store.client.projections.StatisticsReq.Options} returns this
 */
proto.event_store.client.projections.StatisticsReq.Options.prototype.clearAll = function() {
  return this.setAll(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.projections.StatisticsReq.Options.prototype.hasAll = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional event_store.client.Empty transient = 3;
 * @return {?proto.event_store.client.Empty}
 */
proto.event_store.client.projections.StatisticsReq.Options.prototype.getTransient = function() {
  return /** @type{?proto.event_store.client.Empty} */ (
    jspb.Message.getWrapperField(this, event_store_protocols_v1_shared_pb.Empty, 3));
};


/**
 * @param {?proto.event_store.client.Empty|undefined} value
 * @return {!proto.event_store.client.projections.StatisticsReq.Options} returns this
*/
proto.event_store.client.projections.StatisticsReq.Options.prototype.setTransient = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.event_store.client.projections.StatisticsReq.Options.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.event_store.client.projections.StatisticsReq.Options} returns this
 */
proto.event_store.client.projections.StatisticsReq.Options.prototype.clearTransient = function() {
  return this.setTransient(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.projections.StatisticsReq.Options.prototype.hasTransient = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional event_store.client.Empty continuous = 4;
 * @return {?proto.event_store.client.Empty}
 */
proto.event_store.client.projections.StatisticsReq.Options.prototype.getContinuous = function() {
  return /** @type{?proto.event_store.client.Empty} */ (
    jspb.Message.getWrapperField(this, event_store_protocols_v1_shared_pb.Empty, 4));
};


/**
 * @param {?proto.event_store.client.Empty|undefined} value
 * @return {!proto.event_store.client.projections.StatisticsReq.Options} returns this
*/
proto.event_store.client.projections.StatisticsReq.Options.prototype.setContinuous = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.event_store.client.projections.StatisticsReq.Options.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.event_store.client.projections.StatisticsReq.Options} returns this
 */
proto.event_store.client.projections.StatisticsReq.Options.prototype.clearContinuous = function() {
  return this.setContinuous(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.projections.StatisticsReq.Options.prototype.hasContinuous = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional event_store.client.Empty one_time = 5;
 * @return {?proto.event_store.client.Empty}
 */
proto.event_store.client.projections.StatisticsReq.Options.prototype.getOneTime = function() {
  return /** @type{?proto.event_store.client.Empty} */ (
    jspb.Message.getWrapperField(this, event_store_protocols_v1_shared_pb.Empty, 5));
};


/**
 * @param {?proto.event_store.client.Empty|undefined} value
 * @return {!proto.event_store.client.projections.StatisticsReq.Options} returns this
*/
proto.event_store.client.projections.StatisticsReq.Options.prototype.setOneTime = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.event_store.client.projections.StatisticsReq.Options.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.event_store.client.projections.StatisticsReq.Options} returns this
 */
proto.event_store.client.projections.StatisticsReq.Options.prototype.clearOneTime = function() {
  return this.setOneTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.projections.StatisticsReq.Options.prototype.hasOneTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional event_store.client.Empty all_non_transient = 6;
 * @return {?proto.event_store.client.Empty}
 */
proto.event_store.client.projections.StatisticsReq.Options.prototype.getAllNonTransient = function() {
  return /** @type{?proto.event_store.client.Empty} */ (
    jspb.Message.getWrapperField(this, event_store_protocols_v1_shared_pb.Empty, 6));
};


/**
 * @param {?proto.event_store.client.Empty|undefined} value
 * @return {!proto.event_store.client.projections.StatisticsReq.Options} returns this
*/
proto.event_store.client.projections.StatisticsReq.Options.prototype.setAllNonTransient = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.event_store.client.projections.StatisticsReq.Options.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.event_store.client.projections.StatisticsReq.Options} returns this
 */
proto.event_store.client.projections.StatisticsReq.Options.prototype.clearAllNonTransient = function() {
  return this.setAllNonTransient(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.projections.StatisticsReq.Options.prototype.hasAllNonTransient = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Options options = 1;
 * @return {?proto.event_store.client.projections.StatisticsReq.Options}
 */
proto.event_store.client.projections.StatisticsReq.prototype.getOptions = function() {
  return /** @type{?proto.event_store.client.projections.StatisticsReq.Options} */ (
    jspb.Message.getWrapperField(this, proto.event_store.client.projections.StatisticsReq.Options, 1));
};


/**
 * @param {?proto.event_store.client.projections.StatisticsReq.Options|undefined} value
 * @return {!proto.event_store.client.projections.StatisticsReq} returns this
*/
proto.event_store.client.projections.StatisticsReq.prototype.setOptions = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.event_store.client.projections.StatisticsReq} returns this
 */
proto.event_store.client.projections.StatisticsReq.prototype.clearOptions = function() {
  return this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.projections.StatisticsReq.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.StatisticsResp.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.StatisticsResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.StatisticsResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.StatisticsResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    details: (f = msg.getDetails()) && proto.event_store.client.projections.StatisticsResp.Details.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.StatisticsResp}
 */
proto.event_store.client.projections.StatisticsResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.StatisticsResp;
  return proto.event_store.client.projections.StatisticsResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.StatisticsResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.StatisticsResp}
 */
proto.event_store.client.projections.StatisticsResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.event_store.client.projections.StatisticsResp.Details;
      reader.readMessage(value,proto.event_store.client.projections.StatisticsResp.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.StatisticsResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.StatisticsResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.StatisticsResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.StatisticsResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.event_store.client.projections.StatisticsResp.Details.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.StatisticsResp.Details.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.StatisticsResp.Details.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.StatisticsResp.Details} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.StatisticsResp.Details.toObject = function(includeInstance, msg) {
  var f, obj = {
    coreprocessingtime: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    version: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    epoch: jspb.Message.getFieldWithDefault(msg, 3, "0"),
    effectivename: jspb.Message.getFieldWithDefault(msg, 4, ""),
    writesinprogress: jspb.Message.getFieldWithDefault(msg, 5, 0),
    readsinprogress: jspb.Message.getFieldWithDefault(msg, 6, 0),
    partitionscached: jspb.Message.getFieldWithDefault(msg, 7, 0),
    status: jspb.Message.getFieldWithDefault(msg, 8, ""),
    statereason: jspb.Message.getFieldWithDefault(msg, 9, ""),
    name: jspb.Message.getFieldWithDefault(msg, 10, ""),
    mode: jspb.Message.getFieldWithDefault(msg, 11, ""),
    position: jspb.Message.getFieldWithDefault(msg, 12, ""),
    progress: jspb.Message.getFloatingPointFieldWithDefault(msg, 13, 0.0),
    lastcheckpoint: jspb.Message.getFieldWithDefault(msg, 14, ""),
    eventsprocessedafterrestart: jspb.Message.getFieldWithDefault(msg, 15, "0"),
    checkpointstatus: jspb.Message.getFieldWithDefault(msg, 16, ""),
    bufferedevents: jspb.Message.getFieldWithDefault(msg, 17, "0"),
    writependingeventsbeforecheckpoint: jspb.Message.getFieldWithDefault(msg, 18, 0),
    writependingeventsaftercheckpoint: jspb.Message.getFieldWithDefault(msg, 19, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.StatisticsResp.Details}
 */
proto.event_store.client.projections.StatisticsResp.Details.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.StatisticsResp.Details;
  return proto.event_store.client.projections.StatisticsResp.Details.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.StatisticsResp.Details} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.StatisticsResp.Details}
 */
proto.event_store.client.projections.StatisticsResp.Details.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setCoreprocessingtime(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setVersion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setEpoch(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEffectivename(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWritesinprogress(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReadsinprogress(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPartitionscached(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatereason(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setMode(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setPosition(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setProgress(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastcheckpoint(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setEventsprocessedafterrestart(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setCheckpointstatus(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setBufferedevents(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWritependingeventsbeforecheckpoint(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWritependingeventsaftercheckpoint(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.StatisticsResp.Details.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.StatisticsResp.Details.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.StatisticsResp.Details} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.StatisticsResp.Details.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCoreprocessingtime();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getVersion();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      2,
      f
    );
  }
  f = message.getEpoch();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      3,
      f
    );
  }
  f = message.getEffectivename();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getWritesinprogress();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getReadsinprogress();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getPartitionscached();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getStatereason();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getMode();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getPosition();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getProgress();
  if (f !== 0.0) {
    writer.writeFloat(
      13,
      f
    );
  }
  f = message.getLastcheckpoint();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getEventsprocessedafterrestart();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      15,
      f
    );
  }
  f = message.getCheckpointstatus();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getBufferedevents();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      17,
      f
    );
  }
  f = message.getWritependingeventsbeforecheckpoint();
  if (f !== 0) {
    writer.writeInt32(
      18,
      f
    );
  }
  f = message.getWritependingeventsaftercheckpoint();
  if (f !== 0) {
    writer.writeInt32(
      19,
      f
    );
  }
};


/**
 * optional int64 coreProcessingTime = 1;
 * @return {string}
 */
proto.event_store.client.projections.StatisticsResp.Details.prototype.getCoreprocessingtime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.StatisticsResp.Details} returns this
 */
proto.event_store.client.projections.StatisticsResp.Details.prototype.setCoreprocessingtime = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional int64 version = 2;
 * @return {string}
 */
proto.event_store.client.projections.StatisticsResp.Details.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.StatisticsResp.Details} returns this
 */
proto.event_store.client.projections.StatisticsResp.Details.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional int64 epoch = 3;
 * @return {string}
 */
proto.event_store.client.projections.StatisticsResp.Details.prototype.getEpoch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "0"));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.StatisticsResp.Details} returns this
 */
proto.event_store.client.projections.StatisticsResp.Details.prototype.setEpoch = function(value) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
};


/**
 * optional string effectiveName = 4;
 * @return {string}
 */
proto.event_store.client.projections.StatisticsResp.Details.prototype.getEffectivename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.StatisticsResp.Details} returns this
 */
proto.event_store.client.projections.StatisticsResp.Details.prototype.setEffectivename = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 writesInProgress = 5;
 * @return {number}
 */
proto.event_store.client.projections.StatisticsResp.Details.prototype.getWritesinprogress = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.event_store.client.projections.StatisticsResp.Details} returns this
 */
proto.event_store.client.projections.StatisticsResp.Details.prototype.setWritesinprogress = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 readsInProgress = 6;
 * @return {number}
 */
proto.event_store.client.projections.StatisticsResp.Details.prototype.getReadsinprogress = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.event_store.client.projections.StatisticsResp.Details} returns this
 */
proto.event_store.client.projections.StatisticsResp.Details.prototype.setReadsinprogress = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 partitionsCached = 7;
 * @return {number}
 */
proto.event_store.client.projections.StatisticsResp.Details.prototype.getPartitionscached = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.event_store.client.projections.StatisticsResp.Details} returns this
 */
proto.event_store.client.projections.StatisticsResp.Details.prototype.setPartitionscached = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string status = 8;
 * @return {string}
 */
proto.event_store.client.projections.StatisticsResp.Details.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.StatisticsResp.Details} returns this
 */
proto.event_store.client.projections.StatisticsResp.Details.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string stateReason = 9;
 * @return {string}
 */
proto.event_store.client.projections.StatisticsResp.Details.prototype.getStatereason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.StatisticsResp.Details} returns this
 */
proto.event_store.client.projections.StatisticsResp.Details.prototype.setStatereason = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string name = 10;
 * @return {string}
 */
proto.event_store.client.projections.StatisticsResp.Details.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.StatisticsResp.Details} returns this
 */
proto.event_store.client.projections.StatisticsResp.Details.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string mode = 11;
 * @return {string}
 */
proto.event_store.client.projections.StatisticsResp.Details.prototype.getMode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.StatisticsResp.Details} returns this
 */
proto.event_store.client.projections.StatisticsResp.Details.prototype.setMode = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string position = 12;
 * @return {string}
 */
proto.event_store.client.projections.StatisticsResp.Details.prototype.getPosition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.StatisticsResp.Details} returns this
 */
proto.event_store.client.projections.StatisticsResp.Details.prototype.setPosition = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional float progress = 13;
 * @return {number}
 */
proto.event_store.client.projections.StatisticsResp.Details.prototype.getProgress = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 13, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.event_store.client.projections.StatisticsResp.Details} returns this
 */
proto.event_store.client.projections.StatisticsResp.Details.prototype.setProgress = function(value) {
  return jspb.Message.setProto3FloatField(this, 13, value);
};


/**
 * optional string lastCheckpoint = 14;
 * @return {string}
 */
proto.event_store.client.projections.StatisticsResp.Details.prototype.getLastcheckpoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.StatisticsResp.Details} returns this
 */
proto.event_store.client.projections.StatisticsResp.Details.prototype.setLastcheckpoint = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional int64 eventsProcessedAfterRestart = 15;
 * @return {string}
 */
proto.event_store.client.projections.StatisticsResp.Details.prototype.getEventsprocessedafterrestart = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, "0"));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.StatisticsResp.Details} returns this
 */
proto.event_store.client.projections.StatisticsResp.Details.prototype.setEventsprocessedafterrestart = function(value) {
  return jspb.Message.setProto3StringIntField(this, 15, value);
};


/**
 * optional string checkpointStatus = 16;
 * @return {string}
 */
proto.event_store.client.projections.StatisticsResp.Details.prototype.getCheckpointstatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.StatisticsResp.Details} returns this
 */
proto.event_store.client.projections.StatisticsResp.Details.prototype.setCheckpointstatus = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional int64 bufferedEvents = 17;
 * @return {string}
 */
proto.event_store.client.projections.StatisticsResp.Details.prototype.getBufferedevents = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, "0"));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.StatisticsResp.Details} returns this
 */
proto.event_store.client.projections.StatisticsResp.Details.prototype.setBufferedevents = function(value) {
  return jspb.Message.setProto3StringIntField(this, 17, value);
};


/**
 * optional int32 writePendingEventsBeforeCheckpoint = 18;
 * @return {number}
 */
proto.event_store.client.projections.StatisticsResp.Details.prototype.getWritependingeventsbeforecheckpoint = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.event_store.client.projections.StatisticsResp.Details} returns this
 */
proto.event_store.client.projections.StatisticsResp.Details.prototype.setWritependingeventsbeforecheckpoint = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional int32 writePendingEventsAfterCheckpoint = 19;
 * @return {number}
 */
proto.event_store.client.projections.StatisticsResp.Details.prototype.getWritependingeventsaftercheckpoint = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.event_store.client.projections.StatisticsResp.Details} returns this
 */
proto.event_store.client.projections.StatisticsResp.Details.prototype.setWritependingeventsaftercheckpoint = function(value) {
  return jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional Details details = 1;
 * @return {?proto.event_store.client.projections.StatisticsResp.Details}
 */
proto.event_store.client.projections.StatisticsResp.prototype.getDetails = function() {
  return /** @type{?proto.event_store.client.projections.StatisticsResp.Details} */ (
    jspb.Message.getWrapperField(this, proto.event_store.client.projections.StatisticsResp.Details, 1));
};


/**
 * @param {?proto.event_store.client.projections.StatisticsResp.Details|undefined} value
 * @return {!proto.event_store.client.projections.StatisticsResp} returns this
*/
proto.event_store.client.projections.StatisticsResp.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.event_store.client.projections.StatisticsResp} returns this
 */
proto.event_store.client.projections.StatisticsResp.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.projections.StatisticsResp.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.StateReq.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.StateReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.StateReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.StateReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    options: (f = msg.getOptions()) && proto.event_store.client.projections.StateReq.Options.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.StateReq}
 */
proto.event_store.client.projections.StateReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.StateReq;
  return proto.event_store.client.projections.StateReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.StateReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.StateReq}
 */
proto.event_store.client.projections.StateReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.event_store.client.projections.StateReq.Options;
      reader.readMessage(value,proto.event_store.client.projections.StateReq.Options.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.StateReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.StateReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.StateReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.StateReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.event_store.client.projections.StateReq.Options.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.StateReq.Options.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.StateReq.Options.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.StateReq.Options} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.StateReq.Options.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    partition: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.StateReq.Options}
 */
proto.event_store.client.projections.StateReq.Options.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.StateReq.Options;
  return proto.event_store.client.projections.StateReq.Options.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.StateReq.Options} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.StateReq.Options}
 */
proto.event_store.client.projections.StateReq.Options.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.StateReq.Options.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.StateReq.Options.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.StateReq.Options} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.StateReq.Options.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPartition();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.event_store.client.projections.StateReq.Options.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.StateReq.Options} returns this
 */
proto.event_store.client.projections.StateReq.Options.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string partition = 2;
 * @return {string}
 */
proto.event_store.client.projections.StateReq.Options.prototype.getPartition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.StateReq.Options} returns this
 */
proto.event_store.client.projections.StateReq.Options.prototype.setPartition = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Options options = 1;
 * @return {?proto.event_store.client.projections.StateReq.Options}
 */
proto.event_store.client.projections.StateReq.prototype.getOptions = function() {
  return /** @type{?proto.event_store.client.projections.StateReq.Options} */ (
    jspb.Message.getWrapperField(this, proto.event_store.client.projections.StateReq.Options, 1));
};


/**
 * @param {?proto.event_store.client.projections.StateReq.Options|undefined} value
 * @return {!proto.event_store.client.projections.StateReq} returns this
*/
proto.event_store.client.projections.StateReq.prototype.setOptions = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.event_store.client.projections.StateReq} returns this
 */
proto.event_store.client.projections.StateReq.prototype.clearOptions = function() {
  return this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.projections.StateReq.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.StateResp.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.StateResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.StateResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.StateResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: (f = msg.getState()) && google_protobuf_struct_pb.Value.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.StateResp}
 */
proto.event_store.client.projections.StateResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.StateResp;
  return proto.event_store.client.projections.StateResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.StateResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.StateResp}
 */
proto.event_store.client.projections.StateResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_struct_pb.Value;
      reader.readMessage(value,google_protobuf_struct_pb.Value.deserializeBinaryFromReader);
      msg.setState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.StateResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.StateResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.StateResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.StateResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_struct_pb.Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Value state = 1;
 * @return {?proto.google.protobuf.Value}
 */
proto.event_store.client.projections.StateResp.prototype.getState = function() {
  return /** @type{?proto.google.protobuf.Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Value, 1));
};


/**
 * @param {?proto.google.protobuf.Value|undefined} value
 * @return {!proto.event_store.client.projections.StateResp} returns this
*/
proto.event_store.client.projections.StateResp.prototype.setState = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.event_store.client.projections.StateResp} returns this
 */
proto.event_store.client.projections.StateResp.prototype.clearState = function() {
  return this.setState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.projections.StateResp.prototype.hasState = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.ResultReq.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.ResultReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.ResultReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.ResultReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    options: (f = msg.getOptions()) && proto.event_store.client.projections.ResultReq.Options.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.ResultReq}
 */
proto.event_store.client.projections.ResultReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.ResultReq;
  return proto.event_store.client.projections.ResultReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.ResultReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.ResultReq}
 */
proto.event_store.client.projections.ResultReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.event_store.client.projections.ResultReq.Options;
      reader.readMessage(value,proto.event_store.client.projections.ResultReq.Options.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.ResultReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.ResultReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.ResultReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.ResultReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.event_store.client.projections.ResultReq.Options.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.ResultReq.Options.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.ResultReq.Options.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.ResultReq.Options} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.ResultReq.Options.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    partition: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.ResultReq.Options}
 */
proto.event_store.client.projections.ResultReq.Options.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.ResultReq.Options;
  return proto.event_store.client.projections.ResultReq.Options.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.ResultReq.Options} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.ResultReq.Options}
 */
proto.event_store.client.projections.ResultReq.Options.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.ResultReq.Options.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.ResultReq.Options.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.ResultReq.Options} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.ResultReq.Options.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPartition();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.event_store.client.projections.ResultReq.Options.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.ResultReq.Options} returns this
 */
proto.event_store.client.projections.ResultReq.Options.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string partition = 2;
 * @return {string}
 */
proto.event_store.client.projections.ResultReq.Options.prototype.getPartition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.ResultReq.Options} returns this
 */
proto.event_store.client.projections.ResultReq.Options.prototype.setPartition = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Options options = 1;
 * @return {?proto.event_store.client.projections.ResultReq.Options}
 */
proto.event_store.client.projections.ResultReq.prototype.getOptions = function() {
  return /** @type{?proto.event_store.client.projections.ResultReq.Options} */ (
    jspb.Message.getWrapperField(this, proto.event_store.client.projections.ResultReq.Options, 1));
};


/**
 * @param {?proto.event_store.client.projections.ResultReq.Options|undefined} value
 * @return {!proto.event_store.client.projections.ResultReq} returns this
*/
proto.event_store.client.projections.ResultReq.prototype.setOptions = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.event_store.client.projections.ResultReq} returns this
 */
proto.event_store.client.projections.ResultReq.prototype.clearOptions = function() {
  return this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.projections.ResultReq.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.ResultResp.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.ResultResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.ResultResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.ResultResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = msg.getResult()) && google_protobuf_struct_pb.Value.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.ResultResp}
 */
proto.event_store.client.projections.ResultResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.ResultResp;
  return proto.event_store.client.projections.ResultResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.ResultResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.ResultResp}
 */
proto.event_store.client.projections.ResultResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_struct_pb.Value;
      reader.readMessage(value,google_protobuf_struct_pb.Value.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.ResultResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.ResultResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.ResultResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.ResultResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_struct_pb.Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Value result = 1;
 * @return {?proto.google.protobuf.Value}
 */
proto.event_store.client.projections.ResultResp.prototype.getResult = function() {
  return /** @type{?proto.google.protobuf.Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Value, 1));
};


/**
 * @param {?proto.google.protobuf.Value|undefined} value
 * @return {!proto.event_store.client.projections.ResultResp} returns this
*/
proto.event_store.client.projections.ResultResp.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.event_store.client.projections.ResultResp} returns this
 */
proto.event_store.client.projections.ResultResp.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.projections.ResultResp.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.GetConfigReq.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.GetConfigReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.GetConfigReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.GetConfigReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    options: (f = msg.getOptions()) && proto.event_store.client.projections.GetConfigReq.Options.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.GetConfigReq}
 */
proto.event_store.client.projections.GetConfigReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.GetConfigReq;
  return proto.event_store.client.projections.GetConfigReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.GetConfigReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.GetConfigReq}
 */
proto.event_store.client.projections.GetConfigReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.event_store.client.projections.GetConfigReq.Options;
      reader.readMessage(value,proto.event_store.client.projections.GetConfigReq.Options.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.GetConfigReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.GetConfigReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.GetConfigReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.GetConfigReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.event_store.client.projections.GetConfigReq.Options.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.GetConfigReq.Options.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.GetConfigReq.Options.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.GetConfigReq.Options} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.GetConfigReq.Options.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.GetConfigReq.Options}
 */
proto.event_store.client.projections.GetConfigReq.Options.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.GetConfigReq.Options;
  return proto.event_store.client.projections.GetConfigReq.Options.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.GetConfigReq.Options} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.GetConfigReq.Options}
 */
proto.event_store.client.projections.GetConfigReq.Options.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.GetConfigReq.Options.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.GetConfigReq.Options.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.GetConfigReq.Options} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.GetConfigReq.Options.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.event_store.client.projections.GetConfigReq.Options.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.GetConfigReq.Options} returns this
 */
proto.event_store.client.projections.GetConfigReq.Options.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Options options = 1;
 * @return {?proto.event_store.client.projections.GetConfigReq.Options}
 */
proto.event_store.client.projections.GetConfigReq.prototype.getOptions = function() {
  return /** @type{?proto.event_store.client.projections.GetConfigReq.Options} */ (
    jspb.Message.getWrapperField(this, proto.event_store.client.projections.GetConfigReq.Options, 1));
};


/**
 * @param {?proto.event_store.client.projections.GetConfigReq.Options|undefined} value
 * @return {!proto.event_store.client.projections.GetConfigReq} returns this
*/
proto.event_store.client.projections.GetConfigReq.prototype.setOptions = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.event_store.client.projections.GetConfigReq} returns this
 */
proto.event_store.client.projections.GetConfigReq.prototype.clearOptions = function() {
  return this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.projections.GetConfigReq.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.GetConfigResp.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.GetConfigResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.GetConfigResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.GetConfigResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    details: (f = msg.getDetails()) && proto.event_store.client.projections.GetConfigResp.Details.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.GetConfigResp}
 */
proto.event_store.client.projections.GetConfigResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.GetConfigResp;
  return proto.event_store.client.projections.GetConfigResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.GetConfigResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.GetConfigResp}
 */
proto.event_store.client.projections.GetConfigResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.event_store.client.projections.GetConfigResp.Details;
      reader.readMessage(value,proto.event_store.client.projections.GetConfigResp.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.GetConfigResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.GetConfigResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.GetConfigResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.GetConfigResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.event_store.client.projections.GetConfigResp.Details.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.GetConfigResp.Details.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.GetConfigResp.Details.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.GetConfigResp.Details} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.GetConfigResp.Details.toObject = function(includeInstance, msg) {
  var f, obj = {
    emitEnabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    trackEmittedStreams: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    checkpointAfterMs: jspb.Message.getFieldWithDefault(msg, 3, 0),
    checkpointHandledThreshold: jspb.Message.getFieldWithDefault(msg, 4, 0),
    checkpointUnhandledBytesThreshold: jspb.Message.getFieldWithDefault(msg, 5, 0),
    pendingEventsThreshold: jspb.Message.getFieldWithDefault(msg, 6, 0),
    maxWriteBatchLength: jspb.Message.getFieldWithDefault(msg, 7, 0),
    maxAllowedWritesInFlight: jspb.Message.getFieldWithDefault(msg, 8, 0),
    projectionExecutionTimeout: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.GetConfigResp.Details}
 */
proto.event_store.client.projections.GetConfigResp.Details.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.GetConfigResp.Details;
  return proto.event_store.client.projections.GetConfigResp.Details.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.GetConfigResp.Details} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.GetConfigResp.Details}
 */
proto.event_store.client.projections.GetConfigResp.Details.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEmitEnabled(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTrackEmittedStreams(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCheckpointAfterMs(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCheckpointHandledThreshold(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCheckpointUnhandledBytesThreshold(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPendingEventsThreshold(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxWriteBatchLength(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxAllowedWritesInFlight(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProjectionExecutionTimeout(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.GetConfigResp.Details.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.GetConfigResp.Details.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.GetConfigResp.Details} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.GetConfigResp.Details.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmitEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getTrackEmittedStreams();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getCheckpointAfterMs();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getCheckpointHandledThreshold();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getCheckpointUnhandledBytesThreshold();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getPendingEventsThreshold();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getMaxWriteBatchLength();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getMaxAllowedWritesInFlight();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeInt32(
      9,
      f
    );
  }
};


/**
 * optional bool emit_enabled = 1;
 * @return {boolean}
 */
proto.event_store.client.projections.GetConfigResp.Details.prototype.getEmitEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.event_store.client.projections.GetConfigResp.Details} returns this
 */
proto.event_store.client.projections.GetConfigResp.Details.prototype.setEmitEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool track_emitted_streams = 2;
 * @return {boolean}
 */
proto.event_store.client.projections.GetConfigResp.Details.prototype.getTrackEmittedStreams = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.event_store.client.projections.GetConfigResp.Details} returns this
 */
proto.event_store.client.projections.GetConfigResp.Details.prototype.setTrackEmittedStreams = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional int32 checkpoint_after_ms = 3;
 * @return {number}
 */
proto.event_store.client.projections.GetConfigResp.Details.prototype.getCheckpointAfterMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.event_store.client.projections.GetConfigResp.Details} returns this
 */
proto.event_store.client.projections.GetConfigResp.Details.prototype.setCheckpointAfterMs = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 checkpoint_handled_threshold = 4;
 * @return {number}
 */
proto.event_store.client.projections.GetConfigResp.Details.prototype.getCheckpointHandledThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.event_store.client.projections.GetConfigResp.Details} returns this
 */
proto.event_store.client.projections.GetConfigResp.Details.prototype.setCheckpointHandledThreshold = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 checkpoint_unhandled_bytes_threshold = 5;
 * @return {number}
 */
proto.event_store.client.projections.GetConfigResp.Details.prototype.getCheckpointUnhandledBytesThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.event_store.client.projections.GetConfigResp.Details} returns this
 */
proto.event_store.client.projections.GetConfigResp.Details.prototype.setCheckpointUnhandledBytesThreshold = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 pending_events_threshold = 6;
 * @return {number}
 */
proto.event_store.client.projections.GetConfigResp.Details.prototype.getPendingEventsThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.event_store.client.projections.GetConfigResp.Details} returns this
 */
proto.event_store.client.projections.GetConfigResp.Details.prototype.setPendingEventsThreshold = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 max_write_batch_length = 7;
 * @return {number}
 */
proto.event_store.client.projections.GetConfigResp.Details.prototype.getMaxWriteBatchLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.event_store.client.projections.GetConfigResp.Details} returns this
 */
proto.event_store.client.projections.GetConfigResp.Details.prototype.setMaxWriteBatchLength = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 max_allowed_writes_in_flight = 8;
 * @return {number}
 */
proto.event_store.client.projections.GetConfigResp.Details.prototype.getMaxAllowedWritesInFlight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.event_store.client.projections.GetConfigResp.Details} returns this
 */
proto.event_store.client.projections.GetConfigResp.Details.prototype.setMaxAllowedWritesInFlight = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int32 projection_execution_timeout = 9;
 * @return {number}
 */
proto.event_store.client.projections.GetConfigResp.Details.prototype.getProjectionExecutionTimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.event_store.client.projections.GetConfigResp.Details} returns this
 */
proto.event_store.client.projections.GetConfigResp.Details.prototype.setProjectionExecutionTimeout = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.event_store.client.projections.GetConfigResp.Details} returns this
 */
proto.event_store.client.projections.GetConfigResp.Details.prototype.clearProjectionExecutionTimeout = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.projections.GetConfigResp.Details.prototype.hasProjectionExecutionTimeout = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Details details = 1;
 * @return {?proto.event_store.client.projections.GetConfigResp.Details}
 */
proto.event_store.client.projections.GetConfigResp.prototype.getDetails = function() {
  return /** @type{?proto.event_store.client.projections.GetConfigResp.Details} */ (
    jspb.Message.getWrapperField(this, proto.event_store.client.projections.GetConfigResp.Details, 1));
};


/**
 * @param {?proto.event_store.client.projections.GetConfigResp.Details|undefined} value
 * @return {!proto.event_store.client.projections.GetConfigResp} returns this
*/
proto.event_store.client.projections.GetConfigResp.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.event_store.client.projections.GetConfigResp} returns this
 */
proto.event_store.client.projections.GetConfigResp.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.projections.GetConfigResp.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.UpdateConfigReq.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.UpdateConfigReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.UpdateConfigReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.UpdateConfigReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    options: (f = msg.getOptions()) && proto.event_store.client.projections.UpdateConfigReq.Options.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.UpdateConfigReq}
 */
proto.event_store.client.projections.UpdateConfigReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.UpdateConfigReq;
  return proto.event_store.client.projections.UpdateConfigReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.UpdateConfigReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.UpdateConfigReq}
 */
proto.event_store.client.projections.UpdateConfigReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.event_store.client.projections.UpdateConfigReq.Options;
      reader.readMessage(value,proto.event_store.client.projections.UpdateConfigReq.Options.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.UpdateConfigReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.UpdateConfigReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.UpdateConfigReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.UpdateConfigReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.event_store.client.projections.UpdateConfigReq.Options.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.UpdateConfigReq.Options.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.UpdateConfigReq.Options.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.UpdateConfigReq.Options} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.UpdateConfigReq.Options.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    emitEnabled: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    trackEmittedStreams: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    checkpointAfterMs: jspb.Message.getFieldWithDefault(msg, 4, 0),
    checkpointHandledThreshold: jspb.Message.getFieldWithDefault(msg, 5, 0),
    checkpointUnhandledBytesThreshold: jspb.Message.getFieldWithDefault(msg, 6, 0),
    pendingEventsThreshold: jspb.Message.getFieldWithDefault(msg, 7, 0),
    maxWriteBatchLength: jspb.Message.getFieldWithDefault(msg, 8, 0),
    maxAllowedWritesInFlight: jspb.Message.getFieldWithDefault(msg, 9, 0),
    projectionExecutionTimeout: jspb.Message.getFieldWithDefault(msg, 10, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.UpdateConfigReq.Options}
 */
proto.event_store.client.projections.UpdateConfigReq.Options.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.UpdateConfigReq.Options;
  return proto.event_store.client.projections.UpdateConfigReq.Options.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.UpdateConfigReq.Options} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.UpdateConfigReq.Options}
 */
proto.event_store.client.projections.UpdateConfigReq.Options.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEmitEnabled(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTrackEmittedStreams(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCheckpointAfterMs(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCheckpointHandledThreshold(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCheckpointUnhandledBytesThreshold(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPendingEventsThreshold(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxWriteBatchLength(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxAllowedWritesInFlight(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProjectionExecutionTimeout(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.UpdateConfigReq.Options.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.UpdateConfigReq.Options.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.UpdateConfigReq.Options} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.UpdateConfigReq.Options.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmitEnabled();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getTrackEmittedStreams();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getCheckpointAfterMs();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getCheckpointHandledThreshold();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getCheckpointUnhandledBytesThreshold();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getPendingEventsThreshold();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getMaxWriteBatchLength();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getMaxAllowedWritesInFlight();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeInt32(
      10,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.event_store.client.projections.UpdateConfigReq.Options.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.UpdateConfigReq.Options} returns this
 */
proto.event_store.client.projections.UpdateConfigReq.Options.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool emit_enabled = 2;
 * @return {boolean}
 */
proto.event_store.client.projections.UpdateConfigReq.Options.prototype.getEmitEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.event_store.client.projections.UpdateConfigReq.Options} returns this
 */
proto.event_store.client.projections.UpdateConfigReq.Options.prototype.setEmitEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool track_emitted_streams = 3;
 * @return {boolean}
 */
proto.event_store.client.projections.UpdateConfigReq.Options.prototype.getTrackEmittedStreams = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.event_store.client.projections.UpdateConfigReq.Options} returns this
 */
proto.event_store.client.projections.UpdateConfigReq.Options.prototype.setTrackEmittedStreams = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional int32 checkpoint_after_ms = 4;
 * @return {number}
 */
proto.event_store.client.projections.UpdateConfigReq.Options.prototype.getCheckpointAfterMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.event_store.client.projections.UpdateConfigReq.Options} returns this
 */
proto.event_store.client.projections.UpdateConfigReq.Options.prototype.setCheckpointAfterMs = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 checkpoint_handled_threshold = 5;
 * @return {number}
 */
proto.event_store.client.projections.UpdateConfigReq.Options.prototype.getCheckpointHandledThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.event_store.client.projections.UpdateConfigReq.Options} returns this
 */
proto.event_store.client.projections.UpdateConfigReq.Options.prototype.setCheckpointHandledThreshold = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 checkpoint_unhandled_bytes_threshold = 6;
 * @return {number}
 */
proto.event_store.client.projections.UpdateConfigReq.Options.prototype.getCheckpointUnhandledBytesThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.event_store.client.projections.UpdateConfigReq.Options} returns this
 */
proto.event_store.client.projections.UpdateConfigReq.Options.prototype.setCheckpointUnhandledBytesThreshold = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 pending_events_threshold = 7;
 * @return {number}
 */
proto.event_store.client.projections.UpdateConfigReq.Options.prototype.getPendingEventsThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.event_store.client.projections.UpdateConfigReq.Options} returns this
 */
proto.event_store.client.projections.UpdateConfigReq.Options.prototype.setPendingEventsThreshold = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 max_write_batch_length = 8;
 * @return {number}
 */
proto.event_store.client.projections.UpdateConfigReq.Options.prototype.getMaxWriteBatchLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.event_store.client.projections.UpdateConfigReq.Options} returns this
 */
proto.event_store.client.projections.UpdateConfigReq.Options.prototype.setMaxWriteBatchLength = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int32 max_allowed_writes_in_flight = 9;
 * @return {number}
 */
proto.event_store.client.projections.UpdateConfigReq.Options.prototype.getMaxAllowedWritesInFlight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.event_store.client.projections.UpdateConfigReq.Options} returns this
 */
proto.event_store.client.projections.UpdateConfigReq.Options.prototype.setMaxAllowedWritesInFlight = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int32 projection_execution_timeout = 10;
 * @return {number}
 */
proto.event_store.client.projections.UpdateConfigReq.Options.prototype.getProjectionExecutionTimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.event_store.client.projections.UpdateConfigReq.Options} returns this
 */
proto.event_store.client.projections.UpdateConfigReq.Options.prototype.setProjectionExecutionTimeout = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.event_store.client.projections.UpdateConfigReq.Options} returns this
 */
proto.event_store.client.projections.UpdateConfigReq.Options.prototype.clearProjectionExecutionTimeout = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.projections.UpdateConfigReq.Options.prototype.hasProjectionExecutionTimeout = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Options options = 1;
 * @return {?proto.event_store.client.projections.UpdateConfigReq.Options}
 */
proto.event_store.client.projections.UpdateConfigReq.prototype.getOptions = function() {
  return /** @type{?proto.event_store.client.projections.UpdateConfigReq.Options} */ (
    jspb.Message.getWrapperField(this, proto.event_store.client.projections.UpdateConfigReq.Options, 1));
};


/**
 * @param {?proto.event_store.client.projections.UpdateConfigReq.Options|undefined} value
 * @return {!proto.event_store.client.projections.UpdateConfigReq} returns this
*/
proto.event_store.client.projections.UpdateConfigReq.prototype.setOptions = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.event_store.client.projections.UpdateConfigReq} returns this
 */
proto.event_store.client.projections.UpdateConfigReq.prototype.clearOptions = function() {
  return this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.projections.UpdateConfigReq.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.UpdateConfigResp.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.UpdateConfigResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.UpdateConfigResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.UpdateConfigResp.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.UpdateConfigResp}
 */
proto.event_store.client.projections.UpdateConfigResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.UpdateConfigResp;
  return proto.event_store.client.projections.UpdateConfigResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.UpdateConfigResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.UpdateConfigResp}
 */
proto.event_store.client.projections.UpdateConfigResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.UpdateConfigResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.UpdateConfigResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.UpdateConfigResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.UpdateConfigResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.ResetReq.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.ResetReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.ResetReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.ResetReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    options: (f = msg.getOptions()) && proto.event_store.client.projections.ResetReq.Options.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.ResetReq}
 */
proto.event_store.client.projections.ResetReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.ResetReq;
  return proto.event_store.client.projections.ResetReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.ResetReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.ResetReq}
 */
proto.event_store.client.projections.ResetReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.event_store.client.projections.ResetReq.Options;
      reader.readMessage(value,proto.event_store.client.projections.ResetReq.Options.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.ResetReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.ResetReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.ResetReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.ResetReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.event_store.client.projections.ResetReq.Options.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.ResetReq.Options.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.ResetReq.Options.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.ResetReq.Options} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.ResetReq.Options.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    writeCheckpoint: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.ResetReq.Options}
 */
proto.event_store.client.projections.ResetReq.Options.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.ResetReq.Options;
  return proto.event_store.client.projections.ResetReq.Options.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.ResetReq.Options} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.ResetReq.Options}
 */
proto.event_store.client.projections.ResetReq.Options.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWriteCheckpoint(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.ResetReq.Options.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.ResetReq.Options.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.ResetReq.Options} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.ResetReq.Options.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWriteCheckpoint();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.event_store.client.projections.ResetReq.Options.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.ResetReq.Options} returns this
 */
proto.event_store.client.projections.ResetReq.Options.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool write_checkpoint = 2;
 * @return {boolean}
 */
proto.event_store.client.projections.ResetReq.Options.prototype.getWriteCheckpoint = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.event_store.client.projections.ResetReq.Options} returns this
 */
proto.event_store.client.projections.ResetReq.Options.prototype.setWriteCheckpoint = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional Options options = 1;
 * @return {?proto.event_store.client.projections.ResetReq.Options}
 */
proto.event_store.client.projections.ResetReq.prototype.getOptions = function() {
  return /** @type{?proto.event_store.client.projections.ResetReq.Options} */ (
    jspb.Message.getWrapperField(this, proto.event_store.client.projections.ResetReq.Options, 1));
};


/**
 * @param {?proto.event_store.client.projections.ResetReq.Options|undefined} value
 * @return {!proto.event_store.client.projections.ResetReq} returns this
*/
proto.event_store.client.projections.ResetReq.prototype.setOptions = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.event_store.client.projections.ResetReq} returns this
 */
proto.event_store.client.projections.ResetReq.prototype.clearOptions = function() {
  return this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.projections.ResetReq.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.ResetResp.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.ResetResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.ResetResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.ResetResp.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.ResetResp}
 */
proto.event_store.client.projections.ResetResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.ResetResp;
  return proto.event_store.client.projections.ResetResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.ResetResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.ResetResp}
 */
proto.event_store.client.projections.ResetResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.ResetResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.ResetResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.ResetResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.ResetResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.AbortReq.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.AbortReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.AbortReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.AbortReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    options: (f = msg.getOptions()) && proto.event_store.client.projections.AbortReq.Options.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.AbortReq}
 */
proto.event_store.client.projections.AbortReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.AbortReq;
  return proto.event_store.client.projections.AbortReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.AbortReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.AbortReq}
 */
proto.event_store.client.projections.AbortReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.event_store.client.projections.AbortReq.Options;
      reader.readMessage(value,proto.event_store.client.projections.AbortReq.Options.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.AbortReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.AbortReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.AbortReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.AbortReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.event_store.client.projections.AbortReq.Options.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.AbortReq.Options.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.AbortReq.Options.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.AbortReq.Options} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.AbortReq.Options.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.AbortReq.Options}
 */
proto.event_store.client.projections.AbortReq.Options.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.AbortReq.Options;
  return proto.event_store.client.projections.AbortReq.Options.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.AbortReq.Options} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.AbortReq.Options}
 */
proto.event_store.client.projections.AbortReq.Options.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.AbortReq.Options.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.AbortReq.Options.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.AbortReq.Options} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.AbortReq.Options.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.event_store.client.projections.AbortReq.Options.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.AbortReq.Options} returns this
 */
proto.event_store.client.projections.AbortReq.Options.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Options options = 1;
 * @return {?proto.event_store.client.projections.AbortReq.Options}
 */
proto.event_store.client.projections.AbortReq.prototype.getOptions = function() {
  return /** @type{?proto.event_store.client.projections.AbortReq.Options} */ (
    jspb.Message.getWrapperField(this, proto.event_store.client.projections.AbortReq.Options, 1));
};


/**
 * @param {?proto.event_store.client.projections.AbortReq.Options|undefined} value
 * @return {!proto.event_store.client.projections.AbortReq} returns this
*/
proto.event_store.client.projections.AbortReq.prototype.setOptions = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.event_store.client.projections.AbortReq} returns this
 */
proto.event_store.client.projections.AbortReq.prototype.clearOptions = function() {
  return this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.projections.AbortReq.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.AbortResp.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.AbortResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.AbortResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.AbortResp.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.AbortResp}
 */
proto.event_store.client.projections.AbortResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.AbortResp;
  return proto.event_store.client.projections.AbortResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.AbortResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.AbortResp}
 */
proto.event_store.client.projections.AbortResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.AbortResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.AbortResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.AbortResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.AbortResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.EnableReq.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.EnableReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.EnableReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.EnableReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    options: (f = msg.getOptions()) && proto.event_store.client.projections.EnableReq.Options.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.EnableReq}
 */
proto.event_store.client.projections.EnableReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.EnableReq;
  return proto.event_store.client.projections.EnableReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.EnableReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.EnableReq}
 */
proto.event_store.client.projections.EnableReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.event_store.client.projections.EnableReq.Options;
      reader.readMessage(value,proto.event_store.client.projections.EnableReq.Options.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.EnableReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.EnableReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.EnableReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.EnableReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.event_store.client.projections.EnableReq.Options.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.EnableReq.Options.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.EnableReq.Options.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.EnableReq.Options} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.EnableReq.Options.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.EnableReq.Options}
 */
proto.event_store.client.projections.EnableReq.Options.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.EnableReq.Options;
  return proto.event_store.client.projections.EnableReq.Options.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.EnableReq.Options} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.EnableReq.Options}
 */
proto.event_store.client.projections.EnableReq.Options.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.EnableReq.Options.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.EnableReq.Options.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.EnableReq.Options} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.EnableReq.Options.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.event_store.client.projections.EnableReq.Options.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.EnableReq.Options} returns this
 */
proto.event_store.client.projections.EnableReq.Options.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Options options = 1;
 * @return {?proto.event_store.client.projections.EnableReq.Options}
 */
proto.event_store.client.projections.EnableReq.prototype.getOptions = function() {
  return /** @type{?proto.event_store.client.projections.EnableReq.Options} */ (
    jspb.Message.getWrapperField(this, proto.event_store.client.projections.EnableReq.Options, 1));
};


/**
 * @param {?proto.event_store.client.projections.EnableReq.Options|undefined} value
 * @return {!proto.event_store.client.projections.EnableReq} returns this
*/
proto.event_store.client.projections.EnableReq.prototype.setOptions = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.event_store.client.projections.EnableReq} returns this
 */
proto.event_store.client.projections.EnableReq.prototype.clearOptions = function() {
  return this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.projections.EnableReq.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.EnableResp.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.EnableResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.EnableResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.EnableResp.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.EnableResp}
 */
proto.event_store.client.projections.EnableResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.EnableResp;
  return proto.event_store.client.projections.EnableResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.EnableResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.EnableResp}
 */
proto.event_store.client.projections.EnableResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.EnableResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.EnableResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.EnableResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.EnableResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.DisableReq.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.DisableReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.DisableReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.DisableReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    options: (f = msg.getOptions()) && proto.event_store.client.projections.DisableReq.Options.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.DisableReq}
 */
proto.event_store.client.projections.DisableReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.DisableReq;
  return proto.event_store.client.projections.DisableReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.DisableReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.DisableReq}
 */
proto.event_store.client.projections.DisableReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.event_store.client.projections.DisableReq.Options;
      reader.readMessage(value,proto.event_store.client.projections.DisableReq.Options.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.DisableReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.DisableReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.DisableReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.DisableReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.event_store.client.projections.DisableReq.Options.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.DisableReq.Options.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.DisableReq.Options.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.DisableReq.Options} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.DisableReq.Options.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    writeCheckpoint: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.DisableReq.Options}
 */
proto.event_store.client.projections.DisableReq.Options.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.DisableReq.Options;
  return proto.event_store.client.projections.DisableReq.Options.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.DisableReq.Options} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.DisableReq.Options}
 */
proto.event_store.client.projections.DisableReq.Options.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWriteCheckpoint(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.DisableReq.Options.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.DisableReq.Options.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.DisableReq.Options} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.DisableReq.Options.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWriteCheckpoint();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.event_store.client.projections.DisableReq.Options.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.DisableReq.Options} returns this
 */
proto.event_store.client.projections.DisableReq.Options.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool write_checkpoint = 2;
 * @return {boolean}
 */
proto.event_store.client.projections.DisableReq.Options.prototype.getWriteCheckpoint = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.event_store.client.projections.DisableReq.Options} returns this
 */
proto.event_store.client.projections.DisableReq.Options.prototype.setWriteCheckpoint = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional Options options = 1;
 * @return {?proto.event_store.client.projections.DisableReq.Options}
 */
proto.event_store.client.projections.DisableReq.prototype.getOptions = function() {
  return /** @type{?proto.event_store.client.projections.DisableReq.Options} */ (
    jspb.Message.getWrapperField(this, proto.event_store.client.projections.DisableReq.Options, 1));
};


/**
 * @param {?proto.event_store.client.projections.DisableReq.Options|undefined} value
 * @return {!proto.event_store.client.projections.DisableReq} returns this
*/
proto.event_store.client.projections.DisableReq.prototype.setOptions = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.event_store.client.projections.DisableReq} returns this
 */
proto.event_store.client.projections.DisableReq.prototype.clearOptions = function() {
  return this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.projections.DisableReq.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.DisableResp.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.DisableResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.DisableResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.DisableResp.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.DisableResp}
 */
proto.event_store.client.projections.DisableResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.DisableResp;
  return proto.event_store.client.projections.DisableResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.DisableResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.DisableResp}
 */
proto.event_store.client.projections.DisableResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.DisableResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.DisableResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.DisableResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.DisableResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.ReadEventsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.ReadEventsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.ReadEventsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.ReadEventsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    options: (f = msg.getOptions()) && proto.event_store.client.projections.ReadEventsReq.Options.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.ReadEventsReq}
 */
proto.event_store.client.projections.ReadEventsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.ReadEventsReq;
  return proto.event_store.client.projections.ReadEventsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.ReadEventsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.ReadEventsReq}
 */
proto.event_store.client.projections.ReadEventsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.event_store.client.projections.ReadEventsReq.Options;
      reader.readMessage(value,proto.event_store.client.projections.ReadEventsReq.Options.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.ReadEventsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.ReadEventsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.ReadEventsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.ReadEventsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.event_store.client.projections.ReadEventsReq.Options.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.ReadEventsReq.Options.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.ReadEventsReq.Options.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.ReadEventsReq.Options} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.ReadEventsReq.Options.toObject = function(includeInstance, msg) {
  var f, obj = {
    querySourcesJson: jspb.Message.getFieldWithDefault(msg, 1, ""),
    positionJson: jspb.Message.getFieldWithDefault(msg, 2, ""),
    maxEvents: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.ReadEventsReq.Options}
 */
proto.event_store.client.projections.ReadEventsReq.Options.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.ReadEventsReq.Options;
  return proto.event_store.client.projections.ReadEventsReq.Options.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.ReadEventsReq.Options} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.ReadEventsReq.Options}
 */
proto.event_store.client.projections.ReadEventsReq.Options.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuerySourcesJson(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPositionJson(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxEvents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.ReadEventsReq.Options.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.ReadEventsReq.Options.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.ReadEventsReq.Options} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.ReadEventsReq.Options.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuerySourcesJson();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPositionJson();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMaxEvents();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional string query_sources_json = 1;
 * @return {string}
 */
proto.event_store.client.projections.ReadEventsReq.Options.prototype.getQuerySourcesJson = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.ReadEventsReq.Options} returns this
 */
proto.event_store.client.projections.ReadEventsReq.Options.prototype.setQuerySourcesJson = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string position_json = 2;
 * @return {string}
 */
proto.event_store.client.projections.ReadEventsReq.Options.prototype.getPositionJson = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.ReadEventsReq.Options} returns this
 */
proto.event_store.client.projections.ReadEventsReq.Options.prototype.setPositionJson = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 max_events = 3;
 * @return {number}
 */
proto.event_store.client.projections.ReadEventsReq.Options.prototype.getMaxEvents = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.event_store.client.projections.ReadEventsReq.Options} returns this
 */
proto.event_store.client.projections.ReadEventsReq.Options.prototype.setMaxEvents = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional Options options = 1;
 * @return {?proto.event_store.client.projections.ReadEventsReq.Options}
 */
proto.event_store.client.projections.ReadEventsReq.prototype.getOptions = function() {
  return /** @type{?proto.event_store.client.projections.ReadEventsReq.Options} */ (
    jspb.Message.getWrapperField(this, proto.event_store.client.projections.ReadEventsReq.Options, 1));
};


/**
 * @param {?proto.event_store.client.projections.ReadEventsReq.Options|undefined} value
 * @return {!proto.event_store.client.projections.ReadEventsReq} returns this
*/
proto.event_store.client.projections.ReadEventsReq.prototype.setOptions = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.event_store.client.projections.ReadEventsReq} returns this
 */
proto.event_store.client.projections.ReadEventsReq.prototype.clearOptions = function() {
  return this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.projections.ReadEventsReq.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.ReadEventsResp.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.ReadEventsResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.ReadEventsResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.ReadEventsResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    details: (f = msg.getDetails()) && proto.event_store.client.projections.ReadEventsResp.Details.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.ReadEventsResp}
 */
proto.event_store.client.projections.ReadEventsResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.ReadEventsResp;
  return proto.event_store.client.projections.ReadEventsResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.ReadEventsResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.ReadEventsResp}
 */
proto.event_store.client.projections.ReadEventsResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.event_store.client.projections.ReadEventsResp.Details;
      reader.readMessage(value,proto.event_store.client.projections.ReadEventsResp.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.ReadEventsResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.ReadEventsResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.ReadEventsResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.ReadEventsResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.event_store.client.projections.ReadEventsResp.Details.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.event_store.client.projections.ReadEventsResp.Details.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.ReadEventsResp.Details.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.ReadEventsResp.Details.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.ReadEventsResp.Details} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.ReadEventsResp.Details.toObject = function(includeInstance, msg) {
  var f, obj = {
    correlationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    readerPositionJson: jspb.Message.getFieldWithDefault(msg, 2, ""),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.event_store.client.projections.ReadEventsResp.Details.Event.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.ReadEventsResp.Details}
 */
proto.event_store.client.projections.ReadEventsResp.Details.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.ReadEventsResp.Details;
  return proto.event_store.client.projections.ReadEventsResp.Details.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.ReadEventsResp.Details} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.ReadEventsResp.Details}
 */
proto.event_store.client.projections.ReadEventsResp.Details.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCorrelationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReaderPositionJson(value);
      break;
    case 3:
      var value = new proto.event_store.client.projections.ReadEventsResp.Details.Event;
      reader.readMessage(value,proto.event_store.client.projections.ReadEventsResp.Details.Event.deserializeBinaryFromReader);
      msg.addEvents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.ReadEventsResp.Details.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.ReadEventsResp.Details.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.ReadEventsResp.Details} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.ReadEventsResp.Details.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCorrelationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReaderPositionJson();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.event_store.client.projections.ReadEventsResp.Details.Event.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.projections.ReadEventsResp.Details.Event.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.projections.ReadEventsResp.Details.Event.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.projections.ReadEventsResp.Details.Event} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.ReadEventsResp.Details.Event.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventStreamId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    eventNumber: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    eventType: jspb.Message.getFieldWithDefault(msg, 3, ""),
    data: (f = msg.getData()) && google_protobuf_struct_pb.Value.toObject(includeInstance, f),
    metadata: (f = msg.getMetadata()) && google_protobuf_struct_pb.Value.toObject(includeInstance, f),
    linkMetadata: (f = msg.getLinkMetadata()) && google_protobuf_struct_pb.Value.toObject(includeInstance, f),
    isJson: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    readerPositionJson: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.projections.ReadEventsResp.Details.Event}
 */
proto.event_store.client.projections.ReadEventsResp.Details.Event.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.projections.ReadEventsResp.Details.Event;
  return proto.event_store.client.projections.ReadEventsResp.Details.Event.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.projections.ReadEventsResp.Details.Event} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.projections.ReadEventsResp.Details.Event}
 */
proto.event_store.client.projections.ReadEventsResp.Details.Event.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventStreamId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setEventNumber(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventType(value);
      break;
    case 4:
      var value = new google_protobuf_struct_pb.Value;
      reader.readMessage(value,google_protobuf_struct_pb.Value.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 5:
      var value = new google_protobuf_struct_pb.Value;
      reader.readMessage(value,google_protobuf_struct_pb.Value.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 6:
      var value = new google_protobuf_struct_pb.Value;
      reader.readMessage(value,google_protobuf_struct_pb.Value.deserializeBinaryFromReader);
      msg.setLinkMetadata(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsJson(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setReaderPositionJson(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.projections.ReadEventsResp.Details.Event.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.projections.ReadEventsResp.Details.Event.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.projections.ReadEventsResp.Details.Event} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.projections.ReadEventsResp.Details.Event.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventStreamId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEventNumber();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      2,
      f
    );
  }
  f = message.getEventType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_struct_pb.Value.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_struct_pb.Value.serializeBinaryToWriter
    );
  }
  f = message.getLinkMetadata();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_struct_pb.Value.serializeBinaryToWriter
    );
  }
  f = message.getIsJson();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getReaderPositionJson();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string event_stream_id = 1;
 * @return {string}
 */
proto.event_store.client.projections.ReadEventsResp.Details.Event.prototype.getEventStreamId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.ReadEventsResp.Details.Event} returns this
 */
proto.event_store.client.projections.ReadEventsResp.Details.Event.prototype.setEventStreamId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 event_number = 2;
 * @return {string}
 */
proto.event_store.client.projections.ReadEventsResp.Details.Event.prototype.getEventNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.ReadEventsResp.Details.Event} returns this
 */
proto.event_store.client.projections.ReadEventsResp.Details.Event.prototype.setEventNumber = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional string event_type = 3;
 * @return {string}
 */
proto.event_store.client.projections.ReadEventsResp.Details.Event.prototype.getEventType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.ReadEventsResp.Details.Event} returns this
 */
proto.event_store.client.projections.ReadEventsResp.Details.Event.prototype.setEventType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Value data = 4;
 * @return {?proto.google.protobuf.Value}
 */
proto.event_store.client.projections.ReadEventsResp.Details.Event.prototype.getData = function() {
  return /** @type{?proto.google.protobuf.Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Value, 4));
};


/**
 * @param {?proto.google.protobuf.Value|undefined} value
 * @return {!proto.event_store.client.projections.ReadEventsResp.Details.Event} returns this
*/
proto.event_store.client.projections.ReadEventsResp.Details.Event.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.event_store.client.projections.ReadEventsResp.Details.Event} returns this
 */
proto.event_store.client.projections.ReadEventsResp.Details.Event.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.projections.ReadEventsResp.Details.Event.prototype.hasData = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Value metadata = 5;
 * @return {?proto.google.protobuf.Value}
 */
proto.event_store.client.projections.ReadEventsResp.Details.Event.prototype.getMetadata = function() {
  return /** @type{?proto.google.protobuf.Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Value, 5));
};


/**
 * @param {?proto.google.protobuf.Value|undefined} value
 * @return {!proto.event_store.client.projections.ReadEventsResp.Details.Event} returns this
*/
proto.event_store.client.projections.ReadEventsResp.Details.Event.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.event_store.client.projections.ReadEventsResp.Details.Event} returns this
 */
proto.event_store.client.projections.ReadEventsResp.Details.Event.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.projections.ReadEventsResp.Details.Event.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Value link_metadata = 6;
 * @return {?proto.google.protobuf.Value}
 */
proto.event_store.client.projections.ReadEventsResp.Details.Event.prototype.getLinkMetadata = function() {
  return /** @type{?proto.google.protobuf.Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Value, 6));
};


/**
 * @param {?proto.google.protobuf.Value|undefined} value
 * @return {!proto.event_store.client.projections.ReadEventsResp.Details.Event} returns this
*/
proto.event_store.client.projections.ReadEventsResp.Details.Event.prototype.setLinkMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.event_store.client.projections.ReadEventsResp.Details.Event} returns this
 */
proto.event_store.client.projections.ReadEventsResp.Details.Event.prototype.clearLinkMetadata = function() {
  return this.setLinkMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.projections.ReadEventsResp.Details.Event.prototype.hasLinkMetadata = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool is_json = 7;
 * @return {boolean}
 */
proto.event_store.client.projections.ReadEventsResp.Details.Event.prototype.getIsJson = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.event_store.client.projections.ReadEventsResp.Details.Event} returns this
 */
proto.event_store.client.projections.ReadEventsResp.Details.Event.prototype.setIsJson = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional string reader_position_json = 8;
 * @return {string}
 */
proto.event_store.client.projections.ReadEventsResp.Details.Event.prototype.getReaderPositionJson = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.ReadEventsResp.Details.Event} returns this
 */
proto.event_store.client.projections.ReadEventsResp.Details.Event.prototype.setReaderPositionJson = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string correlation_id = 1;
 * @return {string}
 */
proto.event_store.client.projections.ReadEventsResp.Details.prototype.getCorrelationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.ReadEventsResp.Details} returns this
 */
proto.event_store.client.projections.ReadEventsResp.Details.prototype.setCorrelationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string reader_position_json = 2;
 * @return {string}
 */
proto.event_store.client.projections.ReadEventsResp.Details.prototype.getReaderPositionJson = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.projections.ReadEventsResp.Details} returns this
 */
proto.event_store.client.projections.ReadEventsResp.Details.prototype.setReaderPositionJson = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Event events = 3;
 * @return {!Array<!proto.event_store.client.projections.ReadEventsResp.Details.Event>}
 */
proto.event_store.client.projections.ReadEventsResp.Details.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.event_store.client.projections.ReadEventsResp.Details.Event>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.event_store.client.projections.ReadEventsResp.Details.Event, 3));
};


/**
 * @param {!Array<!proto.event_store.client.projections.ReadEventsResp.Details.Event>} value
 * @return {!proto.event_store.client.projections.ReadEventsResp.Details} returns this
*/
proto.event_store.client.projections.ReadEventsResp.Details.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.event_store.client.projections.ReadEventsResp.Details.Event=} opt_value
 * @param {number=} opt_index
 * @return {!proto.event_store.client.projections.ReadEventsResp.Details.Event}
 */
proto.event_store.client.projections.ReadEventsResp.Details.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.event_store.client.projections.ReadEventsResp.Details.Event, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.event_store.client.projections.ReadEventsResp.Details} returns this
 */
proto.event_store.client.projections.ReadEventsResp.Details.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};


/**
 * optional Details details = 1;
 * @return {?proto.event_store.client.projections.ReadEventsResp.Details}
 */
proto.event_store.client.projections.ReadEventsResp.prototype.getDetails = function() {
  return /** @type{?proto.event_store.client.projections.ReadEventsResp.Details} */ (
    jspb.Message.getWrapperField(this, proto.event_store.client.projections.ReadEventsResp.Details, 1));
};


/**
 * @param {?proto.event_store.client.projections.ReadEventsResp.Details|undefined} value
 * @return {!proto.event_store.client.projections.ReadEventsResp} returns this
*/
proto.event_store.client.projections.ReadEventsResp.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.event_store.client.projections.ReadEventsResp} returns this
 */
proto.event_store.client.projections.ReadEventsResp.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.projections.ReadEventsResp.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.event_store.client.projections);
