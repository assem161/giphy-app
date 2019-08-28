import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { images } from '../model/image';

@Injectable({
  providedIn: 'root'
})
export class DataImageService {
  image: images[];
  host: string = 'https://api.giphy.com/v1/gifs/search';
  appiKey: string = "?api_key=dc6zaTOxFJmzC";
  query: string = "&q=";
  url: string = this.host + this.appiKey + this.query;
  constructor(private http: HttpClient) { }

  getImages(names): Observable<images> {
    return this.http.get<images>(this.url + names);
  }
}
