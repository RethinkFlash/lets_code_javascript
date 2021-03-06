// Karma configuration
// Generated on Thu Sep 27 2012 16:15:00 GMT-0700 (PDT)


// base path, that will be used to resolve files and exclude
basePath = '..';


// list of files / patterns to load in the browser
files = [
	MOCHA,
	MOCHA_ADAPTER,
	"node_modules/expect.js/expect.js",

	"generated/build/client/vendor/jquery-1.8.2.js",
	"generated/build/client/vendor/raphael-2.1.0.js",


//	"src/client/svg_canvas.js",
//	"src/client/client.js",
//	"src/client/_html_element_test.js",
//	"src/client/html_element.js",
//	"src/client/_svg_canvas_test.js",
//	"src/client/_client_test.js",

	"src/client/**/*.js",
	"build/karma_commonjs_bridge.js"

//	"generated/build/client/_test_bundle.js"
];


// list of files to exclude
exclude = [

];


preprocessors = {
	"src/client/*.js": "commonjs"
};


// test results reporter to use
// possible values: dots || progress
reporter = 'dots';


// web server port
port = 8080;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_DEBUG;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = false;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari
// - PhantomJS
browsers = [];


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;
