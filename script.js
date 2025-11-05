document.getElementById('calcular').addEventListener('click', () => {
  const cantidad = parseInt(document.getElementById('cantidad').value);
  const tamano = document.querySelector('input[name="tamano"]:checked');
  const pan = document.querySelector('input[name="pan"]:checked');
  const combo = document.getElementById('combo').value;
  const ingredientes = document.querySelectorAll('.ingrediente:checked');

  if (!tamano || !pan) {
    alert("Selecciona el tamaño y tipo de pan antes de continuar.");
    return;
  }

  let total = 0;
  total += parseFloat(tamano.value);
  total += parseFloat(pan.value);
  total += ingredientes.length * 10;

  if (combo === "si") {
    total += 75;
  }

  total *= cantidad;
  document.getElementById('total').textContent = total.toFixed(2);
});