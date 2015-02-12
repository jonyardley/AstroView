System.register(["../../utils/state"], function (_export) {
  "use strict";

  var State, _prototypeProperties, _classCallCheck, LoadFile;
  return {
    setters: [function (_utilsState) {
      State = _utilsState.State;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      LoadFile = _export("LoadFile", (function () {
        function LoadFile(element, state) {
          _classCallCheck(this, LoadFile);

          this.state = state;
          this.el = element;
        }

        _prototypeProperties(LoadFile, {
          inject: {
            value: function inject() {
              return [Element, State];
            },
            writable: true,
            configurable: true
          }
        }, {
          fileSelected: {
            value: function fileSelected() {
              var $input = $(this.el).find("input"),
                  file = $input[0].files[0];

              this.state.images.newImage({ file: file });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9hZC1maWxlL2xvYWQtZmlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxLQUFLLHlDQUVBLFFBQVE7OztBQUZiLFdBQUssZUFBTCxLQUFLOzs7Ozs7O0FBRUEsY0FBUTtBQUlULGlCQUpDLFFBQVEsQ0FJUixPQUFPLEVBQUUsS0FBSztnQ0FKZCxRQUFROztBQUtuQixjQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNuQixjQUFJLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQztTQUNsQjs7NkJBUFcsUUFBUTtBQUViLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFBRTs7Ozs7QUFPNUMsc0JBQVk7bUJBQUEsd0JBQUU7QUFFYixrQkFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2tCQUNwQyxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFM0Isa0JBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBSixJQUFJLEVBQUMsQ0FBQyxDQUFDO2FBQ25DOzs7Ozs7ZUFmVyxRQUFRIiwiZmlsZSI6ImNvbXBvbmVudHMvbG9hZC1maWxlL2xvYWQtZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9