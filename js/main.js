const cardLists = [
        {
            back: 'imgs/cactus.png',
            name: 'cactus',
            front:'imgs/front.png',
            faceDown: true,
            cardId: 0,
            
            match: false,
            
        },
        {
            back: 'imgs/fish.png',
            name: 'fish',
            front:'imgs/front.png',
            faceDown: true,
            cardId: 1,
            
            match: false,
            
        },
        {
            back: 'imgs/ladybug.png',
            name: 'ladybug',
            front:'imgs/front.png',
            faceDown: true,
            cardId: 2,
            
            match: false,
            
        },
        {
            back: 'imgs/rain.png',
            name: 'rain',
            front:'imgs/front.png',
            faceDown: true,
            cardId: 3,
            
            match: false,
           
        }, 
        {
            back: 'imgs/rainbow.png',
            name: 'rainbow',
            front:'imgs/front.png',
            faceDown: true,
            cardId: 4,
            
            match: false,
            
        },
        {
            back: 'imgs/sun.png',
            name: 'sun',
            front:'imgs/front.png',
            faceDown: true,
            cardId: 5,
            
            match: false,
            
        },
        {
            back: 'imgs/cactus.png',
            name: 'cactus',
            front:'imgs/front.png',
            faceDown: true,
            cardId: 6,
            
            match: false,
            
        },
        {
            back: 'imgs/fish.png',
            name: 'fish',
            front:'imgs/front.png',
            faceDown: true,
            cardId: 7,
            
            match: false,
            
        },
        {
            back: 'imgs/ladybug.png',
            name: 'ladybug',
            front:'imgs/front.png',
            faceDown: true,
            cardId: 8,
            
            match: false,
            
        },
        {
            back: 'imgs/rain.png',
            name: 'rain',
            front:'imgs/front.png',
            faceDown: true,
            cardId: 9,
            
            match: false,
            
            
        }, 
        {
            back: 'imgs/rainbow.png',
            name: 'rainbow',
            front:'imgs/front.png',
            faceDown: true,
            cardId: 10,
            
            match: false,
            
            
        },
        {
            back: 'imgs/sun.png',
            name: 'sun',
            front:'imgs/front.png',
            faceDown: true,
            cardId: 11,
            
            match: false,
           
        }
    ]


let cards;

let numberOfHearts;
let chosenCards;
let count;
let delay;
let cardIndexKeeper;



// cached elements

const deck = document.getElementById('deck')

const container = document.querySelector('.container');

// const selectedEls = document.querySelectorAll('.selected');

document.getElementById('cardDivs')
  .addEventListener('click', handleCardClick);


init();

function init(){
    
    console.log('init is working')
    cards = shuffle(cardLists);
    numberOfHearts = 3
    count = 0
    delay= 500
    chosenCards = []
    cardIndexKeeper = []
    
    render();
   
}

function render(){
    container.innerHTML="";
    
    for (let i = 0; i < cards.length; i++){
        const card = document.createElement('div');
        card.setAttribute('class','card');
        card.dataset.name = cards[i].name;

        console.log(cards[i].faceDown,'facedown status')

        if(cards[i].faceDown)
         {
            const front = document.createElement('div')
            front.classList.add('front')
            front.style.backgroundImage = `url(${cards[i].front})`;
            front.dataset.cardId = cards[i].cardId;
            front.dataset.name = cards[i].name;
            front.dataset.selected = cards[i].selected;
            front.dataset.unmatch = cards[i].unmatch;
            
            
            card.appendChild(front);
         }
        else
         {
            const back = document.createElement('div')
            back.classList.add('back')
            back.dataset.cardId = cards[i].cardId;
            back.dataset.name = cards[i].name;
            back.dataset.selected = cards[i].selected;
            back.dataset.unmatch = cards[i].unmatch;
            back.style.backgroundImage = `url(${cards[i].back})`;
            
            card.appendChild(back);

            }
        container.appendChild(card);


         }
    for (card in cards){
        if(cards[card].unmatch){
            
            let id = parseInt(cards[card].cardId);
           
           console.log(id,'idididididi')
        
            const els = document.querySelector(`[data-card-id="${id}"]`);
            
            // els.style.backgroundImage = `url('imgs/front.png')`;
            els.setAttribute('class','backgroundNone');
            
        }
    }

    }

function handleCardClick(e){
    console.log('handleCardClick its working ')
    count += 1;
    let cardClicked = cards.find(card => card.cardId === parseInt(e.target.dataset.cardId));
    console.log(cardClicked,'cardClicked')
    cardClicked.faceDown = false;
    // is this likned to cards how changing facedown = false in cardclick affrects cards
    
    render(); 
    
    if(count===2){
        console.log('two cards have been selected')
        let cardsSelected = cards.filter(card => card.faceDown === false);
        console.log(cardsSelected)
        if (cardsSelected[0].name === cardsSelected[1].name){
            console.log('theyre matched!')
            cardsSelected.match = true;
            render();
        }
        else{
            console.log('theyre not matched!')
            cardsSelected.faceDown = true;  
            render();
        }

    }
    
    }

// function match(){
//     const cardMatch = cards.filter(card => card.selected === true)
//     console.log(cardMatch,'catdMATCHHHHHHHHHHHH')
    
    
//     // selectedEls.forEach((item) => {
        
//     //     item.classList.add('match')
//     //     console.log(item)
//     // })
//     // console.log(selectedEls,'with match')
//     setTimeout(clearChosenCards, delay)
//     // clearChosenCards();
    

// }

// function unmatch(){
//     console.log('unmatch function is working')
    
//     const selectedEls = document.querySelectorAll('[data-selected ="true"]')

//     selectedEls.forEach((item) => {
//         item.classList.add('unmatch')
//         console.log(item)
//         setTimeout(clearChosenCards, delay)
//         clearChosenCards();
//     })
    
    
// }

function clearChosenCards(){
    const cardMatch = cards.find(card => card.selected === true)
    for (let i=0 ; i<2 ;i++){
        chosenCards.pop(i);
    }
    count = 0;
    // selectedEls.forEach((item) => {
    //     item.classList.remove('selected');
    //     item.classList.remove('unmatch');
        // console.log(item)
    // })
 

}

//shuflle function to randomize the array
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }



