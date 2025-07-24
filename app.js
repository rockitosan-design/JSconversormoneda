 //js conversion de moneda

//definir las tasas
const tasascambiarias = {
  'EUR': { 'USD': 1.08, 'JPY': 169.58, 'EUR': 1 },
  'USD': { 'EUR': 0.92, 'JPY': 157.06, 'USD': 1 },
  'JPY': { 'EUR': 0.0059, 'USD': 0.0064, 'JPY': 1 }
};
//transformar los options value del html a texto
const codigosMoneda = {
  '1': 'EUR',
  '2': 'USD',
  '3': 'JPY'
}

//variables
const monedainInput=document.getElementById("monedain")
const monedatoInput=document.getElementById("monedato")
const cantidadInput=document.getElementById("cantidad")
const errorElement = document.getElementById('error');
const form = document.getElementById("form-monedas")
const resultadoElement = document.getElementById("resultado"); 


let errorexiste = false
//funciones para funcionamiento de los inputs y selects

function comprobarForm(event) {
  errorElement.innerText = "";
  errorexiste = false; 

  if (monedainInput.value === "") {
    errorElement.innerText = "Debes seleccionar una moneda origen";
    monedainInput.focus();
    errorexiste = true;
  }

  if (monedatoInput.value === "") {
    if (!errorexiste) {
      errorElement.innerText = "Debes seleccionar una moneda destino.";
      monedatoInput.focus();
    }
    errorexiste = true;
  }

  const cantidad = parseFloat(cantidadInput.value);
  if (isNaN(cantidad) || cantidad <= 0) {
    if (!errorexiste) {
      errorElement.innerText = "La cantidad debe ser un número positivo";
      cantidadInput.focus();
    }
    errorexiste = true;
  }

  if (errorexiste) {
    event.preventDefault();
    return false;
  }
  
//variables para la conversión
const monedain = codigosMoneda[monedainInput.value];
const monedato = codigosMoneda[monedatoInput.value];
const tasa = tasascambiarias[monedain][monedato];

//cálculo de conversión
const resultado = cantidad * tasa
resultadoElement.innerText = `${cantidad} ${monedain} son ${resultado.toFixed(2)} ${monedato}. Eso es para heladitos bebe gordita?`;
 event.preventDefault();
return false;
}
//evento que muestra el resultado
 form.addEventListener('submit', comprobarForm);
 