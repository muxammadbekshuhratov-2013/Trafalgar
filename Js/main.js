const toggleIcon = document.getElementById('toggle-icon');
let isDarkMode = false;

toggleIcon.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  isDarkMode = !isDarkMode;
  toggleIcon.textContent = isDarkMode ? '☀️' : '🌙';
});