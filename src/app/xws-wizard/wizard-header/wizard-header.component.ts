import {Component, Input, OnInit} from '@angular/core';
import {WizardStepComponent} from '../wizard-step/wizard-step.component';

@Component({
  selector: 'xws-wizard-header',
  templateUrl: './wizard-header.component.html',
  styleUrls: ['./wizard-header.component.scss']
})
export class WizardHeaderComponent implements OnInit {

  @Input() steps: WizardStepComponent[];
  @Input() activeIndex: number;

  ngOnInit() {
  }
}
