System.register(["fabric", "aurelia-framework", "../utils/events", "../app"], function (_export) {
  "use strict";

  var _fabric, LogManager, events, app, _prototypeProperties, _classCallCheck, log, fabric, StageController;
  return {
    setters: [function (_fabric2) {
      _fabric = _fabric2["default"];
    }, function (_aureliaFramework) {
      LogManager = _aureliaFramework.LogManager;
    }, function (_utilsEvents) {
      events = _utilsEvents["default"];
    }, function (_app) {
      app = _app["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      log = LogManager.getLogger("av::stageController");
      fabric = _fabric.fabric;
      StageController = _export("StageController", (function () {
        function StageController(canvas, app) {
          _classCallCheck(this, StageController);

          this.app = app;
          this.id = canvas.attr("id");

        }

        _prototypeProperties(StageController, null, {
          renderImage: {
            value: function renderImage(image) {
              console.log(this.context);
              this.context.add(image.img.raw);
              this.context.renderAll();
            },
            writable: true,
            configurable: true
          }
        });

        return StageController;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YWdlL3N0YWdlQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBTyxPQUFPLEVBQ04sVUFBVSxFQUNYLE1BQU0sRUFDTixHQUFHLHlDQUVOLEdBQUcsRUFDSCxNQUFNLEVBR0csZUFBZTs7O0FBVHJCLGFBQU87O0FBQ04sZ0JBQVUscUJBQVYsVUFBVTs7QUFDWCxZQUFNOztBQUNOLFNBQUc7Ozs7Ozs7QUFFTixTQUFHLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQztBQUNqRCxZQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU07QUFHZCxxQkFBZTtBQUVoQixpQkFGQyxlQUFlLENBRWYsTUFBTSxFQUFFLEdBQUc7Z0NBRlgsZUFBZTs7QUFHMUIsY0FBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDZixjQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7O1NBRzVCOzs2QkFQVyxlQUFlO0FBUzNCLHFCQUFXO21CQUFBLHFCQUFDLEtBQUssRUFBQztBQUNqQixxQkFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDMUIsa0JBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDaEMsa0JBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDekI7Ozs7OztlQWJXLGVBQWUiLCJmaWxlIjoic3RhZ2Uvc3RhZ2VDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=