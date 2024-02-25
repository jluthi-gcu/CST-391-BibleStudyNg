import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Study } from '../models/studies.model';


// inject the service into the root module, used to provide the service to the entire application
@Injectable({ providedIn: 'root' })
export class BibleStudyServiceService {

  private host = "http://localhost:7000";


  constructor(private http: HttpClient) {}

  public getStudies(callback: (studies: Study[]) => void) : void {

    // Get all studies
    this.http.get<Study[]>(this.host + '/studies').subscribe((studies: Study[]) => {

      // Sort the studies by start date in ascending order
      studies.sort((a, b) => {
        return a.start_date_time > b.start_date_time ? 1 : -1;
      });


     

      callback(studies);
    });

  }

  
   public createStudy(study: Study, callback: () => void ): void {
    // Add a new Study
    this.http.post<Study>(this.host + '/studies', study)
      .subscribe((data) => {
        callback();
      });
    }



    public updateStudy(study: Study, callback: () => void ): void {
    // Update a Study
    this.http.put<Study>(this.host + '/studies', study)
      .subscribe((data) => {
        callback();
      });
    }


    public deleteStudy(id: number, callback: () => void ): void {
      // Delete a Study
      this.http.delete(this.host + '/studies/' + id)
        .subscribe((data) => {
          callback();
        });
      }
  
}
