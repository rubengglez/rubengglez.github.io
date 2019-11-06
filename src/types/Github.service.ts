import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import FullApiInfo from 'src/types/FullApiInfo';

const githubApi = 'https://api.github.com/';
const user = 'rubengglez';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json',
		Accept: 'application/vnd.github.v3.full+json',
	}),
};

@Injectable({
	providedIn: 'root',
})
export class GithubService {
	constructor(private httpClient: HttpClient) {}

	public getShortRepositoryInfo() {
		return this.httpClient
			.get(this.composeUrl(`users/${user}/repos`), httpOptions)
			.toPromise()
			.then(this.convertToShortGithub.bind(this));
	}

	private composeUrl(endpoint: string) {
		return `${githubApi}${endpoint}`;
	}

	private convertToShortGithub(data: FullApiInfo[]) {
		return data;
	}
}
