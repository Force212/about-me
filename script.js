// Обработка отправки формы
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Предотвращаем отправку формы

  // Показываем сообщение об успешной отправке
  const confirmationMessage = document.getElementById('confirmation-message');
  confirmationMessage.classList.remove('hidden');

  // Очищаем форму
  this.reset();

  // Скрываем сообщение через 3 секунды
  setTimeout(() => {
    confirmationMessage.classList.add('hidden');
  }, 3000);
});