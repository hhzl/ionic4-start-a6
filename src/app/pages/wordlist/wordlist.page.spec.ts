import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';

import { WordlistPage } from './wordlist.page';

describe('WordlistPage', () => {
  let component: WordlistPage;
  let fixture: ComponentFixture<WordlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordlistPage ],
      imports: [IonicModule.forRoot(),RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(WordlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
