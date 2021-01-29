import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AOTPage } from './aot.page';

describe('AOTPage', () => {
  let component: AOTPage;
  let fixture: ComponentFixture<AOTPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AOTPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AOTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
