System.register(["../app"], function (_export) {
  "use strict";

  var App, _prototypeProperties, _classCallCheck, Navbar;
  return {
    setters: [function (_app) {
      App = _app.App;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Navbar = _export("Navbar", (function () {
        function Navbar(app) {
          _classCallCheck(this, Navbar);

          this.app = app;
        }

        _prototypeProperties(Navbar, {
          inject: {
            value: function inject() {
              return [App];
            },
            writable: true,
            configurable: true
          }
        });

        return Navbar;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci9uYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsR0FBRyx5Q0FFRSxNQUFNOzs7QUFGWCxTQUFHLFFBQUgsR0FBRzs7Ozs7OztBQUVFLFlBQU07QUFJUCxpQkFKQyxNQUFNLENBSU4sR0FBRztnQ0FKSCxNQUFNOztBQUtqQixjQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUNmOzs2QkFOVyxNQUFNO0FBRVgsZ0JBQU07bUJBQUEsa0JBQUU7QUFBRSxxQkFBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQUU7Ozs7OztlQUZwQixNQUFNIiwiZmlsZSI6Im5hdmJhci9uYXZiYXIuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==