// Drag events

/**
 * drag start
 * drag
 * drag end
 */


 const cards = document.querySelectorAll('.card')
 const dropZone = document.querySelectorAll('.dropzone')

 cards.forEach(card => {
  card.addEventListener('dragstart', dragStart)
  card.addEventListener('drag', drag)
  card.addEventListener('dragend', dragEnd)
 });

 function dragStart() {
  dropZone.forEach(dropzone => dropzone.classList.add('hightlight'))

  this.classList.add('is-draggind')
 }

 function drag() {

 }

 function dragEnd() {
  dropZone.forEach(dropzone => dropzone.classList.remove('hightlight'))
  this.classList.remove('is-draggind')

 }

 /**
  * Receber os cartões
  */
 
  dropZone.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
  });

  function dragenter() {}

  function dragover() {
    this.classList.add('over')

    // pegar o cartão que esta sendo movido

    const cardBeingDragged = document.querySelector('.is-draggind')

    this.appendChild(cardBeingDragged)
  }

  function dragleave() {
    this.classList.remove('over')

  }

  function drop() {
    this.classList.remove('over')

  }