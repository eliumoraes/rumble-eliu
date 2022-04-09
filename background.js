function ocultarOuMostrarRespostas(respostas) {
  try {
    if (respostas.style.display === '') {
      respostas.style.display = 'none'
    } else {
      respostas.style.display = ''
    }
  } catch (error) {
    console.error('Comentário sem resposta.\n', error)
  }
}
