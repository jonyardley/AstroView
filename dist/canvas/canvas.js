System.register(["../app", "fabric"], function (_export) {
  "use strict";

  var App, fabric, _prototypeProperties, _classCallCheck, Canvas;
  return {
    setters: [function (_app) {
      App = _app.App;
    }, function (_fabric) {
      fabric = _fabric["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Canvas = _export("Canvas", (function () {
        function Canvas(app) {
          _classCallCheck(this, Canvas);

          this.images = app.images;
        }

        _prototypeProperties(Canvas, {
          inject: {
            value: function inject() {
              return [App];
            },
            writable: true,
            configurable: true
          }
        });

        return Canvas;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbnZhcy9jYW52YXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsR0FBRyxFQUNKLE1BQU0seUNBRUEsTUFBTTs7O0FBSFgsU0FBRyxRQUFILEdBQUc7O0FBQ0osWUFBTTs7Ozs7OztBQUVBLFlBQU07QUFJUCxpQkFKQyxNQUFNLENBSU4sR0FBRztnQ0FKSCxNQUFNOztBQUtqQixjQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7U0FDekI7OzZCQU5XLE1BQU07QUFFWCxnQkFBTTttQkFBQSxrQkFBRTtBQUFFLHFCQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7YUFBRTs7Ozs7O2VBRnBCLE1BQU0iLCJmaWxlIjoiY2FudmFzL2NhbnZhcy5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9