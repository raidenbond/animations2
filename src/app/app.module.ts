import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NewComponent} from './new/new.component';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { PagecantfoundComponent } from './pagecantfound/pagecantfound.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


const appRoutes: Routes =[
  {path: 'new', component: NewComponent },
  
  {path: '**', component: PagecantfoundComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    PagecantfoundComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
        appRoutes,
        {enableTracing:true} // <---- debugging prupose only 
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
