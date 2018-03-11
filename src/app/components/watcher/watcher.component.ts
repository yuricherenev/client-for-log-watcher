import { LogService } from './../../services/log.service';
import { Component, OnInit } from '@angular/core';
import { LogItem } from '../../models/watcher';

@Component({
  selector: 'app-watcher',
  templateUrl: './watcher.component.html',
  styleUrls: ['./watcher.component.css']
})
export class WatcherComponent implements OnInit {

  logs: Array<LogItem>;
  newItemsCount: number;
  constructor(private logService: LogService) { }

  ngOnInit() {
    this.logService.getAll()
      .subscribe(logs => { this.logs = logs; });

    this.logService.subscribeForUpdates()
      .subscribe(logs => {
        this.logs.push.apply(this.logs, logs);
        this.newItemsCount = logs.length;
        console.log(logs);
      });
  }

}
