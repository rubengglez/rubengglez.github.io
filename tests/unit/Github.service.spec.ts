import { GithubService } from 'src/types/Github.service';
import { asyncData } from 'tests/utils';

describe('Tests/unit/Github.service.specs.ts.', function() {
	let githubService: GithubService;
	let httpClient: { get: jasmine.Spy };

	beforeEach(() => {
		httpClient = jasmine.createSpyObj('HttpClient', ['get']);
		githubService = new GithubService(<any>httpClient);
	});

	it('when a list of repositories are retrieved, then a list of Github objects should be returned', async () => {
		httpClient.get.and.returnValue(
			asyncData([
				{
					test: 'test',
				},
			]),
		);
		const shortGithubData = await githubService.getShortRepositoryInfo();
	});
});
