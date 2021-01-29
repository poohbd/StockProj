import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CPNPage } from './cpn.page';

describe('CPNPage', () => {
  let component: CPNPage;
  let fixture: ComponentFixture<CPNPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CPNPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CPNPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
