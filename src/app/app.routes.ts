import { Routes } from '@angular/router';
import { ListarticlesComponent } from './components/articles/listarticles/listarticles.component';
import { AjoutarticlesComponent } from './components/articles/ajoutarticles/ajoutarticles.component';
import { ModifarticlesComponent } from './components/articles/modifarticles/modifarticles.component';
import { ListcategoriesComponent } from './components/categories/listcategories/listcategories.component';
import { AjoutcategComponent } from './components/categories/ajoutcateg/ajoutcateg.component';
import { ModifcategComponent } from './components/categories/modifcateg/modifcateg.component';
import { ListscategComponent } from './components/scategories/listscateg/listscateg.component';
import { AjoutscategComponent } from './components/scategories/ajoutscateg/ajoutscateg.component';
import { ModifscategComponent } from './components/scategories/modifscateg/modifscateg.component';

export const routes: Routes = [
  {path:"listart", component:ListarticlesComponent },
  {path:"ajoutart", component:AjoutarticlesComponent},
  {path:"modifart/:id", component:ModifarticlesComponent},

  {path:"affichcat", component:ListcategoriesComponent},
  {path:"ajoutcat", component:AjoutcategComponent},
  {path:"modifcat/:id", component:ModifcategComponent},

  {path:"affichscat", component:ListscategComponent},
  {path:"ajoutscat", component:AjoutscategComponent},
  {path:"modifscat/:id", component:ModifscategComponent}
];
