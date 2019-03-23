const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode : "development", // "production" | "development" | "none"
    // Chosen mode tells webpack to use its built-in optimizations accordingly.
    entry : "../Resources/Public/JavaScript/React/eyeeReact.js", // string | object |
                                                            // array
    // defaults to ./src
    // Here the application starts executing
    // and webpack starts bundling
    output : {
        // options related to how webpack emits results
        path : path.resolve(__dirname, "../Resources/Public/JavaScript/"), // string
        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)
        filename : "bundle.js", // string
        // the filename template for entry chunks
        sourceMapFilename : "bundle.map", // string
    },
    devtool : '#source-map',
    module : {
        // configuration regarding modules
        rules : [
        // rules for modules (configure loaders, parser options, etc.)
        {
            test : /.jsx?$/,
            exclude : /(node_modules)/,
            // these are matching conditions, each accepting a regular
            // expression or string
            // test and include have the same behavior, both must be matched
            // exclude must not be matched (takes preferrence over test and
            // include)
            // Best practices:
            // - Use RegExp only in test and for filename matching
            // - Use arrays of absolute paths in include and exclude
            // - Try to avoid exclude and prefer include
            loader : "babel-loader",
            // the loader which should be applied, it'll be resolved relative to
            // the context
            // -loader suffix is no longer optional in webpack2 for clarity
            // reasons
            // see webpack 1 upgrade guide
            options : {
                presets : [ "@babel/preset-env", "@babel/preset-react" ]
            }
        // options for the loader
        } ]
    },
    optimization : {
        minimizer : [ new UglifyJsPlugin({
            cache : true,
            parallel : true,
            sourceMap : true
        // set to true if you want JS source maps
        }) ]
    }
}