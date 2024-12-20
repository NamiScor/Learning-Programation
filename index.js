function insert (num)
{var number = document.getElementById('resultado').innerHTML;
document.getElementById('resultado').innerHTML = number + num}

function clean ()
{document.getElementById('resultado').innerHTML = ""}

function calcular()
{var resul = document.getElementById('resultado').innerHTML;
    if (calcular)
     {document.getElementById('resultado').innerHTML = eval(resul)}
    else 
    {document.getElementById('resultado').innerHTML = "nada"}}