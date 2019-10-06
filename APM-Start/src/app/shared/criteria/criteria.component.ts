import { Component, OnInit, ElementRef, AfterViewInit, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'pm-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.css']
})
export class CriteriaComponent implements OnInit, AfterViewInit, OnChanges {

  listFilter: string
  @Input() displayDetail: boolean
  @Input() hitCount: number
  hitMessage: string

  @ViewChild('filterElement') filterElementRef: ElementRef
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.filterElementRef.nativeElement.focus()

  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['hitCount'] && !changes['hitCount'].currentValue){
      this.hitMessage = 'No Matches Found'
    } else {
      this.hitMessage = 'Hits:' + this.hitCount
    }
  }

}
