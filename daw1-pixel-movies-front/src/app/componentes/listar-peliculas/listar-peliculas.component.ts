import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-peliculas',
  imports: [CommonModule],
  templateUrl: './listar-peliculas.component.html',
  styleUrl: './listar-peliculas.component.css'
})
export class ListarPeliculasComponent {

  peliculas : Pelicula[] = [];

  constructor(private peliculaService: PeliculaService, private router: Router) {}

  ngOnInit(): void {
    this.peliculaService.listarPeliculas().subscribe(
      data => {
        this.peliculas = data;
      }
    );
  }

  irAregistrarPelicula(): void {
    this.router.navigate(['/registroPelicula']);
  }

  irActualizarPelicula(id: number): void {
    this.router.navigate(['/actualizarPelicula', id]);
  }

  eliminarPelicula(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar esta pelicula?')) {
      this.peliculaService.eliminarPelicula(id).subscribe({
        next: (mensaje) => {
          console.log(mensaje);
          this.peliculaService.listarPeliculas().subscribe(
            data => {
              this.peliculas = data;
            }
          );
        },
        error: (err) => {
          console.error('Error al eliminar la pelicula:', err);
        }
      });
    }
  }

}