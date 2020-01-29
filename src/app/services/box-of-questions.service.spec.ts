import { TestBed } from '@angular/core/testing';

import { BoxOfQuestionsService } from './box-of-questions.service';


describe('BoxOfQuestionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));


  it('should be created', () => {
    const service: BoxOfQuestionsService = TestBed.get(BoxOfQuestionsService);
    expect(service).toBeTruthy();
  });


  it('should have an array of selected items.', () => {
    const service: BoxOfQuestionsService = TestBed.get(BoxOfQuestionsService);

    expect(Array.isArray(service.getSelectedItems())).toBeTruthy();
    expect(service.getSelectedItems().length).toBeGreaterThan(0);
  });



  it('Items should have propertiy "_id"', () => {
    const service: BoxOfQuestionsService = TestBed.get(BoxOfQuestionsService);
    var min = 0;
    var max = service.getSelectedItems().length -1;
    var i = Math.floor(Math.random() * (max - min + 1)) + min;
    var item = service.getSelectedItems()[i];

    expect(item._id).toBeTruthy();
  });




  it('Items should have a property "tags"', () => {
    // this tests needs to be improved. It depends on a random selection of 
    // an item and sometimes fails.
    const service: BoxOfQuestionsService = TestBed.get(BoxOfQuestionsService);
    var min = 0;
    var max = service.getSelectedItems().length -1;
    var i = Math.floor(Math.random() * (max - min + 1)) + min;
    var item = service.getSelectedItems()[i];

    expect(item.tags.length > 0).toBeTruthy(); // a string with a length
  });


  it('should allow to select items by a tag', () => {
    const service: BoxOfQuestionsService = TestBed.get(BoxOfQuestionsService);

    var items : Array<any>; 

    items = service.selectAllItems();

    if (items[0].word == 'butterfly') { // test data is used as 'items'

    items = service.allItemsFilteredByTag("animal");
    expect(items.length).toBe(9);

    items = service.allItemsFilteredByTag("mammal");
    expect(items.length).toBe(4);

    items = service.allItemsFilteredByTag("otherAnimal");
    expect(items.length).toBe(3);


    items = service.allItemsFilteredByTag("bird");
    expect(items.length).toBe(2);

    items = service.allItemsFilteredByTag("food");
    expect(items.length).toBe(2);

    expect(service.currentItem().word).toBe("carrots");
    expect(service.nextItem().word).toBe("mushrooms");
    expect(service.nextItem().word).toBe("carrots");



    items = service.allItemsFilteredByTag("nature");
    expect(items.length).toBe(1);

    items = service.allItemsFilteredByTag("");
    expect(items.length).toBe(12);


    };

  });







  it('should allow to navigate forth and back.', () => {
    const service: BoxOfQuestionsService = TestBed.get(BoxOfQuestionsService);
    service.nextItem();
    service.nextItem();
    var item = service.currentItem();

    service.nextItem();
    service.nextItem();

    service.prevItem();
    service.prevItem();

    var item2 = service.currentItem();
    expect(item._id == item2._id).toBeTruthy();


  });



  it('should allow to navigate around the items limit.', () => {
    const service: BoxOfQuestionsService = TestBed.get(BoxOfQuestionsService);
    service.nextItem();
    service.nextItem();
    var item = service.currentItem();

    let numberOfItems = service.getSelectedItems().length;


    for (let i = 0; i < numberOfItems; i++) {
        service.prevItem();
    };


    var item2 = service.currentItem();
    expect(item._id == item2._id).toBeTruthy();


  });




});
