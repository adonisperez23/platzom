# platzom
platzom es un idioma inventado para el [curso de fundamentos de javascript](https://platzi.com/js) de [platzi](https://platzi.com), el mejor lugar de educacion online
## descripcion del idioma

- si la palabra termina en "ar", eliminamos ar de la palabra
- si la palabra inicia con z, se le a;ade "pe" al final
- si la palabra tiene mas de 10 caracteres, se divide en dos partes por la mitad y deben unir con "-"
- si la palabra es un palindromo
  todas las demas reglas quedan invalidadas
  y se colocaria la palabra intercalando letras mayusculas con minusculas
## instalacion
```
npm install platzom
```
## uso
```
import platzom from 'platzom'
platzom("Programar") //program
platzom("Zorro")//zorrope
platzom("zarpar")//zarppe
platzom("abecedario")// abece-dario
platzom("sometemos")// SoMeTeMoS

```
## creditos
- [Sacha Lifszyc](https://twitter.com@slifszyc)
## licencia
[MIT](https://opensource.org/licenses/MIT)
