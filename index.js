const button = document.querySelector('.button')
const invalid_icon = document.querySelector('.invalid_icon')
const msg_invalid = document.querySelector('.msg_invalid')
const msg_valid = document.querySelector('.msg_valid')
const emailAddress = document.querySelector('#email_block')
const email_wrapper = document.querySelector('.email_wrapper')

button.addEventListener('click', () => {
  validate()
})

emailAddress.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    validate()
  } else {
    reset()
  }
})

function validate() {
  if (emailIsValid(emailAddress.value)) {
    emailValid()
    emailAddress.value = ''
  } else {
    emailInValid()
  }
}

function emailValid() {
  console.log('email address valid')
  msg_valid.classList.remove('hidden')
}

function emailInValid() {
  console.log('email address invalid')
  invalid_icon.classList.remove('hidden')
  msg_invalid.classList.remove('hidden')
  email_wrapper.classList.add('invalid')
}

function reset() {
  invalid_icon.classList.add('hidden')
  msg_valid.classList.add('hidden')
  msg_invalid.classList.add('hidden')
  email_wrapper.classList.remove('invalid')
}

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
