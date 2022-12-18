<javascript>
  /*3의 배수*/
  
  /*5의 배수*/

  /*7의 배수*/
var userNumber = prompt("숫자를 입력하세요.");
var displayArea = document.querySelector("#result");

if (userNumber != null){
  if(userNumber % 7 === 0){
    displayArea.innerHTML = userNumber + "은 7의 배수입니다!";
  }
  else{
    displayArea.innerHTML = userNumber + "은 7의 배수가 아닙니다!";
  }
}

</javascript>
