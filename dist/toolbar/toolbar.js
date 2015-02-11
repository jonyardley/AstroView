System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, _classCallCheck, Toolbar;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Toolbar = _export("Toolbar", (function () {
        function Toolbar() {
          _classCallCheck(this, Toolbar);

          console.log("toolbar loaded!");
        }

        _prototypeProperties(Toolbar, null, {
          activate: {
            value: function activate(state) {
              this.state = state;
            },
            writable: true,
            configurable: true
          }
        });

        return Toolbar;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xiYXIvdG9vbGJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NkNBQWEsT0FBTzs7Ozs7Ozs7QUFBUCxhQUFPO0FBRVIsaUJBRkMsT0FBTztnQ0FBUCxPQUFPOztBQUdsQixpQkFBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQy9COzs2QkFKVyxPQUFPO0FBTW5CLGtCQUFRO21CQUFBLGtCQUFDLEtBQUssRUFBQztBQUNkLGtCQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzthQUNuQjs7Ozs7O2VBUlcsT0FBTyIsImZpbGUiOiJ0b29sYmFyL3Rvb2xiYXIuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==