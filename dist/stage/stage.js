System.register(["aurelia-framework", "../app", "../utils/events", "fabric"], function (_export) {
  "use strict";

  var LogManager, App, events, _fabric, _prototypeProperties, _classCallCheck, log, fabric, Stage;
  return {
    setters: [function (_aureliaFramework) {
      LogManager = _aureliaFramework.LogManager;
    }, function (_app) {
      App = _app.App;
    }, function (_utilsEvents) {
      events = _utilsEvents["default"];
    }, function (_fabric2) {
      _fabric = _fabric2["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      log = LogManager.getLogger("av::stage");
      fabric = _fabric.fabric;
      Stage = _export("Stage", (function () {
        function Stage(app, element) {
          _classCallCheck(this, Stage);

          this.el = element;
          this.app = app;
          this.images = app.images;
        }

        _prototypeProperties(Stage, {
          inject: {
            value: function inject() {
              return [App, Element];
            },
            writable: true,
            configurable: true
          }
        }, {
          attached: {
            value: function attached() {
              this.$el = $(this.el).find("#stage");
              this.canvas = this.$el.find("canvas");
              this.canvasId = this.canvas.attr("id");

              console.log(this.canvas);

              this.canvas.attr("width", this.$el.width());
              this.canvas.attr("height", this.$el.height());

              this.context = new fabric.Canvas(this.canvasId);

              events.subscribe("image:rendered", this.renderImage.bind(this));

              events.publish("canvas:ready");
            },
            writable: true,
            configurable: true
          },
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

        return Stage;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YWdlL3N0YWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFRLFVBQVUsRUFHVixHQUFHLEVBQ0osTUFBTSxFQUNOLE9BQU8seUNBSlYsR0FBRyxFQU1ILE1BQU0sRUFHRyxLQUFLOzs7QUFWVixnQkFBVSxxQkFBVixVQUFVOztBQUdWLFNBQUcsUUFBSCxHQUFHOztBQUNKLFlBQU07O0FBQ04sYUFBTzs7Ozs7OztBQUpWLFNBQUcsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQztBQU12QyxZQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU07QUFHZCxXQUFLO0FBSU4saUJBSkMsS0FBSyxDQUlMLEdBQUcsRUFBRSxPQUFPO2dDQUpaLEtBQUs7O0FBS2hCLGNBQUksQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDO0FBQ2xCLGNBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ2YsY0FBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1NBQ3pCOzs2QkFSVyxLQUFLO0FBRVYsZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUFFOzs7OztBQVExQyxrQkFBUTttQkFBQSxvQkFBRTtBQUNULGtCQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3JDLGtCQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3RDLGtCQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUV2QyxxQkFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7O0FBRXpCLGtCQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQzVDLGtCQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDOztBQUU5QyxrQkFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztBQUVoRCxvQkFBTSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOztBQUVoRSxvQkFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUUvQjs7OztBQUVELHFCQUFXO21CQUFBLHFCQUFDLEtBQUssRUFBQztBQUNqQixxQkFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDMUIsa0JBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDaEMsa0JBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDekI7Ozs7OztlQWhDVyxLQUFLIiwiZmlsZSI6InN0YWdlL3N0YWdlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=