const shop = document.getElementById('shop')

const arr = [
    {
        title: 'Phones',
        items: [
            {
                title: 'Iphone',
                items: [
                    {
                        title: 'Iphone 13',
                        description: '6.1-inch screen. Super Retina XDR display is 28% brighter up to 800 nits for regular content 1200 nits for HDR.',
                    }
                ]
            },
            {
                title: 'Sumsung Galaxy',
                items: [
                    {
                        title: 'Sumsung Galaxy S22',
                        description: '5.75 x 2.78 x 0.30 inches (146 x 70.6 x 7.6mm). Back: Glass (Corning Gorilla Glass Victus); Frame: Aluminum',
                    }
                ]
            }
        ]
    },
    {
        title: 'Laptops',
        items: [
            {
                title: "Acer",
                items: [
                    {
                        title: 'Acer Nitro 5',
                        description: 'Windows 10 Home 64-bit · Intel® Core™ i5-10300H processor Quad-core 2.50 GHz · NVIDIA® GeForce RTX™ 3050 with 4 GB dedicated memory'
                    }
                ]
            },
            {
                title: "Macbook",
                items: [
                    {
                        title: 'Acer Nitro 5',
                        description: 'Display. Retina display. 13.3-inch (diagonal) LED-backlit display with IPS technology; 2560-by-1600 native resolution at 227 pixels per inch'
                    }
                ]
            }
        ]
    },
    {
        title: 'Speakers',
        items: [
            {
                title: "Marshall",
                items: [
                    {
                        title: 'Marshall Stanmore',
                        description: 'True Stereophonic technology, which is essentially a multi-directional sound technology. This enables the speaker to provide excellent 360-degree sounds, regardless of the speaker\'s placement.'
                    }
                ]
            },
            {
                title: "Bose",
                items: [
                    {
                        title: 'Bose Soundlink',
                        description: 'Meet SoundLink Revolve II, one of our best performing portable Bluetooth speakers yet. It delivers true 360° sound for consistent, uniform coverage.'
                    }
                ]
            }
        ]
    },
];

function categories(arr) {
    const categoriesUl = document.createElement('ul');
    for (const key of arr) {
        const categoriesLi = document.createElement('li');
        categoriesLi.classList.add('categories')
        categoriesLi.innerHTML = key.title
        categoriesUl.appendChild(categoriesLi)
    }
    shop.appendChild(categoriesUl)
}

document.addEventListener("DOMContentLoaded", function () {
    const categoriesList = document.querySelectorAll('.categories')
    categoriesList.forEach((element) => {
        element.addEventListener('click', () => {
            const buyButton = document.createElement('button');
            buyButton.setAttribute('type','click');
            buyButton.appendChild(document.createTextNode('Buy'));
            buyButton.className = 'buyProductButton';
            buyButton.addEventListener('click',function (){
                    if(alert('Thank you for your purchase!')){
                    } else {
                        window.location.reload();
                    }
            });
            if (element.innerHTML === 'Phones') {
                for (const i of arr) {
                    if (i.title === 'Phones') {
                        const phonesUl = document.createElement('ul');
                        const items = i.items;
                        for (const g of items) {
                            const phonesName = document.createElement('li');
                            phonesName.innerHTML += g.title;
                            phonesName.classList.add('phonesName');
                            phonesUl.appendChild(phonesName);
                            phonesName.addEventListener('click', () => {
                                const phoneDescriptionUl = document.createElement('ul');
                                if (phonesName.innerHTML === 'Iphone') {
                                    for (let i = 0; i < g.items.length; i++) {
                                        const iphoneCard = document.createElement('li');
                                        iphoneCard.innerHTML += Object.values(g.items[i]).toString()
                                        iphoneCard.classList.add('iphone_description');
                                        phoneDescriptionUl.appendChild(iphoneCard);
                                    }
                                }
                                else if (phonesName.innerHTML === 'Sumsung Galaxy'){
                                    for (let i = 0; i < g.items.length; i++) {
                                        const sumsungCard = document.createElement('li');
                                        sumsungCard.innerHTML += Object.values(g.items[i]).toString()
                                        sumsungCard.classList.add('galaxy_description');
                                        phoneDescriptionUl.appendChild(sumsungCard);
                                    }
                                }
                                while (shop.children[2]) shop.children[2].remove()
                                shop.appendChild(phoneDescriptionUl)
                                phoneDescriptionUl.appendChild(buyButton)
                            })
                            }
                            while (shop.children[1]) shop.children[1].remove()
                            shop.appendChild(phonesUl)
                        }
                    }
                }
            else
                if (element.innerHTML === 'Laptops') {
                    for (const i of arr) {
                        if (i.title === 'Laptops') {
                            const laptopsUl = document.createElement('ul');
                            const items = i.items;
                            for (const g of items) {
                                const laptopsName = document.createElement('li');
                                laptopsName.innerHTML += g.title;
                                laptopsName.classList.add('laptopsName');
                                laptopsUl.appendChild(laptopsName);
                                laptopsName.addEventListener('click', () => {
                                    const laptopDescriptionUl = document.createElement('ul');
                                    if (laptopsName.innerHTML === 'Acer') {
                                        for (let i = 0; i < g.items.length; i++) {
                                            const acerCard = document.createElement('li');
                                            acerCard.innerHTML += Object.values(g.items[i]).toString()
                                            acerCard.classList.add('acer_description');
                                            laptopDescriptionUl.appendChild(acerCard);
                                        }
                                    }
                                    else if (laptopsName.innerHTML === 'Macbook'){
                                        for (let i = 0; i < g.items.length; i++) {
                                            const macbookCard = document.createElement('li');
                                            macbookCard.innerHTML += Object.values(g.items[i]).toString()
                                            macbookCard.classList.add('macbook_description');
                                            laptopDescriptionUl.appendChild(macbookCard);
                                        }
                                    }
                                    while (shop.children[2]) shop.children[2].remove()
                                    shop.appendChild(laptopDescriptionUl)
                                    laptopDescriptionUl.appendChild(buyButton)
                                })
                            }
                            while (shop.children[1]) shop.children[1].remove()
                            shop.appendChild(laptopsUl)
                        }
                    }
                } else if (element.innerHTML === 'Speakers') {
                    for (const i of arr) {
                        if (i.title === 'Speakers') {
                            const SpeakersUl = document.createElement('ul');
                            const items = i.items;
                            for (const g of items) {
                                const speakersName = document.createElement('li');
                                speakersName.innerHTML += g.title;
                                speakersName.classList.add('speakersName');
                                SpeakersUl.appendChild(speakersName);
                                speakersName.addEventListener('click', () => {
                                    const speakerDescriptionUl = document.createElement('ul');
                                    if (speakersName.innerHTML === 'Marshall') {
                                        for (let i = 0; i < g.items.length; i++) {
                                            const marshallCard = document.createElement('li');
                                            marshallCard.innerHTML += Object.values(g.items[i]).toString()
                                            marshallCard.classList.add('marshall_description');
                                            speakerDescriptionUl.appendChild(marshallCard);
                                        }
                                    }
                                    else if (speakersName.innerHTML === 'Bose'){
                                        for (let i = 0; i < g.items.length; i++) {
                                            const boseCard = document.createElement('li');
                                            boseCard.innerHTML += Object.values(g.items[i]).toString()
                                            boseCard.classList.add('bose_description');
                                            speakerDescriptionUl.appendChild(boseCard);
                                        }
                                    }
                                    while (shop.children[2]) shop.children[2].remove()
                                    shop.appendChild(speakerDescriptionUl)
                                    speakerDescriptionUl.appendChild(buyButton)
                                })
                            }
                            while (shop.children[1]) shop.children[1].remove()
                            shop.appendChild(SpeakersUl)
                        }
                    }
                }
            });
        });
    })
    categories(arr)