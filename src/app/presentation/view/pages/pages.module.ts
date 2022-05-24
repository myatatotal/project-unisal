import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { HomePageModule } from './homepage/homepagemodule';
import { ProdutosComponent } from './produtos/produtos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { CategoriasComponent } from './categorias/categorias.component';
//import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [ProdutosComponent, ClientesComponent, CategoriasComponent],
  imports: [
    CommonModule,
    LoginModule,
    HomeModule,
    HomePageModule,
    PagesRoutingModule
  ],
  exports: [PagesRoutingModule]
})
export class PagesModule { }
