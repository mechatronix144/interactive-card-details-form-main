const confirmButton = document.getElementById("confirm-button");
const cardHolder = document.getElementById("firstname");
const cardNumber = document.getElementById("cardnumber");
const formContainer = document.getElementById("form");
const frontCardName = document.getElementById("card-name");
const frontCardDate = document.getElementById("data");
const frontCardDateTwo = document.getElementById("data2");
const frontCardValue = document.getElementById("data");
const containerBody = document.getElementById("card-value");
const monthValue = document.getElementById('month')
const yearValue = document.getElementById('year')
const cvcInput = document.getElementById('cvc-buttom');
const cvcBack = document.getElementById('back-value')
confirmButton.addEventListener("click", function () {
  if (!cardHolder.value || !cardNumber.value) {
    // alert('fill the form');
  } else {
    formContainer.innerHTML = `<div class="final-words">
          <img id="image" src="images/icon-complete.svg">
          <h1>Thank You!</h1>
          <p id="jswork">We've added your card details</p>
        </div>
        <button id="continue-btn">Continue</button>
   </div>`;
  }
});
cardHolder.addEventListener("input", function () {
  
  let cardHolderFront = cardHolder.value;
  frontCardName.textContent = `${cardHolderFront}`;
});
cardNumber.addEventListener("input", function () {
  let cardValueFront = cardNumber.value;
  containerBody.textContent = `${cardValueFront}`;
  if (cardNumber.value === "") {
    let cardNumber = "0000 0000 0000 0000";
    containerBody.textContent = "0000-0000-0000-0000";
  }

});

monthValue.addEventListener("input" , function(){
    let monthCardFront = monthValue.value;
    frontCardDate.textContent = `${monthCardFront}`
})

yearValue.addEventListener("input" , function(){
    let yearCardFront = yearValue.value;
    frontCardDateTwo.textContent = `/${yearCardFront}`
})

cvcInput.addEventListener("input" , function(){
    let cvcCardFront = cvcInput.value;
    cvcBack.textContent = `${cvcCardFront}`
})



