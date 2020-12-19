const { build } = require("esbuild")
const chokidar = require("chokidar")
const liveServer = require("live-server")

;(async () => {
	const builder = await build({
		bundle: true,
		entryPoints: ["./src/index.ts"],
		incremental: true,
		minify: true, // TODO
		outfile: "./public/script.js",
	})
	chokidar
		.watch("src/**/*.{ts,tsx}", {
			interval: 0,
		})
		.on("all", () => {
			builder.rebuild()
		})
	liveServer.start({
		open: true,
		port: +process.env.PORT || 8080,
		root: "public",
	})
})()
