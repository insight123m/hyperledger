import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Shipper } from '../org.acme.shipping.perishable';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class ShipperService {

		private NAMESPACE: string = 'Shipper';

    constructor(private dataService: DataService<Shipper>) {
    };

    public getAll(): Observable<Shipper[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

}
