/*
    Obtenha dados da altura e o sexo (M ou F) de 15 pessoas e apresente os seguintes resultados:

    - A maior e a menor altura do grupo;
    - A média de altura dos homens;
    - O número de mulheres.
*/

var count = nWomen = hgMens = nMens = 0;
var hgs = [];

function setTitle()
{
    document.querySelector('#title').innerHTML = 'Informe a altura e sexo da ' + (count) + '° pessoa';
}

function clearForm()
{
    if(!document.querySelector('input[name="sex"]:checked'))
        document.querySelector('input[name="sex"]').checked = false;
    else 
        document.querySelector('input[name="sex"]:checked').checked = false;
    document.querySelector('#height').value = '';
}


function getForm()
{
    if(count == 15)
    {
        alert("Limite de pessoas atingido.\nMostrando resultados:\nQuantidade de homens: " + nMens +  
        "\nNúmero de mulheres: " + nWomen + "\nMédia da altura dos homens: " + parseFloat(hgMens/nMens) + "\nMaior altura: " + Math.max(...hgs)
        + "\nMenor altura: " + Math.min(...hgs));
        return false;
    }

    var sex = document.querySelector('input[name="sex"]:checked').value;
    var height = document.querySelector('#height').value;
    height = parseFloat(height);
    hgs.push(height)

    if(sex == 'M')
    {
        hgMens += height;
        nMens++;       
    }
    else if(sex == 'F') nWomen++;

    count++;
    clearForm();
}