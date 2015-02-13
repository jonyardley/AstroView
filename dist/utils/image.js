System.register(["aurelia-framework", "fitsjs", "./renderImage"], function (_export) {
  "use strict";

  var LogManager, astro, RenderImage, _prototypeProperties, _classCallCheck, log, Image;
  return {
    setters: [function (_aureliaFramework) {
      LogManager = _aureliaFramework.LogManager;
    }, function (_fitsjs) {
      astro = _fitsjs["default"];
    }, function (_renderImage) {
      RenderImage = _renderImage.RenderImage;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      log = LogManager.getLogger("av::image");
      Image = _export("Image", (function () {
        function Image(id, opts) {
          _classCallCheck(this, Image);

          this.id = id;
          this.opts = opts;
          this.loaded = false;
          this.img = {};

          this.loadImage(opts.file);
        }

        _prototypeProperties(Image, null, {
          loadImage: {
            value: function loadImage(file) {
              log.info("Attempting to load file");
              var fits = new astro.FITS(file, this.onLoad.bind(this));
            },
            writable: true,
            configurable: true
          },
          onLoad: {
            value: function onLoad(fits) {
              log.info("Attempting to get image data");

              if (fits.hdus.length > 0) {
                this.header = fits.getHeader();
                this.metaData = fits.getDataUnit();

                this.metaData.getFrame(0, this.getImageData.bind(this));
              } else {
                this.loadError();
              }
            },
            writable: true,
            configurable: true
          },
          getImageData: {
            value: function getImageData(imageData) {
              log.info("Image load complete!");
              this.imageData = imageData;
              this.isLoaded = true;
              this.renderImage();
            },
            writable: true,
            configurable: true
          },
          getscale: {
            value: function getscale(w) {
              return w / this.metaData.width;
            },
            writable: true,
            configurable: true
          },
          renderImage: {
            value: function renderImage() {
              var thumbScale = this.getscale(50),
                  thumb = new RenderImage(this, thumbScale);
              this.img.thumb = thumb.result;

              var raw = new RenderImage(this);
              this.img.raw = raw.result;
            },
            writable: true,
            configurable: true
          },
          loadError: {
            value: function loadError() {
              log.error("Couldn't load image", this);
              window.alert("For some reason that file couldn't be loaded");
            },
            writable: true,
            configurable: true
          }
        });

        return Image;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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