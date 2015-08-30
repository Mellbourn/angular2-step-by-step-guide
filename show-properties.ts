// TypeScript
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {FriendsService} from 'FriendsService';

@Component({
	selector: 'display',
	bindings: [FriendsService]
})
@View({
	templateUrl: "display-component.html",
	directives: [NgFor]
})
export class DisplayComponent {
	myName: string;
	names: Array<string>;

	constructor(friendsService: FriendsService) {
		this.myName = "alice";
		this.names = friendsService.names;
	}
}