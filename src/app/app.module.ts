import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { XwsWizardComponent } from './xws-wizard/xws-wizard.component';
import { WizardStepComponent } from './xws-wizard/wizard-step/wizard-step.component';
import { WizardNavComponent } from './xws-wizard/wizard-step/wizard-nav/wizard-nav.component';
import { WizardStepNextDirective } from './xws-wizard/wizard-step/wizard-step-next.directive';
import { WizardStepPreviousDirective } from './xws-wizard/wizard-step/wizard-step-previous.directive';
import { WizardHeaderComponent } from './xws-wizard/wizard-header/wizard-header.component';

@NgModule({
  declarations: [
    AppComponent,
    XwsWizardComponent,
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
