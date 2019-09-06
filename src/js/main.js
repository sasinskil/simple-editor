"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const message = {
  title: '',
  content: ''
}

const title = document.querySelector('.form__title--input-js');
const content = document.querySelector('.form__content--input-js');
const btnSave = document.querySelector('.form__button--save-js');
const btnLoad = document.querySelector('.form__button--load-js');

btnSave.addEventListener('click', (e) => {

  e.preventDefault();

  if (title.value.length > 0 && content.value.length > 0) {
    message.title = title.value;
    message.content = content.value;

    const JsonMessage = JSON.stringify(message);
    localStorage.setItem('message', JsonMessage);

    title.value = "";
    content.value = "";
  } else {
    alert('Fill in the fields first !');
  }
})

btnLoad.addEventListener('click', (e) => {

  e.preventDefault();

  if (localStorage.getItem('message')) {

    const messageLocalStorage = localStorage.getItem('message')

    const newMessage = JSON.parse(messageLocalStorage);

    title.value = newMessage.title;
    content.value = newMessage.content;

  } else {
    alert('You need to create your message first !');
  }
})


