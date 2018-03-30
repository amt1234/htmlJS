
function validationText()
{
  var box=document.getElementById("name");
  if(box.value=="")
  {
    alert("The field marked in red can't be blank ");
    return false;
  }
}
