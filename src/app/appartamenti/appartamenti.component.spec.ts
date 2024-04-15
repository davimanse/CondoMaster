import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartamentiComponent } from './appartamenti.component';

describe('AppartamentiComponent', () => {
  let component: AppartamentiComponent;
  let fixture: ComponentFixture<AppartamentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppartamentiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppartamentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
