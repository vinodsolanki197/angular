import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserModule } from './user/user.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { FunctioncallingComponent } from './functioncalling/functioncalling.component';
import { InputValueComponent } from './input-value/input-value.component';
import { IfElseComponent } from './if-else/if-else.component';
import { ForLoopComponent } from './for-loop/for-loop.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    FunctioncallingComponent,
    InputValueComponent,
    IfElseComponent,
    ForLoopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
