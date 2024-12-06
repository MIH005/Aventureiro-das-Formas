document.getElementById('calculo-area').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const raio = document.getElementById('raio').value;
  const area = Math.PI * Math.pow(raio, 2); // Fórmula para a área do círculo
  
  document.getElementById('resultado').innerText = `A área do círculo é: ${area.toFixed(2)} unidades quadradas.`;
});
