System.register(["../app"], function (_export) {
  "use strict";

  var App, _prototypeProperties, _classCallCheck, Sidebar;
  return {
    setters: [function (_app) {
      App = _app.App;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Sidebar = _export("Sidebar", (function () {
        function Sidebar(app) {
          _classCallCheck(this, Sidebar);

          this.images = app.images;
        }

        _prototypeProperties(Sidebar, {
          inject: {
            value: function inject() {
              return [App];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIvc2lkZWJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxHQUFHLHlDQUVFLE9BQU87OztBQUZaLFNBQUcsUUFBSCxHQUFHOzs7Ozs7O0FBRUUsYUFBTztBQUlSLGlCQUpDLE9BQU8sQ0FJUCxHQUFHO2dDQUpILE9BQU87O0FBS2xCLGNBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztTQUN6Qjs7NkJBTlcsT0FBTztBQUVaLGdCQUFNO21CQUFBLGtCQUFFO0FBQUUscUJBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUFFOzs7Ozs7ZUFGcEIsT0FBTyIsImZpbGUiOiJzaWRlYmFyL3NpZGViYXIuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==