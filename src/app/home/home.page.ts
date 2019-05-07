import { Component } from '@angular/core';

@Component({
    selector: 'page-home',
    templateUrl: 'home.page.html'
})
export class HomePage {
    todos: string[] = [];
    todo: string;
 
    
    add() {
        this.todos.push(this.todo);
        this.todo = "";
    }
 
    delete(item) {
        var index = this.todos.indexOf(item, 0);
        if (index > -1) {
            this.todos.splice(index, 1);
        }
    }
}