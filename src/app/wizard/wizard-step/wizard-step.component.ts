import {Component, Input} from '@angular/core';

@Component({
  selector: 'xws-wizard-step',
  templateUrl: './wizard-step.component.html',
  styleUrls: ['./wizard-step.component.scss']
})
export class WizardStepComponent {

  @Input() label: string;
}
