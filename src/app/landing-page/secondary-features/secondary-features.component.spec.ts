import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecondaryFeaturesComponent } from './secondary-features.component';
import { SvgDeviceArrowComponent } from 'src/assets/svg/device/svg-device-arrow/svg-device-arrow.component';
import { SvgDeviceCardsComponent } from 'src/assets/svg/device/svg-device-cards/svg-device-cards.component';
import { SvgDeviceClockComponent } from 'src/assets/svg/device/svg-device-clock/svg-device-clock.component';
import { SvgDeviceListComponent } from 'src/assets/svg/device/svg-device-list/svg-device-list.component';
import { SvgDeviceLockComponent } from 'src/assets/svg/device/svg-device-lock/svg-device-lock.component';
import { SvgDeviceChartComponent } from 'src/assets/svg/device/svg-device-chart/svg-device-chart.component';

describe('SecondaryFeaturesComponent', () => {
  let component: SecondaryFeaturesComponent;
  let fixture: ComponentFixture<SecondaryFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SecondaryFeaturesComponent,
        SvgDeviceArrowComponent,
        SvgDeviceCardsComponent,
        SvgDeviceClockComponent,
        SvgDeviceListComponent,
        SvgDeviceLockComponent,
        SvgDeviceChartComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render secondary features section', () => {
    const secondaryFeaturesSection =
      fixture.nativeElement.querySelector('section');

    expect(secondaryFeaturesSection).toBeTruthy();
  });
});
