import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  usuario: Usuario = new Usuario()

  usuarioId: number;

  constructor(private router: Router, private auth: AuthService) { }


  ngOnInit() {
    window.scroll(0, 0)

    if (environment.token == '') {
      alert('Voce precisa estar logado para ficar aqui...')
      this.router.navigate(['/entrar'])
    }
  }

  comprar() {
    
    if (this.usuario.id == this.usuarioId) {
      this.auth.comprar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        environment.id = this.usuario.id;
        alert('Compra realizada!')
      })
    }
  }

}
