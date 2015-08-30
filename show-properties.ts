// TypeScript
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';

@Component({
	selector: 'display'
})
@View({
	templateUrl: "display-component.html",
	directives: [NgFor]
})
class DisplayComponent {
	myName: string;
	names: Array<string>;

	constructor() {
		this.myName = "alice";
		this.names = ["Aarav", "Martín", "Shannon", "Ariana", "Kai"];
	}
}