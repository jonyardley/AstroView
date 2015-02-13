System.register(["aurelia-framework", "imageBuffer"], function (_export) {
  "use strict";

  var LogManager, ImageBuffer, _prototypeProperties, _classCallCheck, log, RenderImage;
  return {
    setters: [function (_aureliaFramework) {
      LogManager = _aureliaFramework.LogManager;
    }, function (_imageBuffer) {
      ImageBuffer = _imageBuffer["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      log = LogManager.getLogger("av::renderImage");
      RenderImage = _export("RenderImage", (function () {
        function RenderImage(image) {
          _classCallCheck(this, RenderImage);

          this.image = image;
          this.width = image.metaData.width;
          this.height = image.metaData.height;
          this.canvas = document.createElement("canvas");
          this.canvas.width = this.width;
          this.canvas.height = this.height;
          this.ctx = this.canvas.getContext("2d");
          this.imageData = this.ctx.createImageData(this.width, this.height);
          this.buffer = new ImageBuffer(this.imageData);

          log.info("set data needed for image render");

          this.renderPixels();

          this.ctx.putImageData(this.imageData, 0, 0);
          var img = new Image();
          img.src = this.canvas.toDataURL();
          image.img.raw = img;
        }

        _prototypeProperties(RenderImage, null, {
          renderPixels: {
            value: function renderPixels() {
              log.info("Start rendering pixels");

              var area = this.width * this.height;
              var min = 0,
                  max = 1000;

              for (var i = 0; i < area; i++) {
                var value = this.image.imageData[i];
                var v = (value + min) / max * 255 || 0;

                if (v < 0) {
                  v = 0;
                }
                if (v > 255 || isNaN(v)) {
                  v = 255;
                }

                var r = v,
                    g = v,
                    b = v,
                    a = 255;

                this.buffer.setPixel(i, r, g, b, a);
              }

              log.info("Finished rendering pixels");
            },
            writable: true,
            configurable: true
          }
        });

        return RenderImage;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL3JlbmRlckltYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFRLFVBQVUsRUFHWCxXQUFXLHlDQUZkLEdBQUcsRUFJTSxXQUFXOzs7QUFMaEIsZ0JBQVUscUJBQVYsVUFBVTs7QUFHWCxpQkFBVzs7Ozs7OztBQUZkLFNBQUcsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDO0FBSXBDLGlCQUFXO0FBRVosaUJBRkMsV0FBVyxDQUVYLEtBQUs7Z0NBRkwsV0FBVzs7QUFHdEIsY0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsY0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztBQUNsQyxjQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0FBQ3BDLGNBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQyxjQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQy9CLGNBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDakMsY0FBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN4QyxjQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ25FLGNBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDOztBQUU5QyxhQUFHLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxDQUFDLENBQUM7O0FBRTdDLGNBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7QUFHcEIsY0FBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDNUMsY0FBSSxHQUFHLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztBQUN0QixhQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDbEMsZUFBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1NBRXBCOzs2QkF2QlcsV0FBVztBQXlCdkIsc0JBQVk7bUJBQUEsd0JBQUU7QUFFYixpQkFBRyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDOztBQUVuQyxrQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3BDLGtCQUFJLEdBQUcsR0FBRyxDQUFDO2tCQUNWLEdBQUcsR0FBRyxJQUFJLENBQUM7O0FBRVosbUJBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDNUIsb0JBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BDLG9CQUFJLENBQUMsR0FBRyxBQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQSxHQUFJLEdBQUcsR0FBSSxHQUFHLElBQUksQ0FBQyxDQUFDOztBQUd6QyxvQkFBRyxDQUFDLEdBQUcsQ0FBQyxFQUFDO0FBQUUsbUJBQUMsR0FBRyxDQUFDLENBQUM7aUJBQUU7QUFDbkIsb0JBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUM7QUFBRSxtQkFBQyxHQUFHLEdBQUcsQ0FBQztpQkFBRTs7QUFFbkMsb0JBQUksQ0FBQyxHQUFHLENBQUM7b0JBQ1IsQ0FBQyxHQUFHLENBQUM7b0JBQ0wsQ0FBQyxHQUFHLENBQUM7b0JBQ0wsQ0FBQyxHQUFHLEdBQUcsQ0FBQzs7QUFHVCxvQkFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2VBQ3BDOztBQUVELGlCQUFHLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7YUFDdEM7Ozs7OztlQW5EVyxXQUFXIiwiZmlsZSI6InV0aWxzL3JlbmRlckltYWdlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=