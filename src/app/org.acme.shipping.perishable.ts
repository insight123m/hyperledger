import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.acme.shipping.perishable{
   export enum ProductType {
      BANANAS,
      APPLES,
      PEARS,
      PEACHES,
      COFFEE,
   }
   export enum ShipmentStatus {
      CREATED,
      IN_TRANSIT,
      ARRIVED,
   }
   export enum ShipmentQuality {
      EXCELLENT,
      GOOD,
      AVERAGE,
      BAD,
   }
   export abstract class ShipmentTransaction extends Transaction {
      shipment: Shipment;
   }
   export class TemperatureReading extends ShipmentTransaction {
      centigrade: number;
      shipmentId: string;
      timestamp: Date;
   }
   export class QualityReading extends ShipmentTransaction {
      quality: ShipmentQuality;
      shipmentId: string;
      timestamp: Date;
   }
   export class ShipmentReceived extends ShipmentTransaction {
   }
   export class Shipment extends Asset {
      shipmentId: string;
      type: ProductType;
      status: ShipmentStatus;
      qualityReadings: QualityReading[];
      unitCount: number;
      temperatureReadings: TemperatureReading[];
      contract: Contract;
   }
   export class Contract extends Asset {
      contractId: string;
      grower: Grower;
      shipper: Shipper;
      importer: Importer;
      arrivalDateTime: Date;
      unitPrice: number;
      minTemperature: number;
      maxTemperature: number;
      minPenaltyFactor: number;
      maxPenaltyFactor: number;
      delayPenaltyFactor: number;
      qualityPenaltyFactor: number;
   }
   export class Address {
      city: string;
      country: string;
      street: string;
      zip: string;
   }
   export abstract class Business extends Participant {
      email: string;
      address: Address;
      accountBalance: number;
   }
   export class Grower extends Business {
   }
   export class Shipper extends Business {
   }
   export class Importer extends Business {
   }
   export class SetupDemo extends Transaction {
   }
// }
