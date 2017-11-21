import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Importer } from '../org.acme.shipping.perishable';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class ImporterService {

		private NAMESPACE: string = 'Importer';

    constructor(private dataService: DataService<Importer>) {
    };

    public getAll(): Observable<Importer[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

}
