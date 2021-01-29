import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PTTEPPage } from './pttep.page';

describe('PTTEPPage', () => {
  let component: PTTEPPage;
  let fixture: ComponentFixture<PTTEPPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PTTEPPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PTTEPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
