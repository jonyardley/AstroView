System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, _classCallCheck, Sidebar;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Sidebar = _export("Sidebar", (function () {
        function Sidebar() {
          _classCallCheck(this, Sidebar);
        }

        _prototypeProperties(Sidebar, null, {
          activate: {
            value: function activate(state) {
              this.state = state;
              console.log(this);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIvc2lkZWJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NkNBQ2EsT0FBTzs7Ozs7Ozs7QUFBUCxhQUFPO0FBRVIsaUJBRkMsT0FBTztnQ0FBUCxPQUFPO1NBR2xCOzs2QkFIVyxPQUFPO0FBS25CLGtCQUFRO21CQUFBLGtCQUFDLEtBQUssRUFBQztBQUNkLGtCQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNuQixxQkFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNsQjs7Ozs7O2VBUlcsT0FBTyIsImZpbGUiOiJzaWRlYmFyL3NpZGViYXIuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==