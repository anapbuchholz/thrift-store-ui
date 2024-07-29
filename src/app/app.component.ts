import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MeuPrimeiroComponent, MeuPrimeiro2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Mundo!';
}
