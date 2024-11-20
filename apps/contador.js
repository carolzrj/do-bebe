// Função para calcular as semanas
function calcularSemanas() {
    // Data inicial (10 de maio)
    const dataInicial = new Date(2024, 4, 10); // Meses começam em 0 (janeiro = 0)
    const hoje = new Date();
  
    // Calcular a diferença em milissegundos
    const diferencaEmMilissegundos = hoje - dataInicial;
  
    // Converter a diferença para dias e depois para semanas
    const dias = diferencaEmMilissegundos / (1000 * 60 * 60 * 24);
    const semanas = Math.floor(dias / 7);
  
    // Ajustar para contar a partir de 0 e atualizar apenas sextas-feiras
    const diaDaSemana = hoje.getDay(); // 0 = domingo, 6 = sábado
    if (diaDaSemana <= 5) { // Se não for sexta-feira, arredonda para baixo
      return semanas;
    } else {
      return semanas - 1;
    }
  }
  
  // Obter o elemento HTML onde o resultado será exibido
  const contadorSemanas = document.getElementById('contador');
  
  // Atualizar o contador
  contadorSemanas.textContent = calcularSemanas();