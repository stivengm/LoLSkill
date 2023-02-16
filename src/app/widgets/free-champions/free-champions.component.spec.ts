import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeChampionsComponent } from './free-champions.component';

describe('FreeChampionsComponent', () => {
  let component: FreeChampionsComponent;
  let fixture: ComponentFixture<FreeChampionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeChampionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeChampionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
