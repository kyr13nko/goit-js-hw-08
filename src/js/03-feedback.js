import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCAL_KEY = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

let formData = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};

setFormData();

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}

function setFormData() {
  const savedFormData = JSON.parse(localStorage.getItem(LOCAL_KEY));
  if (savedFormData) {
    form.email.value = savedFormData.email || '';
    form.message.value = savedFormData.message || '';
  }
}

function onFormSubmit(event) {
  event.preventDefault();

  if (!form.email.value || !form.message.value) {
    return alert('Будь ласка, заповніть усі поля!');
  }

  console.log(formData);

  localStorage.removeItem(LOCAL_KEY);
  event.currentTarget.reset();
  formData = {};
}
