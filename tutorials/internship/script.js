/* 
  Define a language
  Define an array of post objects: posts
    each with a title, description, content, and difficulty
  Import the variables and this script into the HTML page.
*/
const language = 'Internship Guide'
const posts = [
  { name: 'Phase 0', title: 'Knowledge Base', sections: ['Programming Fundamentals', 'Algorithms and Data Structures', 'Problem Solving'] },
  { name: 'Phase 1', title: 'Soft Skills', sections: ['Networking', 'Resume', 'Culture'] },
  { name: 'Phase 2', title: 'Opportunities', sections: ['Hackathons', 'Internships', 'Conferences'] },
  { name: 'Phase 3', title: 'Applications', sections: ['When to Apply', 'Where to Apply', 'How to Apply'] },
  { name: 'Phase 4', title: 'Interviewing', sections: ['Behavioral', 'Technical', 'Interview Tips'] },
  { name: 'Phase 5', title: 'Offers', sections: ['Deciding', 'Negotiating', 'Accepting', 'Logistics'] },
]

// Configure language
document.querySelector('title').innerHTML = `Codev - ${language}`
document.querySelector('page-title').innerHTML = language

// Configure sidebar and content
let sidebar = document.querySelector('column-left')
let content = document.querySelector('column-right')

posts.forEach(post => {

    let escapedTitle = post.name.toLowerCase().replace(/\s/g, "-")

    // Sidebar navigation
    let container = document.createElement('div')
    container.innerHTML = `
      <a href="#${escapedTitle}">
        <post-title>${post.name}</post-title>
      </a>
    `
    sidebar.append(container)

    // Content posts
    let xhr = new XMLHttpRequest()
    xhr.open('GET', `./posts/${escapedTitle}.md`)
    xhr.send(null)
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        let converter = new showdown.Converter()
        let html = converter.makeHtml(xhr.responseText)
        let tutorial = document.createElement('div')
        tutorial.innerHTML = `
          <!-- ${post.name} -->
          <h1 id="${escapedTitle}"><span>${post.name}</span> ${post.title}</h1>
          ${post.sections.map(section => `<internal-link><a href="#${section.toLowerCase().replace(/\s/g, "-")}">${section}</a></internal-link>`).join('')}
          <p>${html}</p>
        `
        content.append(tutorial)
      }
    }
  }
)
