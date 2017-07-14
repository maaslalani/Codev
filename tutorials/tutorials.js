/* 
  Define a language
  Define an array of post objects: posts
    each with a title, description, content, and difficulty
  Import the variables and this script into the HTML page.
*/

// Configure language
document.querySelector('title').innerHTML = `Codev - ${language}`
document.querySelector('page-title').innerHTML = `${language} tutorials`

// Configure sidebar and content
let sidebar = document.querySelector('column-left')
let content = document.querySelector('column-right')

posts.forEach(title => {

    let escapedTitle = title.toLowerCase().replace(/\s/g, "-")

    // Sidebar navigation
    let container = document.createElement('div')
    container.innerHTML = `
      <a href="#${escapedTitle}">
        <post-title>${title}</post-title>
      </a>
    `
    sidebar.append(container)

    // Content posts
    let xhr = new XMLHttpRequest()
    xhr.open('GET', `./posts/${escapedTitle}.html`)
    xhr.send(null)
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        let tutorial = document.createElement('div')
        tutorial.innerHTML = `
          <h1 id="${escapedTitle}">${title}</h1>
          <p>${xhr.responseText}</p>
        `
        content.append(tutorial)
      }
    }
  }
)