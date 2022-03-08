(self["webpackChunkmovies_app"] = self["webpackChunkmovies_app"] || []).push([["src_components_MoviesP_index_js"],{

/***/ "./src/components/MoviesP/Movie.js":
/*!*****************************************!*\
  !*** ./src/components/MoviesP/Movie.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");
/* harmony import */ var _Common_ButtonPrimary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Common/ButtonPrimary */ "./src/components/Common/ButtonPrimary.js");
/* harmony import */ var _assets_NoImage_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../assets/NoImage.jpg */ "./src/assets/NoImage.jpg");






var Movie = function Movie(_ref) {
  var id = _ref.id,
      title = _ref.title,
      poster_path = _ref.poster_path,
      release_date = _ref.release_date;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__.default, {
    className: "defaultPaper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, title.length > 24 ? "".concat(title.substring(0, 22), "...") : title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: poster_path ? "https://image.tmdb.org/t/p/w185_and_h278_bestv2".concat(poster_path) : _assets_NoImage_jpg__WEBPACK_IMPORTED_MODULE_2__.default,
    alt: "movie"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Date: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, release_date)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Common_ButtonPrimary__WEBPACK_IMPORTED_MODULE_1__.default, {
    type: "movies",
    to: "/MoviesDetails/Movie/".concat(id)
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Movie);

/***/ }),

/***/ "./src/components/MoviesP/Movies.js":
/*!******************************************!*\
  !*** ./src/components/MoviesP/Movies.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Movie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Movie */ "./src/components/MoviesP/Movie.js");
/* harmony import */ var _Common_Message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Common/Message */ "./src/components/Common/Message.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);






var Movies = function Movies(_ref) {
  var movies = _ref.movies,
      text = _ref.text;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Common_Message__WEBPACK_IMPORTED_MODULE_2__.default, {
    text: text
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "root"
  }, movies.map(function (movie) {
    var id = movie.id,
        title = movie.title,
        poster_path = movie.poster_path,
        release_date = movie.release_date;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Movie__WEBPACK_IMPORTED_MODULE_1__.default, {
      key: id,
      id: id,
      title: title,
      poster_path: poster_path,
      release_date: release_date
    });
  })));
};

Movies.propTypes = {
  movies: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  text: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
};
/* harmony default export */ __webpack_exports__["default"] = (Movies);

/***/ }),

/***/ "./src/components/MoviesP/SearchMovie.js":
/*!***********************************************!*\
  !*** ./src/components/MoviesP/SearchMovie.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");






var SearchMovie = function SearchMovie(_ref) {
  var validateQMovie = _ref.validateQMovie;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__.default, {
    className: "paper defaultPaperSearch"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__.default, {
    id: "q_movie",
    label: "Movie",
    margin: "normal",
    variant: "outlined",
    onKeyPress: function onKeyPress(e) {
      return validateQMovie(e);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__.default, {
    onClick: function onClick(e) {
      return validateQMovie(e);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_4__.default, null)));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchMovie);

/***/ }),

/***/ "./src/components/MoviesP/index.js":
/*!*****************************************!*\
  !*** ./src/components/MoviesP/index.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _contexts_MovieContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contexts/MovieContext */ "./src/contexts/MovieContext.js");
/* harmony import */ var _SearchMovie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchMovie */ "./src/components/MoviesP/SearchMovie.js");
/* harmony import */ var _Movies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Movies */ "./src/components/MoviesP/Movies.js");
/* harmony import */ var _Common_ProgressBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Common/ProgressBar */ "./src/components/Common/ProgressBar.js");
/* harmony import */ var _Common_Message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Common/Message */ "./src/components/Common/Message.js");







var MoviesP = function MoviesP() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_MovieContext__WEBPACK_IMPORTED_MODULE_1__.MoviesContext),
      validateQMovie = _useContext.validateQMovie,
      doneFetch = _useContext.doneFetch,
      text = _useContext.text,
      movies = _useContext.movies;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SearchMovie__WEBPACK_IMPORTED_MODULE_2__.default, {
    validateQMovie: validateQMovie
  }), doneFetch ? movies.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Movies__WEBPACK_IMPORTED_MODULE_3__.default, {
    text: text,
    movies: movies
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Common_Message__WEBPACK_IMPORTED_MODULE_5__.default, {
    text: text
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Common_ProgressBar__WEBPACK_IMPORTED_MODULE_4__.default, null));
};

/* harmony default export */ __webpack_exports__["default"] = (MoviesP);

/***/ })

}]);
//# sourceMappingURL=src_components_MoviesP_index_js.bundle.js.map