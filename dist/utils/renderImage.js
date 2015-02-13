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
        function RenderImage(image, scale) {
          _classCallCheck(this, RenderImage);

          this.image = image;
          this.width = image.metaData.width;
          this.height = image.metaData.height;
          this.scale = scale || 1;
          this.sample = Math.floor(1 / this.scale);
          this.targetWidth = this.width * this.scale;
          this.targetHeight = this.height * this.scale;

          this.canvas = document.createElement("canvas");
          this.canvas.width = this.targetWidth;
          this.canvas.height = this.targetHeight;
          this.ctx = this.canvas.getContext("2d");

          this.imageData = this.ctx.createImageData(this.targetWidth, this.targetHeight);
          this.buffer = new ImageBuffer(this.imageData);

          log.info("set data needed for image render");

          this.renderPixels();

          this.result = this.buffer.createImage();
        }

        _prototypeProperties(RenderImage, null, {
          renderPixels: {
            value: function renderPixels() {
              log.info("Start rendering pixels");
              log.warn("TODO: MAKE THIS ASYNC / NON BLOCKING");

              var area = this.targetWidth * this.targetHeight;
              var min = 0,
                  max = 1000,
                  row = 0,
                  x = 0,
                  y = 0;



              for (var i = 0; i < area; i++) {
                var pixelIndex = x * this.sample + y * this.sample * this.width;
                var value = this.image.imageData[pixelIndex];
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

                if (i % this.targetWidth === 0) {
                  x = 0;
                  y++;
                } else {
                  x++;
                }
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
//# sourceMappingURL=data:application/json;base64,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QUksQ0FBQyxHQUFHLEFBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFBLEdBQUksR0FBRyxHQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7O0FBR3pDLG9CQUFHLENBQUMsR0FBRyxDQUFDLEVBQUM7QUFBRSxtQkFBQyxHQUFHLENBQUMsQ0FBQztpQkFBRTtBQUNuQixvQkFBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBQztBQUFFLG1CQUFDLEdBQUcsR0FBRyxDQUFDO2lCQUFFOztBQUVuQyxvQkFBSSxDQUFDLEdBQUcsQ0FBQztvQkFDUixDQUFDLEdBQUcsQ0FBQztvQkFDTCxDQUFDLEdBQUcsQ0FBQztvQkFDTCxDQUFDLEdBQUcsR0FBRyxDQUFDOztBQUdULG9CQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7O0FBRXBDLG9CQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxLQUFLLENBQUMsRUFBQztBQUM3QixtQkFBQyxHQUFHLENBQUMsQ0FBQztBQUNOLG1CQUFDLEVBQUUsQ0FBQztpQkFDSixNQUFJO0FBQ0osbUJBQUMsRUFBRSxDQUFDO2lCQUNKO2VBRUQ7O0FBRUQsaUJBQUcsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQzthQUN0Qzs7Ozs7O2VBdEVXLFdBQVciLCJmaWxlIjoidXRpbHMvcmVuZGVySW1hZ2UuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==