import {AfterContentInit, Component, ContentChildren, QueryList, TemplateRef, ViewContainerRef} from '@angular/core';
import {WizardStepComponent} from './wizard-step/wizard-step.component';

@Component({
  selector: 'xws-wizard',
  templateUrl: './xws-wizard.component.html',
  styleUrls: ['./xws-wizard.component.scss']
})
export class XwsWizardComponent implements AfterContentInit {

  activeStepIndex = 0;

  @ContentChildren(WizardStepComponent) steps: QueryList<WizardStepComponent>;

  ngAfterContentInit() {
    // this.steps.changes.subscribe(() => {
    //   this.stepsArray = this.steps.toArray();
    // });
  }

}
