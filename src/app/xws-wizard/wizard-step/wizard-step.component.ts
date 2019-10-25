import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'xws-wizard-step',
  templateUrl: './wizard-step.component.html',
  styleUrls: ['./wizard-step.component.scss']
})
export class WizardStepComponent implements OnInit {

  @Input() label = 'step 1';
  @Input() step: WizardStepComponent;

  ngOnInit() {
  }

}
