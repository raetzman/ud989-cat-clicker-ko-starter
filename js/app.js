var initialCats = [
    {
        clickCount: 0,
        name: 'Mautzi',
        imgSrc: 'img/22252709_010df3379e_z.jpg',
        imgAttribution: 'artist',
        nicknames: ['Puffy','Schnurrrrrrrrrri']
    },{
        clickCount: 0,
        name: 'A Cat',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        imgAttribution: 'artist',
        nicknames: ['Chef', 'Nick']
    },{
        clickCount: 0,
        name: 'Super Cat',
        imgSrc: 'img/1413379559_412a540d29_z.jpg',
        imgAttribution: 'artist',
        nicknames: ['Snoorrrrrr', 'Hellloooo']
    },{
        clickCount: 0,
        name: 'Maunzzzz',
        imgSrc: 'img/4154543904_6e2428c421_z.jpg',
        imgAttribution: 'artist',
        nicknames: ['Peter','a','b','c','d']
    },{
        clickCount: 0,
        name: 'Mautzi 5',
        imgSrc: 'img/9648464288_2516b35537_z.jpg',
        imgAttribution: 'artist',
        nicknames: ['Test','Ninja']        
    }
];

var Cat = function(data){
    
    this.clickCount = ko.observable(0);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.level = ko.computed(function(){
        return this.clickCount() < 10 ? 'new born' : 'experienced cat';
    },this);
    

    this.catnicknames2 = ko.observableArray();
    this.catnicknames2 = data.nicknames

    this.catnicknames = ko.observableArray([
        {nickname: "Mauntzi 1"},
        {nickname: "Mauntzi 2"},
        {nickname: "Mauntzi 3"}]);
    
}


var ViewModel = function() {
    
    var self = this;
    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem){
        self.catList.push(new Cat(catItem));
    })

    this.currentCat = ko.observable(this.catList()[0]);

    this.changeCat = function(data){
        console.log(this.name());
        self.currentCat(data);
    };

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1 );
    };
    
}

ko.applyBindings(new ViewModel());