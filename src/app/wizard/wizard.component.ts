import { AfterContentInit, Component, ContentChildren, QueryList, TemplateRef } from '@angular/core';
import {WizardStepComponent} from './wizard-step/wizard-step.component';

@Component({
  selector: 'xws-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements AfterContentInit {

  activeStepTemplate: TemplateRef<WizardStepComponent>;
  activeStepIndex = 0;

  @ContentChildren('template') stepTemplates: QueryList<TemplateRef<WizardStepComponent>>;

  ngAfterContentInit() {
    console.log(this.stepTemplates.toArray()[0]);
    this.activeStepTemplate = this.stepTemplates.find((item, index) => index === this.activeStepIndex);
  }
}
