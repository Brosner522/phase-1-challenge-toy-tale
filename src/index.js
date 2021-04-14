let addToy = false;

const toyName = document.createElement("h2")
  // h2.innerText.toy.name
  const toyLikes = document.createElement("p")
  
  const submit = document.createElement("button")
  submit.className = "like-btn"
  submit.id = "[toy_id]"
  const toyForm = document.createElement("form")
  
  const toyCollection = document.querySelector("#toy-collection")
  
  // console.log(toyCollection)
  
  // const imgToDiv = () => {
    fetch("http://localhost:3000/toys")
    .then(res => res.json())
    // console.log("this works")
    .then((toyArray) => {
      toyArray.forEach(function(toyObj){
      let toyCard = document.createElement ("div")
      let toyImage = document.createElement("img")
        toyImage.className = "toy-avatar"
        toyCard.className = "card" 
        toyCard.src = toyObj.image 
      toyCard.append(toyImage) 
      toyCollection.append(toyCard)
    });
  });
// }
// console.log(imgToDiv)

//  fetch ("http://localhost:3000/toys"), 
//   method:"POST"
//   headers: 

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

