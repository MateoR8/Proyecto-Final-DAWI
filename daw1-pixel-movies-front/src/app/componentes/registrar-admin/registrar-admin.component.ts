import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Administrador } from '../../models/administrador';
import { AdministradorService } from '../../services/administrador.service';

@Component({
  selector: 'app-registrar-admin',
  imports: [FormsModule],
  templateUrl: './registrar-admin.component.html',
  styleUrl: './registrar-admin.component.css'
})
export class RegistrarAdminComponent {

  admin: Administrador = {
    idUsuario: 0,
    nombreUsuario: '',
    nombreUsuarioReal: '',
    contrasenia: ''
  };

  constructor(private adminService: AdministradorService, private router: Router) { }

  registrarAdmin(): void {
    this.adminService.registrarNuevoAdmin(this.admin).subscribe({
      next: (res) => {
        alert('Administrador registrado exitosamente');
        console.log(res);
        this.router.navigate(['/']);

      },
      error: (err) => {
        alert('Error al registrar administrador');
        console.error(err);
      }
    });
  }

  volverAlogin(): void {
    this.router.navigate(['/']);
  }
}
