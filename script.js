const password = document.getElementById('password');
const background = document.getElementById('background');
const togglePassword = document.getElementById('toggle-password');

password.addEventListener('input', (e) => {
  updateBackgroundBlur(e.target.value.length);
});

togglePassword.addEventListener('click', () => {
  const isPasswordVisible = password.getAttribute('type') === 'text';
  password.setAttribute('type', isPasswordVisible ? 'password' : 'text');
  togglePassword.textContent = isPasswordVisible ? '👁️' : '🙈';
  updateBackgroundBlur(password.value.length, !isPasswordVisible);
});

function updateBackgroundBlur(length, isPasswordVisible = false) {
  const blurValue = isPasswordVisible ? 0 : 20 - length * 2;
  background.style.filter = `blur(${blurValue}px)`;
}