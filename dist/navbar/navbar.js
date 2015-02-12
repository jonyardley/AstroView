System.register(["../utils/state"], function (_export) {
  "use strict";

  var State, _prototypeProperties, _classCallCheck, Navbar;
  return {
    setters: [function (_utilsState) {
      State = _utilsState.State;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Navbar = _export("Navbar", (function () {
        function Navbar(state) {
          _classCallCheck(this, Navbar);

          this.state = state;
          console.log("navbar loaded!");
        }

        _prototypeProperties(Navbar, {
          inject: {
            value: function inject() {
              return [State];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci9uYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsS0FBSyx5Q0FFQSxNQUFNOzs7QUFGWCxXQUFLLGVBQUwsS0FBSzs7Ozs7OztBQUVBLFlBQU07QUFJUCxpQkFKQyxNQUFNLENBSU4sS0FBSztnQ0FKTCxNQUFNOztBQUtqQixjQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtBQUNsQixpQkFBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQzlCOzs2QkFQVyxNQUFNO0FBRVgsZ0JBQU07bUJBQUEsa0JBQUU7QUFBRSxxQkFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQUU7Ozs7OztlQUZ0QixNQUFNIiwiZmlsZSI6Im5hdmJhci9uYXZiYXIuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==