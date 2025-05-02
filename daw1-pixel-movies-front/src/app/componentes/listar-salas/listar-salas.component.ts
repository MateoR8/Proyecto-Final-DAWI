import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sala } from '../../models/sala';
import { SalaService } from '../../services/sala.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-salas',
  imports: [CommonModule],
  templateUrl: './listar-salas.component.html',
  styleUrl: './listar-salas.component.css'
})
export class ListarSalasComponent {
  salas: Sala[] = [];
  constructor(private salaService: SalaService, private router: Router) { }

  ngOnInit(): void {
    this.salaService.listarSalas().subscribe(
      data => {
        this.salas = data;
      }
    );
  }

  irAregistrarSala(): void {
    this.router.navigate(['/registroSala']);
  }
  
  irAactualizarSala(id: number): void {
    this.router.navigate(['/actualizarSala', id]);
  }

  eliminarSala(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar esta sala?')) {
      this.salaService.eliminarSala(id).subscribe({
        next: (mensaje) => {
          console.log(mensaje);
          this.salaService.listarSalas().subscribe(
            data => {
              this.salas = data;
            }
          );
        },
        error: (err) => {
          console.error('Error al eliminar la sala:', err);
        }
      });
    }
  }

}
