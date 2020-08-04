const fecha = new Date();
const anio = fecha.getFullYear(),
      anioMinimo= anio-20;

const autos = ['BMW','Audi','Mustang','Camaro'];
const listaAutos = document.getElementById('autos');
const selector = document.getElementById('lista');

const botonE=document.getElementById('boton');

for (let i=anio; i>=anioMinimo; i--)
{
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML=i;   
    selector.appendChild(option);
}

for (i of autos)
{
    let option = document.createElement('option');
    option.value=i;
    option.innerHTML=i;
    listaAutos.appendChild(option);  
       
}


//Funcion submit

botonE.addEventListener('click',function (e){

    e.preventDefault();
  
    //select1
    const autoSelec = document.getElementById('autos');      //seleccionando el option
    info = autoSelec.options[autoSelec.selectedIndex].value; //seleccionando el option
    console.log(info);

    //select2
    const anioSelec = document.getElementById('lista');         //seleccionando año
    const info2 = anioSelec.options[anioSelec.selectedIndex].value;
    console.log(info2);

    //input radio
    const basico = document.getElementById('basico');
    const completo = document.getElementById('completo');

    //selecionando el valor del checkboxRadio
    const info3 = document.querySelector('input[name="tipo"]:checked').value; 
    console.log (info3);
    
    //spinner
    const spinner = document.getElementById('spinner')
    spinner.style.display="block";
    
    let mostrar = false;

    setTimeout(() => {
        spinner.style.display="none"; 
        mostrar=true;
            if(mostrar==true)
            {
                let resultado=document.getElementById('resultado');
                resultado.style.display="block";
            }
    }, 1500); 

    const marcas = new Autos()
    marcas.nombre=autoSelec.value;    
    marcas.anio=anioSelec.value;   

    //Servicio Basico 
    if(info3=='basico')
    {
  
        if(marcas.nombre=='Camaro' || marcas.nombre=='Mustang')
        {            
            marcas.precio=40000
            for (let i=anio; i>=anioMinimo; i--)
            {
                marcas.precio-=500;               
                if(marcas.anio==i)
                {   
                   break;                                                    
                }
               
            }    
          
        }
    
        if(marcas.nombre=='BMW' || marcas.nombre=='Audi' && info3=='basico')
        {
            marcas.precio=20000
            for (let i=anio; i>=anioMinimo; i--)
            {
                marcas.precio-=500;               
                if(marcas.anio==i)
                {                                   
                    break;                 
                }
            }            
        }
       
    }

    //Servicio Completo
    if(info3=='completo')
    {
  
        if(marcas.nombre=='Camaro' || marcas.nombre=='Mustang')
        {            
            marcas.precio=80000
            for (let i=anio; i>=anioMinimo; i--)
            {
                marcas.precio-=500;               
                if(marcas.anio==i)
                {                                  
                    break;                         
                }

            } 
                 
        }
    
        if(marcas.nombre=='BMW' || marcas.nombre=='Audi')
        {
            marcas.precio=40000
            for (let i=anio; i>=anioMinimo; i--)
            {
                marcas.precio-=500;                
                if(marcas.anio==i)
                {              
                    break;       
                }
            } 
                     
        }
    }
   

    //Resultado de la cotizacion     
    console.log(marcas.precio);
    const resultado = document.getElementById('resultado');

    //modelo
    let resultadoM = document.createElement('p');
    resultadoM.value = marcas.nombre;
    resultadoM.innerHTML= `Modelo: ${marcas.nombre}`
    resultado.appendChild(resultadoM);

    //año
    let resultadoA = document.createElement('p');
    resultadoA.value = marcas.anio;
    resultadoA.innerHTML= `Año: ${marcas.anio}`
    resultado.appendChild(resultadoA);
   
    //precio
    let resultadoP = document.createElement('p');
    resultadoP.value = marcas.precio;
    resultadoP.innerHTML=`Precio: $${marcas.precio}`;
    resultado.appendChild(resultadoP);

    document.getElementById('boton').style.display='none';
    let botoncito = document.createElement('button');     
    botoncito.textContent='Reiniciar';
    resultado.appendChild(botoncito);
    


});

//clases

class Autos{
    constructor(nombre,anio,precio)
    {
        this.nombre=nombre;
        this.anio=anio;
        this.precio=precio;
    }
 
}


