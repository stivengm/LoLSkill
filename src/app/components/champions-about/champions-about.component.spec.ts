import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionsAboutComponent } from './champions-about.component';

describe('ChampionsAboutComponent', () => {
  let component: ChampionsAboutComponent;
  let fixture: ComponentFixture<ChampionsAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionsAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionsAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
