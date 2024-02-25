import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteStudyComponent } from './delete-study.component';

describe('DeleteStudyComponent', () => {
  let component: DeleteStudyComponent;
  let fixture: ComponentFixture<DeleteStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteStudyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
