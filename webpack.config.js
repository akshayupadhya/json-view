const path = require("path");

module.exports = {
	mode: "production",
	entry: "./src/App.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		publicPath: "/public/",
		library: "json-view",
		libraryTarget: "commonjs2"
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				include: [path.resolve(__dirname, "src")],
				loader: "babel-loader"
			}
		]
	},
	resolve: {
		// options for resolving module requests
		// (does not apply to resolving to loaders)
		modules: ["node_modules", path.resolve(__dirname, "src")],
		// directories where to look for modules
		extensions: [".js", ".json", ".jsx", ".css"]
		// extensions that are used
		// alias: {
		//   // a list of module name aliases
		//   "module": "new-module",
		//   // alias "module" -> "new-module" and "module/path/file" -> "new-module/path/file"
		//   "only-module$": "new-module",
		//   // alias "only-module" -> "new-module", but not "only-module/path/file" -> "new-module/path/file"
		//   "module": path.resolve(__dirname, "app/third/module.js"),
		//   // alias "module" -> "./app/third/module.js" and "module/file" results in error
		//   // modules aliases are imported relative to the current context
		// },
		/* alternative alias syntax (click to show) */
		/* Advanced resolve configuration (click to show) */
	},
	context: __dirname, // string (absolute path!)
	target: "web", // enum  // the environment in which the bundle should run
	externals: ["react"], // Don't follow/bundle these modules, but request them at runtime from the environment
	stats: "errors-only" // lets you precisely control what bundle information gets displayed
};
