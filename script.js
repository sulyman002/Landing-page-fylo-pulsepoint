


document.getElementById('mailButton').addEventListener('click', function (e) {
  e.preventDefault();

  const emailInput = document.getElementById('emailInput');
  const errorMessage = document.getElementById('errorMessage');
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    errorMessage.style.display = 'block';
    emailInput.classList.add('error');
  } else {
    errorMessage.style.display = 'none';
    emailInput.classList.remove('error');
    '';

  }
});