const express = require("express");
const app = express();
const port = 8000;
//brings in the library for faker
const faker =require("faker");



// constructors
class Person {
    constructor(){
        this.name = faker.name.findName();
        this.phonenumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password= faker.internet.password();
    }
}

class Address {
    constructor(){
        this.street = faker.address.streetAddress();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipcode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}

const CompanyAddress= new Address();
class Company {
    constructor(){
        this.companyname = faker.company.companyName();
        this.address = new CompanyAddress();
    }
}

app.get("/api", (req, res) =>{
    res.json({message: "good to go api"});
})


//get requests

app.get("/api/person", (req, res) => {
    const person = new Person();
    res.json(person);
})

app.get("/api/company", (req, res) => {
    const company = new Company();
    res.json(company);
})

app.get("/api/address", (req, res) => {
    const address = new Address();
    res.json(address);
})


app.get("/api/person/company/address", (req, res) => {
    const person = new Person();
    const company = new Company();
    const address = new Address();
    res.json(person, company, address);
})


app.listen(port, () => console.group(`Good to go ${port}`));