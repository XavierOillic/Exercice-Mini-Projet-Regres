const urlApi = `https://reqres.in/api/users?page=1`;



fetch(urlApi)
.then((response) => {
    return response.json();
})
.then ((jsonMirabelle) => {
    console.log(jsonMirabelle)

    const idGeorge = jsonMirabelle.data[0].id;
    const idJanet = jsonMirabelle.data[1].id;
    const idEmma = jsonMirabelle.data[2].id;
    const idEve = jsonMirabelle.data[3].id;
    const idCharles = jsonMirabelle.data[4].id;
    const idTracey = jsonMirabelle.data[5].id;
console.log(idGeorge, idJanet, idEmma, idEve, idCharles, idTracey);
// je recupère, et stocke, et affiche l'ID

    const prenomGeorge = jsonMirabelle.data[0].first_name;
    const prenomJanet = jsonMirabelle.data[1].first_name;
    const prenomEmma = jsonMirabelle.data[2].first_name;
    const prenomEve = jsonMirabelle.data[3].first_name;
    const prenomCharles = jsonMirabelle.data[4].first_name;
    const prenomTracey = jsonMirabelle.data[5].first_name;
console.log(prenomGeorge, prenomJanet, prenomEmma, prenomEve, prenomCharles, prenomTracey);
// je recupère, stocke, et affiche le PRENOM

    const nomGeorge = jsonMirabelle.data[0].last_name;
    const nomJanet = jsonMirabelle.data[1].last_name;
    const nomEmma = jsonMirabelle.data[2].last_name;
    const nomEve = jsonMirabelle.data[3].last_name;
    const nomCharles = jsonMirabelle.data[4].last_name;
    const nomTracey = jsonMirabelle.data[5].last_name;
console.log(nomGeorge, nomJanet, nomEmma, nomEve, nomCharles, nomTracey);
// je recupère, stocke, et affiche le NOM

    const emailGeorge = jsonMirabelle.data[0].email;
    const emailJanet = jsonMirabelle.data[1].email;
    const emailEmma = jsonMirabelle.data[2].email;
    const emailEve = jsonMirabelle.data[3].email;
    const emailCharles = jsonMirabelle.data[4].email;
    const emailTracey = jsonMirabelle.data[5].email;
console.log(emailGeorge, emailJanet, emailEmma, emailEve, emailCharles, emailTracey);
// je recupère, stocke, et affiche l'EMAIL

    const urlAvatarGeorge = jsonMirabelle.data[0].avatar;
    const urlAvatarJanet = jsonMirabelle.data[1].avatar;
    const urlAvatarEmma = jsonMirabelle.data[2].avatar;
    const urlAvatarEve = jsonMirabelle.data[3].avatar;
    const urlAvatarCharles = jsonMirabelle.data[4].avatar;
    const urlAvatarTracey = jsonMirabelle.data[5].avatar;
console.log(urlAvatarGeorge, urlAvatarJanet, urlAvatarEmma, urlAvatarEve, urlAvatarCharles, urlAvatarTracey);
// je recupère, stocke, et affiche l'URL de la photo.

    const avatarGeorge = `<img src ="${urlAvatarGeorge}"/>`;
    const avatarJanet = `<img src ="${urlAvatarJanet}"/>`;
    const avatarEmma = `<img src ="${urlAvatarEmma}"/>`;
    const avatarEve = `<img src ="${urlAvatarEve}"/>`;
    const avatarCharles = `<img src ="${urlAvatarCharles}"/>`;
    const avatarTracey = `<img src ="${urlAvatarTracey}"/>`;
console.log(avatarGeorge, avatarJanet, avatarEmma, avatarEve, avatarCharles, avatarTracey);
//Je récupère, stocke, affiche, les BALISES IMG SRC concatenée avec la const qui contient l'url


const contentElement = document.querySelector("content");
contentElement.innerHTML =`
<div><h1>Nouvel Exercice JS by Jérémy Bee 😁🐝</h1></div>

<div id="avatar_georges"> <img src ="${urlAvatarGeorge}"/> </div>
<div id="avatar_janet"> <img src ="${urlAvatarJanet}"/> </div>
<div id="avatar_emma"> <img src ="${urlAvatarEmma}"/> </div>
<div id="avatar_eve"> <img src ="${urlAvatarEve}"/> </div>
<div id="avatar_charles"> <img src ="${urlAvatarCharles}"/> </div>
<div id="avatar_tracey"> <img src ="${urlAvatarTracey}"/> </div>
`;

});


