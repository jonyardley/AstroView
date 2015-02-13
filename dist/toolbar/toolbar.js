System.register(["../app"], function (_export) {
  "use strict";

  var App, _prototypeProperties, _classCallCheck, Toolbar;
  return {
    setters: [function (_app) {
      App = _app.App;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Toolbar = _export("Toolbar", (function () {
        function Toolbar(app) {
          _classCallCheck(this, Toolbar);

          this.app = app;
        }

        _prototypeProperties(Toolbar, {
          inject: {
            value: function inject() {
              return [App];
            },
            writable: true,
            configurable: true
          }
        });

        return Toolbar;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xiYXIvdG9vbGJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxHQUFHLHlDQUVFLE9BQU87OztBQUZaLFNBQUcsUUFBSCxHQUFHOzs7Ozs7O0FBRUUsYUFBTztBQUlSLGlCQUpDLE9BQU8sQ0FJUCxHQUFHO2dDQUpILE9BQU87O0FBS2xCLGNBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1NBQ2Y7OzZCQU5XLE9BQU87QUFFWixnQkFBTTttQkFBQSxrQkFBRTtBQUFFLHFCQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7YUFBRTs7Ozs7O2VBRnBCLE9BQU8iLCJmaWxlIjoidG9vbGJhci90b29sYmFyLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=