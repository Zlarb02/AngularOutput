import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateOnomatopiaComponent } from './create-onomatopia/create-onomatopia.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreateOnomatopiaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngOutput';

  onomatopiaList: string[] = ["ouille", "aïe", 'paf', 'boum'];
  onReceiveNewOnomatopia(event: string): void {
    this.onomatopiaList.push(event);
    console.log(this.onomatopiaList)
  }
}


