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

    isPreviousDisabled: boolean;
    isNextDisabled: boolean;

    ngOnInit() {
        console.log('this is the pager control', this);
        this.checkDisabled(this.offset, this.limit, this.total);
    }

    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {

        const strategy = {
            offset: (currentValue: any) => {
                this.checkDisabled(currentValue, this.limit, this.total);
            },
            limit: (currentValue: any) => {
                this.checkDisabled(this.offset, currentValue, this.total);
            },
            total: (currentValue: any) => {
                this.checkDisabled(this.offset, this.limit, currentValue);
            },
           
        };

        for (let propertyName in changes) {
            strategy[propertyName](changes[propertyName].currentValue);
        }
    }

    @Input() limit: number;
    @Input() offset: number;
    @Input() total: number;
    @Output() pageChanged = new EventEmitter();

    goPrevious = () => {

        this.pageChanged.emit({
            payload: {
                offset: this.offset - this.limit,
                limit: this.limit,
                total: this.total
            }
        })
    }

    goNext = () => {

        this.pageChanged.emit({
            payload: {
                offset: this.offset + this.limit,
                limit: this.limit,
                total: this.total
            }
        })
    }

    private checkDisabled = (offset: number, limit: number, total: number) => {
        const nextOffset = offset + limit;
        const prevOffset = offset - limit;

        if (nextOffset >= total) {
            this.isNextDisabled = true;
        } else {
            this.isNextDisabled = false;
        }

        if (prevOffset < 0) {
            this.isPreviousDisabled = true;
        } else {
            this.isPreviousDisabled = false;
        }
    }
}