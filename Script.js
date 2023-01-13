function verificar(){
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.getElementById('res')
if (fano.value.lenght == 0 || fano.value > ano) {
   window.alert('Verifique os dados e tente novamente!') 
 } else {
  var fsex = document.getElementsByName('radsex') 
  var idade = ano - Number(fano.value)
 var genero = ''
 var img = document.createElement('img')
 img.setAttribute('id' , 'foto')
 if (fsex[0].checked) {
    genero = 'Homem'
    if (idade >= 0 && idade <= 10){
    img.setAttribute('src', 'babym.jpg')
    } else if (idade < 40){
        img.setAttribute('src', 'jovemm.jpg')
    }else {
        img.setAttribute('src', 'idoso.jpg')
    }
    
 } else if (fsex[1].checked){
    genero = 'Mulher'
 }  genero = 'Homem'
 if (idade >= 0 && idade <= 10){
    img.setAttribute('src', 'babyf.jpg')
 } else if (idade > 10 && idade < 40){
    img.setAttribute('src', 'jovemf.jpg')
 }else {
    img.setAttribute('src', 'idoso.jpg')
 }


 res.style.textAlign = 'center'
 res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
 res.appendChild(img)

   }
}