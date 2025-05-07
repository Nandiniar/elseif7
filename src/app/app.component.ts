import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'elseif7';
  color:string='red';
  redb(){
    this.color='red';
  }
  greenb(){
    this.color='green';
  }
  yellowb(){
    this.color='yellow';
  }
  otherb(){
    this.color='other';
  }

  gete(event:Event){
    const value=(event.currentTarget as HTMLInputElement).value;

    this.color=value;
  }
}
