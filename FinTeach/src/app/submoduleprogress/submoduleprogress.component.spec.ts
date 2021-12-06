import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmoduleprogressComponent } from './submoduleprogress.component';

describe('SubmoduleprogressComponent', () => {
  let component: SubmoduleprogressComponent;
  let fixture: ComponentFixture<SubmoduleprogressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmoduleprogressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmoduleprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
