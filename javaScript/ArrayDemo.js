//array literal
var employee=["abc","pqr","xyz"];
for (var i = 0; i < employee.length; i++)
{

  document.write(employee[i]+"<br>");
}
document.write("<br>");

//array using instance of array
var ar=new Array();
ar.id=103;
ar.name="pqr";
document.write(ar.id+" "+ar.name);
document.write("<br>");

//array using Constructor
var employee1=new Array("jay","vijay","john");
for (var i = 0; i < employee1.length; i++)
{
  document.write(employee1[i]+"<br>")
}
