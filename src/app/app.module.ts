import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WizardComponent } from './wizard/wizard.component';
import { WizardStepComponent } from './wizard/wizard-step/wizard-step.component';
import { WizardNavComponent } from './wizard/wizard-step/wizard-nav/wizard-nav.component';
import { WizardStepNextDirective } from './wizard/wizard-step/wizard-step-next.directive';
import { WizardStepPreviousDirective } from './wizard/wizard-step/wizard-step-previous.directive';
import { WizardHeaderComponent } from './wizard/wizard-header/wizard-header.component';

@NgModule({
  declarations: [
    AppComponent,
    WizardComponent,
    WizardStepComponent,
    WizardNavComponent,
    WizardStepNextDirective,
    WizardStepPreviousDirective,
    WizardHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
