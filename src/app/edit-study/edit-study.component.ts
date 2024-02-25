import { Component, Input, OnInit } from '@angular/core';
import { BibleStudyServiceService } from '../service/music-service.service';
import { Study } from '../models/studies.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-study',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './edit-study.component.html',
  styleUrl: './edit-study.component.css'
})



export class EditStudyComponent implements OnInit {

  @Input() study: Study | null = null;

  wasSubmitted: boolean = false;
  wasDeleted: boolean = false;

  constructor(private service: BibleStudyServiceService) { }


  ngOnInit() {


  }

  public onSubmit() {


    console.log(this.study);

    if (this.study) {
      this.service.updateStudy(this.study, () => {
        console.log("Study edited");
        this.wasSubmitted = true;
      });

    } else {
      console.log("Unable to edit null study");
    }
  }

  public onDelete() {
    if (this.study) {
      this.service.deleteStudy(this.study.study_id, () => {
        console.log("Study deleted");
        this.wasDeleted = true;
      });

    } else {
      console.log("Unable to delete null study");
    }
  }

}
