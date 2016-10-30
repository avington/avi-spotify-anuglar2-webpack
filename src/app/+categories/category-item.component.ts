import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'category-item',
    templateUrl: 'category-item.component.html',
    styleUrls: ['category-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryItemComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    @Input() item: any;
}