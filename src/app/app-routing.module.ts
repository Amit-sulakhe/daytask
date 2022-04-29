import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then((m)=>m.DashboardModule)
  },
  {
    path: 'device',
    loadChildren: () =>
      import('./modules/device/device.module').then((m) => m.DeviceModule),
  },
  {
    path: 'policies',
    loadChildren: () =>
      import('./modules/policies/policies.module').then((m) => m.PoliciesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
