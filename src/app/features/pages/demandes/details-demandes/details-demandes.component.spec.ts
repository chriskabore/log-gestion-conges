import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDemandesComponent } from './details-demandes.component';

describe('DetailsDemandesComponent', () => {
  let component: DetailsDemandesComponent;
  let fixture: ComponentFixture<DetailsDemandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsDemandesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
