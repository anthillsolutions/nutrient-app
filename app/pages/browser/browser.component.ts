import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";

import { Activity } from '../../shared/activity/activity';
import { ActivityListService } from '../../shared/activity/activity-list.service';

import * as fs from "tns-core-modules/file-system";

@Component({
  moduleId: module.id,
  templateUrl: './browser.html',
  styleUrls: ['./browser.css']
})

export class BrowserComponent implements OnInit {
  public activityList: Array<Activity> = [];

  constructor(private routerExtensions: RouterExtensions) {}

  ngOnInit() {
    console.log('PAGE - browser');

    // Mockup document fetching
    var documents = fs.knownFolders.documents();
    var myFile = documents.getFile("app/mockup/activities.json");
    let activityList = [];
    return myFile.readText()
      .then(content => {
        try {
          let json = JSON.parse(content);
          json.results.forEach(entity => {
            this.activityList.push(new Activity().deserialize(entity));
          });
        } catch (err) {
          throw new Error('Could not parse JSON file' + err);
        }
      });
  }

  onBackTap() {
    this.routerExtensions.back();
  }

  goTo(item: Activity) {
    this.routerExtensions.navigate(["/activity"], {
      transition: {
        name: "fade",
        duration: 500,
        curve: "linear"
      },
      queryParams: {
        item: JSON.stringify(item)
      }
    });
  }
}
