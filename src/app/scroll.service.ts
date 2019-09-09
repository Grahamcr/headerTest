import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cord } from './cord.model';

@Injectable({providedIn: 'root'})
export class ScrollService {
    scrollEmitter = new Subject<Cord>();
    columnHeaderEmitter = new Subject<Cord>();
}
