//add superhero with event listener

function domManipulations() {
    buttonElement = document.getElementById('add-superhero-name');

    buttonElement.addEventListener('click', function() {
        inputHeroElement = document.getElementById('hero-name');
        heroListElements = document.getElementById('superheroes-list');
        //create and modify the element
        heroToAddLi = document.createElement('li');
        heroToAddLi.textContent = inputHeroElement.value;
        heroToAddText = heroToAddLi.textContent;
        //create a delete button for each hero
        let deleteButton = document.createElement('a');
        deleteButton.setAttribute('href', '#');
        deleteButton.textContent = 'Delete';
        
        //attach event listener to the delete button
        deleteButton.addEventListener('click', (e) => {
            e.target.parentNode.remove();
        })
        
        //append hero option for delete
        heroToAddLi.appendChild(deleteButton);

        //attach hero to list of heroes
        heroListElements.appendChild(heroToAddLi);
    })

    
}

    
    // inputHeroElement = document.getElementById('hero-name');
    // heroListElements = document.getElementById('superheroes-list');
    // buttonElement = document.getElementById('add-superhero-name');

    // heroToAdd = inputHeroElement.value;

    // buttonElement.addEventListener('click', function clickMe (e) {
    //     target = e.currentTarget;
    //     console.log(e);
    // })
    



// function addSuperhero() {
//     //get elements
//     inputHeroElement = document.getElementById('hero-name');
//     heroListElements = document.getElementById('superheroes-list');

//     // //parse elements
//     // heroToAdd = inputHeroElement.value;

//     // // create new elements
//     // let li = document.createElement('li');
//     // li.textContent = heroToAdd;
//     // heroListElements.appendChild(li);

//     //clear value
//     inputHeroElement.value = '';

//     //get first child in hero list without id
//     // heroListChildrenElements = heroListElements.children;
//     // firstChildElement = heroListChildrenElements[0];
//     // console.log(firstChildElement);
//     // firstChildElement.textContent = 'Groot';

// }