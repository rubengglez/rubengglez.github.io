/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
import { GithubService } from 'src/services/Github.service';
import { asyncData } from 'tests/utils';

const random = (): string => Math.random().toString();

describe('Tests/unit/Github.service.specs.ts.', function() {
	let githubService: GithubService;
	let httpClient: { get: jasmine.Spy };

	beforeEach(() => {
		httpClient = jasmine.createSpyObj('HttpClient', ['get']);
		githubService = new GithubService(httpClient as any);
	});

	it('when a list of repositories are retrieved, then a list of Github objects should be returned', done => {
		const createdAt = new Date();
		const updatedAt = new Date();
		const language = random();
		const name = random();
		const description = random();
		const html_url = random();
		httpClient.get.and.returnValue(
			asyncData([
				{
					created_at: createdAt,
					updated_at: updatedAt,
					name,
					description,
					html_url,
					language,
				},
			]),
		);

		githubService.getShortRepositoryInfo().subscribe(shortGithubData => {
			expect(shortGithubData.length).toEqual(1);
			const dataTransformed = shortGithubData.pop();
			expect(dataTransformed.createdAt).toEqual(createdAt);
			expect(dataTransformed.updatedAt).toEqual(updatedAt);
			expect(dataTransformed.language).toEqual(language);
			expect(dataTransformed.url).toEqual(html_url);
			done();
		});
	});
});
