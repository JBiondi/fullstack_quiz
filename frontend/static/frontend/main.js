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

eval("var promptsArray = [];\nvar currentPrompt = 0;\nvar lengthOfQuiz = 0;\nvar userCorrectScore = 0;\nvar currentID; // Selection screen elements\n\nvar chooseHeader = document.querySelector('.choose-h1');\nvar selectionVideoGameQuotes = document.querySelector('.selection-vg-quotes');\nvar selectionProgramming = document.querySelector('.selection-programming'); // Quiz screen elements\n\nvar body = document.body;\nvar promptAnswerContainer = document.querySelector('.prompt-answer-container');\nvar quizTitle = document.querySelector('.quiz-title');\nvar choicesContainer = document.querySelector('.choices-container');\nvar choice0 = document.querySelector('.choiceIndex0');\nvar choice1 = document.querySelector('.choiceIndex1');\nvar choice2 = document.querySelector('.choiceIndex2');\nvar choice3 = document.querySelector('.choiceIndex3'); // Answer elements\n\nvar correctNotification = document.querySelector('.correct-notification');\nvar incorrectNotification = document.querySelector('.incorrect-notification');\nvar nextButton = document.querySelector('.next-button'); // Final elements\n\nvar userScoreNotification = document.querySelector('.user-score-notification');\nvar returnButton = document.querySelector('.return-button');\nvar displayNameForm = document.querySelector('.display-name-form'); // High score page elements\n\nvar highScoreTable = document.querySelector('.high-score-table');\nvar backButton = document.querySelector('.back-button'); // Add event listeners\n\nif (selectionVideoGameQuotes) {\n  selectionVideoGameQuotes.addEventListener('click', userSelectedVGQuotes);\n}\n\nif (selectionProgramming) {\n  selectionProgramming.addEventListener('click', userSelectedProgramming);\n}\n\nif (choice0) {\n  choice0.addEventListener('click', revealAnswer);\n}\n\nif (choice1) {\n  choice1.addEventListener('click', revealAnswer);\n}\n\nif (choice2) {\n  choice2.addEventListener('click', revealAnswer);\n}\n\nif (choice3) {\n  choice3.addEventListener('click', revealAnswer);\n}\n\nif (nextButton) {\n  nextButton.addEventListener('click', nextPrompt);\n}\n\nif (returnButton) {\n  returnButton.addEventListener('click', returnToStart);\n}\n\nif (backButton) {\n  backButton.addEventListener('click', resetStats);\n}\n\nfunction getCookie(name) {\n  if (!document.cookie) {\n    return null;\n  }\n\n  var token = document.cookie.split(';').map(function (c) {\n    return c.trim();\n  }).filter(function (c) {\n    return c.startsWith(name + '=');\n  });\n\n  if (token.length === 0) {\n    return null;\n  }\n\n  return decodeURIComponent(token[0].split('=')[1]);\n}\n\nvar csrftoken = getCookie('csrftoken');\n\nfunction hideElement(element) {\n  element.style.display = 'none';\n}\n\nfunction showElement(element) {\n  element.style.display = 'block';\n}\n\nfunction showFlexElement(element) {\n  element.style.display = 'flex';\n}\n\nfunction showSelectionElements() {\n  showElement(selectionVideoGameQuotes);\n  showElement(selectionProgramming);\n  showElement(chooseHeader);\n}\n\nfunction hideSelectionElements() {\n  hideElement(selectionVideoGameQuotes);\n  hideElement(selectionProgramming);\n  hideElement(chooseHeader);\n}\n\nfunction showPromptElements() {\n  showFlexElement(promptAnswerContainer);\n  showFlexElement(choicesContainer);\n}\n\nfunction userSelectedVGQuotes() {\n  promptAnswerContainer.style.fontFamily = 'IM Fell English';\n  body.style.backgroundImage = \"url('static/img/vg_background2.png')\";\n  correctNotification.innerHTML = '⌖  CORRECT  ⌖';\n  incorrectNotification.innerHTML = '⌖  INCORRECT  ⌖';\n  quizTitle.innerHTML = ' - video game quotes quiz - ';\n  nextButton.innerHTML = '➳';\n  nextButton.style.paddingLeft = '32px';\n  var quizID = 1;\n  grabQuiz(quizID);\n}\n\nfunction userSelectedProgramming() {\n  promptAnswerContainer.style.fontFamily = 'Cute Font, cursive';\n  promptAnswerContainer.style.fontSize = '58px';\n  correctNotification.innerHTML = '⌨  CORRECT  ⌨';\n  incorrectNotification.innerHTML = '⌨  INCORRECT  ⌨';\n  quizTitle.innerHTML = '- programming with django -';\n  nextButton.style.paddingLeft = '0px';\n  nextButton.style.paddingRight = '10px';\n  nextButton.style.fontSize = '75px';\n  nextButton.innerHTML = '>>>';\n  var quizID = 2;\n  grabQuiz(quizID);\n}\n\nfunction grabQuiz(selectedQuizID) {\n  hideSelectionElements();\n  showPromptElements();\n  fetch(\"http://localhost:8000/api/quiz_selection_api_endpoint/\".concat(selectedQuizID, \"/\"), {\n    method: 'GET',\n    headers: {\n      'Content-Type': 'application/json',\n      'X-CSRFToken': csrftoken\n    }\n  }).then(function (response) {\n    return response.json();\n  }).then(function populateLayout(data) {\n    data.forEach(function (prompt) {\n      return console.log(prompt);\n    });\n    promptAnswerContainer.innerHTML = \"\".concat(data[0].prompt_text);\n    choice0.innerHTML = \"\".concat(data[0].answer0);\n    choice1.innerHTML = \"\".concat(data[0].answer1);\n    choice2.innerHTML = \"\".concat(data[0].answer2);\n    choice3.innerHTML = \"\".concat(data[0].answer3);\n    promptsArray = data;\n    lengthOfQuiz = promptsArray.length;\n  });\n  showElement(quizTitle);\n}\n\nfunction revealAnswer(event) {\n  showFlexElement(nextButton);\n  hideElement(choicesContainer);\n  promptAnswerContainer.innerHTML = \"\".concat(promptsArray[currentPrompt].answer_text);\n\n  if (event.target.classList.contains(promptsArray[currentPrompt].correct_choice)) {\n    showElement(correctNotification);\n    userCorrectScore += 1;\n  } else {\n    showElement(incorrectNotification);\n  }\n}\n\nfunction nextPrompt() {\n  currentPrompt += 1;\n  hideElement(nextButton);\n  hideElement(correctNotification);\n  hideElement(incorrectNotification);\n\n  if (currentPrompt < lengthOfQuiz) {\n    showPromptElements();\n    promptAnswerContainer.innerHTML = \"\".concat(promptsArray[currentPrompt].prompt_text);\n    choice0.innerHTML = \"\".concat(promptsArray[currentPrompt].answer0);\n    choice1.innerHTML = \"\".concat(promptsArray[currentPrompt].answer1);\n    choice2.innerHTML = \"\".concat(promptsArray[currentPrompt].answer2);\n    choice3.innerHTML = \"\".concat(promptsArray[currentPrompt].answer3);\n  } else {\n    hideElement(promptAnswerContainer);\n    showFinalElements();\n  }\n}\n\nfunction showFinalElements() {\n  showElement(userScoreNotification);\n  userScoreNotification.innerHTML = \"You got \".concat(userCorrectScore, \" quotes correct out of a possible \").concat(lengthOfQuiz);\n  showElement(returnButton);\n  showElement(displayNameForm);\n  fetch(\"http://localhost:8000/api/receive_user_score_api_endpoint/\".concat(userCorrectScore, \"/\"), {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n      'X-CSRFToken': csrftoken\n    }\n  }).then(function (response) {\n    return response.json();\n  }).then(function acquireRelevantID(data) {\n    currentID = data;\n\n    if (data) {\n      console.log(currentID);\n    }\n  });\n}\n\nfunction resetStats() {\n  userCorrectScore = 0;\n  currentPrompt = 0;\n  lengthOfQuiz = 0;\n  promptsArray = [];\n}\n\nfunction returnToStart() {\n  hideElement(userScoreNotification);\n  hideElement(returnButton);\n  hideElement(displayNameForm);\n  hideElement(quizTitle);\n  showSelectionElements();\n  resetStats();\n}\n\n//# sourceURL=webpack:///./frontend/src/index.js?");

/***/ })

/******/ });