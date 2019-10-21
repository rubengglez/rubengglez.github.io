import { Component } from '@angular/core';
import { AsideInfo } from './AsideInfo';

@Component({
	selector: 'aside-info-root',
	templateUrl: './aside-info.component.html',
	styleUrls: ['./aside-info.component.scss'],
})
export class AsideInfoComponent {
	public allAsideInfo = [AsideInfo.of('title', ['tests', 'tests'])];
}
