const button = document.querySelector('.button')
const error_icon = document.querySelector('.error_icon')
const error_msg = document.querySelector('.error_msg')
const error_outline = document.querySelector('.email_wrapper')
const emailAddress = document.querySelector('#email_block')

button.addEventListener('click', () => {
  if (emailIsValid(emailAddress.value)) {
    console.log('email address good')
  } else {
    emailError()
  }
})

function emailError() {
  error_icon.classList.add('error')
  error_msg.classList.add('error')
  error_outline.classList.add('error')
}

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
