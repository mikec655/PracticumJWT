import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecretComponent } from './secret.component'
import { Routes, RouterModule } from '@angular/router';
import { DataComponent } from './data/data.component';
import { FotosComponent } from './fotos/fotos.component';
import { AuthGuardService } from '../auth/auth-guard.service';

// OPGAVE 1, deel 2
// voeg hier routes toe voor data en fotos
// maak gerbruik van de property 'children' bij routes.
// zie https://angular.io/guide/router#child-route-configuration voor een voorbeeld
const secretRoutes:Routes = [
    { path:'', 
      component:SecretComponent,  
      canActivate: [AuthGuardService],
      children: [
        {
          path:'',
          pathMatch:'full',
          redirectTo:'data'
        },
        { path:'data', 
          component:DataComponent
        },
        { path:'fotos', 
          component:FotosComponent
        }
      ]
    },
]

@NgModule({
  declarations: [
      SecretComponent,
      DataComponent,
      FotosComponent,
  ],
  exports: [],
  imports: [
      CommonModule,
      RouterModule.forChild(secretRoutes),
  ]
})

export class SecretModule { }