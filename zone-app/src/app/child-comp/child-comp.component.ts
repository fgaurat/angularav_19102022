import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChildCompComponent implements OnInit {

  @Input('cpt')
  parentCpt!:{value:number}
  localCpt = 0
  constructor(private ref:ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  refresh(){
    this.ref.detectChanges()
  }

  inc(){
    this.localCpt++
  }

}
