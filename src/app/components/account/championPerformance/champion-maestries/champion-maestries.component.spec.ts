import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionMaestriesComponent } from './champion-maestries.component';

describe('ChampionMaestriesComponent', () => {
  let component: ChampionMaestriesComponent;
  let fixture: ComponentFixture<ChampionMaestriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionMaestriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionMaestriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
