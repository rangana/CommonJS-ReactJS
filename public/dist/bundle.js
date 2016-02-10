/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ReactLabel = __webpack_require__(1);
	var ReactBox = __webpack_require__(2);

	var MsPlayer = React.createClass({displayName: "MsPlayer",
	    render: function () {
	        return (
	            React.createElement("div", null, 
	                React.createElement("h1", null, "Inside the MsPlayer Component"), 
	                React.createElement(ReactLabel, {label: "Hi from common lable component"}), 
	                React.createElement(ReactBox, {intialVal: "text of common text box component"})
	            )
	        );
	    }
	});

	ReactDOM.render(React.createElement(MsPlayer, null), document.getElementById('assignment-player'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var ReactLabel = React.createClass({displayName: "ReactLabel",
	    render: function () {
	        return (
	            React.createElement("h1", null, this.props.label)
	        )
	    }
	});

	module.exports = ReactLabel;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	var ReactBox = React.createClass({displayName: "ReactBox",
	    render: function () {
	        return (
	            React.createElement("input", {type: "text"})
	        );
	    }
	});

	module.exports = ReactBox;


/***/ }
/******/ ]);