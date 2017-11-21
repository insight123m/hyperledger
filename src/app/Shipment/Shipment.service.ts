import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Shipment, TemperatureReading, QualityReading, ShipmentReceived } from '../org.acme.shipping.perishable';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class ShipmentService {

		private NAMESPACE: string = 'Shipment';
		private TEMP_READING_NAMESPACE = 'TemperatureReading';
		private QUALITY_READING_NAMESPACE = 'QualityReading';
		private SHIPMENT_RECVD_NAMESPACE = 'ShipmentReceived';

    constructor(private dataService: DataService<Shipment>, private dataServiceTemp: DataService<TemperatureReading>,
			private dataServiceQuality: DataService<QualityReading>, private dataServiceShipmentRecvd: DataService<ShipmentReceived>) {
    };

    public getAll(): Observable<Shipment[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<Shipment> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<Shipment> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

		public updateAsset(id: any, itemToUpdate: any): Observable<Shipment> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<Shipment> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

		public shipmentReceived(itemToAdd: any): Observable<ShipmentReceived> {
      return this.dataServiceShipmentRecvd.add(this.SHIPMENT_RECVD_NAMESPACE, itemToAdd);
    }

		public addTempReading(itemToAdd: any): Observable<TemperatureReading> {
      return this.dataServiceTemp.add(this.TEMP_READING_NAMESPACE, itemToAdd);
    }

		public addQualityReading(itemToAdd: any): Observable<QualityReading> {
      return this.dataServiceQuality.add(this.QUALITY_READING_NAMESPACE, itemToAdd);
    }

}
