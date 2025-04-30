import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPadreComponent } from './card-padre.component';

describe('CardPadreComponent', () => {
  let component: CardPadreComponent;
  let fixture: ComponentFixture<CardPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPadreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
