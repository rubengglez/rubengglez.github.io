import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const experienceUrl = '../assets/experiences.json';

@Injectable({
	providedIn: 'root',
})
export class ExperienceService {
	constructor(private httpClient: HttpClient) {}

	public getExperiences(): Observable<object> {
		return this.httpClient.get(experienceUrl);
	}
}
