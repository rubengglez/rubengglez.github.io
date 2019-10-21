export class AsideInfo {
	public readonly texts: string[];
	public readonly title: string;

	private constructor(title: string, texts: string[]) {
		this.texts = texts;
		this.title = title;
	}

	public static of(title: string, texts: string[]): AsideInfo {
		return new AsideInfo(title, texts);
	}
}
