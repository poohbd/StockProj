import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BEMPage } from './bem.page';

describe('BEMPage', () => {
  let component: BEMPage;
  let fixture: ComponentFixture<BEMPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BEMPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BEMPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
