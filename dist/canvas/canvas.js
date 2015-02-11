System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, _classCallCheck, Canvas;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Canvas = _export("Canvas", (function () {
        function Canvas() {
          _classCallCheck(this, Canvas);

          this.mode = "";
        }

        _prototypeProperties(Canvas, null, {
          activate: {
            value: function activate(params, queryString, routeConfig) {
              console.log("Canvas Loaded: ");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbnZhcy9jYW52YXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzZDQUdhLE1BQU07Ozs7Ozs7O0FBQU4sWUFBTTtBQUVQLGlCQUZDLE1BQU07Z0NBQU4sTUFBTTs7QUFHakIsY0FBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7U0FFZjs7NkJBTFcsTUFBTTtBQU9sQixrQkFBUTttQkFBQSxrQkFBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBQztBQUV6QyxxQkFBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2FBQy9COzs7Ozs7ZUFWVyxNQUFNIiwiZmlsZSI6ImNhbnZhcy9jYW52YXMuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==