import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Grower } from '../org.acme.shipping.perishable';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class GrowerService {

		private NAMESPACE: string = 'Grower';

    constructor(private dataService: DataService<Grower>) {
    };

    public getAll(): Observable<Grower[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

}
