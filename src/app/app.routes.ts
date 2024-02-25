import { Routes } from '@angular/router';
import { ListStudiesComponent } from './list-studies/list-studies.component';
import { CreateStudyComponent } from './create-study/create-study.component';
import { EditStudyComponent } from './edit-study/edit-study.component';
import { DeleteStudyComponent } from './delete-study/delete-study.component';





// Define the routes
export const routes: Routes = [

    { path: 'list-studies', component: ListStudiesComponent },
    { path: 'create-study', component: CreateStudyComponent },
    { path: 'edit/:study/:id', component: EditStudyComponent },
    { path: 'delete/:study/:id', component: DeleteStudyComponent }

];
