/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/src/index.js":
/*!*******************************!*\
  !*** ./frontend/src/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Selection screen elements\nvar chooseHeader = document.querySelector('.choose-h1');\nvar selectionVideoGameQuotes = document.querySelector('.selection-vg-quotes');\nvar selectionProgramming = document.querySelector('.selection-programming'); // Quiz elements\n\nvar promptAnswerContainer = document.querySelector('.prompt-answer-container');\nvar quizTitle = document.querySelector('.quiz-title');\nvar nextButton = document.querySelector('.next-button');\nvar choicesContainer = document.querySelector('.choices-container');\nvar choice0 = document.querySelector('.choice0');\nvar choice1 = document.querySelector('.choice1');\nvar choice2 = document.querySelector('.choice2');\nvar choice3 = document.querySelector('.choice3'); //\n\nvar correctNotification = document.querySelector('.correct-notification');\nvar incorrectNotification = document.querySelector('.incorrect-notification'); // Add event listeners\n\nif (selectionVideoGameQuotes) {\n  selectionVideoGameQuotes.addEventListener('click', selectedVGQuotes);\n  selectionProgramming.addEventListener('click', selectedProgramming);\n}\n\nfunction getCookie(name) {\n  if (!document.cookie) {\n    return null;\n  }\n\n  var token = document.cookie.split(';').map(function (c) {\n    return c.trim();\n  }).filter(function (c) {\n    return c.startsWith(name + '=');\n  });\n\n  if (token.length === 0) {\n    return null;\n  }\n\n  return decodeURIComponent(token[0].split('=')[1]);\n}\n\nvar csrftoken = getCookie('csrftoken');\n\nfunction showQuizElements() {\n  promptAnswerContainer.style.display = 'block';\n  nextButton.style.display = 'block';\n  choicesContainer.style.display = 'block';\n}\n\nfunction selectedVGQuotes() {\n  showQuizElements(); // Remove event listeners\n\n  selectionVideoGameQuotes.removeEventListener('click', selectedVGQuotes);\n  selectionProgramming.removeEventListener('click', selectedProgramming); // Hide choice related elements\n\n  selectionVideoGameQuotes.style.display = 'none';\n  selectionProgramming.style.display = 'none';\n  chooseHeader.style.display = 'none'; // Tell the backend we've chosen this quiz\n\n  var selectedQuizID = 1;\n  var prompts = [];\n  fetch(\"http://localhost:8000/api/quiz_selection_api_endpoint/\".concat(selectedQuizID, \"/\"), {\n    method: 'GET',\n    headers: {\n      'Content-Type': 'application/json',\n      'X-CSRFToken': csrftoken,\n      'X-Requested-With': 'XMLHttpRequest'\n    }\n  }).then(function (response) {\n    return response.json();\n  }).then(function populateLayout(data) {\n    data.forEach(function (prompt) {\n      return console.log(prompt);\n    });\n    promptAnswerContainer.innerHTML = \"\".concat(data[0].prompt_text);\n  }); // Show title\n\n  quizTitle.innerHTML = 'Video Game Quotes';\n}\n\nfunction selectedProgramming() {\n  // Remove event listeners\n  selectionVideoGameQuotes.removeEventListener('click', selectedVGQuotes);\n  selectionProgramming.removeEventListener('click', selectedProgramming);\n}\n\n//# sourceURL=webpack:///./frontend/src/index.js?");

/***/ })

/******/ });