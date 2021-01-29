import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KBANKPage } from './kbank.page';

describe('KBANKPage', () => {
  let component: KBANKPage;
  let fixture: ComponentFixture<KBANKPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KBANKPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KBANKPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
