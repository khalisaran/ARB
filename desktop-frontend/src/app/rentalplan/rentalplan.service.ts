import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { IRentalPlan } from './rentalplan';

@Injectable()
export class RentalPlanService {
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_RentalPlan(rentalplan: IRentalPlan): Observable<IRentalPlan>{
        return this.apiService.post(this.config.api_url+`/RentalPlan/create_RentalPlan`,rentalplan);

    }
    update_RentalPlan(rentalplan: IRentalPlan): Observable<IRentalPlan>{
        return this.apiService.put(this.config.api_url+`/RentalPlan/update_RentalPlan`,rentalplan);

    }
    search_for_update_RentalPlan(rentalplan_id: number): Observable<IRentalPlan>{
        return this.apiService.get(this.config.api_url+`/RentalPlan/search_for_update_RentalPlan/${rentalplan_id}`);

    }
    delete_RentalPlan(rentalplan: IRentalPlan): Observable<IRentalPlan>{
        return this.apiService.delete(this.config.api_url+`/RentalPlan/delete_RentalPlan/${rentalplan.id}`);

    }
    get_all_RentalPlan(): Observable<IRentalPlan[]>{
        return this.apiService.get(this.config.api_url+`/RentalPlan/get_all_RentalPlan`);

    }
}