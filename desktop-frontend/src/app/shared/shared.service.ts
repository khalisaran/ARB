import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
    public baseUrl: string = "http://localhost:8080";
    public browser_language: string;
}