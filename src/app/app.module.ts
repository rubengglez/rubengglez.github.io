import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from 'src/top/top.component';
import { ContentComponent } from 'src/content/content.component';
import { AsideInfoComponent } from 'src/aside-info/aside-info.component';

@NgModule({
	declarations: [AppComponent, TopComponent, ContentComponent, AsideInfoComponent],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
