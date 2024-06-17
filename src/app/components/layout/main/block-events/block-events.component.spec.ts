import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockEventsComponent } from './block-events.component';

describe('BlockEventsComponent', () => {
  let component: BlockEventsComponent;
  let fixture: ComponentFixture<BlockEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockEventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlockEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
