const greeting = (phrase) => {
  // alert(phrase)
}

const parent = document.querySelector('h1')

const greetingMessageCreator = ({ name, surname }) => {
  debugger
  const message = `Hello, ${name} ${surname}!`

  greeting(message)
  parent.textContent = message
}

greetingMessageCreator({ name: 'Nikita', surname: 'Belozerov' })

const obj = { a: 1, b: { c: { d: () => { }, e: true } } }

obj.b.c.e()

