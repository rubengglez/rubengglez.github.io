import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const experienceUrl = '../assets/experiences.json';

@Injectable({
	providedIn: 'root',
})
export class ExperienceService {
	constructor(private httpClient: HttpClient) {}

	public getExperiences() {
		return this.httpClient.get(experienceUrl);
	}
}
