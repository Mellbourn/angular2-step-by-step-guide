// TypeScript
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';

@Component({
	selector: 'display'
})
@View({
	templateUrl: "display-component.html",
	directives: [NgFor],
	appInjector: [FriendsService]
})
export class DisplayComponent {
	myName: string;
	names: Array<string>;

	constructor(friendsService: FriendsService) {
		this.myName = "alice";
		this.names = friendsService.names;
	}
}