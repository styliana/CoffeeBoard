import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AdService {
  private apiUrl = 'http://localhost:8080/api/ads';

  constructor(private http: HttpClient) {}

  private getHeaders(customAuth?: string) {
    const auth = customAuth || localStorage.getItem('coffee_auth');
    return {
      headers: new HttpHeaders({
        'Authorization': auth ? auth : '',
        'Content-Type': 'application/json'
      })
    };
  }


  getAds(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, this.getHeaders());
  }

  addAd(ad: any): Observable<any> {
    return this.http.post(this.apiUrl, ad, this.getHeaders());
  }


  joinAd(id: number): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}/join`, {}, this.getHeaders());
  }

  getAdsWithAuth(auth: string): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, {
      headers: new HttpHeaders({ 'Authorization': auth })
    });
  }

  deleteAd(id: number): Observable<any> {
    // Nagłówki z Authorization: Basic są dodawane w getHeaders()
    return this.http.delete(`${this.apiUrl}/${id}`, this.getHeaders());
  }

  register(user: any): Observable<any> {
    return this.http.post('http://localhost:8080/api/register', user);
  }

  getSystemInfo(): Observable<any> {
    return this.http.get('http://localhost:8080/info');
  }

  getPersonalizedGreeting(name: string): Observable<string> {
    // Zwracamy czysty tekst z backendu
    return this.http.get(`http://localhost:8080/hello/${name}`, { responseType: 'text' });
  }
}
