// let addToy = false;
  // h2.innerText.toy.name
  
  const toyCollection = document.querySelector("#toy-collection")
  
  
  // const imgToDiv = () => {
    fetch("http://localhost:3000/toys")
    .then(res => res.json())
    // console.log("this works")
    .then((toyArray) => {
      toyArray.forEach(function(toyObj){
      let toyCard = document.createElement ("div")
        toyCard.className = "card" 
      let toyName = document.createElement("h2")
      let toyImage = document.createElement("img")
        toyImage.className = "toy-avatar"
      let likes = document.createElement("p")
        toyCard.append(toyName)
          toyName.innerText = toyObj.name
        toyCard.append(toyImage) 
          toyImage.src = toyObj.image 
        toyCard.append(likes)
          likes.innerText = toyObj.likes
        toyCollection.append(toyCard)
        
        

        // let submit = document.createElement("button")
        // submit.className = "like-btn"
        // submit.id = "[toy_id]"
        


    });
  });

  // fetch("http://localhost:3000/toys")
  // .then(res => res.json())
  // .then((toyArray) => {
  //   toyArray.forEach(function(toyObj){      
  //     });
  //   });

    // let formPlace = document.querySelector("#toy-header")
    
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
    console.log("hello")
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
        
        const toyForm = document.querySelector(".add-toy-form")
        toyFormContainer.append(toyForm)


  });
});

