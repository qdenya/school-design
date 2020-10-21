
var rellax = new Rellax(".rellax");

if (document.body.clientWidth < 576) {
  rellax.destroy();
}
AOS.init();
new WOW().init();