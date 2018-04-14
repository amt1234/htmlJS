
// function validationText()
// {
//   var box=document.getElementById("name");
//   if(box.value=="")
//   {
//     alert("The field marked in red can't be blank ");
//     return false;
//   }
// }
// function validationText()
// {
//   var box=document.getElementById("name");
//   var box1=document.getElementById("address");
//   var box2=document.getElementById("phone");
//   if((box.value==""||box1.value=="")&&((box2.value=="")&&(box2.value<10 && box2.value>10)))
//   {
//     alert("The field marked in red can't be blank and mobile number should be 10 digit");
//     return false;
//   }
// }
function validationText()
{
  var box=document.getElementById("name");
  var box1=document.getElementById("address");
  var box2=document.getElementById("phone");
  if(box.value==""||box1.value==""||box2.value=="")
  {
    alert("The field marked in red can't be blank");
    // if(box2.value.lenght<10 && box2.value.lenght>10)
    // {
    //   alert("please enter 10 digit mobile number");
    // }

    box2.focus();
    box2.style.border.color="solid 5px";
    return false;
  }
}
