import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
    public baseUrl: string = "http://10.243.76.68:8080";
    public browser_language: string;
}