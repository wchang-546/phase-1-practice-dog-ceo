
const imgURL = "https://dog.ceo/api/breeds/image/random/4";

function addImg(){
    fetch(imgURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const images = data.message;
      
            images.forEach(dogImage => {
                const imgElement = document.createElement('img'); 
                imgElement.src = dogImage; 
                const imgLocation = document.getElementById('dog-image-container');
                imgLocation.appendChild(imgElement); 
            });
          })
          .catch(error => console.log(error));
};

document.addEventListener("DOMContentLoaded", addImg)

const breedURL = "https://dog.ceo/api/breeds/list/all";

function addBreeds() {
    fetch(breedURL)
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            const breedList = data.message;
            
            for (const breedKey in breedList) {
                const breedName = document.createElement("li");
                breedName.textContent = breedKey;

                const breedLocation = document.getElementById("dog-breeds");
                breedLocation.appendChild(breedName);
                
                function turnRed(){
                    breedName.style.color = 'red';
                }
                breedName.addEventListener("click", turnRed);
            }
        })
        .catch(error => console.log(error));
};

document.addEventListener("DOMContentLoaded", addBreeds)

