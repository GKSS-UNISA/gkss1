import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.scss": {
        loaders: ["sass-loader"],
      },
    },
  },
};

export default withPayload(nextConfig);
