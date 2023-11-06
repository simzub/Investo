import { TestBed } from '@angular/core/testing';
import { ComponentFixture } from '@angular/core/testing';
import { FaqsListComponent } from './faqs-list.component';
import { By } from '@angular/platform-browser';

describe('FaqsListComponent', () => {
  let fixture: ComponentFixture<FaqsListComponent>;
  let component: FaqsListComponent;
  let htmlElement: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaqsListComponent],
    });

    fixture = TestBed.createComponent(FaqsListComponent);
    component = fixture.componentInstance;
    htmlElement = fixture.debugElement.nativeElement;
  });

  it('should create the FaqsListComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should have an ordered list element', () => {
    const listElement = htmlElement.querySelector('li');
    expect(listElement).toBeTruthy();
  });

  it('should generate list items for each FAQ', () => {
    component.faqs = [
      { question: 'Question 1', answer: 'Answer 1' },
      { question: 'Question 2', answer: 'Answer 2' },
    ];

    fixture.detectChanges();

    const listItems = fixture.debugElement.queryAll(By.css('li ul li'));
    expect(listItems.length).toBe(2);

    expect(listItems[0].query(By.css('h3')).nativeElement.textContent).toBe(
      'Question 1'
    );
    expect(listItems[0].query(By.css('p')).nativeElement.textContent).toBe(
      'Answer 1'
    );
    expect(listItems[1].query(By.css('h3')).nativeElement.textContent).toBe(
      'Question 2'
    );
    expect(listItems[1].query(By.css('p')).nativeElement.textContent).toBe(
      'Answer 2'
    );
  });
});
