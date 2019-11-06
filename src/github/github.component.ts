import { Component } from '@angular/core';
import { GithubService } from 'src/types/Github.service';

@Component({
	selector: 'github-root',
	templateUrl: './github.component.html',
	styleUrls: ['./github.component.scss'],
})
export class GithubComponent {
	shortGithubInfo: any;

	public constructor(private githubService: GithubService) {}

	async ngOnInit() {
		this.shortGithubInfo = await this.githubService.getShortRepositoryInfo();
	}
}
