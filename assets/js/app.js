
let buttonsArr = document.querySelectorAll(".btn");
let showResults = document.querySelector(".show-results");


function printResults(filteredData){

    console.log(filteredData);

    //console.log(showResults);

    showResults.innerHTML = "";
    
    filteredData.forEach(elem => {

       let card = document.createElement("div");
        card.setAttribute("class", "card");
        card.innerHTML = `<div class="img"><img src="assets/img/${elem.img}" alt=""></div>
        <div class="name"><span>${elem.name}</span></div>
        <div class="description"><p>${elem.description}</p></div>`;

        showResults.appendChild(card);

    });

}

function filterMenu(data, btnValue){
    //console.log(data, btnValue);
    
    if(btnValue != "All"){
        let filteredData = data.meals.filter(meal => meal.food_type === btnValue);
        printResults(filteredData);
        return;
        //pagination(filteredData);
    }
        printResults(data.meals);
        //pagination(data.meals);
}

function getJson(btnValue){

    buttonsArr.forEach(btn => {
        btn.disabled = true;
    });

    const url = "assets/json/menu.json";

    fetch(url)
    .then(response => {
        if(!response.ok) {
        }
        return response.json(); 
    })
    .then(data =>{
        //console.log(data);
        filterMenu(data, btnValue);
    })
    .catch(error => {
        console.log("Error al consumir JSON", error);
    })
    .finally(() => {
        buttonsArr.forEach(btn => {
            btn.disabled = false;
    });
  })
}

buttonsArr.forEach(btn => {
    btn.addEventListener("click", function(){
        let btnValue = btn.value;
        getJson(btnValue);
    });
});