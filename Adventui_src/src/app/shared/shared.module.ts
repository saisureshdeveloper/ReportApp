import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/ui/header/header.component';
import { FooterComponent } from './components/ui/footer/footer.component';
import { MainSidebarComponent } from './components/ui/main-sidebar/main-sidebar.component';
import { ControlSidebarComponent } from './components/ui/control-sidebar/control-sidebar.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainSidebarComponent,
    ControlSidebarComponent
  ],
  exports: [HeaderComponent, FooterComponent, MainSidebarComponent, ControlSidebarComponent],
  entryComponents: []
})
export class SharedModule { }
