import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    config.module?.rules?.forEach((rule: any) => {
      if (
        typeof rule !== "string" &&
        rule.test instanceof RegExp &&
        rule.test.test("test.css")
      ) {
        rule.exclude = /\.css$/i;
      }
    });

    config.module?.rules?.push({
      test: /\.s[ac]ss$/i,
      use: ["style-loader", "sass-loader", "css-loader", "postcss-loader"],
    });
    config.module?.rules?.push({
      test: /\.css$/i,
      use: ["style-loader", "css-loader", "postcss-loader"],
    });

    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src"),
    };
    return config;
  },
};
export default config;
