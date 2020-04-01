import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiHttpClientService {
    constructor(
        private http: HttpClient,
    ) { }

    get(path: string, options: {
        headers?: HttpHeaders | { [header: string]: string | string[] },
        observe?: any,
        params?: HttpParams | { [param: string]: string | string[] },
        reportProgress?: boolean,
        responseType?: 'json',
        withCredentials?: boolean,
        authToken?: string,
    } = {}): Observable<any> {
        return this.http
            .get(this.apiUrl(path), this.mergeDefaultOptions(options))
            .pipe(catchError(this.handleError.bind(this)));
    }

    post(path: string, body: any|null, options: {
        headers?: HttpHeaders | {[header: string]: string | string[]},
        observe?: any,
        params?: HttpParams|{[param: string]: string | string[]},
        reportProgress?: boolean,
        responseType?: 'json',
        withCredentials?: boolean,
        authToken?: string,
    } = {}): Observable<any> {
        return this.http
            .post(this.apiUrl(path), body, this.mergeDefaultOptions(options))
            .pipe(catchError(this.handleError.bind(this)));
    }

    patch(path: string, body: any|null, options: {
        headers?: HttpHeaders | {[header: string]: string | string[]},
        observe?: any,
        params?: HttpParams|{[param: string]: string | string[]},
        reportProgress?: boolean,
        responseType?: 'json',
        withCredentials?: boolean,
    } = {}): Observable<any> {
        return this.http
            .patch(this.apiUrl(path), body, this.mergeDefaultOptions(options))
            .pipe(catchError(this.handleError.bind(this)));
    }

    delete(path: string, options: {
        headers?: HttpHeaders | {[header: string]: string | string[]},
        observe?: any,
        params?: HttpParams|{[param: string]: string | string[]},
        reportProgress?: boolean,
        responseType?: 'json',
        withCredentials?: boolean,
    } = {}): Observable<any> {
        return this.http
            .delete(this.apiUrl(path), this.mergeDefaultOptions(options))
            .pipe(catchError(this.handleError.bind(this)));
    }

    private apiUrl(path: string) {
        path = `/${path}`.replace('//', '/');
        return `${environment.appUri}${path}`;
    }

    private mergeDefaultOptions(options): any {
        if (!options.headers) { options.headers = {}; }

        options.headers['Access-Control-Allow-Origin'] =  '*';

        return options;
    }

    private handleError(error: any): Observable<any> {
        console.warn(error.statusText);

        return observableThrowError(error);
    }
}
