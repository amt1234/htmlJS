var emp={
	 name:"abc",
	id:101
}
document.write(emp.name+" "+emp.id+" ");

document.write("<br>");

//object created by instance of Object
var employee=new Object();

  employee.id=101;
  employee.name="poonam";
document.write(employee.id+" "+employee.name);
document.write("<br>");

//object using Constructor
function functionName(id,name)
{
    this.id=id;
    this.name=name;
}
func=new functionName(102,"xyz");
document.write(func.id+" "+func.name);
