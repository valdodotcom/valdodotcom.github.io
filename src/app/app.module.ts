import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { SinglePageComponent } from './single-page/single-page.component';
import { AboutModule } from './about/about.module';
import { SkillsModule } from './skills/skills.module';
import { ProjectsModule } from './projects/projects.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // AboutComponent,
    ContactComponent,
    // SkillsComponent,
    // ProjectsComponent,
    SinglePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    SkillsModule,
    ProjectsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
