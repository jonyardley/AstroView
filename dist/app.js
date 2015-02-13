System.register(["aurelia-framework", "./utils/images"], function (_export) {
  "use strict";

  var LogManager, Images, _prototypeProperties, _classCallCheck, log, App;
  return {
    setters: [function (_aureliaFramework) {
      LogManager = _aureliaFramework.LogManager;
    }, function (_utilsImages) {
      Images = _utilsImages.Images;
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
              log.info("state changed:", this.mode);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxVQUFVLEVBR1YsTUFBTSx5Q0FGVixHQUFHLEVBSU0sR0FBRzs7O0FBTFIsZ0JBQVUscUJBQVYsVUFBVTs7QUFHVixZQUFNLGdCQUFOLE1BQU07Ozs7Ozs7QUFGVixTQUFHLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7QUFJOUIsU0FBRztBQUlILGlCQUpBLEdBQUcsQ0FJRixNQUFNO2dDQUpQLEdBQUc7O0FBS2QsY0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7QUFDbkIsY0FBSSxDQUFDLEtBQUssR0FBRztBQUNaLGdCQUFJLEVBQUUsSUFBSTtBQUNWLHFCQUFTLEVBQUUsS0FBSztBQUNoQixtQkFBTyxFQUFFLEtBQUs7V0FDZCxDQUFDO0FBQ0YsY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDckI7OzZCQVpXLEdBQUc7QUFFUixnQkFBTTttQkFBQSxrQkFBRTtBQUFFLHFCQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7YUFBRTs7Ozs7QUFrQm5DLG9CQUFVO21CQUFDLG9CQUFDLElBQUksRUFBRTs7QUFDakIsb0JBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBRSxVQUFBLEdBQUc7dUJBQUksTUFBSyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUksSUFBSSxLQUFLLEdBQUcsQUFBQztlQUFBLENBQUUsQ0FBQztBQUMzRSxrQkFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsaUJBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3RDOzs7Ozs7ZUF4QlcsR0FBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==