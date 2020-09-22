import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CssIntroPage } from './css-intro.page';

describe('CssIntroPage', () => {
  let component: CssIntroPage;
  let fixture: ComponentFixture<CssIntroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssIntroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CssIntroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
