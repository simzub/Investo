import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent {
  @Input() header: string = '';
  @Input() descriptionBefore: string = '';
  @Input() descriptionAfter: string = '';
  @Input() routeLink: string = '';
  @Input() link: string = '';
  @Input() submitText: string = '';
}
