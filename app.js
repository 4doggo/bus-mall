var imageStorage = [];
var randomImages = [];
var clickCounter = 0;
var MAX_CLICK_COUNTER = 10;

function getRandomImageIndex() {
    return Math.floor(Math.random() * (iamgeStorage.length));
}

function select3ImagesAndRender() {
    // select 3 goats :p
    // we need a loop to select numbers
    randomImages = [];

    while (randomImages.length < 3) {
        var nextRandomValue = getRandomImageIndex();

        if (!randomImages.includes(nextRandomValue)) {
            randomImages.push(nextRandomValue);
        }
    }

    var allImages = function (name, picture) {
        this.name = name;
        this.picture = picture;
        this.timesClicked = 0;
        this.timesShown = 0; // hint hint ;). You may need to use this for your app ;)

        this.markClick = function () {
            this.timesClicked++;
        }

        this.render = function (domReference) {
            domReference.src = picture;
        }
        iamgeStorage.push(this);
    }

    var placeholder0 = document.getElementById('placeholder-0');
    var placeholder1 = document.getElementById('placeholder-1');
    var placeholder2 = document.getElementById('placeholder-2');
    // Invariants:
    // randomGoats has 3 goats!

    imageStorage[randomImages[0]].render(placeholder0);
    imageStorage[randomImages[1]].render(placeholder1);
    imageStorage[randomImages[2]].render(placeholder2);

    var bag = new Goat('Sweater Goat', './images/bag.jpg');
    var banana = new Goat('Cruising Goat', './images/banana.jpg');
    var bathroom = new Goat('Float your Goat', './images/bathroom.jpg');
    var boots = new Goat('Kissing Goat', './images/boots.jpg');
    var breakfast = new Goat('Sweater Goat', './images/breakfast.jpg');
    var bubblegum = new Goat('Cruising Goat', './images/bubblegum.jpg');
    var chair = new Goat('Float your Goat', './images/chair.jpg');
    var cthulhu = new Goat('Kissing Goat', './images/cthulhu.jpg');
    var dogDuck = new Goat('Sweater Goat', './images/dog-duck.jpg');
    var dragon = new Goat('Cruising Goat', './images/dragon.jpg');
    var pen = new Goat('Float your Goat', './images/pen.jpg');
    var petSweep = new Goat('Kissing Goat', './images/pet-sweep.jpg');
    var scissors = new Goat('Sweater Goat', './images/scissors.jpg');
    var shark = new Goat('Cruising Goat', './images/shark.jpg');
    var sweep = new Goat('Float your Goat', './images/sweep.jpg');
    var tauntaun = new Goat('Kissing Goat', './images/tauntaun.jpg');
    var unicorn = new Goat('Sweater Goat', './images/unicorn.jpg');
    var usb = new Goat('Cruising Goat', './images/usb.jpg');
    var waterCan = new Goat('Float your Goat', './images/water-can.jpg');
    var wineGlass = new Goat('Kissing Goat', './images/wine-glass.jpg');

    function clickManager(event) {
        clickCounter++;
        if (clickCounter < MAX_CLICK_COUNTER) {
            var imageIndex;

            if (event.target.id === 'placeholder-0') {
                imageIndex = 0;
            } else if (event.target.id === 'placeholder-1') {
                imageIndex = 1;
            } else {
                imageIndex = 2;
            }
            var clickedImage = imageStorage[randomImages[imageIndex]];
            clickedImage.markClick();

            select3GoatsAndRender();
        } else {
            alert('game over');
        }
    }

    select3GoatsAndRender();

    var placeholder0 = document.getElementById('placeholder-0');
    var placeholder1 = document.getElementById('placeholder-1');
    var placeholder2 = document.getElementById('placeholder-2');

    placeholder0.addEventListener('click', clickManager);
    placeholder1.addEventListener('click', clickManager);
    placeholder2.addEventListener('click', clickManager);
