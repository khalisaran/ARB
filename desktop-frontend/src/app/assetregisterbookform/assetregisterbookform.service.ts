import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { IAssetregisterbookform } from './assetregisterbookform';

@Injectable()
export class AssetregisterbookformService {
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}
    IAssetregisterbookform : any ={};

    create_Assetregisterbookform(assetregisterbookform: IAssetregisterbookform): Observable<IAssetregisterbookform>{
        return this.apiService.post(this.config.api_url+`/Assetregisterbookform/create_Assetregisterbookform`,assetregisterbookform);

    }
    update_Assetregisterbookform(assetregisterbookform: IAssetregisterbookform): Observable<IAssetregisterbookform>{
        return this.apiService.put(this.config.api_url+`/Assetregisterbookform/update_Assetregisterbookform`,assetregisterbookform);

    }
    search_for_update_Assetregisterbookform(assetregisterbookform_id: number): Observable<IAssetregisterbookform>{
        return this.apiService.get(this.config.api_url+`/Assetregisterbookform/search_for_update_Assetregisterbookform/${assetregisterbookform_id}`);

    }
    delete_Assetregisterbookform(assetregisterbookform: IAssetregisterbookform): Observable<IAssetregisterbookform>{
        return this.apiService.delete(this.config.api_url+`/Assetregisterbookform/delete_Assetregisterbookform/${assetregisterbookform.id}`);

    }
    get_all_Assetregisterbookform(): Observable<IAssetregisterbookform[]>{
        return this.apiService.get(this.config.api_url+`/Assetregisterbookform/get_all_Assetregisterbookform`).map((res:Response) => res)
                                .catch((error:any) => Observable.throw(error || 'Server error')); 

    }
}