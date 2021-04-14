let addToy = false;

const toyName = document.createElement("h2")
  // h2.innerText.toy.name
const toyImage = document.createElement("img")
  toyImage.className = "toy-avatar"
const toyLikes = document.createElement("p")

const submit = document.createElement("button")
  submit.className = "like-btn"
  submit.id = "[toy_id]"
const toyForm = document.createElement("form")


fetch("http://localhost:3000/toys")
  .then(res => res.json())
  console.log("this works")
  .then((toyArray) => {
    toyArray.forEach(function(toyObj){
    turnToyObjHtml(toyObj)
    })
  })


document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    
    
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

// comment

