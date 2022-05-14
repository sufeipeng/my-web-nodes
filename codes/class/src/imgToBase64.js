function getBase64(src, cb) {
  var image = new Image();
  image.src = src + '?v=' + Math.random(); // 处理缓存
  image.crossOrigin = "*"; // 支持跨域图片
  image.onload = function () {
    var base64 = getBase64Image(image);
    cb && cb(base64);
  }
}

function getBase64Image(img) {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, img.width, img.height);
  var dataURL = canvas.toDataURL("image/png"); // 可选其他值 image/jpeg
  return dataURL;
}
var src = '../images/变量提升.png';
getBase64(src, function (base64) {
  console.log(base64);
});