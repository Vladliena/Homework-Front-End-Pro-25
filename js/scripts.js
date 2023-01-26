const shopPage = document.getElementById('shop')

const shoes = document.getElementsByClassName('shoes_link')[0];
shoes.addEventListener('click', shoesOpenList);

function shoesOpenList() {
    const shoesVariation = document.createElement('div');
    shoesVariation.className = 'shoes_variation';
    shoesVariation.innerHTML = '<ul><li><a href="#" class="bootsInfo">boots</a></li><li><a href="#" class="trinersInfo">trainers</a></li>'
    while (shopPage.children[1]) shopPage.children[1].remove();
    shopPage.appendChild(shoesVariation)
    const bootsInfo = document.getElementsByClassName('bootsInfo')[0];
    const trinersInfo = document.getElementsByClassName('trinersInfo')[0]
    bootsInfo.addEventListener('click', function (){
        const bootsCard = document.createElement('article');
        bootsCard.className = 'bootsCard';
        bootsCard.innerHTML = '<h2>Leather Boots</h2><br><ul><li>Real Leather</li><li>Sizes 36-39</li><li>New Collection</li></ul>'
        while (shopPage.children[2]) shopPage.children[2].remove();
        shopPage.appendChild(bootsCard)
        const buyButton = document.createElement('button');
        buyButton.className = 'buyProductButton';
        buyButton.setAttribute('type', 'button');
        buyButton.appendChild(document.createTextNode('Buy'))
        bootsCard.appendChild(buyButton);
        buyButton.addEventListener('click', purchased)
    });
    trinersInfo.addEventListener('click', function (){
        const trainersCard = document.createElement('article');
        trainersCard.className = 'bootsCard';
        trainersCard.innerHTML = '<h2>Adidas Trainers</h2><br><ul><li>Low-profile design</li><li>Sizes 36-39</li><li>Flame print to sides</li></ul>'
        while (shopPage.children[2]) shopPage.children[2].remove();
        shopPage.appendChild(trainersCard)
        const buyButton = document.createElement('button');
        buyButton.className = 'buyProductButton';
        buyButton.setAttribute('type', 'button');
        buyButton.appendChild(document.createTextNode('Buy'))
        trainersCard.appendChild(buyButton);
        buyButton.addEventListener('click', purchased)
    })
}

const accessories = document.getElementsByClassName('accessories_link')[0];
accessories.addEventListener('click', openAccessoriesList);
function openAccessoriesList (){
    const accessoriesVariation = document.createElement('div');
    accessoriesVariation.className = 'accessoriesVariation'
    accessoriesVariation.innerHTML = '<ul><li><a href="#" class="ringInfo">ring</a></li><li><a href="#" class="braceletInfo">bracelet</a></li></ul>'
    while (shopPage.children[1]) shopPage.children[1].remove();
    shopPage.appendChild(accessoriesVariation);
    const ringInfo = document.getElementsByClassName('ringInfo')[0];
    const braceletInfo = document.getElementsByClassName('braceletInfo')[0]
    ringInfo.addEventListener('click', function (){
        const ringCard = document.createElement('article');
        ringCard.className = 'ringCard';
        ringCard.innerHTML = '<h2>Gold Ring</h2><br><ul><li>With diamond</li><li>Size 36.5</li></ul>'
        while (shopPage.children[2]) shopPage.children[2].remove();
        shopPage.appendChild(ringCard)
        const buyButton = document.createElement('button');
        buyButton.className = 'buyProductButton';
        buyButton.setAttribute('type', 'button');
        buyButton.appendChild(document.createTextNode('Buy'))
        ringCard.appendChild(buyButton);
        buyButton.addEventListener('click', purchased)
    });
    braceletInfo.addEventListener('click', function (){
        const braceletCard = document.createElement('article');
        braceletCard.className = 'braceletCard';
        braceletCard.innerHTML = '<h2>Silver Bracelet</h2><br><ul><li>Your sign can be added</li><li>One Size</li></ul>'
        while (shopPage.children[2]) shopPage.children[2].remove();
        shopPage.appendChild(braceletCard)
        const buyButton = document.createElement('button');
        buyButton.className = 'buyProductButton';
        buyButton.setAttribute('type', 'button');
        buyButton.appendChild(document.createTextNode('Buy'))
        braceletCard.appendChild(buyButton);
        buyButton.addEventListener('click', purchased)
    })
}


const faceBody = document.getElementsByClassName('face_body_link')[0];
faceBody.addEventListener('click', openFaceBodyList);

function openFaceBodyList (){
    const faceBodyVariation = document.createElement('div');
    faceBodyVariation.className = 'faceBodyVariation'
    faceBodyVariation.innerHTML = '<ul><li><a href="#" class="showerGelInfo">shower gel</a></li><li><a href="#" class="bodyCreamInfo">body cream</a></li></ul>'
    while (shopPage.children[1]) shopPage.children[1].remove();
    shopPage.appendChild(faceBodyVariation);
    const showerGelInfo = document.getElementsByClassName('showerGelInfo')[0];
    const bodyCreamInfo = document.getElementsByClassName('bodyCreamInfo')[0]
    showerGelInfo.addEventListener('click', function (){
        const showerGelCard = document.createElement('article');
        showerGelCard.className = 'showerGelCard';
        showerGelCard.innerHTML = '<h2>Apple Shower Gel</h2><br><ul><li>For sensitive skin</li><li>organic</li></ul>'
        while (shopPage.children[2]) shopPage.children[2].remove();
        shopPage.appendChild(showerGelCard)
        const buyButton = document.createElement('button');
        buyButton.className = 'buyProductButton';
        buyButton.setAttribute('type', 'button');
        buyButton.appendChild(document.createTextNode('Buy'))
        showerGelCard.appendChild(buyButton);
        buyButton.addEventListener('click', purchased)
    });
    bodyCreamInfo.addEventListener('click', function (){
        const bodyCreamCard = document.createElement('article');
        bodyCreamCard.className = 'bodyCreamCard';
        bodyCreamCard.innerHTML = '<h2>Nivea Body Cream</h2><br><ul><li>Delicate softener</li><li>organic product</li></ul>'
        while (shopPage.children[2]) shopPage.children[2].remove();
        shopPage.appendChild(bodyCreamCard)
        const buyButton = document.createElement('button');
        buyButton.className = 'buyProductButton';
        buyButton.setAttribute('type', 'button');
        buyButton.appendChild(document.createTextNode('Buy'))
        bodyCreamCard.appendChild(buyButton);
        buyButton.addEventListener('click', purchased)
    })
}

function purchased (){
    if(alert('Thank you for your purchase!')){
    } else {
        window.location.reload();
    }
}
