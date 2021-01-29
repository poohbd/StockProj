import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ADVANCPage } from './advanc.page';

describe('ADVANCPage', () => {
  let component: ADVANCPage;
  let fixture: ComponentFixture<ADVANCPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ADVANCPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ADVANCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
