import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { IRoom } from './room';

@Injectable()
export class RoomService {
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_Room(room: IRoom): Observable<IRoom>{
        return this.apiService.post(this.config.api_url+`/Room_Default_Activity/create_Room`,room);

    }
    update_Room(room: IRoom): Observable<IRoom>{
        return this.apiService.put(this.config.api_url+`/Room_Default_Activity/update_Room`,room);

    }
    search_for_update_Room(room_id: number): Observable<IRoom>{
        return this.apiService.get(this.config.api_url+`/Room_Default_Activity/search_for_update_Room/${room_id}`);

    }
    delete_Room(room: IRoom): Observable<IRoom>{
        return this.apiService.delete(this.config.api_url+`/Room_Default_Activity/delete_Room/${room.id}`);

    }
    get_all_Room(): Observable<IRoom[]>{
        return this.apiService.get(this.config.api_url+`/Room_Default_Activity/get_all_Room`);

    }
}