import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SCBPage } from './scb.page';

describe('SCBPage', () => {
  let component: SCBPage;
  let fixture: ComponentFixture<SCBPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SCBPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SCBPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
