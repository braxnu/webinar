function renderResultList(list) {
  return list.map(dataRow => `
    <div>${dataRow.date}: ${dataRow.bmi}</div>
  `).join('\n')
}

function select(selector) {
  return document.querySelector(selector)
}

function postBMI(bmi) {
  return fetch('/api/bmi', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({bmi})
  })
}

function getBMI() {
  return fetch('/api/bmi')
    .then(response => response.json())
}

function updateResults(list) {
  select('.results').innerHTML =
    renderResultList(list)
}

function onSubmitClick() {
  const bmi = select('[name="bmi"]').value

  postBMI(bmi)
  getBMI().then(updateResults)
}

function onAppTemplateReady(templateHTML) {
  document.body.innerHTML = templateHTML

  select('.submit')
    .addEventListener('click', onSubmitClick)
}

fetch('/app.html')
  .then(response => response.text())
  .then(onAppTemplateReady)

