!function(n){var e={};function c(t){if(e[t])return e[t].exports;var l=e[t]={i:t,l:!1,exports:{}};return n[t].call(l.exports,l,l.exports,c),l.l=!0,l.exports}c.m=n,c.c=e,c.d=function(n,e,t){c.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},c.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,e){if(1&e&&(n=c(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var l in n)c.d(t,l,function(e){return n[e]}.bind(null,l));return t},c.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return c.d(e,"a",e),e},c.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},c.p="",c(c.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\r\n\r\n// service worker registration - remove if you're not going to use it\r\n\r\nif ('serviceWorker' in navigator) {\r\n  window.addEventListener('load', function () {\r\n    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {\r\n      // Registration was successful\r\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\r\n    }, function (err) {\r\n      // registration failed :(\r\n      console.log('ServiceWorker registration failed: ', err);\r\n    });\r\n  });\r\n}\r\n\r\n// place your code below\r\n\r\nconst message = {\r\n  title: '',\r\n  content: ''\r\n}\r\n\r\nconst title = document.querySelector('.form__title--input-js');\r\nconst content = document.querySelector('.form__content--input-js');\r\nconst btnSave = document.querySelector('.form__button--save-js');\r\nconst btnLoad = document.querySelector('.form__button--load-js');\r\n\r\nbtnSave.addEventListener('click', (e) => {\r\n\r\n  e.preventDefault();\r\n\r\n  if (title.value.length > 0 && content.value.length > 0) {\r\n    message.title = title.value;\r\n    message.content = content.value;\r\n\r\n    const JsonMessage = JSON.stringify(message);\r\n    localStorage.setItem('message', JsonMessage);\r\n\r\n    title.value = \"\";\r\n    content.value = \"\";\r\n  } else {\r\n    alert('Fill in the fields first !');\r\n  }\r\n})\r\n\r\nbtnLoad.addEventListener('click', (e) => {\r\n\r\n  e.preventDefault();\r\n\r\n  if (localStorage.getItem('message')) {\r\n\r\n    const messageLocalStorage = localStorage.getItem('message')\r\n\r\n    const newMessage = JSON.parse(messageLocalStorage);\r\n\r\n    title.value = newMessage.title;\r\n    content.value = newMessage.content;\r\n\r\n  } else {\r\n    alert('You need to create your message first !');\r\n  }\r\n})\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gLSByZW1vdmUgaWYgeW91J3JlIG5vdCBnb2luZyB0byB1c2UgaXRcclxuXHJcbmlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3Rlcignc2VydmljZXdvcmtlci5qcycpLnRoZW4oZnVuY3Rpb24gKHJlZ2lzdHJhdGlvbikge1xyXG4gICAgICAvLyBSZWdpc3RyYXRpb24gd2FzIHN1Y2Nlc3NmdWxcclxuICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwgd2l0aCBzY29wZTogJywgcmVnaXN0cmF0aW9uLnNjb3BlKTtcclxuICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgLy8gcmVnaXN0cmF0aW9uIGZhaWxlZCA6KFxyXG4gICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiAnLCBlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIHBsYWNlIHlvdXIgY29kZSBiZWxvd1xyXG5cclxuY29uc3QgbWVzc2FnZSA9IHtcclxuICB0aXRsZTogJycsXHJcbiAgY29udGVudDogJydcclxufVxyXG5cclxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fdGl0bGUtLWlucHV0LWpzJyk7XHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fY29udGVudC0taW5wdXQtanMnKTtcclxuY29uc3QgYnRuU2F2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19idXR0b24tLXNhdmUtanMnKTtcclxuY29uc3QgYnRuTG9hZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19idXR0b24tLWxvYWQtanMnKTtcclxuXHJcbmJ0blNhdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIGlmICh0aXRsZS52YWx1ZS5sZW5ndGggPiAwICYmIGNvbnRlbnQudmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgbWVzc2FnZS50aXRsZSA9IHRpdGxlLnZhbHVlO1xyXG4gICAgbWVzc2FnZS5jb250ZW50ID0gY29udGVudC52YWx1ZTtcclxuXHJcbiAgICBjb25zdCBKc29uTWVzc2FnZSA9IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ21lc3NhZ2UnLCBKc29uTWVzc2FnZSk7XHJcblxyXG4gICAgdGl0bGUudmFsdWUgPSBcIlwiO1xyXG4gICAgY29udGVudC52YWx1ZSA9IFwiXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIGFsZXJ0KCdGaWxsIGluIHRoZSBmaWVsZHMgZmlyc3QgIScpO1xyXG4gIH1cclxufSlcclxuXHJcbmJ0bkxvYWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbWVzc2FnZScpKSB7XHJcblxyXG4gICAgY29uc3QgbWVzc2FnZUxvY2FsU3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtZXNzYWdlJylcclxuXHJcbiAgICBjb25zdCBuZXdNZXNzYWdlID0gSlNPTi5wYXJzZShtZXNzYWdlTG9jYWxTdG9yYWdlKTtcclxuXHJcbiAgICB0aXRsZS52YWx1ZSA9IG5ld01lc3NhZ2UudGl0bGU7XHJcbiAgICBjb250ZW50LnZhbHVlID0gbmV3TWVzc2FnZS5jb250ZW50O1xyXG5cclxuICB9IGVsc2Uge1xyXG4gICAgYWxlcnQoJ1lvdSBuZWVkIHRvIGNyZWF0ZSB5b3VyIG1lc3NhZ2UgZmlyc3QgIScpO1xyXG4gIH1cclxufSlcclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")}]);