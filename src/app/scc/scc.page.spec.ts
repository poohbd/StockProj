import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SCCPage } from './scc.page';

describe('SCCPage', () => {
  let component: SCCPage;
  let fixture: ComponentFixture<SCCPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SCCPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SCCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
