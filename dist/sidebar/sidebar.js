System.register(["../utils/state"], function (_export) {
  "use strict";

  var State, _prototypeProperties, _classCallCheck, Sidebar;
  return {
    setters: [function (_utilsState) {
      State = _utilsState.State;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Sidebar = _export("Sidebar", (function () {
        function Sidebar(state) {
          _classCallCheck(this, Sidebar);

          this.state = state;
        }

        _prototypeProperties(Sidebar, {
          inject: {
            value: function inject() {
              return [State];
            },
            writable: true,
            configurable: true
          }
        });

        return Sidebar;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIvc2lkZWJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxLQUFLLHlDQUVBLE9BQU87OztBQUZaLFdBQUssZUFBTCxLQUFLOzs7Ozs7O0FBRUEsYUFBTztBQUlSLGlCQUpDLE9BQU8sQ0FJUCxLQUFLO2dDQUpMLE9BQU87O0FBS2xCLGNBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO1NBQ2xCOzs2QkFOVyxPQUFPO0FBRVosZ0JBQU07bUJBQUEsa0JBQUU7QUFBRSxxQkFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQUU7Ozs7OztlQUZ0QixPQUFPIiwiZmlsZSI6InNpZGViYXIvc2lkZWJhci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9