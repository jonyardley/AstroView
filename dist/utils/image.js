System.register(["fitsjs", "./renderImage"], function (_export) {
  "use strict";

  var astro, RenderImage, _prototypeProperties, _classCallCheck, Image;
  return {
    setters: [function (_fitsjs) {
      astro = _fitsjs["default"];
    }, function (_renderImage) {
      RenderImage = _renderImage.RenderImage;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

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
              var fits = new astro.FITS(file, this.onLoad.bind(this));
            },
            writable: true,
            configurable: true
          },
          onLoad: {
            value: function onLoad(fits, opts) {
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
              this.imageData = imageData;
              this.isLoaded = true;
              new RenderImage(this);
            },
            writable: true,
            configurable: true
          },
          loadError: {
            value: function loadError() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2ltYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFPLEtBQUssRUFDSixXQUFXLHlDQUVOLEtBQUs7OztBQUhYLFdBQUs7O0FBQ0osaUJBQVcsZ0JBQVgsV0FBVzs7Ozs7OztBQUVOLFdBQUs7QUFFTCxpQkFGQSxLQUFLLENBRUosRUFBRSxFQUFFLElBQUk7Z0NBRlQsS0FBSzs7QUFHaEIsY0FBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDYixjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixjQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztBQUNwQixjQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQzs7QUFFZCxjQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMxQjs7NkJBVFcsS0FBSztBQVdqQixtQkFBUzttQkFBQSxtQkFBQyxJQUFJLEVBQUM7QUFDZCxrQkFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBRXhEOzs7O0FBRUQsZ0JBQU07bUJBQUEsZ0JBQUMsSUFBSSxFQUFFLElBQUksRUFBQztBQUVqQixrQkFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFFekIsb0JBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQy9CLG9CQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7QUFHbkMsb0JBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2VBRXhELE1BQU07QUFDTixvQkFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2VBQ2pCO2FBQ0Q7Ozs7QUFFRCxzQkFBWTttQkFBQyxzQkFBQyxTQUFTLEVBQUU7QUFDeEIsa0JBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQzNCLGtCQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztBQUNyQixrQkFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdEI7Ozs7QUFFRCxtQkFBUzttQkFBQyxxQkFBRztBQUNaLG9CQUFNLENBQUMsS0FBSyxDQUFDLDhDQUErQyxDQUFDLENBQUM7YUFDOUQ7Ozs7OztlQXZDVyxLQUFLIiwiZmlsZSI6InV0aWxzL2ltYWdlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=