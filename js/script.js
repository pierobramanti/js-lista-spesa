// CREO ARRAY //
let ingredients = ["Pomodorini", "Tonno in scatola", "Aglio", "Accighe sott'olio", "Capperi", "Olive taggiasche", "Prezzemolo", "Bottarga", "Spaghettoni" ,"Sale Grosso"]
console.log(ingredients)
// CREO VARIABILE RECUPERANDO ID "UL"//
let shopping_list = document. getElementById("shopping-list")

// CREO CICLO WHILE //
let i= 0

while ( i <ingredients.lenght ){
    let li= document.createElement("li")
    li.innerHTML= ingredients[i]
    shopping_list = append(li)
    i++
}

// CREO FUNZIONE// 

document.getElementById("new-ingredients"). addEventListener("click", function(){

})
