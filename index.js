/**
Challenge: 

- Add some styling! Be creative, play with layout a bit
  (Spoiler: I'm going to use a single-column flexbox layout)
  add some color, grab a font from Google fonts - whatever
  you'd like!
*/

document.querySelector('button').addEventListener('click', changeTitle)

function changeTitle(){
  fetch('https://apis.scrimba.com/bored/api/activity')
    .then(response => response.json())
    .then(data =>{ 
  document.querySelector('h4').textContent = data.activity
  document.getElementById("title").textContent = "🦾 HappyBot🦿"
  document.body.classList.add("fun")
  })
}