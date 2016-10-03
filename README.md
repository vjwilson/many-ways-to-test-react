# The Many Ways to Test React

This repo consists of several independent projects, as examples of a sample app and testing. Each example has its own set of dependencies to install.

## Getting Started

To work with with a version of the app, change into its directory and install its dependencies. (The dependencies only have to be installed once, unless you update the list in the project's `package.json` file.)

        cd ex4-mocha-enzyme-es6
        npm install

To run the app,

        npm start

This script compiles the JS and automatically opens the app in a browswer tab. If you make changes to one of the JS files, it recompiles them and refreshes the browswer.

## Tests

To run the tests,

        npm test

To run the tests in "watch" mode, where any changes to the app's JS files, or changes to existing test files, will cause the tests to re-run,

        npm test:watch

(If you add a new file, or if you limit the tests run by adding a `.only` to a suite or test and then remove the limit, you will need to CTRL-C the watch command and re-run the watch script.)

## Synopsis of mini-projects

1. ex1-react-es5: Just the React app in ES5 style (no tests)
2. ex2-mocha-react-test-utils: ES5 app and rudimentary test setup with React-Test-Utils (and a little Shallow-Test-Utils) libraries
3. ex3-mocha-enzyme: ES5 app and test setup with Enzyme library
4. ex4-mocha-enzyme: app converted to ES6-style React, using the Enzyme tests as a safety check

Good bug hunting!
