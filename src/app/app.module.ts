import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FilterPanelComponent } from './components/filter-panel/filter-panel.component';
import { JobPanelComponent } from './components/job-panel/job-panel.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, FilterPanelComponent, JobPanelComponent],
  imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
