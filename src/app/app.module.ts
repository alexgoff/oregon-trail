import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { GeneratorComponent } from './components/generator/generator.component';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';

import { NameGeneratorService } from './services/name-generator.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    GeneratorComponent,
    ThemeSwitcherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    NameGeneratorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
