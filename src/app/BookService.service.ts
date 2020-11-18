import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
// import 'rxjs/add/operator/take';
// import 'rxjs/add/operator/toPromise';

@Injectable()

export class BookService {
    constructor(private http: HttpClient) { }

    getAllBooks(offset = '0', limit = '50'): Promise<any> {
        const qs = new HttpParams()
        .set('offset', offset)
        .set('limit', limit);
        
        return (
        this.http.get('http://localhost:3000/books', { params: qs }).pipe(take(1)).toPromise()
        );
    } 
}
