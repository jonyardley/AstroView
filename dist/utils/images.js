System.register(["./image"], function (_export) {
  "use strict";

  var Image, _prototypeProperties, _classCallCheck, Images;
  return {
    setters: [function (_image) {
      Image = _image.Image;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Images = _export("Images", (function () {
        function Images() {
          _classCallCheck(this, Images);

          this.collection = [];
        }

        _prototypeProperties(Images, null, {
          newImage: {
            value: function newImage(opts) {
              var id = this.collection.length + 1,
                  newImage = new Image(id, opts);

              this.collection.push(newImage);
            },
            writable: true,
            configurable: true
          }
        });

        return Images;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2ltYWdlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxLQUFLLHlDQUVBLE1BQU07OztBQUZYLFdBQUssVUFBTCxLQUFLOzs7Ozs7O0FBRUEsWUFBTTtBQUVQLGlCQUZDLE1BQU07Z0NBQU4sTUFBTTs7QUFHakIsY0FBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7U0FDckI7OzZCQUpXLE1BQU07QUFVbEIsa0JBQVE7bUJBQUMsa0JBQUMsSUFBSSxFQUFFO0FBQ2Ysa0JBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUM7a0JBQ2xDLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7O0FBRWhDLGtCQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUcvQjs7Ozs7O2VBakJXLE1BQU0iLCJmaWxlIjoidXRpbHMvaW1hZ2VzLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=