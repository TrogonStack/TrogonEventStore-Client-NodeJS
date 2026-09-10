/* istanbul ignore file */

import createDebug from "debug";

export const testDebug = createDebug("trogon-eventstore").extend("tests");
