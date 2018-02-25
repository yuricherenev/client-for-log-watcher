import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HubConnection } from '@aspnet/signalr-client';

@Injectable()
export class LogService {

  private readonly apiHost = 'http://localhost:5000';
  constructor(private http: Http) { }

  getAll() {
    const connection = new HubConnection(`${this.apiHost}/message`);

    connection.on('Send', msg => {
      console.log('message: ', msg);
    });

    connection.start().then(() => { console.log('Connected'); });
    this.http.get(`${this.apiHost}/api/logs`);

    // return this.http.get(`${this.apiHost}/api/logs`)
    // .map(res => res.json());
  }

}
