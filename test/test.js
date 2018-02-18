
const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function () {

  it('si la palabra termina en "ar", eliminamos ar de la palabra', function(){
    const translation = platzom("programar")
    expect(translation).to.equal("program")
  })
  it('si la palabra inicia con z, se le a;ade "pe" al final', function(){
    const translation = platzom("zorro")
    const translation2 = platzom("zarpar")
    expect(translation).to.equal("zorrope")
    expect(translation2).to.equal("zarppe")

  })
  it('si la palabra tiene mas de 10 caracteres, se divide en dos partes por la mitad y deben unir con "-"', function(){
    const translation = platzom("abecedario")
    expect(translation).to.equal("abece-dario")
  })
  it('si la palabra es un palindromo todas las demas reglas quedan invalidadas y se colocaria la palabra intercalando letras mayusculas con minusculas', function(){
    const translation = platzom("sometemos")
    expect(translation).to.equal("SoMeTeMoS")
  })

})
