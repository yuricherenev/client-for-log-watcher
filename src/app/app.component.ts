import { Component, OnInit } from '@angular/core';
import { HubConnection } from '@aspnet/signalr-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    // const connection = new HubConnection(`http://localhost:5000/message`);

    // connection.on('Send', msg => {
    //   console.log('message: ', msg);
    // });

    // connection.start().then(() => { console.log('Connected'); });
  }

}
