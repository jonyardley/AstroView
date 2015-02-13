System.register(["../../app"], function (_export) {
  "use strict";

  var App, _prototypeProperties, _classCallCheck, LoadFile;
  return {
    setters: [function (_app) {
      App = _app.App;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      LoadFile = _export("LoadFile", (function () {
        function LoadFile(element, app) {
          _classCallCheck(this, LoadFile);

          this.images = app.images;
          this.el = element;
        }

        _prototypeProperties(LoadFile, {
          inject: {
            value: function inject() {
              return [Element, App];
            },
            writable: true,
            configurable: true
          }
        }, {
          fileSelected: {
            value: function fileSelected() {
              var $input = $(this.el).find("input"),
                  file = $input[0].files[0];

              this.images.newImage({ file: file });
            },
            writable: true,
            configurable: true
          }
        });

        return LoadFile;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9hZC1maWxlL2xvYWQtZmlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxHQUFHLHlDQUVFLFFBQVE7OztBQUZiLFNBQUcsUUFBSCxHQUFHOzs7Ozs7O0FBRUUsY0FBUTtBQUlULGlCQUpDLFFBQVEsQ0FJUixPQUFPLEVBQUUsR0FBRztnQ0FKWixRQUFROztBQUtuQixjQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7QUFDekIsY0FBSSxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUM7U0FDbEI7OzZCQVBXLFFBQVE7QUFFYixnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQUU7Ozs7O0FBTzFDLHNCQUFZO21CQUFBLHdCQUFFO0FBRWIsa0JBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztrQkFDcEMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRTNCLGtCQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBSixJQUFJLEVBQUMsQ0FBQyxDQUFDO2FBQzdCOzs7Ozs7ZUFmVyxRQUFRIiwiZmlsZSI6ImNvbXBvbmVudHMvbG9hZC1maWxlL2xvYWQtZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9