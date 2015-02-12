System.register(["./images"], function (_export) {
  "use strict";

  var Images, _prototypeProperties, _classCallCheck, State;
  return {
    setters: [function (_images) {
      Images = _images.Images;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      State = _export("State", (function () {
        function State(images) {
          _classCallCheck(this, State);

          this.mode = "view";
          this.modes = {
            view: true,
            composite: false
          };
          this.selectedImage = null;
          this.images = images;
        }

        _prototypeProperties(State, {
          inject: {
            value: function inject() {
              return [Images];
            },
            writable: true,
            configurable: true
          }
        }, {
          changeMode: {
            value: function changeMode(mode) {
              var _this = this;


              Object.keys(this.modes).forEach(function (key) {
                return _this.modes[key] = mode === key;
              });

              this.mode = mode;
            },
            writable: true,
            configurable: true
          }
        });

        return State;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL3N0YXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFRLE1BQU0seUNBR0QsS0FBSzs7O0FBSFYsWUFBTSxXQUFOLE1BQU07Ozs7Ozs7QUFHRCxXQUFLO0FBSUwsaUJBSkEsS0FBSyxDQUlKLE1BQU07Z0NBSlAsS0FBSzs7QUFLaEIsY0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7QUFDbkIsY0FBSSxDQUFDLEtBQUssR0FBRztBQUNaLGdCQUFJLEVBQUUsSUFBSTtBQUNWLHFCQUFTLEVBQUUsS0FBSztXQUNoQixDQUFDO0FBQ0YsY0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7QUFDMUIsY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDckI7OzZCQVpXLEtBQUs7QUFFVixnQkFBTTttQkFBQSxrQkFBRTtBQUFFLHFCQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7YUFBRTs7Ozs7QUFZbkMsb0JBQVU7bUJBQUMsb0JBQUMsSUFBSSxFQUFFOzs7O0FBRWpCLG9CQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUUsVUFBQSxHQUFHO3VCQUNuQyxNQUFLLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBSSxJQUFJLEtBQUssR0FBRyxBQUFDO2VBQUEsQ0FDaEMsQ0FBQzs7QUFFRixrQkFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7YUFDakI7Ozs7OztlQXJCVyxLQUFLIiwiZmlsZSI6InV0aWxzL3N0YXRlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=