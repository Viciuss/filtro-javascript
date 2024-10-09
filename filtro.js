const animais=["vaca",'cachorro','ovelha','cachorro','ovelha','porco']
const animaisFiltro = ['cachorro','ovelha', 'vaca']

function countAnimals(listOfAnimals, animalToCount = undefined){
    var map =[]
    var temFiltro = animalToCount != undefined ? true : false
    var animaisFiltrados = []

    if(temFiltro == true)
        animais.filter(function(animal){
            if (animaisFiltro.includes(animal)){
                animaisFiltrados.push(animal)
            }
            listOfAnimals = animaisFiltrados
        })

    for(const animal of listOfAnimals){
        if(map[animal]){
            map[animal]++
        }else{
            map[animal] = 1
        }
    }
    
    return map
}

console.log(countAnimals(animais, animaisFiltro))
console.log(countAnimals(animais))