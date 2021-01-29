import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PTTPage } from './ptt.page';

describe('PTTPage', () => {
  let component: PTTPage;
  let fixture: ComponentFixture<PTTPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PTTPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PTTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
