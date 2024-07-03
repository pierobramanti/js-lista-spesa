// LISTA DELLA SPESA
const ingredients = ["Pomodorini", "Tonno in scatola", "Aglio", "Accighe sott'olio", "Capperi", "Olive taggiasche", "Prezzemolo", "Bottarga", "Spaghettoni" ,"Sale Grosso"]

// RECUPERO L'ELEMENTO CHE DEVE CONTENERE LA MIA LISTA DELLA SPESA
const shopping_list = document.getElementById("shopping-list");

// CICLO L'ARRAY CON UN WHILE
let i = 0;
while (i < ingredients.length) {

    const li = document.createElement("li");

    li.innerText = ingredients[i];

    
    shopping_list.append(li);

    i++;
}
