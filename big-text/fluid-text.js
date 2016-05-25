var fudge = 1.05;

function resizeText(e) {
  var $txt = e.target;
  var charlen = $txt.innerText.length || 1;
  var txtArea = document.documentElement.clientHeight * document.documentElement.clientWidth;

  var size = (Math.sqrt(txtArea / charlen)); // * fudge
  var sizeVH = size / document.documentElement.clientHeight * 100;
  $txt.style.fontSize = sizeVH + 'vh';
}
