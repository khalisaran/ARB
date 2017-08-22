import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { IInvoiceVendor } from './invoicevendor';

@Injectable()
export class InvoiceVendorService {
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_InvoiceVendor(invoicevendor: IInvoiceVendor): Observable<IInvoiceVendor>{
        return this.apiService.post(this.config.api_url+`/InvoiceVendor_Activity/create_InvoiceVendor`,invoicevendor);

    }
    update_InvoiceVendor(invoicevendor: IInvoiceVendor): Observable<IInvoiceVendor>{
        return this.apiService.put(this.config.api_url+`/InvoiceVendor_Activity/update_InvoiceVendor`,invoicevendor);

    }
    search_for_update_InvoiceVendor(invoicevendor_id: number): Observable<IInvoiceVendor>{
        return this.apiService.get(this.config.api_url+`/InvoiceVendor_Activity/search_for_update_InvoiceVendor/${invoicevendor_id}`);

    }
    delete_InvoiceVendor(invoicevendor: IInvoiceVendor): Observable<IInvoiceVendor>{
        return this.apiService.delete(this.config.api_url+`/InvoiceVendor_Activity/delete_InvoiceVendor/${invoicevendor.id}`);

    }
    get_all_InvoiceVendor(): Observable<IInvoiceVendor[]>{
        return this.apiService.get(this.config.api_url+`/InvoiceVendor_Activity/get_all_InvoiceVendor`)
        .map((res:Response) => res)
        .catch((error:any) => Observable.throw(error || 'Server error')); 

    }
}