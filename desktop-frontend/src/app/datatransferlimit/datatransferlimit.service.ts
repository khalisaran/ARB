import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { IDataTransferLimit } from './datatransferlimit';

@Injectable()
export class DataTransferLimitService {
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_DataTransferLimit(datatransferlimit: IDataTransferLimit): Observable<IDataTransferLimit>{
        return this.apiService.post(this.config.api_url+`/DataTransferLimit/create_DataTransferLimit`,datatransferlimit);

    }
    update_DataTransferLimit(datatransferlimit: IDataTransferLimit): Observable<IDataTransferLimit>{
        return this.apiService.put(this.config.api_url+`/DataTransferLimit/update_DataTransferLimit`,datatransferlimit);

    }
    search_for_update_DataTransferLimit(datatransferlimit_id: number): Observable<IDataTransferLimit>{
        return this.apiService.get(this.config.api_url+`/DataTransferLimit/search_for_update_DataTransferLimit/${datatransferlimit_id}`);

    }
    delete_DataTransferLimit(datatransferlimit: IDataTransferLimit): Observable<IDataTransferLimit>{
        return this.apiService.delete(this.config.api_url+`/DataTransferLimit/delete_DataTransferLimit/${datatransferlimit.id}`);

    }
    get_all_DataTransferLimit(): Observable<IDataTransferLimit[]>{
        return this.apiService.get(this.config.api_url+`/DataTransferLimit/get_all_DataTransferLimit`);

    }
}