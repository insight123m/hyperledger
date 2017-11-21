import { Component, OnInit } from '@angular/core';
import { ImporterService } from './importer.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-importer',
  templateUrl: './importer.component.html',
  styleUrls: ['./importer.component.css'],
  providers: [ ImporterService ]
})
export class ImporterComponent implements OnInit {

  private allAssets;
  private errorMessage;

  constructor(private serviceImporter:ImporterService) { }

  ngOnInit() {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceImporter.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
      if(error == 'Server error') {
        this.errorMessage = "Could not connect to REST server. Please check your configuration details";
      } else if(error == '404 - Not Found') {
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
      } else {
        this.errorMessage = error;
      }
    });
  }

}
