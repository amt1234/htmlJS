function ConstructorO(firstname,lastname,age)
{
    this.fname=firstname;
    this.lastName = last;
    this.age = age;

}
var person=new ConstructorO("abc","pqr",45);
document.write(person.age);

ConstructorO.firstname="xyz";
document.write(ConstructorO.firstname);
document.getElementById("demo").innerHTML="person age is "+person.age+".";
