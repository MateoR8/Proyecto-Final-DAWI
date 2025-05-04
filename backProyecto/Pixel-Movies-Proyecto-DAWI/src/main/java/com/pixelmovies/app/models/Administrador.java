package com.pixelmovies.app.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "tb_admin")
@Data
public class Administrador {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_usuario")
    private Integer idUsuario;

    @Column(name = "nombre_usuario", length = 200, nullable = false)
    private String nombreUsuario;

    @Column(name = "nombre_usuario_real", length = 200, nullable = false)
    private String nombreUsuarioReal;

    @Column(name = "contrasenia_usuario", length = 200, nullable = false)
    private String contrasenia;

}