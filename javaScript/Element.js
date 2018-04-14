function changeStyle()
{
  var text=document.getElementById("paragraph1").style.color="yellow";
  var text1=document.getElementById("paragraph1").style.backgroundColor="red";
}

function changeParagraph()
{
  var paragraphText=document.getElementsByTagName("p");

  for (var i = 0; i < paragraphText.length; i++) {
    paragraphText[i].style.fontStyle="italic";
  }

}

function changeParagraphclass()
{
  var paragraphClass=document.getElementsByClassName("paragraphClass");

  var txt=paragraphClass[0].style.color="blue";

}
