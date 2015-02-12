System.register(["../utils/state"], function (_export) {
  "use strict";

  var State, _prototypeProperties, _classCallCheck, Toolbar;
  return {
    setters: [function (_utilsState) {
      State = _utilsState.State;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Toolbar = _export("Toolbar", (function () {
        function Toolbar(state) {
          _classCallCheck(this, Toolbar);

          this.state = state;
        }

        _prototypeProperties(Toolbar, {
          inject: {
            value: function inject() {
              return [State];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xiYXIvdG9vbGJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxLQUFLLHlDQUVBLE9BQU87OztBQUZaLFdBQUssZUFBTCxLQUFLOzs7Ozs7O0FBRUEsYUFBTztBQUlSLGlCQUpDLE9BQU8sQ0FJUCxLQUFLO2dDQUpMLE9BQU87O0FBS2xCLGNBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ25COzs2QkFOVyxPQUFPO0FBRVosZ0JBQU07bUJBQUEsa0JBQUU7QUFBRSxxQkFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQUU7Ozs7OztlQUZ0QixPQUFPIiwiZmlsZSI6InRvb2xiYXIvdG9vbGJhci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9