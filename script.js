function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('ano')
    var res = document.getElementById('res')

    if (formAno.value.length == 0 || formAno.value > ano){
        alert('Verifique os dados e tente novamente')
    }
    else{
        var formSex = document.getElementsByName('sex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') //como se criasse um elemento img com id foto no html
        if(formSex[0].checked){
            genero = 'masculino'
                if(idade >=0 && idade < 10){
                    //Criança
                    img.setAttribute('src', 'img/foto-bebe-m.png')
                }
                else if(idade < 21){
                    //Jovem
                    img.setAttribute('src','img/foto-jovem-m.png')
                }
                else if(idade < 50){
                    //Adulto
                    img.setAttribute('src','img/foto-adulto-m.png')
                }
                else{
                    //idoso
                    img.setAttribute('src','img/foto-idoso-m.png')
                }
        }else{
            genero= 'feminino'
            if(idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'img/foto-bebe-f.png')
            }
            else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'img/foto-jovem-f.png')
            }
            else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'img/foto-adulto-f.png')
            }
            else{
                //idoso
                img.setAttribute('src', 'img/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = (`É ${genero} com ${idade} de idade`)
        res.appendChild(img)
    }
}