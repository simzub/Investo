import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhoneContentStocksComponent } from './phone-content-stocks.component';
import { BrowserModule } from '@angular/platform-browser';
import { SvgLaravelComponent } from 'src/assets/svg/stocks/svg-laravel/svg-laravel.component';
import { SvgTupleComponent } from 'src/assets/svg/stocks/svg-tuple/svg-tuple.component';
import { SvgTransistorComponent } from 'src/assets/svg/stocks/svg-transistor/svg-transistor.component';
import { SvgDiageoComponent } from 'src/assets/svg/stocks/svg-diageo/svg-diageo.component';
import { SvgStatickitComponent } from 'src/assets/svg/stocks/svg-statickit/svg-statickit.component';
import { SvgStatamicComponent } from 'src/assets/svg/stocks/svg-statamic/svg-statamic.component';
import { SvgMirageComponent } from 'src/assets/svg/stocks/svg-mirage/svg-mirage.component';
import { SvgReversableComponent } from 'src/assets/svg/stocks/svg-reversable/svg-reversable.component';

describe('PhoneContentStocksComponent', () => {
  let component: PhoneContentStocksComponent;
  let fixture: ComponentFixture<PhoneContentStocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PhoneContentStocksComponent,
        SvgLaravelComponent,
        SvgTupleComponent,
        SvgTransistorComponent,
        SvgDiageoComponent,
        SvgStatickitComponent,
        SvgStatamicComponent,
        SvgMirageComponent,
        SvgReversableComponent,
      ],
      imports: [BrowserModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneContentStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render stocks description and items', () => {
    const description = fixture.nativeElement.querySelector('.description');
    const header = description.querySelector('.description-header');
    const pElement = description.querySelector('p');

    const itemContainers =
      fixture.nativeElement.querySelectorAll('.item-container');

    expect(description).toBeTruthy();
    expect(header.textContent).toContain('Stocks');
    expect(pElement.textContent).toContain('March 9, 2022');
    expect(itemContainers.length).toBe(component.stockItems.length);

    itemContainers.forEach((container: HTMLElement, index: number) => {
      const titleElement = container.querySelector('.item-title');
      const label = container.querySelector('.label');
      const priceElement = label!.querySelector('p');
      const spanElement = label!.querySelector('span');
      const item = component.stockItems[index];

      expect(container).toBeTruthy();
      if (titleElement) {
        expect(titleElement.textContent).toContain(item.title);
      }
      if (priceElement) {
        expect(priceElement.textContent).toContain(item.price);
      }

      if (item.change > 0) {
        if (spanElement) {
          expect(spanElement.textContent).toContain('+' + item.change + '%');
          expect(spanElement.style.color).toBe('rgb(147, 51, 234)');
        }
      } else {
        if (spanElement) {
          expect(spanElement.textContent).toContain(item.change + '%');
          expect(spanElement.style.color).toBe('');
        }
      }
    });
  });
});
