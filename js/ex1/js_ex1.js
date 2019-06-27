/* eslint-disable no-console */
class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    comapareAge(userParameter) {
        if (this.age > userParameter.age) {
            console.log(`${this.name}is older than ${userParameter.name}`)
        } else if (this.age < userParameter.age) {
            console.log(`${userParameter.name}is older than ${this.name}`)
        } else {
            console.log('they have same age')
        }
    }
}

const user1 = new User('Shivam', 21)

const user2 = new User('Raj', 41)

user1.comapareAge(user2)
