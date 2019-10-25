import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'xws-wizard-step',
  templateUrl: './wizard-step.component.html',
  styleUrls: ['./wizard-step.component.scss']
})
export class WizardStepComponent implements OnInit {

  constructor() {}

  @Input() label: string;
  @Input() step: WizardStepComponent;

  ngOnInit() {
  }
}
