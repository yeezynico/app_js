/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Home = function Home() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  console.log('Home', argument);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://empty-project/./src/Home.js?");

/***/ }),

/***/ "./src/PageDetail.js":
/*!***************************!*\
  !*** ./src/PageDetail.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar API_KEY = '7a138768c99c48a8be4faf7c29cccb0c';\nvar PageDetail = function PageDetail(argument) {\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.trim().replace(/\\s+/g, \"-\");\n    var displayGame = function displayGame(gameData, trailerData) {\n      var name = gameData.name,\n        released = gameData.released,\n        description = gameData.description,\n        background_image = gameData.background_image,\n        developers = gameData.developers,\n        genres = gameData.genres,\n        tags = gameData.tags,\n        publishers = gameData.publishers,\n        parent_platforms = gameData.parent_platforms,\n        website = gameData.website,\n        trailers = gameData.trailers,\n        rating = gameData.rating,\n        metacritic = gameData.metacritic,\n        screenshots = gameData.screenshots,\n        stores = gameData.stores;\n      var articleDOM = document.querySelector(\".page-detail .article\");\n      articleDOM.querySelector(\"h1.title\").innerHTML = name;\n      articleDOM.querySelector(\"img.game-image\").src = background_image;\n      articleDOM.querySelector(\"p.description\").innerHTML = description;\n      articleDOM.querySelector(\"p.release-date\").innerHTML = released;\n      articleDOM.querySelector(\"p.dev\").innerHTML = developers[0].name;\n      articleDOM.querySelector(\"p.tag span\").innerHTML = tags[0].name;\n      articleDOM.querySelector(\"p.genre\").innerHTML = genres[0].name;\n      articleDOM.querySelector(\"p.publisher\").innerHTML = publishers[0].name;\n      articleDOM.querySelector(\"p.platform\").innerHTML = parent_platforms.map(function (platform) {\n        return platform.platform.name;\n      }).join(\", \");\n      articleDOM.querySelector(\"p.web\").innerHTML = website;\n      var trailerContainer = articleDOM.querySelector(\".trailer\");\n      var firstTrailer = trailerData.results[0];\n      if (firstTrailer) {\n        trailerContainer.innerHTML = \"<iframe width=\\\"560\\\" height=\\\"315\\\" src=\\\"\".concat(firstTrailer.data.max, \"\\\" frameborder=\\\"0\\\" allowfullscreen></iframe>\");\n      }\n      articleDOM.querySelector(\"p.note span\").innerHTML = rating;\n      articleDOM.querySelector(\"p.meta span\").innerHTML = metacritic;\n      articleDOM.querySelector(\"img.screenshots\").innerHTML = screenshots; // marche po\n      articleDOM.querySelector(\"p.store\").innerHTML = stores.map(function (store) {\n        return store.store.name;\n      }).join(\"<br><br>\");\n    };\n    var fetchGame = function fetchGame(url, argument) {\n      fetch(\"\".concat(url, \"/\").concat(argument, \"?key=\").concat(API_KEY)).then(function (response) {\n        return response.json();\n      }).then(function (responseData) {\n        fetchtrailer(url, argument, responseData);\n      });\n    };\n    var fetchtrailer = function fetchtrailer(url, argument, gameData) {\n      fetch(\"\".concat(url, \"/\").concat(argument, \"/movies?key=\").concat(API_KEY)).then(function (response) {\n        return response.json();\n      }).then(function (trailerData) {\n        displayGame(gameData, trailerData);\n      });\n    };\n    fetchGame('https://api.rawg.io/api/games', cleanedArgument);\n  };\n  var render = function render() {\n    pageContent.innerHTML = \"\\n    <section class=\\\"page-detail\\\">\\n    <div class=\\\"article\\\">\\n        <img class=\\\"game-image\\\" src=\\\"\\\">\\n\\n        <div class=\\\"titre_vote\\\">\\n            <h1 class=\\\"title\\\"></h1>\\n            <div class=\\\"note_and_vote\\\">\\n                <p class=\\\"note\\\"> <span></span>/5 </p>\\n                <p class=\\\"meta\\\">vote: <span></span></p>\\n            </div>\\n        </div>\\n\\n\\n\\n          <div>\\n           <p><strong>PLOT</strong></p>\\n           <p class=\\\"description\\\"></p>\\n          </div>\\n\\n          <div class=\\\"aligne\\\">\\n            <div>\\n             <p><strong>Release Date :</strong></p>\\n             <p class=\\\"release-date\\\"></p>\\n            </div>\\n                <div>\\n                    <p><strong>Developer</strong></p>\\n                    <p class=\\\"dev\\\"></p>\\n                </div>\\n                <div>\\n                    <p><strong>platform</strong></p>\\n                    <p class=\\\"platform\\\"></p>\\n                </div>\\n                <div>\\n                    <p><strong>publisher</strong></p>\\n                    <p class=\\\"publisher\\\"></p>\\n                </div>\\n          </div>\\n          <div class=\\\"aligne2\\\">\\n                <div>\\n                    <p><strong>genre</strong></p>\\n                    <p class=\\\"genre\\\"></p>\\n                </div>\\n                <div>\\n                    <p><strong>tag</strong></p>\\n                    <p class=\\\"tag\\\"> tags<span></span> </p>\\n                </div>\\n          </div>\\n            <div>\\n            <p class=\\\"red\\\"<strong>BUY</strong></p>\\n            <p class=\\\"store\\\"></p>\\n            </div>\\n            <p class=\\\"web\\\"></p>\\n            <div>\\n            <p class=\\\"red\\\"><strong>TRAILER</strong></p>\\n            <div class=\\\"trailer\\\"></div>\\n            </div>\\n            <img class=\\\"screenshots\\\" src=\\\"\\\">\\n            <p class=\\\"store\\\"></p>\\n\\n</section>\\n      \";\n    preparePage();\n  };\n  render();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageDetail);\n\n//# sourceURL=webpack://empty-project/./src/PageDetail.js?");

/***/ }),

/***/ "./src/PageList.js":
/*!*************************!*\
  !*** ./src/PageList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar API_KEY = '7a138768c99c48a8be4faf7c29cccb0c';\nvar PageList = function PageList() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var currentPage = 1; // Variable pour suivre la page actuelle\n  var totalImages = 0; // Variable pour suivre le nombre total d'images affichées\n\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.trim().replace(/\\s+/g, '-');\n    var displayResults = function displayResults(articles) {\n      var maxImage = 9;\n      var resultsContainer = document.querySelector('.page-list .articles');\n      if (currentPage === 1) {\n        // Si c'est la première page, nettoie le conteneur des résultats précédents\n        resultsContainer.innerHTML = '';\n      }\n      var articless = articles.slice(0, maxImage);\n      var resultsContent = articless.map(function (article) {\n        return \"<article class=\\\"cardGame\\\">\\n          <a href=\\\"#pagedetail/\".concat(article.id, \"\\\"><img src=\\\"\").concat(article.background_image, \"\\\"></a>\\n          <h1>\").concat(article.name, \"</h1>\\n          <h2>\").concat(article.parent_platforms.map(function (platform) {\n          return platform.platform.name;\n        }).join(\", \"), \"</h2>\\n        </article>\");\n      });\n      resultsContainer.innerHTML += resultsContent.join(\"\\n\");\n      totalImages += articless.length; // Met à jour le nombre total d'images affichées\n    };\n    var fetchList = function fetchList(url, argument) {\n      var finalURL = argument ? \"\".concat(url, \"&search=\").concat(argument) : url;\n      fetch(finalURL).then(function (response) {\n        return response.json();\n      }).then(function (responseData) {\n        displayResults(responseData.results);\n        // Vérifie si le bouton \"Show More\" doit être affiché\n        if (totalImages >= 27) {\n          document.getElementById(\"show-more-btn\").style.display = \"none\";\n        } else {\n          document.getElementById(\"show-more-btn\").style.display = \"block\";\n        }\n      })[\"catch\"](function (error) {\n        return console.error('Erreur lors de la récupération des données:', error);\n      });\n    };\n    var loadMoreImages = function loadMoreImages() {\n      var maxImage = 9;\n      fetchList(\"https://api.rawg.io/api/games?key=\".concat(API_KEY, \"&page=\").concat(currentPage).concat(argument ? \"&search=\".concat(argument) : ''));\n      currentPage++; // Incrémente la page pour la prochaine requête\n    };\n    var searchForm = document.getElementById(\"searchForm\");\n    var searchInput = document.getElementById(\"searchInput\");\n    var showMoreButton = document.getElementById(\"show-more-btn\");\n\n    // Ajout d'un gestionnaire d'événements pour la soumission du formulaire de recherche\n    searchForm.addEventListener(\"submit\", function (event) {\n      event.preventDefault();\n      currentPage = 1; // Réinitialise la page lors d'une nouvelle recherche\n      totalImages = 0; // Réinitialise le nombre total d'images affichées lors d'une nouvelle recherche\n      var searchQuery = searchInput.value;\n      fetchList(\"https://api.rawg.io/api/games?key=\".concat(API_KEY), searchQuery);\n    });\n\n    // Chargez les résultats sans recherche initiale\n    fetchList(\"https://api.rawg.io/api/games?key=\".concat(API_KEY), cleanedArgument);\n\n    // Gestionnaire d'événement pour le bouton \"Show More\"\n    showMoreButton.addEventListener(\"click\", loadMoreImages);\n  };\n  var render = function render() {\n    var pageContent = document.getElementById(\"pageContent\");\n    pageContent.innerHTML = \"\\n    <h2>Welcome,</h2>\\n    <p>The Hyper Progame is the worlds premier event for computer and video games and related products. At The\\n        Hyper\\n        Progame,\\n        the video game industrys top talent pack the Los Angeles Convention Center, connecting tens of thousands of\\n        the\\n        best,\\n        brightest, and most innovative in the interactive entertainment industry. For three exciting days,\\n        leading-edge\\n        companies,\\n        groundbreaking new technologies, and never-before-seen products will be showcased. The Hyper Progame\\n        connects\\n        you\\n        with both new and existing partners, industry executives, gamers, and social influencers providing\\n        unprecedented\\n        exposure\\n      </p>\\n      <section class=\\\"page-list\\\">\\n        <div class=\\\"articles\\\">Loading...</div>\\n      </section>\\n      <button id=\\\"show-more-btn\\\" style=\\\"display:none;\\\">Show More</button>\\n    \";\n    preparePage();\n  };\n  render();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageList);\n\n//# sourceURL=webpack://empty-project/./src/PageList.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ \"./src/routes.js\");\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/index.scss */ \"./src/style/index.scss\");\n\n\nvar callRoute = function callRoute() {\n  var hash = window.location.hash;\n  var pathParts = hash.substring(1).split('/');\n  var pageName = pathParts[0];\n  var pageArgument = pathParts[1] || '';\n  var pageFunction = _routes__WEBPACK_IMPORTED_MODULE_0__[\"default\"][pageName];\n  if (pageFunction !== undefined) {\n    pageFunction(pageArgument);\n  }\n};\nwindow.addEventListener('hashchange', callRoute);\nwindow.addEventListener('DOMContentLoaded', callRoute);\n\n//# sourceURL=webpack://empty-project/./src/index.js?");

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ \"./src/Home.js\");\n/* harmony import */ var _PageList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageList */ \"./src/PageList.js\");\n/* harmony import */ var _PageDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageDetail */ \"./src/PageDetail.js\");\n\n\n\nvar routes = {\n  '': _Home__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  'pagelist': _PageList__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  'pagedetail': _PageDetail__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);\n\n//# sourceURL=webpack://empty-project/./src/routes.js?");

/***/ }),

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://empty-project/./src/style/index.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;