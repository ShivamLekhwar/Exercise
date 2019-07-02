/* eslint-disable no-console */
class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      console.log(`${this.name}is older than ${otherUser.name}`)
    } else if (this.age < otherUser.age) {
      console.log(`${otherUser.name}is older than ${this.name}`)
    } else {
      console.log('they have same age')
    }
  }
}

const user1 = new User('Shivam', 21)

const user2 = new User('Raj', 41)

user1.compareAge(user2)
