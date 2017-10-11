import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ShipmentService } from './Shipment.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Shipment',
	templateUrl: './Shipment.component.html',
	styleUrls: ['./Shipment.component.css'],
  providers: [ShipmentService]
})
export class ShipmentComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          shipmentId = new FormControl("", Validators.required);
        
  
      
          type = new FormControl("", Validators.required);
        
  
      
          status = new FormControl("", Validators.required);
        
  
      
          unitCount = new FormControl("", Validators.required);
        
  
      
          temperatureReadings = new FormControl("", Validators.required);
        
  
      
          contract = new FormControl("", Validators.required);
        
  


  constructor(private serviceShipment:ShipmentService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          shipmentId:this.shipmentId,
        
    
        
          type:this.type,
        
    
        
          status:this.status,
        
    
        
          unitCount:this.unitCount,
        
    
        
          temperatureReadings:this.temperatureReadings,
        
    
        
          contract:this.contract
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceShipment.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addAsset(form: any): Promise<any> {
    this.asset = {
      $class: "org.acme.shipping.perishable.Shipment",
      
        
          "shipmentId":this.shipmentId.value,
        
      
        
          "type":this.type.value,
        
      
        
          "status":this.status.value,
        
      
        
          "unitCount":this.unitCount.value,
        
      
        
          "temperatureReadings":this.temperatureReadings.value,
        
      
        
          "contract":this.contract.value
        
      
    };

    this.myForm.setValue({
      
        
          "shipmentId":null,
        
      
        
          "type":null,
        
      
        
          "status":null,
        
      
        
          "unitCount":null,
        
      
        
          "temperatureReadings":null,
        
      
        
          "contract":null
        
      
    });

    return this.serviceShipment.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "shipmentId":null,
        
      
        
          "type":null,
        
      
        
          "status":null,
        
      
        
          "unitCount":null,
        
      
        
          "temperatureReadings":null,
        
      
        
          "contract":null 
        
      
      });
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else{
            this.errorMessage = error;
        }
    });
  }


   updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "org.acme.shipping.perishable.Shipment",
      
        
          
        
    
        
          
            "type":this.type.value,
          
        
    
        
          
            "status":this.status.value,
          
        
    
        
          
            "unitCount":this.unitCount.value,
          
        
    
        
          
            "temperatureReadings":this.temperatureReadings.value,
          
        
    
        
          
            "contract":this.contract.value
          
        
    
    };

    return this.serviceShipment.updateAsset(form.get("shipmentId").value,this.asset)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
            else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }


  deleteAsset(): Promise<any> {

    return this.serviceShipment.deleteAsset(this.currentId)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
			else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }

  setId(id: any): void{
    this.currentId = id;
  }

  getForm(id: any): Promise<any>{

    return this.serviceShipment.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "shipmentId":null,
          
        
          
            "type":null,
          
        
          
            "status":null,
          
        
          
            "unitCount":null,
          
        
          
            "temperatureReadings":null,
          
        
          
            "contract":null 
          
        
      };



      
        if(result.shipmentId){
          
            formObject.shipmentId = result.shipmentId;
          
        }else{
          formObject.shipmentId = null;
        }
      
        if(result.type){
          
            formObject.type = result.type;
          
        }else{
          formObject.type = null;
        }
      
        if(result.status){
          
            formObject.status = result.status;
          
        }else{
          formObject.status = null;
        }
      
        if(result.unitCount){
          
            formObject.unitCount = result.unitCount;
          
        }else{
          formObject.unitCount = null;
        }
      
        if(result.temperatureReadings){
          
            formObject.temperatureReadings = result.temperatureReadings;
          
        }else{
          formObject.temperatureReadings = null;
        }
      
        if(result.contract){
          
            formObject.contract = result.contract;
          
        }else{
          formObject.contract = null;
        }
      

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });

  }

  resetForm(): void{
    this.myForm.setValue({
      
        
          "shipmentId":null,
        
      
        
          "type":null,
        
      
        
          "status":null,
        
      
        
          "unitCount":null,
        
      
        
          "temperatureReadings":null,
        
      
        
          "contract":null 
        
      
      });
  }

}
