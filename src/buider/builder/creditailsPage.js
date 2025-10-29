import { faker } from '@faker-js/faker';

export class Builder {
   addUserName () {
 this.userName= faker.person.firstName('male')
 return this
}

addUserEmail () {
    this.userEmail=faker.internet.email()
    return this
}

addUserPassword () {
this.userPassword=faker.internet.password({length: 5})
return this
}
addAboutMySelf () {
    this.aboutMySelf = faker.person.bio()
    return this
}

generate (){
    const copied = structuredClone ({
        userName:this.userName,
        userEmail:this.userEmail,
        userPassword:this.userPassword,
        aboutMySelf:this.aboutMySelf
    });
    return copied
    }
}
    


