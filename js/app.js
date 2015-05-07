var initialCats = [
  {
      clickCount : 0,
      name : 'Fábio',
      imgSrc : 'img/gato.jpg',
      imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568',
      nicknames: ['Fábi', 'Xuxu'],
      title: ''

  },
  {
      clickCount : 0,
      name : 'Vanessa',
      imgSrc : 'img/gato.jpg',
      imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904',
      nicknames: ['Fábi', 'Xuxu'],
      title: ''

  },
  {
      clickCount : 0,
      name : 'Cookie',
      imgSrc : 'img/gato.jpg',
      imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709',
      nicknames: ['Yum'],
      title: ''

  },
  {
      clickCount : 0,
      name : 'TREX',
      imgSrc : 'img/gato.jpg',
      imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559',
      nicknames: ['Fábi', 'Xuxu'],
      title: ''

  },
  {
      clickCount : 0,
      name : 'Banana',
      imgSrc : 'img/gato.jpg',
      imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288',
      nicknames: ['Fábi', 'Xuxu'],
      title: ''

  }

]

var Cat = function(data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);  
  this.imgSrc = ko.observable(data.imgSrc);
  this.nicknames = ko.observableArray(data.nicknames);

  this.title = ko.computed(function() {    
    var title;
    var clicks = this.clickCount();
    if (clicks <10) {
      title = 'Newborn';
    } else if (clicks < 50) {
      title = 'Infant';
    } else if (clicks <90) {
      title = 'Adult';
    } else {
      title = 'Ninja';
    }
    return title;

  }, this);
}

var ViewModel = function() {
  var self = this;

  this.catList = ko.observableArray([]);

  initialCats.forEach(function(catItem){
    self.catList.push( new Cat(catItem));
  });

  this.currentCat = ko.observable( this.catList()[0]);

  this.changeCat = function(clickedCat){
    self.currentCat(clickedCat);
  };


  this.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };

};

ko.applyBindings(new ViewModel());