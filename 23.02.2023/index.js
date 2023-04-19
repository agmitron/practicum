const greeting = (phrase) => {
  // alert(phrase)
}

const parent = document.querySelector('h1')

const greetingMessageCreator = ({ name, surname }) => {
  const message = `Hello, ${name} ${surname}!`

  greeting(mesage)
  parent.textContent = message
}

greetingMessageCreator({ name: 'Nikita', surname: 'Belozerov' })

const obj = { a: 1, b: { c: { d: () => { }, e: true } } }

obj.b.c.e()

