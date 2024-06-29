const container = document.querySelector(".container")


// Função genérica que adiciona um zero antes do primeiro dígito caso só tenha um número no horário.
const addDigitoZero = (zero) => {
  const testar = String(zero).length
  const naoTemZero = `0${zero}`
  const temZero= `${zero}`

  return testar === 1 ? naoTemZero : temZero  
}

// Função genérica que renderiza o horário neste paradão: hh:mm:ss >> 00:00:00
const horario = (tempo) => {  
  const horas = tempo.getHours()
  const minutos = tempo.getMinutes()
  const segundos = tempo.getSeconds()
  
  return `${addDigitoZero(horas)}:${addDigitoZero(minutos)}:${addDigitoZero(segundos)}`
}

// Cria uma data e horário completa no presente (atual momento, agora)
// E renderiza no HTML a data formatada no padrão 00:00:00 >> hh:mm:ss
const updateContainer = () => {
  const data = new Date()  
  container.textContent = horario(data)
}

// Fica repetindo a função que cria a data a cada 1 segundo
setInterval(updateContainer, 1000)

