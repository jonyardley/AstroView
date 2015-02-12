System.register(["fitsjs"], function (_export) {
  "use strict";

  var _astro, _prototypeProperties, _classCallCheck, Image;
  return {
    setters: [function (_fitsjs) {
      _astro = _fitsjs._astro;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2ltYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFRLE1BQU0seUNBRUQsS0FBSzs7O0FBRlYsWUFBTSxXQUFOLE1BQU07Ozs7Ozs7QUFFRCxXQUFLO0FBRUwsaUJBRkEsS0FBSyxDQUVKLEVBQUUsRUFBRSxJQUFJO2dDQUZULEtBQUs7O0FBR2hCLGNBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ2IsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsY0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7O0FBRXBCLGNBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzFCOzs2QkFSVyxLQUFLO0FBVWpCLG1CQUFTO21CQUFBLG1CQUFDLElBQUksRUFBQztBQUNkLGtCQUFJLElBQUksR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFFeEQ7Ozs7QUFFRCxnQkFBTTttQkFBQSxnQkFBQyxJQUFJLEVBQUUsSUFBSSxFQUFDO0FBRWpCLGtCQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUV6QixvQkFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDL0Isb0JBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDOztBQUduQyxvQkFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7ZUFFeEQsTUFBTTtBQUNOLG9CQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7ZUFDakI7YUFDRDs7OztBQUVELHNCQUFZO21CQUFDLHNCQUFDLFNBQVMsRUFBRTtBQUN4QixrQkFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7QUFDM0Isa0JBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2FBQ3JCOzs7O0FBRUQsbUJBQVM7bUJBQUMscUJBQUc7QUFDWixvQkFBTSxDQUFDLEtBQUssQ0FBQyw4Q0FBK0MsQ0FBQyxDQUFDO2FBQzlEOzs7Ozs7ZUFyQ1csS0FBSyIsImZpbGUiOiJ1dGlscy9pbWFnZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9