import { Component, OnInit, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}

  nome: string;
  idade: number;
  pessoas: any[];

  adicionar() {
    this.pessoas.push({
      nome: this.nome,
      idade: this.idade,
    });
  }

  remover() {}

  constructor() {}
}
