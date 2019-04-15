/// On doit récupérer les datas de la page Amazon sur la re herche WATCH (MONTRES°)
https://www.amazon.fr/s?k=watch&__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&ref=nb_sb_noss_1

// //  1 En examinant l'élément (inspecter élément) on trouve la classe de la ligne qui contient toutes les montres
// ici il s'agit de la div de la row dont la class est s-result-list
// 2 dans console log on créer une variable var wholeelment = document.querySelector(".s-result-list").children
// 3 On récupère un HTMLCollection en déroulant vers le bas on obtient les éléments du tableau on selectionne 
// On a ainsi la liste complete il faut maintenant récupere la description et le prix
// On examine les descriptions et on remarque que quel que ce soit un element sponsorisé ou non
// la descriptionn est dans l'élément h5
// 4 Pour les prix on remarque que les éléments sponsorisés ont les même class= "a-offscreen" et "a-price-whole"
// il faut donc trouver un élément qui les dissocie en remontant dans les div parent on remarque les mmontres sponsorisées ont une class ="AdHolder"

// 5 Maintenant que l'on a tous les éléments on va pouvoir écire le code

// A  On créer une variable qui est la liste de tous les élements extraut par le DOM

var wholeItems = document.querySelector('.s-result-list').children,
// B on créer un tableau vide pour sauvser les datas on viendra remplir le tableau ensuite en push
allItems = [];

//C on créer une boucle dans laquelle on créer une variaable item avec des conditions
for (var index = 0; index < wholeItems.length; index++) {
    var item = {};

    //C sauvegarde les prix
    if(wholeItems[index].classList.contains("AdHolder")) {
        // c'est une catégorien 1 : produits sponsorisé
        if(wholeItems[index].querySelectorAll('.a-price')[1]) item.price = 
          wholeItems[index].querySelectorAll('.a-price')[1].innerText;
    } else {// c'est une catégorie 2 produit non sponsorisé
        if(wholeItems[index].querySelectorAll('.a-price')) item.price = 
           wholeItems[index].querySelectorAll('.a-price').innerText;
    } 
    
    // On récupère la description 
    if(wholeItems[index].querySelectorAll('h5')) item.title = 
      wholeItems[index].querySelectorAll('h5').innerText;

    // on récupère le prix et la description dans tous les items

    if (Object.keys(item).length === 2) {
        allItems.push(item);
    }
}

console.log(allItems);

copy(allItems)

//// On copie enfin tout ce code dans la console log on a un resultat et c'est ce résultat que l'on va copier dans le fichier
// result.JSON
