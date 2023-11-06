import { TestBed } from '@angular/core/testing';
import { ComponentFixture } from '@angular/core/testing';
import { FaqsComponent } from './faqs.component';
import { By } from '@angular/platform-browser';
import { FaqsListComponent } from './faqs-list/faqs-list.component';

describe('FaqsComponent', () => {
  let fixture: ComponentFixture<FaqsComponent>;
  let component: FaqsComponent;
  let htmlElement: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaqsComponent, FaqsListComponent],
    });

    fixture = TestBed.createComponent(FaqsComponent);
    component = fixture.componentInstance;
    htmlElement = fixture.debugElement.nativeElement;
  });

  it('should create the FaqsComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should have a section element with the faqs content', () => {
    const sectionElement = htmlElement.querySelector('section#faqs');
    expect(sectionElement).toBeTruthy();
  });

  it('should display the title and description', () => {
    const titleElement = htmlElement.querySelector('.title');
    const descriptionElement = htmlElement.querySelector('.description');
    expect(titleElement).toBeTruthy();
    expect(descriptionElement).toBeTruthy();
    if (titleElement) {
      expect(titleElement.textContent).toContain('Frequently asked questions');
    }
    if (descriptionElement) {
      expect(descriptionElement.textContent).toContain(
        'If you have anything else you want to ask'
      );
    }
  });

  it('should have three FaqsListComponent elements with the correct faqs data', () => {
    fixture.detectChanges();

    const faqsListComponents = fixture.debugElement.queryAll(
      By.directive(FaqsListComponent)
    );
    expect(faqsListComponents.length).toBe(3);

    for (let i = 0; i < faqsListComponents.length; i++) {
      const faqsListComponent = faqsListComponents[i]
        .componentInstance as FaqsListComponent;
      expect(faqsListComponent.faqs).toEqual(component.faqs[i]);
    }
  });
});
