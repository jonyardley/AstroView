System.register(["aurelia-framework", "./utils/images", "./utils/events"], function (_export) {
  "use strict";

  var LogManager, Images, events, _prototypeProperties, _classCallCheck, log, App;
  return {
    setters: [function (_aureliaFramework) {
      LogManager = _aureliaFramework.LogManager;
    }, function (_utilsImages) {
      Images = _utilsImages.Images;
    }, function (_utilsEvents) {
      events = _utilsEvents["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      log = LogManager.getLogger("av::state");
      App = _export("App", (function () {
        function App(images) {
          _classCallCheck(this, App);

          this.mode = "view";
          this.modes = {
            view: true,
            composite: false,
            analyze: false
          };
          this.images = images;
          events.subscribe("canvas:ready", this.canvasReady.bind(this));
        }

        _prototypeProperties(App, {
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
              events.publish("mode:change", this.mode);
              log.info("state changed:", this.mode);
            },
            writable: true,
            configurable: true
          },
          canvasReady: {
            value: function canvasReady() {
              this.images.newImage({ file: "/assets/fits/656nmos.fits" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxVQUFVLEVBR1YsTUFBTSxFQUNQLE1BQU0seUNBSFQsR0FBRyxFQUtNLEdBQUc7OztBQU5SLGdCQUFVLHFCQUFWLFVBQVU7O0FBR1YsWUFBTSxnQkFBTixNQUFNOztBQUNQLFlBQU07Ozs7Ozs7QUFIVCxTQUFHLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7QUFLOUIsU0FBRztBQUlILGlCQUpBLEdBQUcsQ0FJRixNQUFNO2dDQUpQLEdBQUc7O0FBS2QsY0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7QUFDbkIsY0FBSSxDQUFDLEtBQUssR0FBRztBQUNaLGdCQUFJLEVBQUUsSUFBSTtBQUNWLHFCQUFTLEVBQUUsS0FBSztBQUNoQixtQkFBTyxFQUFFLEtBQUs7V0FDZCxDQUFDO0FBQ0YsY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsZ0JBQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDOUQ7OzZCQWJXLEdBQUc7QUFFUixnQkFBTTttQkFBQSxrQkFBRTtBQUFFLHFCQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7YUFBRTs7Ozs7QUFtQm5DLG9CQUFVO21CQUFDLG9CQUFDLElBQUksRUFBRTs7QUFDakIsb0JBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBRSxVQUFBLEdBQUc7dUJBQUksTUFBSyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUksSUFBSSxLQUFLLEdBQUcsQUFBQztlQUFBLENBQUUsQ0FBQztBQUMzRSxrQkFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsb0JBQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QyxpQkFBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdEM7Ozs7QUFFRCxxQkFBVzttQkFBQSx1QkFBRTtBQUNaLGtCQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSwyQkFBMkIsRUFBQyxDQUFDLENBQUM7YUFDMUQ7Ozs7OztlQTlCVyxHQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9