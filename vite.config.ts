import { defineConfig } from "vite";
import vavite from "vavite";
import { swc } from "rollup-plugin-swc3";

export default defineConfig({
    test: {},
    ssr: {
        external: ["reflect-metadata"],
    },
    esbuild: false,
    plugins: [
        swc({
            jsc: {
                transform: {
                    decoratorMetadata: true,
                    legacyDecorator: true,
                },
                target: "es2021",
                keepClassNames: true,
            },
        }),
        vavite({
            handlerEntry: "/src/main.ts",

            serveClientAssetsInDev: true,

        }),
    ],
});
