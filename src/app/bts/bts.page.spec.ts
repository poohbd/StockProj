import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BTSPage } from './bts.page';

describe('BTSPage', () => {
  let component: BTSPage;
  let fixture: ComponentFixture<BTSPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BTSPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BTSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
