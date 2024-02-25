import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BibleStudyServiceService } from '../service/music-service.service';
import { Study } from '../models/studies.model';
import { EditStudyComponent } from '../edit-study/edit-study.component';

@Component({
  selector: 'app-list-studies',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    EditStudyComponent
  ],
  templateUrl: './list-studies.component.html',
  styleUrl: './list-studies.component.css'
})
export class ListStudiesComponent {

  selectedStudy: Study | null = null;
  studies: Study[] = [];

  constructor(private route: ActivatedRoute, private service: BibleStudyServiceService) { }


  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log("Getting data....");

      this.service.getStudies((studies: Study[]) => {  
        this.studies = studies; 
        console.log('this.studies', this.studies)
      });

      this.selectedStudy = null;
    });
  }

  onSelectStudy(study: Study) {
    console.log("Selected study: " + study);
    this.selectedStudy = study;
  }

}
