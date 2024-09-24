import { defineConfig } from 'src/config';

export const form = defineConfig({
  name: 'versoly-form',
  checks: [{ plugin: 'formid' }],
  js: `window.vPageLoadedAt = Date.now()

setTimeout(() => {
  let inputs = [...document.getElementsByTagName("input")]
  inputs.forEach(i => {
    if (i.name === 'email_second' || i.name === 'name_second') {
      i.setAttribute('aria-hidden', 'true')
      i.setAttribute('tabindex', '-1')
      i.setAttribute('autocomplete', 'false')
    }
  })
}, 3000)

const sendFormData = function (e, form) {
  e.preventDefault();
  const formId = form.dataset.formid;
  let scriptsByForm = window.vForms[formId] || {}

  if (window.vPageLoadedAt + 3000 > Date.now()) {
    return null
  }

  let data = {
    created: Date.now(),
    url: location.pathname + location.search
  }

  const filteredForms = document.querySelectorAll('[data-formId="' + formId + '"]')
  let formIndex = 0
  filteredForms.forEach((f, index) => {
    if (f === form) {
      formIndex = index
    }
  })

  const errorElement = document.querySelectorAll('[data-form-errorid="' + formId + '"]')[formIndex]
  let inputs = [
    ...form.getElementsByTagName("input"),
    ...form.getElementsByTagName("textarea"),
    ...form.getElementsByTagName("select")
  ]

  inputs.forEach(input =>  {
    if (input.type === 'radio') {
      if (input.checked) {
        data[input.name] = input.value
      }
      return
    }
    if (input.tagName === 'SELECT') {
      data[input.name] = input.options[input.selectedIndex].value
      return
    }
    if (input.type === 'checkbox') {
      data[input.name] = input.checked + ""
      return
    }
    data[input.name] = input.value
  })

  if (!!data['email_second'] || !!data['name_second']) {
    return null
  }
  delete data['email_second'];
  delete data['name_second'];

  if (scriptsByForm.pre) {
    eval(scriptsByForm.pre)
  }

  const submitButton = form.querySelector(('button[type="submit"]'))
  const buttonInnerHTML = submitButton.innerHTML
  submitButton.disabled = true

  let loadingButtonInnerHTML = '<i class="fa fa-spinner fa-spin"></i> Loading'
  if (submitButton.getAttribute('data-loading-html')) {
    loadingButtonInnerHTML = submitButton.getAttribute('data-loading-html')
  }
  submitButton.innerHTML = loadingButtonInnerHTML

  data = JSON.stringify(data)
  fetch('https://api.versoly.com/v1/form/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({formId: formId, data: data})
  })
  .then(function (response){
    if (!response.ok) {
      throw new Error('Bad response from server');
    }

    if (window.versoly && form.getAttribute('data-eventid')) {
      window.versoly.event({name: form.getAttribute('data-eventid')})
    }

    if (scriptsByForm.post) {
      eval(scriptsByForm.post)
    }

    if (form.dataset["successUrl"]) {
      window.location.replace(form.dataset["successUrl"])
      return
    }

    const successElement = document.querySelectorAll('[data-form-successid="' + formId + '"]')[formIndex]

    if (successElement) {
      successElement.classList.remove("d-js");
      errorElement.classList.add("d-js");
      form.classList.add("d-js");

      successElement.classList.remove("d-none");
      errorElement.classList.add("d-none");
      form.classList.add("d-none");
    }

    submitButton.disabled = false
    submitButton.innerHTML = buttonInnerHTML
  })
  .catch(function (error){
    console.log(error)
    if (errorElement) {
      errorElement.classList.remove("d-js");
      errorElement.classList.remove("d-none");
    }
    if (scriptsByForm.failed) {
      eval(scriptsByForm.failed)
    }
    submitButton.disabled = false
    submitButton.innerHTML = buttonInnerHTML
  })
}


window.addFormListener = () => {
  const forms = document.querySelectorAll('[data-formid]');

  for (const form of forms) {
    if (!form.getAttribute('data-has-form-eventlistener')) {
      form.addEventListener("submit", function (e) {
        sendFormData(e, form)
      });
      form.setAttribute('data-has-form-eventlistener', 'true')
    }
  }
}
window.addFormListener && window.addFormListener()
`,
});
