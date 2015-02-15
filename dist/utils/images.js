System.register(["aurelia-framework", "./image", "./events"], function (_export) {
  "use strict";

  var LogManager, Image, events, _prototypeProperties, _classCallCheck, log, Images;
  return {
    setters: [function (_aureliaFramework) {
      LogManager = _aureliaFramework.LogManager;
    }, function (_image) {
      Image = _image.Image;
    }, function (_events) {
      events = _events["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      log = LogManager.getLogger("av::images");
      Images = _export("Images", (function () {
        function Images() {
          _classCallCheck(this, Images);

          this.collection = [];
          this.active = null;
        }

        _prototypeProperties(Images, null, {
          newImage: {
            value: function newImage(opts) {
              var id = this.collection.length + 1,
                  newImage = new Image(id, opts);

              this.collection.push(newImage);
              log.info("created new image");

              this.setActiveImage(newImage);
            },
            writable: true,
            configurable: true
          },
          setActiveImage: {
            value: function setActiveImage(image) {
              this.active = image;
              log.info("new active image set!");
              events.publish("image:active", image);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2ltYWdlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxVQUFVLEVBR1YsS0FBSyxFQUNOLE1BQU0seUNBSFQsR0FBRyxFQU9NLE1BQU07OztBQVJYLGdCQUFVLHFCQUFWLFVBQVU7O0FBR1YsV0FBSyxVQUFMLEtBQUs7O0FBQ04sWUFBTTs7Ozs7OztBQUhULFNBQUcsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQztBQU8vQixZQUFNO0FBRVAsaUJBRkMsTUFBTTtnQ0FBTixNQUFNOztBQUdqQixjQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztBQUNyQixjQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNuQjs7NkJBTFcsTUFBTTtBQVdsQixrQkFBUTttQkFBQyxrQkFBQyxJQUFJLEVBQUU7QUFDZixrQkFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQztrQkFDbEMsUUFBUSxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQzs7QUFFaEMsa0JBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQy9CLGlCQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7O0FBRTlCLGtCQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzlCOzs7O0FBRUQsd0JBQWM7bUJBQUEsd0JBQUMsS0FBSyxFQUFDO0FBQ3BCLGtCQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztBQUNwQixpQkFBRyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBQ2xDLG9CQUFNLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUN0Qzs7Ozs7O2VBekJXLE1BQU0iLCJmaWxlIjoidXRpbHMvaW1hZ2VzLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=