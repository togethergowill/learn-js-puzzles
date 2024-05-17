const person = {
  name: 'ls',
  age: 18
}


const personProxy = new Proxy(person,{
  set(){
    console.log('it is ok')
  }
})

person.name = 'ly'


