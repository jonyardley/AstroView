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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci9uYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsS0FBSyx5Q0FFQSxNQUFNOzs7QUFGWCxXQUFLLGVBQUwsS0FBSzs7Ozs7OztBQUVBLFlBQU07QUFJUCxpQkFKQyxNQUFNLENBSU4sS0FBSztnQ0FKTCxNQUFNOztBQUtqQixjQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNuQjs7NkJBTlcsTUFBTTtBQUVYLGdCQUFNO21CQUFBLGtCQUFFO0FBQUUscUJBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUFFOzs7Ozs7ZUFGdEIsTUFBTSIsImZpbGUiOiJuYXZiYXIvbmF2YmFyLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=