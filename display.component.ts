// TypeScript
import {Component, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';
import {FriendsService} from 'friends.service';

@Component({
	selector: 'display',
	bindings: [FriendsService]
})
@View({
	templateUrl: "display.component.html",
	directives: [NgFor, NgIf]
})
export class DisplayComponent {
	myName: string;
	names: Array<string>;

	constructor(friendsService: FriendsService) {
		this.myName = "alice";
		this.names = friendsService.names;
	}
}