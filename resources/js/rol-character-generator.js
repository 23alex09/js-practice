const breeds = ['Enano', 'Orco', 'Elfo', 'Licantropo', 'Hobbit', 'Gnomo', 'Gigante', 'No muerto', 'Draconiano', 'Goblin'];

const jobs = ['Bardo', 'Guerrero', 'Sacerdote', 'Hechicero', 'Mago', 'Curandero', 'Herrero', 'Bufon', 'Rey', 'Agricultor', 'Mercenario', 'Cocinero'];

const attributes = ['Borracho', 'Cobarde', 'Tullido', 'Inmortal', 'Volador', 'Lloron', 'Aguerrido', 'Musculoso', 'Vago', 'Lujurioso', 'Gruñon', 'Valiente', 'Ciego'];

const characterFactory = (breeds, jobs, attributes) => {
    const breed = breeds[Math.floor(Math.random() * breeds.length)];
    const job = jobs[Math.floor(Math.random() * jobs.length)];
    const attribute = attributes[Math.floor(Math.random() * attributes.length)];

    return {
        breed,
        job,
        attribute
    }
}

const setCharacterDescription = () => {
    let randomCharacter = characterFactory(breeds, jobs, attributes);
    let descriptionItems = document.getElementById('main-card-description').children;

    descriptionItems[0].innerHTML = `Breed: ${randomCharacter.breed}`;
    descriptionItems[1].innerHTML = `Occupation: ${randomCharacter.job}`;
    descriptionItems[2].innerHTML = `Attribute: ${randomCharacter.attribute}`;
}

const generateButton = document.getElementById('button-generate');
generateButton.addEventListener('click', setCharacterDescription);