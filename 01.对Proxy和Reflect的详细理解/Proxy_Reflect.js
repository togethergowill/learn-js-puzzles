const person = {
  _name: 'ls',
  age: 18,
  address: 'China',
  set name(value) {
    this.address = value
    console.log(this)
  },
  get name() {
    console.log(this)
  }
}

// Object.defineProperty(person, 'address', {
//   writable: false
// })

const personProxy = new Proxy(person, {
  set(target, value, key, receiver) {
    // 使用Reflect消除静默错误，使用receiver参数改变this指向
    if (!Reflect.set(target, value, key, receiver)) {
      throw new Error(`set ${key} 失败  `)
    } else {
      console.log("set 成功")
    }
  }
})

Reflect.get(person, 'name', { name: 'hhhh' })

personProxy.address = '中国'
console.log(person)


