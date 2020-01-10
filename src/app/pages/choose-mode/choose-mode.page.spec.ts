import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';

import { ChooseModePage } from './choose-mode.page';

describe('ChooseModePage', () => {
  let component: ChooseModePage;
  let fixture: ComponentFixture<ChooseModePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseModePage ],
      imports: [IonicModule.forRoot(),RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ChooseModePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
