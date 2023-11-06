import { TestBed } from '@angular/core/testing';
import { ComponentFixture } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';
import { SvgLogoComponent } from 'src/assets/svg/svg-logo/svg-logo.component';
import { SvgMenuClosedComponent } from 'src/assets/svg/svg-menu-closed/svg-menu-closed.component';
import { SvgMenuOpenComponent } from 'src/assets/svg/svg-menu-open/svg-menu-open.component';

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let component: HeaderComponent;
  let htmlElement: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        SvgLogoComponent,
        SvgMenuClosedComponent,
        SvgMenuOpenComponent,
      ],
    });

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    htmlElement = fixture.debugElement.nativeElement;
  });

  it('should create the HeaderComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should have a header element', () => {
    const headerElement = htmlElement.querySelector('header');
    expect(headerElement).toBeTruthy();
  });

  it('should have a logo with a routerLink attribute', () => {
    const logoLink = fixture.debugElement.query(By.css('.app-logo'));
    expect(logoLink).toBeTruthy();
    expect(logoLink.attributes['routerLink']).toBe('/');
  });

  function testNavItemWithFragment(fragment: string, expectedText: string) {
    return it(`should have a nav-item with correct routerLink and fragment for ${expectedText}`, () => {
      const navItem = fixture.debugElement.query(
        By.css(`.nav-item[fragment="${fragment}"] span.nav-text`)
      );
      expect(navItem).toBeTruthy();
      expect(navItem.nativeElement.textContent).toContain(expectedText);
    });
  }
  testNavItemWithFragment('features', 'Features');
  testNavItemWithFragment('reviews', 'Reviews');
  testNavItemWithFragment('pricing', 'Pricing');
  testNavItemWithFragment('faqs', 'FAQs');
});
