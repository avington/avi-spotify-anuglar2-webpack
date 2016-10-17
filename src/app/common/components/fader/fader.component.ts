import { Component, trigger, state, style, animate, transition, Input, OnChanges } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'fader',
    templateUrl: 'fader.component.html',
    styleUrls: [
        'fader.component.scss'
    ],
    animations: [
        trigger('visibilityChanged', [
            state('shown', style({ opacity: 1 })),
            state('hidden', style({ opacity: 0 })),
            transition('* => *', animate('1s'))
        ])
    ]
})
export class FaderComponent implements OnChanges {
    constructor() { }

    @Input() isVisible: boolean = true;
    visibility: string = 'shown';

    ngOnChanges() {
        this.visibility = this.isVisible ? 'shown' : 'hidden';
    }
}