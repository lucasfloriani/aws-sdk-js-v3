import { Sha256 } from "@aws-crypto/sha256-js";

import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import { WorkDocsClientConfig } from "./WorkDocsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WorkDocsClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
    sha256: config?.sha256 ?? Sha256,
  };
};
