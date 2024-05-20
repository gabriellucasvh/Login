function togglePassword() {
  const passwordField = document.getElementById("password");
  const toggleButton = document.querySelector(".toggle-password i"); // Seleciona o ícone dentro do botão

  if (passwordField.type === "password") {
    passwordField.type = "text";
    toggleButton.classList.remove("fa-eye");
    toggleButton.classList.add("fa-eye-slash");
  } else {
    passwordField.type = "password";
    toggleButton.classList.remove("fa-eye-slash");
    toggleButton.classList.add("fa-eye");
  }
}
