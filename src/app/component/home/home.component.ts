import { Component, inject } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponents } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';


@Component({
  selector: 'app-home',
  imports: [AboutComponent,SkillsComponent,ProjectsComponents,ContactComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}