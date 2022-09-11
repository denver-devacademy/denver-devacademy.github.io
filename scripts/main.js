// -----
// setup
// -----

// functions

// adapted from here:
// https://stackoverflow.com/questions/814564/inserting-html-elements-with-javascript/814649#814649
function create(htmlStr) {
  const frag = document.createDocumentFragment(),
    temp = document.createElement('div')
  temp.innerHTML = htmlStr
  while (temp.firstChild) {
    frag.appendChild(temp.firstChild)
  }
  return frag
}

// -----------
// main script
// -----------

// load json file
// adapted from here:
// https://www.freecodecamp.org/news/how-to-read-json-file-in-javascript/
fetch('./data/header-data.json')
  .then((response) => response.json())
  .then((json) => {
    json.headerLinks.forEach((linkItem) => {
      if (linkItem.type === 'group') {
        console.log('group!')
        console.log(linkItem)
        const fragment = create(
          `<div class="header-nav-item header-nav-group">${linkItem.text}</div>`
        )
        document.getElementById('header').appendChild(fragment)
      } else if (linkItem.type === 'link') {
        const fragment = create(
          `<div class="header-nav-item header-nav-link"><a href="${linkItem.link}">${linkItem.text}</a></div>`
        )
        document.getElementById('header').appendChild(fragment)
      } else {
        console.error('unrecognized link item type!')
      }
    })
  })
