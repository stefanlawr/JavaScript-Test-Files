//A Filter creates a new filtered array from an array passed into the function

var animals = [
    { name: 'Fluffle', species: 'rabbit' },
    { name: 'Doggo', species: 'dog' },
    { name: 'Woofer', species: 'dog' },
    { name: 'Fishy Boi', species: 'fish' },
    { name: 'Bob', species: 'cat' },
    { name: 'Bubble', species: 'fish' }
}

//So this foor loop does the same thing as
for(var i = 0; i < animals.length; i++){
    if(animals[i].species === 'dog'){
        dogs.push(animals[i])
    }
}

//This filter statement
var dogs = animals.filter(function(animal){
    return animals.species === 'dog'
}
