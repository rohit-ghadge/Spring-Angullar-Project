import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BeautyComponent } from './beauty/beauty.component';
import {MenuComponent} from './menu/menu.component';
import { CleaningComponent } from './cleaning/cleaning.component';
import { DecorationComponent } from './decoration/decoration.component';
import { GardningComponent } from './gardning/gardning.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AdminComponent } from './admin/admin.component';
import { UserserviceService } from './userservice.service';
import { AdminService } from './admin.service';
import { AddadminservicesComponent } from './addadminservices/addadminservices.component';
import { SubserviceComponent } from './subservice/subservice.component';
import { UsersubserviceComponent } from './usersubservice/usersubservice.component';
import { ManagesubserviceComponent } from './managesubservice/managesubservice.component';
import { AddsubservicesComponent } from './addsubservices/addsubservices.component';
import { UpdatesubservicesComponent } from './updatesubservices/updatesubservices.component';
import { UserservicesComponent } from './userservices/userservices.component';
import { ListuserforadminComponent } from './listuserforadmin/listuserforadmin.component';
import { SelectserviceComponent } from './selectservice/selectservice.component';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { WorkerComponent } from './worker/worker.component';
import { PaymentgateComponent } from './paymentgate/paymentgate.component';
import { ContactComponent } from './contact/contact.component';
import { LinksComponent } from './links/links.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BeautyComponent,
    MenuComponent,
    CleaningComponent,
    DecorationComponent,
    GardningComponent,
    MenComponent,
    WomenComponent,
    LoginComponent,
    RegisterComponent,
    
    AdminComponent,
    AddadminservicesComponent,
    SubserviceComponent,
    UsersubserviceComponent,
    ManagesubserviceComponent,
    AddsubservicesComponent,
    UpdatesubservicesComponent,
    UserservicesComponent,
    ListuserforadminComponent,
    SelectserviceComponent,
    ViewcartComponent,
    WorkerComponent,
    PaymentgateComponent,
    ContactComponent,
    LinksComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'about',component:AboutComponent},
      {path:'beauty',component:BeautyComponent},
      {path:'cleaning',component:CleaningComponent},
      {path:'decoration',component:DecorationComponent},
      {path:'gardening',component:GardningComponent},
      {path:'menu',component:MenuComponent},
      {path:'men',component:MenComponent},
      {path:'women',component:WomenComponent},
      {path:'login',component:LoginComponent},
      {path:'register',component:RegisterComponent},
      {path:'userservices',component:UserservicesComponent},
      {path : 'admin' , component:AdminComponent},
      {path : 'addadminservices' , component:AddadminservicesComponent},
      {path : 'subservice' , component:SubserviceComponent},
      {path : 'usersubservice' , component:UsersubserviceComponent},
      {path : 'updatesubservice' , component:UpdatesubservicesComponent},
      {path : 'addsubservices',component:AddsubservicesComponent},
      {path : 'listuserforadmin',component:ListuserforadminComponent},
      {path : 'selectservice',component:SelectserviceComponent},
      {path : 'viewcart',component:ViewcartComponent},
      {path : 'worker',component:WorkerComponent},
      {path : 'paymentgate',component:PaymentgateComponent},
      {path : 'contact',component:ContactComponent},
      {path : 'links',component:LinksComponent},
      ])
  ],
  providers: [HttpClientModule , UserserviceService,AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
