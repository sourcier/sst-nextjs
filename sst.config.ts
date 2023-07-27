import { SSTConfig } from "sst";
import { NextjsSite, Bucket } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "sst-nextjs",
      region: "eu-west-2",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const bucket = new Bucket(stack, "public");
      const site = new NextjsSite(stack, "site", {
        bind: [bucket],
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
