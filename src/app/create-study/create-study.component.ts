import { Component, OnInit } from '@angular/core';
import { Study } from '../models/studies.model';
import { BibleStudyServiceService } from '../service/music-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-study',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './create-study.component.html',
  styleUrl: './create-study.component.css'
})
export class CreateStudyComponent implements OnInit {

  study: Study = {
    study_id: Math.floor(Math.random() * 1000000),
    study_name: "",
    teacher_name: "",
    max_enrollment_count: 0,
    start_date_time: new Date(),
    end_date_time: new Date(),
    room_number: 0
  };


  wasSubmitted: boolean = false;

  constructor(private service: BibleStudyServiceService) { }

  
  ngOnInit() {
  }

  public onSubmit() {

    console.log(this.study);

     this.service.createStudy(this.study, () => {
        console.log("Study created");
        this.wasSubmitted = true;
     });

  }


}
