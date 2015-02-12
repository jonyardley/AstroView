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
          console.log("toolbar loaded!");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xiYXIvdG9vbGJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxLQUFLLHlDQUVBLE9BQU87OztBQUZaLFdBQUssZUFBTCxLQUFLOzs7Ozs7O0FBRUEsYUFBTztBQUlSLGlCQUpDLE9BQU8sQ0FJUCxLQUFLO2dDQUpMLE9BQU87O0FBS2xCLGNBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ25CLGlCQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDL0I7OzZCQVBXLE9BQU87QUFFWixnQkFBTTttQkFBQSxrQkFBRTtBQUFFLHFCQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7YUFBRTs7Ozs7O2VBRnRCLE9BQU8iLCJmaWxlIjoidG9vbGJhci90b29sYmFyLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=