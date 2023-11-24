const urlApi = `https://reqres.in/api/users?page=1@`;
const urlApiP2 = `https://reqres.in/api/users?page=2`;

const body1Element = document.getElementById("body1"); 


    fetch(urlApi).then((response) => {
        return response.json();
    })
    .then((jsonFramboise) => {
        console.log(jsonFramboise); // j'affiche le tableau de l'api
        console.log(jsonFramboise.data) //j'affiche les Data du tableau de l'api

    const users = jsonFramboise.data; // je "stocke" dans USERS les datas du tableau pour les utiliser dans la boucle for avec le .length.

    for (let zindex = 0; zindex < users.length; zindex++){

    body1Element.innerHTML += `

    <div class= "user_cards">
   <div id= "id">
        <p>id : ${jsonFramboise.data[zindex].id}</p>
   </div>
   <div id= "avatar"><img src = "${jsonFramboise.data[zindex].avatar}" alt ="Picture of ${jsonFramboise.data[zindex].first_name} "/></div>
   <div id= "prenom_nom">
        <p>${jsonFramboise.data[zindex].first_name} ${jsonFramboise.data[zindex].last_name}</p>
   </div>
   <div id= "email">
        <p>@ ${jsonFramboise.data[zindex].email}</p>
   </div>
   </div>
    `;   
    
    }  // ===> FIN de FOR LOOP

});  // ===> FIN de FETCH


function nextOne (event) {
    event.preventDefault();

    const searchPage = document.getElementById("page_choice").value;
console.log(searchPage);

}
nextOne(); // ==> FIN de FONCTION 


