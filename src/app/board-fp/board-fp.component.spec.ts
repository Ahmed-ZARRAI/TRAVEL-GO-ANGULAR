import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardFpComponent } from './board-fp.component';

describe('BoardFpComponent', () => {
  let component: BoardFpComponent;
  let fixture: ComponentFixture<BoardFpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardFpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardFpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
