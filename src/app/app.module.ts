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
import { ContactModule } from './contact/contact.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryModule } from './gallery/gallery.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // AboutComponent,
    // ContactComponent,
    // SkillsComponent,
    // ProjectsComponent,
    SinglePageComponent,
    // GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    SkillsModule,
    ProjectsModule,
    ContactModule,
    // GalleryModule,
    FontAwesomeModule,
    NgbModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
