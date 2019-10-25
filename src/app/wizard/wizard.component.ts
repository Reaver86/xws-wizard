import {Component, ContentChildren, QueryList} from '@angular/core';
import {WizardStepComponent} from './wizard-step/wizard-step.component';

@Component({
  selector: 'xws-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent {

  activeStepIndex = 0;

  @ContentChildren(WizardStepComponent) steps: QueryList<WizardStepComponent>;
}
