import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SuccessComponent } from './success/success.component';
import { WarningComponent } from './warning/warning.component';
import { TopBarComponent } from './topBar/topBar.component';
import { DetailsComponent } from './details/details.component';
import { SelectStateComponent } from './selectState/selectState.component';
import { FooterComponent } from './footer/footer.component';
import { BindingComponent } from './binding/binding.component';
import { DirectiveTestComponent } from './directiveTest/directiveTest.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    WarningComponent,
    TopBarComponent,
    DetailsComponent,
    SelectStateComponent,
    FooterComponent,
    BindingComponent,
    DirectiveTestComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
