// List of tutorials with number of tutorials made.
const tutorials = {
  React: 8,
  Python: 3,
  Git: 2,
  Angularjs: 2,
  Javascript: 8
}

let column = document.querySelector('column-right')

for (language in tutorials) {
  let template = `
    <a href="./tutorials/${language.toLowerCase()}/index.html">
      <tutorial-card>
        <tutorial-title>
          <i class="devicon-${language.toLowerCase()}-plain"></i>
          ${language}
        </tutorial-title>
        <tutorial-number>${tutorials[language]} tutorials</tutorial-number>
      </tutorial-card>
    </a>`
  let container = document.createElement('div')
  container.innerHTML = template
  column.append(container)
}