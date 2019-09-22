webpackHotUpdate("styles",{

/***/ "./styles/services.less":
/*!******************************!*\
  !*** ./styles/services.less ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"_2C5xTtzSbldprRL969nkls","title":"_3So_jI1Ltk3h6D_-Gzmg-t","line":"_19z8V_Pg9v5gM1_6TYV7HR","info":"bYf0bEZJrC4S_gC9A7daa","infoSecond":"Cc3697Rw-Y2f7qDHmGejk"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1569184527746");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.c7a20846ad9b70a1eba1.hot-update.js.map