var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Mauntzi');
    this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');
    this.imgAttribution = ko.observable('artist');
    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1 );
    };
    this.level = ko.computed(function(){
        return this.clickCount() < 10 ? 'new born' : 'experienced cat';
    },this);
    this.catnicknames = ko.observableArray([
        {nickname: "Mauntzi 1"},
        {nickname: "Mauntzi 2"},
        {nickname: "Mauntzi 3"}]);
}

ko.applyBindings(new ViewModel());


// 434164568_fea0ad4013_z.jpg
// 1413379559_412a540d29_z.jpg
// 4154543904_6e2428c421_z.jpg
// 9648464288_2516b35537_z.jpg