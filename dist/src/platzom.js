'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom;
function platzom(str) {
  var translation = str;

  // si la palabra es un palindromo
  // todas las demas reglas quedan invalidadas
  // y se colocaria la palabra intercalando letras mayusculas con minusculas

  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };
  function minMay(str) {
    var length = str.length;
    var translation = '';
    var capitalize = true;
    for (var i = 0; i < length; i++) {
      var char = str.charAt(i);
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }
    return translation;
  }

  if (str == reverse(str)) {
    return minMay(str);
  }
  // si la palabra termina en "ar", eliminamos ar de la palabra
  if (str.toLowerCase().endsWith("ar")) {
    translation = str.slice(0, -2);
  }
  //si la palabra inicia con z, se le a;ade "pe" al final
  if (str.toLowerCase().startsWith("z")) {
    translation += "pe";
  }
  //si la palabra tiene mas de 10 caracteres, se divide en dos partes por la mitad y deben unir con "-"
  var length = translation.length;
  if (str.length >= 10) {
    var firsthalf = translation.slice(0, Math.round(length / 2));
    var secondhalf = translation.slice(Math.round(length / 2));
    translation = firsthalf + '-' + secondhalf;
  }
  return translation;
}
platzom("Programar");
platzom("Zorro");
platzom("zarpar");
platzom("abecedario");
platzom("sometemos");