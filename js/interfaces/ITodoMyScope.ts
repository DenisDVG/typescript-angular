/// <reference path='../_all.ts' />

module todos {
	export interface ITodoMyScope extends ng.IScope {
		todos: TodoItem[];
		newTodo: string;
		editedTodo: TodoItem;
		originalTodo: TodoItem;
		remainingCount: number;
		doneCount: number;
		allChecked: boolean;
		reverted: boolean;
		statusFilter: { completed?: boolean };
		location: ng.ILocationService;
		vm: TodoMyCtrl;
		newTodoPart: string;
		incrNeighbContr: number;
		shareDataServiceScoupe: IShareDataService;
	}
}
