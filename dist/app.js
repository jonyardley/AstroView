System.register(["./utils/state"], function (_export) {
  "use strict";

  var State, _prototypeProperties, _classCallCheck, App;
  return {
    setters: [function (_utilsState) {
      State = _utilsState.State;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      App = _export("App", (function () {
        function App(state) {
          _classCallCheck(this, App);

          this.state = state;
        }

        _prototypeProperties(App, {
          inject: {
            value: function inject() {
              return [State];
            },
            writable: true,
            configurable: true
          }
        });

        return App;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxLQUFLLHlDQUtBLEdBQUc7OztBQUxSLFdBQUssZUFBTCxLQUFLOzs7Ozs7O0FBS0EsU0FBRztBQUlILGlCQUpBLEdBQUcsQ0FJRixLQUFLO2dDQUpOLEdBQUc7O0FBS2QsY0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDbkI7OzZCQU5XLEdBQUc7QUFFUixnQkFBTTttQkFBQSxrQkFBRTtBQUFFLHFCQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7YUFBRTs7Ozs7O2VBRnRCLEdBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=