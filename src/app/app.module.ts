import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [CommonModule, BrowserModule],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
