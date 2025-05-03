import { Routes } from '@angular/router';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { ListarSalasComponent } from './componentes/listar-salas/listar-salas.component';
import { RegistrarSalaComponent } from './componentes/registrar-sala/registrar-sala.component';
import { ActualizarSalaComponent } from './componentes/actualizar-sala/actualizar-sala.component';
/*---------------------*/
import { ListarPeliculasComponent } from './componentes/listar-peliculas/listar-peliculas.component'
import { RegistrarPeliculaComponent } from './componentes/registrar-pelicula/registrar-pelicula.component';
import { ActualizarPeliculaComponent } from './componentes/actualizar-pelicula/actualizar-pelicula.component';
import { ListarFuncionesComponent } from './componentes/listar-funciones/listar-funciones.component';
import { RegistrarFuncionComponent } from './componentes/registrar-funcion/registrar-funcion.component';
import { ActualizarFuncionComponent } from './componentes/actualizar-funcion/actualizar-funcion.component';

/*---------------------*/


export const routes: Routes = [
    {path: '', component: PrincipalComponent},
    {path: 'listadoSalas', component: ListarSalasComponent},
    {path: 'registroSala', component: RegistrarSalaComponent},
    {path: 'actualizarSala/:id', component: ActualizarSalaComponent},
    {path: 'listadoPeliculas', component: ListarPeliculasComponent},
    {path: 'registroPelicula', component: RegistrarPeliculaComponent},
    {path: 'actualizarPelicula/:id', component: ActualizarPeliculaComponent},
    {path: 'listadoFunciones', component: ListarFuncionesComponent},
    {path: 'registroFuncion', component: RegistrarFuncionComponent},
    {path: 'actualizarFuncion/:id', component: ActualizarFuncionComponent},

    {path: '**', redirectTo: '', pathMatch: 'full'} 
];
