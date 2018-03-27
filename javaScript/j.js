var jedi = {
    name: "Yoda",
    age: 899,
    talk: function () { alert("another... Sky... walk..."); }
};

jedi.name="abc";
jedi.talk();
document.write(jedi.name);
document.write("<br>");


var shoppingCart=['Milk','butter','coffee'];
document.write(shoppingCart);
document.writeln("<br>");
shoppingCart.push('car');
shoppingCart.push('cloths');
document.write("<br>");
document.writeln(shoppingCart);
document.write("<br>");
shoppingCart.pop();

document.writeln(shoppingCart);
shoppingCart.pop();
document.write("<br>");
document.writeln(shoppingCart);

var helloFrom = function (personName) {
    return "Hello from " + personName;
}

var people = ['Tom', 'Yoda', 'Ron'];

people.push('Bob');
people.push('Dr Evil');

people.pop();

for (var i=0; i < people.length; i++) {
    var greeting = helloFrom(people[i]);
    alert(greeting);
}
