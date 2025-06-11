

document.getElementById('mailButton').addEventListener('click', function(e){
  e.preventDefault()


const emailInput = document.getElementById('emailInput');
const errorMesssage = document.getElementById('errorMessage');
const removeWhiteSpace = emailInput.value.trim();
const emailRedex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailRedex.test(removeWhiteSpace)) {
  errorMesssage.style.display = 'block';
  // emailInput.classList.add('error');


}else {
  errorMesssage.style.display = 'none';
  // emailInput.classList.remove('error');
}

});























