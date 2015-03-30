module.exports = function Co(count, chunksize, callback, finished) {
  var i = 0;
  (function chunk() {
      var end = Math.min(i + chunksize, count);
      for ( ; i < end; ++i) {
          callback(i);
      }
      if (i < count) {
          setTimeout(chunk, 0);
      } else {
          finished();
      }
  })();
}