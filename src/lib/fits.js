const astro = require("fitsjs");
window.astro = astro.astro; // Hack to make it work from a global

export default astro.astro.FITS;
