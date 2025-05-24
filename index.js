function update() {

const amount = document.querySelector('#amount').value;
const month = document.querySelector('#months').value;
const rate = document.querySelector('#interest').value;
const total = document.querySelector('#result');

const interest = (amount *(rate * 0.01)) / month;
const result = ((amount / month) + interest).toFixed(2);
total.innerHTML = " Total EMI Interest Rate: " + result;

}
function change() {
      if(amount.value == "" || month.value == "" || rate.value == ""){
                alert("please fill all the fields");
              
    }
}
    
