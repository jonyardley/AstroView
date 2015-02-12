System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, _classCallCheck, LoadFile;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      LoadFile = _export("LoadFile", (function () {
        function LoadFile(element) {
          _classCallCheck(this, LoadFile);

          this.el = element;
        }

        _prototypeProperties(LoadFile, {
          inject: {
            value: function inject() {
              return [Element];
            },
            writable: true,
            configurable: true
          }
        }, {
          fileSelected: {
            value: function fileSelected() {
              var $input = $(this.el).find("input"),
                  file = $input[0].files[0];
              console.log(file);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9hZC1maWxlL2xvYWQtZmlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NkNBQWEsUUFBUTs7Ozs7Ozs7QUFBUixjQUFRO0FBSVQsaUJBSkMsUUFBUSxDQUlSLE9BQU87Z0NBSlAsUUFBUTs7QUFLbkIsY0FBSSxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUM7U0FDbEI7OzZCQU5XLFFBQVE7QUFFYixnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7YUFBRTs7Ozs7QUFNckMsc0JBQVk7bUJBQUEsd0JBQUU7QUFDYixrQkFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2tCQUNwQyxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMzQixxQkFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNsQjs7Ozs7O2VBWlcsUUFBUSIsImZpbGUiOiJjb21wb25lbnRzL2xvYWQtZmlsZS9sb2FkLWZpbGUuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==