import { Component, OnInit } from '@angular/core';
import { GrowerService } from './grower.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-grower',
  templateUrl: './grower.component.html',
  styleUrls: ['./grower.component.css'],
  providers: [ GrowerService ]
})
export class GrowerComponent implements OnInit {

  private allAssets;
  private errorMessage;

  constructor(private serviceGrower:GrowerService) { }

  ngOnInit() {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceGrower.getAll()
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
