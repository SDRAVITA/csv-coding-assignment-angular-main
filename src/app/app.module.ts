import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BackendService} from './backend.service';
import { ListScreenComponent } from './list-screen/list-screen.component';
import { DetailsScreenComponent } from './details-screen/details-screen.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilerPipePipe } from './filer-pipe.pipe';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    ListScreenComponent,
    DetailsScreenComponent,
    FilerPipePipe,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
