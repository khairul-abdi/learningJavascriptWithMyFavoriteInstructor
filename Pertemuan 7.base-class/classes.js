/*
========Classes=======
    - Base Classes
    - Sub Class
*/

// const Profile = {
//     firtsName: ""
//     lastName: ""
//     email: ""
// };

class Profile {
    //property
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    // method /function
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    display() {
        return `
         First Name : ${this.firstName}
         Last Name  : ${this.lastName}
         Email      : ${this.email}
         `;
    }
    updateEmail(newEmail) {
        this.email = newEmail;
        console.log("Email Updated");
        console.log(this.display());


    }

}

const johnProfile = new Profile("Jhon", "Doe", "jhon@doe.com");

//cara biasa
// const johnProfile = new Profile();
// johnProfile.firstName = "Jhon";
// johnProfile.lastName = "Doe";
// johnProfile.email = "john@doe.com";

console.log(typeof Profile);
console.log(typeof johnProfile);
console.log(johnProfile);
console.log(johnProfile.fullName());
console.log(johnProfile.display());
johnProfile.updateEmail("my@mail.com");

