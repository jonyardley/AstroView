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

          this.mode = "analyze";
          this.imageId = null;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL3N0YXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFRLE1BQU0seUNBR0QsS0FBSzs7O0FBSFYsWUFBTSxXQUFOLE1BQU07Ozs7Ozs7QUFHRCxXQUFLO0FBSUwsaUJBSkEsS0FBSyxDQUlKLE1BQU07Z0NBSlAsS0FBSzs7QUFLaEIsY0FBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7QUFDdEIsY0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDcEIsY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDckI7OzZCQVJXLEtBQUs7QUFFVixnQkFBTTttQkFBQSxrQkFBRTtBQUFFLHFCQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7YUFBRTs7Ozs7QUFRbkMsb0JBQVU7bUJBQUMsb0JBQUMsSUFBSSxFQUFFO0FBQ2pCLGtCQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzthQUNqQjs7Ozs7O2VBWlcsS0FBSyIsImZpbGUiOiJ1dGlscy9zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9