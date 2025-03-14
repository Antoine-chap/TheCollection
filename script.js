const classes = [
    {
        classe: `Guerrier`,
        type: [`Tank`, `Dégâts physiques mêlée`],
        typeArmor: `Plaque`,
        picture: `https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/bltf9f62859db695a4d/5ee3e473a7c560086afc3ffd/9WL35DUZNSG01457032148687.jpg`,
        generalInformation: `Les guerriers s'équipent avec précaution pour le combat, et n'hésitent pas à engager le combat à la tête la première
            tel un éclair vêtu d'une armure lourde. Leurs tactiques de combat sont variées et ils peuvent brandir plusieurs types
            d'armes pour protéger leurs alliés moins versés dans le combat. Toutefois, ils doivent gérer cette rage et la puissance
            de leurs assauts les plus violents avec attention, afin de maximiser leur efficacité au cœur de la bataille.`,
        talents: [`Armes`, `Fureur`, `Protection`]
    },
    {
        classe: `Chasseur`,
        type: [`Tireur d'élite`, `Maître des bêtes`],
        typeArmor: `Mailles`,
        picture: `https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/blt567c8844ced4dbc7/5ee3e411e8f74907ecce011e/QDIDT6YO6NYN1457032234749.jpg`,
        generalInformation: `Les chasseurs sont des experts en survie dans les environnements sauvages. Ils utilisent des armes à distance et des
            pièges pour traquer et abattre leurs proies. Leur lien avec la nature leur permet de dompter des animaux sauvages
            pour les aider au combat.`,
        talents: [`Maîtrise des bêtes`, `Précision, Survie`]
    },
    {
        classe: `Mage`,
        type: [`Lanceur de sorts`, `Maître des éléments`],
        typeArmor: `Tissu`,
        picture: `https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/bltdd80a40a42fdc015/5ee3e44c18f34d710497c5bd/PRJHFTFZI64Z1457032234735.jpg`,
        generalInformation: `Les mages manipulent les forces arcaniques pour lancer des sorts dévastateurs. Ils sont capables de contrôler le feu,
            la glace et l'arcane pour infliger des dégâts massifs à leurs ennemis.`,
        talents: [`Arcane`, `Feu`, `Givre`]
    },
    {
        classe: `Prêtre`,
        type: [`Soigneur`, `Lanceur de sorts`],
        typeArmor: `Tissu`,
        picture: `https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/blt6b4539f958b752fb/5ee78bff63a2d97093830907/MWNKR1G1Z7AD1457032234453.jpg`,
        generalInformation: `Les prêtres utilisent la Lumière pour soigner et protéger leurs alliés. Ils peuvent également invoquer des forces
            obscures pour infliger des dégâts à leurs ennemis.`,
        talents: [`Discipline`, `Sacré`, `Ombre`]
    },
    {
        classe: `Voleur`,
        type: [`Assassin`, `Dégâts physiques mêlée`],
        typeArmor: `Cuir`,
        picture: `https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/bltceda97b65490029d/5ee3e4a218f34d710497c5c9/65H7H3XK5PFS1457032234098.jpg`,
        generalInformation: `Les voleurs sont des maîtres de la furtivité et de l'assassinat. Ils utilisent des dagues et des poisons pour éliminer
            leurs cibles rapidement et silencieusement.`,
        talents: [`Assassinat`, `Combat`, `Finesse`]
    },
    {
        classe: `Chaman`,
        type: [`Soigneur`, `Lanceur de sorts`],
        typeArmor: `Mailles`,
        picture: `https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/blt3001008857efcbd4/5ee7928218f34d710497c759/LPEY9SFJT7PB1457032234088.jpg`,
        generalInformation: `Les chamans communiquent avec les éléments pour soigner et protéger leurs alliés ou pour invoquer des tempêtes
            dévastatrices contre leurs ennemis.`,
        talents: [`Élémentaire`, `Amélioration`, `Restauration`]
    },
    {
        classe: `Démoniste`,
        type: [`Lanceur de sorts`, `Invocateur`],
        typeArmor: `Tissu`,
        picture: `https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/blt87bd56354f8c3fcd/5ee3e8c1889f917094610eb8/YDUU4KIKVCLY1457032234192.jpg`,
        generalInformation: `Les démonistes utilisent les forces des ténèbres pour invoquer des démons et lancer des sorts destructeurs. Ils
            peuvent également drainer la vie de leurs ennemis pour se renforcer.`,
        talents: [`Affliction`, `Démonologie`, `Destruction`]
    },
    {
        classe: `Paladin`,
        type: [`Tank`, `Soigneur`],
        typeArmor: `Plaque`,
        picture: `https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/blt931cd3c007637bcc/5ee790ab3a8621077a04a479/ZNPM9RQETYC21457032234435.jpg`,
        generalInformation: `Les paladins utilisent la Lumière pour protéger et soigner leurs alliés. Ils sont également capables de manier des
            armes lourdes pour infliger des dégâts en mêlée.`,
        talents: [`Sacré`, `Protection`, `Vindicte`]
    },
    {
        classe: `Druide`,
        type: [`Soigneur`, `Lanceur de sorts`, `Tank`],
        typeArmor: `Cuir`,
        picture: `https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/blt15fb42851b4eab5e/5ee3e39aa9170407eeb4b76d/1LARAZ7I3M0F1457032234809.jpg`,
        generalInformation: `Les druides tirent leur pouvoir de la nature. Ils peuvent se transformer en différentes formes animales pour remplir
            divers rôles au combat, allant du soigneur au tank.`,
        talents: [`Équilibre`, `Farouche`, `Gardien`, `Restauration`]
    },
    {
        classe: `Moine`,
        type: [`Tank`, `Soigneur`, `Dégâts physiques mêlée`],
        typeArmor:` Cuir`,
        picture: `https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/bltab8e835ed1f245ba/5ee793cb3a8621077a04a491/80E3HJ653J1M1457032234443.jpg`,
        generalInformation: `Les moines utilisent leur maîtrise des arts martiaux et des énergies mystiques pour soigner, protéger et attaquer.
            Ils sont polyvalents et peuvent remplir plusieurs rôles au combat.`,
        talents: [`Maître brasseur`, `Tisse-brume`, `Marche-vent`]
    },
    {
        classe: `Chevalier de la mort`,
        type: [`Tank`, `Dégâts physiques mêlée`],
        typeArmor: `Plaque`,
        picture: `https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/blt456a89c041972885/5ee3e3d363a2d9709383078b/XM82LOJR750J1457032234975.jpg`,
        generalInformation: `Les chevaliers de la mort utilisent les pouvoirs des ténèbres pour infliger des dégâts et protéger leurs alliés.
            Ils peuvent invoquer des goules et utiliser des runes pour renforcer leurs capacités.`,
        talents: [`Sang`, `Givre`, `Impie`]
    },
    {
        classe: `Chasseur de démons`,
        type: [`Assassin`, `Dégâts physiques mêlée`],
        typeArmor: `Cuir`,
        picture: `https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/bltecb94c367119455a/5ee79631d217327180733e77/4YSZQMC616V61457032235002.jpg`,
        generalInformation: `Les chasseurs de démons sont des combattants agiles et mortels, spécialisés dans l'élimination des forces démoniaques.
            Ils utilisent une combinaison de compétences martiales et de pouvoirs mystiques pour traquer et détruire leurs ennemis.
            Leur entraînement rigoureux leur permet de manier des armes exotiques et d'exploiter les faiblesses des démons.`,
        talents: [`Traque`, `Exorcisme`, `Lames démoniaques`]
    },
    {
        classe: `Évocateur`,
        type: [`Lanceur de sorts`, `Invocateur`],
        typeArmor: `Tissu`,
        picture: `https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/bltc4d521bd78d2e181/6351cce05e1b6d519cb60ba9/Evoker_Card.jpg`,
        generalInformation: `Les évocateurs sont des maîtres de la magie d'invocation, capables de faire apparaître des créatures puissantes pour
            combattre à leurs côtés. Ils manipulent les énergies arcaniques pour lancer des sorts dévastateurs et contrôler les
            éléments. Leur lien avec les plans éthérés leur permet d'invoquer des entités d'autres dimensions pour les aider au combat.`,
        talents: [`Invocation`, `Contrôle des éléments`, `Rituels arcaniques`]
    }, 
    {
        classe: `Développeur`,
        type: [`Codeur`, `Résolveur de problèmes`],
        typeArmor: `Casual`,
        picture: `https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&dpr=1&w=1000`,
        generalInformation: `Les développeurs sont des experts en création et en maintenance de logiciels. Ils utilisent divers langages de
            programmation pour construire des applications, des sites web et des systèmes. Leur rôle est crucial pour
            transformer des idées en produits fonctionnels et efficaces. Ils doivent constamment se tenir à jour avec les
            nouvelles technologies et les meilleures pratiques de développement.`,
        talents: [`Front-end`, `Back-end`, `Full-stack`]
    }
]

const header = document.querySelector(`header`);

const title = document.createElement(`h1`);
title.id = `headerH1`;
title.textContent = `Les classes de World Of Warcraft`;

const paragraphe = document.createElement(`p`);
paragraphe.id = `headerP`;
paragraphe.textContent = `Chevalier en armure de plaques étincelante ou lanceur de sorts en robe aux couleurs bigarrées ? Le choix est vaste dans World of Warcraft ! Chaque classe pose un défi différent et répond à des mécaniques de jeu spécifiques. Quelle est votre vocation ?`;

header.appendChild(title);
header.appendChild(paragraphe);

const main = document.querySelector(`main`);

const controlDivMain = document.createElement('section');
main.appendChild(controlDivMain);

controlDivMain.classList.add(`controlDivMain`);

const btnSwitch = document.createElement(`div`);
// controlDivMain.appendChild(btnSwitch);
// btnSwitch.textContent = `Tri`;

btnSwitch.classList.add(`btnSwitch`);

const btnRestor = document.createElement(`div`);
controlDivMain.appendChild(btnRestor);
btnRestor.textContent = `Reset`;

btnRestor.classList.add(`btnRestor`);


const select = document.createElement('select');// Créer une liste déroulante pour le tri
controlDivMain.appendChild(select);
select.id = 'armorTypeSelect';
select.innerHTML = `
    <option value="all">Tous</option>
    <option value="Tissu">Tissu</option>
    <option value="Cuir">Cuir</option>
    <option value="Mailles">Mailles</option>
    <option value="Plaque">Plaque</option>
    <option value="Casual">Casual</option>
`;
controlDivMain.appendChild(select);


function displayCards(classesArray) {// Fonction pour créer et afficher les cartes
    main.innerHTML = ''; // Efface les cartes existantes
    main.appendChild(controlDivMain); // Réajoute les contrôles

    classesArray.forEach(classe => {
        const Card = document.createElement('section');
        main.appendChild(Card);

        const picture = document.createElement(`div`);
        Card.appendChild(picture);
        const divInfo = document.createElement(`div`);
        Card.appendChild(divInfo);

        const classeName = document.createElement(`div`);
        divInfo.appendChild(classeName);
        const type = document.createElement(`div`);
        divInfo.appendChild(type);
        const typeArmor = document.createElement(`div`);
        divInfo.appendChild(typeArmor);
        const generalInformation = document.createElement(`div`);
        divInfo.appendChild(generalInformation);
        const talents = document.createElement(`div`);
        divInfo.appendChild(talents);

        const classeNameP = document.createElement(`p`);
        classeName.appendChild(classeNameP);
        const typeArmorP = document.createElement(`p`);
        typeArmor.appendChild(typeArmorP);
        const generalInformationP = document.createElement(`p`);
        generalInformation.appendChild(generalInformationP);

        Card.classList.add(`Card`);

        divInfo.classList.add(`divInfo`);
        picture.classList.add(`picture`);

        classeName.classList.add(`classeName`);
        type.classList.add(`type`);
        typeArmor.classList.add(`typeArmor`);
        generalInformation.classList.add(`generalInformation`);
        talents.classList.add(`talents`);

        classeNameP.classList.add(`classeNameP`);
        typeArmorP.classList.add(`typeArmorP`);
        generalInformationP.classList.add(`generalInformationP`);

        classeNameP.innerText = classe.classe;
        typeArmorP.innerText = classe.typeArmor;
        generalInformationP.innerText = classe.generalInformation;

        picture.style.backgroundImage = `url(${classe.picture})`;

        Card.id = classe.classe;

        classe.type.forEach(arrType => {
            const typeP = document.createElement(`p`);
            type.appendChild(typeP);
            typeP.innerText = arrType;
            typeP.classList.add(`typeP`);
        });

        classe.talents.forEach(arrTalents => {
            const talentsP = document.createElement(`p`);
            talents.appendChild(talentsP);
            talentsP.innerText = arrTalents;
            talentsP.classList.add(`talentsP`);
        });

        const controlDiv = document.createElement('div');
        Card.appendChild(controlDiv);

        controlDiv.classList.add(`btnSwap`);

        const btnDelete = document.createElement(`div`);
        controlDiv.appendChild(btnDelete);

        btnDelete.classList.add(`btnDelete`);
        btnDelete.textContent = 'Supprimer';

       
        btnDelete.addEventListener('click', () => {  // Ajout de l'événement de suppression
            console.log(Card);
            Card.remove();
        });
    });
}


displayCards(classes);// Affichage initial des cartes


select.addEventListener('change', () => {// Ajout de l'événement de tri
    const selectedArmorType = select.value;
    const filteredClasses = classes.filter(classe => selectedArmorType === 'all' || classe.typeArmor === selectedArmorType);
    displayCards(filteredClasses);
});


btnRestor.addEventListener('click', () => {// Ajout de l'événement de réinitialisation
    displayCards(classes);
    select.value = 'all'; // Réinitialise la sélection
    
});

const footer = document.querySelector(`footer`);

const source = document.createElement(`p`);
source.id = `footerP`;
source.textContent = `Source : Darkalagan, actuellement guerrier level 45 sur World Of Warcraft Classic Hardcore`;

footer.appendChild(source);