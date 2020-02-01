import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const asideInfoUrl = '/assets/asideInfo.json';

@Injectable({
	providedIn: 'root',
})
export class AsideInfoService {
	constructor(private httpClient: HttpClient) {}

	public getInfo(): Observable<object> {
		return this.httpClient.get(asideInfoUrl);
	}
}
