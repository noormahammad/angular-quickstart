import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class PhotosServcie {
    constructor(private http:Http){
        console.log("photos service initialized");
    }

    getPhotos(){
       return this.http.get('https://jsonplaceholder.typicode.com/photos')
            .map(res=>res.json());
    }
}