import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import ShortGithubInfo from 'src/types/ShortGithubInfo';
import GithubRepoData from 'src/types/GithubRepoData';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

	public getShortRepositoryInfo(): Observable<ShortGithubInfo[]> {
		return this.httpClient
			.get(this.composeUrl(`users/${user}/repos`), httpOptions)
			.pipe(map(this.convertToShortGithub.bind(this)));
	}

	private composeUrl(endpoint: string): string {
		return `${githubApi}${endpoint}`;
	}

	private convertToShortGithub(data: GithubRepoData[]): ShortGithubInfo[] {
		return data.map(this.toShortGithub.bind(this));
	}

	private toShortGithub(data: GithubRepoData): ShortGithubInfo {
		return {
			name: data.name,
			description: data.description,
			createdAt: data.created_at,
			updatedAt: data.updated_at,
			language: data.language,
			url: data.html_url,
		};
	}
}
