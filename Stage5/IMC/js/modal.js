export const Modal = { /* Shorthand */
  Wrapper: document.querySelector('.modal-wrapper'),
  btnClose: document.querySelector('.close'),
  Message: document.querySelector('.modal-card .title span'),
  open () {
    Modal.Wrapper.classList.add('open')
  },
  close () {
    Modal.Wrapper.classList.remove('open')
  },
}

Modal.btnClose.onclick = () => {
  Modal.close()
}

window.addEventListener('keydown', (event) => {
  
  if (event.key === 'Escape'){
    Modal.close()
  }
})

