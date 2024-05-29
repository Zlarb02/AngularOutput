import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-onomatopia',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-onomatopia.component.html',
  styleUrl: './create-onomatopia.component.css'
})
export class CreateOnomatopiaComponent {
  newOnomatopia: string = '';

  @Output()
  sendOnomatopiaToParent = new EventEmitter<string>();

  createOnomatopia(newOnomatopia: string) {
    console.log(newOnomatopia)
    this.newOnomatopia = newOnomatopia;
    this.sendOnomatopiaToParent.emit(this.newOnomatopia);
  }
}