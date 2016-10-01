import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges, SimpleChange, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'pager',
    templateUrl: 'pager.component.html',
    styleUrls: ['pager.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PagerComponent implements OnInit, OnChanges {
    constructor() { }

    isLeftDisabled: boolean;
    isRightDisabled: boolean;

    ngOnInit() {
        this.checkDisabled(this.currentPage, this.lastPage);
     }

     ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
        let changesMsgs: string[] = [];
        for (let propName in changes) {
            if (propName === 'currentPage') {
                const currentPage: number = propName[propName];
                this.checkDisabled(currentPage, this.lastPage);
            }
            if (propName === 'lastPage') {
                const lastPage: number = propName[propName];
                this.checkDisabled(this.currentPage, lastPage);
            }
        }
    }
     
    @Input() currentPage: number;
    @Input() lastPage: number;
    @Output() pageChanged = new EventEmitter();

    pageLeft = () => {
        this.pageChanged.emit({
            payload: {
                currentPage: this.currentPage - 1
            }
        })
    }

    pageRight = () => {
        this.pageChanged.emit({
            payload: {
                currentPage: this.currentPage + 1
            }
        })
    }

    private checkDisabled = (currentPage: number, lastPage: number) => {
        if (currentPage <= 1) {
            this.isLeftDisabled = true;
        } else {
            this.isLeftDisabled = false;
        }
        
        if (currentPage >= lastPage) {
            this.isRightDisabled = true;
        } else {
            this.isRightDisabled = false;
        }
    }
}