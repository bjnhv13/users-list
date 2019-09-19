// @Component({
//     selector: 'editable-table',
//     template: `
//         <div class="Table">
//             <div class="Row" *ngFor="let item of items; i = index">
//                 <display-row
//                     *ngIf="isDisplay(i)"
//                     [item]="item"
//                     (onToggleEdit)="toggleEdit(i)">
//                 </display-row>
//                 <editable-row
//                     *ngIf="!isDisplay(i)"
//                     [item]="item"
//                     (onToggleDisplay)="toggleEdit(i)">
//                 </editable-row>
//             </div>
//         </div>
//     `
// })
// export class EditableTableComponent {
//     @Input() items: { name: string, description: string }[];
//     displayingIndeces: boolean[];

//     isDisplay(index: number) {
//         return this.displayingIndeces[index];
//     }

//     toggleEdit(index: number) {
//         this.displayingIndeces[index] = !this.displayingIndeces[index];
//     }

//     ngOnChanges() {
//         this.displayingIndeces = new Array(this.items.length);
//         this.displayingIndeces.fill(true);
//     }
// }


// @Component({
//     selector: 'display-row',
//     template: `
//         <div class="divTableCell">
//             <span>{{item.name}}</span>
//         </div>
//         <div class="divTableCell">
//             <span>{{item.description}}</span>
//         </div>
//         <div class="divTableCell">
//             <button (click)="toggleToEdit()">Edit<button>
//         </div>
//     `
// })
// export class DisplayRowComponent {
//     @Input() item: { name: string, description: string };
//     @Output() onToggleEdit = new EventEmitter<any>();

//     toggleToEdit() {
//         this.onToggleEdit.emit();
//     }
// }


// @Component({
//     selector: 'editable-row',
//     template: `
//         <div class="divTableCell">
//             <input value="item.name"></input>
//         </div>
//         <div class="divTableCell">
//             <input value="item.description"></input>
//         </div>
//         <div class="divTableCell">
//             <button (click)="toggleToDisplay()">Display<button>
//         </div>
//     `
// })
// export class EditableRowComponent {
//     @Input() item: { name: string, description: string };
//     @Output() onToggleDisplay = new EventEmitter<any>();

//     toggleToDisplay() {
//         this.onToggleDisplay.emit();
//     }
// }