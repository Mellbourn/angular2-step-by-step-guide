import { Component, View, NgFor } from 'angular2/angular2';
@Component({
	selector: "todo-list"
})
@View({
	templateUrl: "todo.list.html",
	directives: [NgFor]
})
export class ToDoList {
	todos: string[];
	
	constructor() {
		this.todos = ["Eat breakfast", "Walk dog", "breathe"]				
	}
	
	addTodo(todo: string) {
		this.todos.push(todo);
	}
	
	doneTyping($event: KeyboardEvent) {
		if($event.which === 13) {
			var input = <any>$event.target
			this.addTodo(input.value)
			input.value = null;
		}
	}
}