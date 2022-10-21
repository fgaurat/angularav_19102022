import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-zone',
  templateUrl: './test-zone.component.html',
  styleUrls: ['./test-zone.component.css']
})
export class TestZoneComponent implements OnInit {
  cpt = 0
  constructor(private zone:NgZone) { }

  ngOnInit(): void {
  }

  click1s(){
    setInterval(()=>{
      this.cpt++
    },1000)
  }

  click5s(){
    this.zone.runOutsideAngular(()=>{
      setInterval(()=>{
        this.cpt+=5
        console.log(this.cpt)
        if (this.cpt%5==0){
            this.zone.run(() =>{
              this.cpt+=0
            })
        }

      },1000)

    })
  }


}
