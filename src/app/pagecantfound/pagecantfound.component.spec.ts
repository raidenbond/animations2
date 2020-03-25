import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagecantfoundComponent } from './pagecantfound.component';

describe('PagecantfoundComponent', () => {
  let component: PagecantfoundComponent;
  let fixture: ComponentFixture<PagecantfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagecantfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagecantfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
