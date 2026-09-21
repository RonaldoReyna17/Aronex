const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');
menu.addEventListener('click', () => nav.classList.toggle('open'));

function sendMessage(event){
  event.preventDefault();
  const status = document.getElementById('form-status');
  status.textContent = 'Thanks — your message is ready to be connected to the ARONEX email system.';
  event.target.reset();
  return false;
}
