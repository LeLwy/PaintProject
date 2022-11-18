
function selectColor(event)
{
    let colorBox = event.target;
    let color = colorBox.style.backgroundColor;

    sessionStorage.setItem("selectedColor", color);

    console.log(getSelectedColor());
}

function getSelectedColor()
{
    if(sessionStorage.getItem("selectedColor"))
    {
        return sessionStorage.getItem("selectedColor");
    }

    return null;
}

function loadPalette(palette)
{
    let colors = palette;

    
    // le code de l'étape 1 se passe ici
    // ComplÃ©tez la fonction `loadPalette` pour que chacune des couleurs du tableau `colors` devienne la couleur de fond d'une des `<div>` du `<header>`.

    let headerPalette = document.querySelectorAll("body > header > div");
    
    for(let i=0; i<headerPalette.length;i++){
        
        headerPalette[i].style.backgroundColor = colors[i];
    }

}


window.addEventListener("DOMContentLoaded", function(){
    loadPalette(["", "#3daf7e", "#ffffff", "#ec8236", "#a9a7ee", "#ecc606", "#f783f2", "#e89e80","#000000","#df0dcf","#a40fd5","#1319d5","#ff0000","#006c00","#f0ff05","#c72727"]);

    // le code de l'étape 2 se passe ici
    //CrÃ©ez un event listener qui Ã  chaque fois que l'on clique sur une <div> du header (n'importe laquelle) la fonction selectColor sans parenthÃ¨ses est appelÃ©e.

    //Indice : Vous allez devoir utiliser une boucle pour Ã§a

    let headerPalette = document.querySelectorAll("body > header > div");

    for(let i=0; i<headerPalette.length;i++){

        headerPalette[i].addEventListener("click", selectColor);
    }


    // le code de l'étape 3 se passe ici
    //CrÃ©ez un event listener qui quand on clique sur une div du main va appliqer la derniÃ¨re couleur cliquÃ©e dans le header comme couleur de fond de la div

     let mainTab = document.querySelectorAll("main > div > div");

    for(let i=0; i<mainTab.length;i++){

        mainTab[i].addEventListener("click", function(e){

            if(e.target.style.backgroundColor === ""){

                e.target.style.backgroundColor = getSelectedColor();
            }else{
                e.target.style.backgroundColor = "";
            }

             console.log(getSelectedColor());
        })
    }

     //BONUS 3

    let colorInputs = document.querySelectorAll("body > header > div > input");

    for(let i=0; i<colorInputs.length;i++){
       
        colorInputs[i].addEventListener('input', function(e){

            headerPalette[i].style.backgroundColor = e.target.value;
        })
    }

    //SCREENSHOT

    html2canvas(document.querySelector("main")).then(canvas => {
        let img  = canvas.toDataURL('image/png');
        console.log(img);
        
        let screenBtn = document.createElement("a");
        let footer = document.querySelector("body > footer");

        screenBtn.href = "javascript:void(window.open().location = ${img}('image/png'))";

        footer.appendChild(screenBtn);
    });

});