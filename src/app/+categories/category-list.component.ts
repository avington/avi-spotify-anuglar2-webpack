import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'category-list',
    templateUrl: 'category-list.component.html',
    styleUrls: ['category-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryListComponent implements OnInit {
    constructor() { }

    @Input() items: Array<any>;

    ngOnInit() { }
}