import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });


  it('should have test data', () => {
    const service: DataService = TestBed.get(DataService);
    var testitems: Array<any> = [];
    if (service.items[0].word == 'butterfly') { // test data under 'items'
        testitems = service.items;       
    } else {   // separate testitems property
        testitems = service.testitems;                              
    };

    expect(testitems.length).toBe(12);

  });



});
