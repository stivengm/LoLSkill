import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionAboutComponent } from './champion-about.component';

describe('ChampionAboutComponent', () => {
  let component: ChampionAboutComponent;
  let fixture: ComponentFixture<ChampionAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
