import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  brand: any = "DuroLast";
  warranty: any = "warranty";
  attachmentType: any = "Mechanical or Self Adhered";
  insulationValue: any = "";
  deckType: any = "";
  membraneThickness: any = "";
  deckAreaSqf: any = "";
  deckSQ: any = "";
  parapetSQ: any = "";
  parapetAreSqf: any = "";
  rtuLFT: any = "";
  outsideCorners: any = "";
  pitchPockets: any = "";
  closeBoots: any = "";
  splitBoots: any = "";
  drains: any = "";
  downSpoutLFT: any = "";
  vents: any = "";
  collectorHeadCount: any = "";
  walkpads: any = "";
  membraneStretch: any = "";
  copingMetalLFT: any = "";
  copingMetalStretch: number;
  termbarCount: number;
  pitchPocketFiller: number;
  panduitBands: number;
  totalRoofSqf: any;
  screwType: any;


  constructor() {
  }

  ngOnInit(): void {
  }


  sqftoSQ(sqf: number, id: any) {

    console.log(id);
    (id != "parapetAreSqf") ? this.deckSQ = sqf / 100 : this.parapetSQ = sqf / 100;


  }

  etCornerCount(corners: number) {
    this.outsideCorners = corners;
  }

  setPitchPockets(pitchPockets: number) {
    this.pitchPockets = pitchPockets;
    this.pitchPocketFiller = pitchPockets;
  }

  setCloseBoots(closeBoots: number) {
    this.closeBoots = closeBoots;

  }

  setSplitBoots(splitBoots: number) {
    this.splitBoots = splitBoots;
    this.panduitBands = splitBoots;

  }

  setDrains(closeBoots: number) {
    this.closeBoots = closeBoots;
  }

  setVents(closeBoots: number) {
    this.closeBoots = closeBoots;
  }

  setWalkpads(walkpads: number) {
    this.walkpads = walkpads;
  }


  _termBarCount(rtuLFT: any) {
    this.termbarCount = rtuLFT / 10;
  }

  setCopingMetalStretch(copingMetalStretch: any) {
    this.copingMetalStretch = copingMetalStretch;
  }

  setCopingMetalLFT(copingMetalLFT: any) {
    this.copingMetalLFT = copingMetalLFT;
  }

  setMembraneStretch(membraneStretch: any) {
    this.membraneStretch = membraneStretch;
  }

  setCollectorHeadCount(collectorHeadCount: any) {
    this.collectorHeadCount = collectorHeadCount;
  }

  setDownSpoutLFT(downSpoutLFT: any) {
    this.downSpoutLFT = downSpoutLFT;
  }

  totalRoofSQF(){
    this.totalRoofSqf = this.deckAreaSqf + this.parapetAreSqf;
  }

  typeOfScrew(){
    if(this.deckType != "wood") {
      this.screwType = "#15";
    }
      else{
        this.screwType = "#14";
      }
    }

}

















