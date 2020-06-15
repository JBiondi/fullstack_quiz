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

eval("var promptsArray = [];\nvar currentPrompt = 0;\nvar lengthOfQuiz = 0;\nvar userCorrectScore = 0;\nvar currentID; // Selection screen elements\n\nvar chooseHeader = document.querySelector('.choose-h1');\nvar selectionVideoGameQuotes = document.querySelector('.selection-vg-quotes');\nvar selectionProgramming = document.querySelector('.selection-programming'); // Quiz screen elements\n\nvar body = document.body;\nvar promptAnswerContainer = document.querySelector('.prompt-answer-container');\nvar quizTitle = document.querySelector('.quiz-title');\nvar choicesContainer = document.querySelector('.choices-container');\nvar allChoices = document.querySelectorAll('.choice');\nvar choice0 = document.querySelector('.choiceIndex0');\nvar choice1 = document.querySelector('.choiceIndex1');\nvar choice2 = document.querySelector('.choiceIndex2');\nvar choice3 = document.querySelector('.choiceIndex3');\nvar photoCredit = document.querySelector('.photo-credit'); // Answer elements\n\nvar correctNotification = document.querySelector('.correct-notification');\nvar incorrectNotification = document.querySelector('.incorrect-notification');\nvar nextButton = document.querySelector('.next-button'); // Final elements\n\nvar userScoreNotification = document.querySelector('.user-score-notification');\nvar displayNameForm = document.querySelector('.display-name-form');\nvar displayNamePrompt = document.querySelector('.display-name-prompt'); // Add event listeners\n\nif (selectionVideoGameQuotes) {\n  selectionVideoGameQuotes.addEventListener('click', userSelectedVGQuotesQuiz);\n}\n\nif (selectionProgramming) {\n  selectionProgramming.addEventListener('click', userSelectedDjangoQuiz);\n}\n\nif (choice0) {\n  choice0.addEventListener('click', revealAnswer);\n}\n\nif (choice1) {\n  choice1.addEventListener('click', revealAnswer);\n}\n\nif (choice2) {\n  choice2.addEventListener('click', revealAnswer);\n}\n\nif (choice3) {\n  choice3.addEventListener('click', revealAnswer);\n}\n\nif (nextButton) {\n  nextButton.addEventListener('click', nextPrompt);\n}\n\nfunction getCookie(name) {\n  if (!document.cookie) {\n    return null;\n  }\n\n  var token = document.cookie.split(';').map(function (c) {\n    return c.trim();\n  }).filter(function (c) {\n    return c.startsWith(name + '=');\n  });\n\n  if (token.length === 0) {\n    return null;\n  }\n\n  return decodeURIComponent(token[0].split('=')[1]);\n}\n\nvar csrftoken = getCookie('csrftoken');\n\nfunction hideElement(element) {\n  element.style.display = 'none';\n}\n\nfunction showElement(element) {\n  element.style.display = 'block';\n}\n\nfunction showFlexElement(element) {\n  element.style.display = 'flex';\n}\n\nfunction hideSelectionElements() {\n  hideElement(selectionVideoGameQuotes);\n  hideElement(selectionProgramming);\n  hideElement(chooseHeader);\n}\n\nfunction showPromptElements() {\n  showFlexElement(promptAnswerContainer);\n  showFlexElement(choicesContainer);\n}\n\nfunction applyVideoGameQuizStyling() {\n  promptAnswerContainer.style.fontFamily = 'IM Fell English';\n  promptAnswerContainer.style.color = 'brown';\n\n  if (screen.width > 580) {\n    body.style.backgroundImage = \"url('static/img/video_game_quotes_quiz_background.png')\";\n  }\n\n  if (screen.width < 580) {\n    promptAnswerContainer.style.width = '300px';\n    promptAnswerContainer.style.fontSize = '38px';\n    promptAnswerContainer.style.marginTop = '15px';\n    quizTitle.style.fontSize = '20px';\n  }\n\n  promptAnswerContainer.style.fontSize = '45px';\n  correctNotification.innerHTML = '⌖  CORRECT  ⌖';\n  incorrectNotification.innerHTML = '⌖  INCORRECT  ⌖';\n  quizTitle.innerHTML = ' - video game quotes quiz - ';\n  quizTitle.style.color = '#1f2b2b';\n  allChoices.forEach(function (choice) {\n    choice.style.backgroundColor = 'lightslategrey';\n  });\n  nextButton.innerHTML = '➳';\n  nextButton.style.color = '#1f2b2b';\n  nextButton.style.paddingLeft = '32px';\n}\n\nfunction applyDjangoQuizStyling() {\n  promptAnswerContainer.style.fontFamily = 'Cute Font, cursive';\n  promptAnswerContainer.style.color = 'white';\n\n  if (screen.width > 580) {\n    body.style.backgroundImage = \"url('static/img/django_quiz_background.png')\";\n    showElement(photoCredit);\n  }\n\n  body.style.backgroundColor = 'black';\n\n  if (screen.width < 580) {\n    promptAnswerContainer.style.width = '300px';\n    promptAnswerContainer.style.fontSize = '38px';\n    promptAnswerContainer.style.marginTop = '15px';\n    quizTitle.style.fontSize = '20px';\n  }\n\n  promptAnswerContainer.style.fontSize = '58px';\n  correctNotification.innerHTML = '⌨  CORRECT  ⌨';\n  correctNotification.style.color = 'ivory';\n  incorrectNotification.innerHTML = '⌨  INCORRECT  ⌨';\n  incorrectNotification.style.color = 'ivory';\n  quizTitle.innerHTML = '- programming with django quiz -';\n  quizTitle.style.color = 'cornsilk';\n  allChoices.forEach(function (choice) {\n    choice.style.backgroundColor = 'cornsilk';\n    choice.style.color = '#1f2b2b';\n  });\n  nextButton.style.paddingLeft = '0px';\n  nextButton.style.paddingRight = '10px';\n  nextButton.style.fontSize = '75px';\n  nextButton.style.color = 'ivory';\n  nextButton.style.fontWeight = 'bold';\n  nextButton.innerHTML = '>>>';\n  userScoreNotification.style.color = 'ivory';\n  displayNamePrompt.style.color = 'ivory';\n  displayNameForm.style.color = 'ivory';\n}\n\nfunction userSelectedVGQuotesQuiz() {\n  applyVideoGameQuizStyling();\n  var quizID = 1;\n  getQuiz(quizID);\n}\n\nfunction userSelectedDjangoQuiz() {\n  applyDjangoQuizStyling();\n  var quizID = 2;\n  getQuiz(quizID);\n}\n\nfunction getQuiz(selectedQuizID) {\n  hideSelectionElements();\n  showPromptElements();\n  fetch(\"http://localhost:8000/api/quiz_selection_api_endpoint/\".concat(selectedQuizID, \"/\"), {\n    method: 'GET',\n    headers: {\n      'Content-Type': 'application/json',\n      'X-CSRFToken': csrftoken\n    }\n  }).then(function (response) {\n    return response.json();\n  }).then(function populateLayout(data) {\n    // data.forEach(prompt => console.log(prompt));\n    promptAnswerContainer.innerHTML = \"\".concat(data[0].prompt_text);\n    choice0.innerHTML = \"\".concat(data[0].answer0);\n    choice1.innerHTML = \"\".concat(data[0].answer1);\n    choice2.innerHTML = \"\".concat(data[0].answer2);\n    choice3.innerHTML = \"\".concat(data[0].answer3);\n    promptsArray = data;\n    lengthOfQuiz = promptsArray.length;\n  });\n  showElement(quizTitle);\n}\n\nfunction revealAnswer(event) {\n  showFlexElement(nextButton);\n  hideElement(choicesContainer);\n  promptAnswerContainer.innerHTML = \"\".concat(promptsArray[currentPrompt].answer_text);\n\n  if (event.target.classList.contains(promptsArray[currentPrompt].correct_choice)) {\n    showElement(correctNotification);\n    userCorrectScore += 1;\n  } else {\n    showElement(incorrectNotification);\n  }\n}\n\nfunction nextPrompt() {\n  currentPrompt += 1;\n  hideElement(nextButton);\n  hideElement(correctNotification);\n  hideElement(incorrectNotification);\n\n  if (currentPrompt < lengthOfQuiz) {\n    showPromptElements();\n    promptAnswerContainer.innerHTML = \"\".concat(promptsArray[currentPrompt].prompt_text);\n    choice0.innerHTML = \"\".concat(promptsArray[currentPrompt].answer0);\n    choice1.innerHTML = \"\".concat(promptsArray[currentPrompt].answer1);\n    choice2.innerHTML = \"\".concat(promptsArray[currentPrompt].answer2);\n    choice3.innerHTML = \"\".concat(promptsArray[currentPrompt].answer3);\n  } else {\n    hideElement(promptAnswerContainer);\n    showFinalElements();\n  }\n}\n\nfunction showFinalElements() {\n  showElement(userScoreNotification);\n  userScoreNotification.innerHTML = \"you got \".concat(userCorrectScore, \" out of \").concat(lengthOfQuiz, \"!\");\n  showElement(displayNameForm);\n  fetch(\"http://localhost:8000/api/receive_user_score_api_endpoint/\".concat(userCorrectScore, \"/\"), {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n      'X-CSRFToken': csrftoken\n    }\n  }).then(function (response) {\n    return response.json();\n  }).then(function acquireRelevantID(data) {\n    currentID = data;\n  });\n}\n\n//# sourceURL=webpack:///./frontend/src/index.js?");

/***/ })

/******/ });