/// <reference path="typings/angular2/angular2.d.ts" />
import { Component, View, bootstrap } from 'angular2/angular2';
import { DisplayComponent } from './display.component'
import { ToDoList } from './todo.list'

// Annotation section
@Component({
	selector: 'my-app'
})
@View({
	templateUrl: "app.html",
	directives: [DisplayComponent, ToDoList]
})
// Component controller
class MyAppComponent {
	name: string;
	
	constructor() {
		this.name = 'Alice';
	}
}

bootstrap(MyAppComponent);
