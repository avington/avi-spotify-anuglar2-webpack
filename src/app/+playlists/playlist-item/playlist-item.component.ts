import { Component, OnInit, ChangeDetectionStrategy, Input, SimpleChange, OnChanges } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'playlist-item',
    templateUrl: 'playlist-item.component.html',
    styleUrls: ['playlist-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaylistItemComponent implements OnInit, OnChanges {
    constructor() { }

    imageUrl: string;

    @Input() playlist: any;

    ngOnInit() {
        this.setImageUrl(this.playlist);
    }

    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
        let changesMsgs: string[] = [];
        for (let propName in changes) {
            if (propName === 'playlist') {
                const playlist = propName[propName];
                this.setImageUrl(playlist);
            }
        }
    }

    private setImageUrl = (playlist: any) => {
        if (playlist && playlist.images && playlist.images.length > 0) {
            this.imageUrl = playlist.images[0].url;
        }
    };
}