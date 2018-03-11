import { LogItem } from './../models/watcher';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { HubConnection } from '@aspnet/signalr-client';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class LogService {

  private readonly hubEndpoint = 'http://localhost:5000';
  private readonly apiHost = 'http://localhost:5000/api/logs';
  constructor(private http: Http) { }

  subscribeForUpdates(): Observable<Array<LogItem>> {
    const connection = new HubConnection(`${this.hubEndpoint}/message`);

    connection.start().then(() => { console.log('Connected'); });
    return fromEvent(connection, 'send');
  }

  getAll() {
    return this.http.get(`${this.apiHost}/all`)
      .map(res => { console.log(res.json()); return res.json(); });
  }

}
