import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  // Values to be Set
  brand: any = "";
  warranty: any = "";
  attachmentType: any = "";
  insulationValue: any = "";
  deckType: any = "";
  membraneThickness: any = "";
  deckAreaSqf: any = "";
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
  walkpadsLFT: any = "";
  membraneStretch: any = "";
  copingMetalLFT: any = "";
  copingMetalStretch: number;


  panduitBands: number;
  totalRoofSqf: number;
  screwType: any;
  totalRoofSQ: any;
  screwSize: any;


  closeBootsShow: any;

// Values to be caluclated
  deckSQ: any = "";
  parapetSQ: any = "";
  pitchPocketFiller: number;
  termbarCount: number;
  walkPadsNeeded: number;
  insulationScrews: any;
  pictureFramScrews: any;
  fieldScrews: any;
  fieldRolls: any;
  mastic: any;
  pictureFrameRolls: any;
  totalScrews: any;
  wallPlates: any;
  insulationBoardCount: any;
  insulationScrewCount: any;
  insulationScrewPlates: any;
  membraneType: any;
  selantCaulk: number;
  parapetMembraneScrews: number;


  constructor() {
  }

  ngOnInit(): void {
  }

  termBarCount(rtuLFT: any) {
    this.termbarCount = rtuLFT / 10;
  }

  // square foot to Square
  sqftoSQ(sqf: number, id: any) {
    console.log(id);
    (id != "parapetAreSqf") ? this.deckSQ = sqf / 100 : this.parapetSQ = sqf / 100;
  }

  totalSQF() {
    this.totalRoofSqf = parseInt(this.deckAreaSqf) + parseInt(this.parapetAreSqf);
    this.insulationBoardCountCalculations();
    this.totalSQ();
  }

  totalSQ() {
    this.totalRoofSQ = this.deckSQ + this.parapetSQ;
  }

  typeOfScrew() {
    if (this.deckType != "wood") {
      this.screwType = "#15";
    } else {
      this.screwType = "#14";
    }
  }

  screwSizeShow() {
    (this.insulationValue < 30) ? this.screwSize = 5 : this.screwSize = 6;
  }

  pitchPocketFillerCount() {
    this.pitchPocketFiller = this.pitchPockets;
  }

  pvcVents() {
    if (this.membraneType == "pvc") {
      this.vents = this.deckAreaSqf / 1000;
    } else {
      this.vents = 0;
    }
  }

  bootSupplies() {
    this.panduitBands = this.closeBoots + this.splitBoots;
    this.selantCaulk = this.closeBoots / 2;
  }

  walkPadsToInstall() {
    this.walkPadsNeeded = (this.walkpadsLFT / 12) / 60;
  }

  membraneStretchCount() {
    if (this.membraneStretch >= 5) {
      this.parapetMembraneScrews = (this.copingMetalLFT / 100) * 200
    }
  }

  //testing this function
    setBrand(brand: string){
    this.brand = brand;
    }

  insulationBoardCountCalculations() {
    this.insulationBoardCount = Math.ceil(this.deckSQ / 6.24);
    this.insulationScrewCount = Math.ceil((this.deckSQ / 3.12) * 5);
    this.insulationScrewPlates = Math.ceil(this.insulationScrews);
  }

  fieldScrewCalculation(){

  }

  _saveAllValuesLocaly() {
      localStorage.setItem('#brand', this.brand);
      localStorage.setItem('#warranty', this.warranty);
      localStorage.setItem('#attachmentType', this.attachmentType);
      // localStorage.setItem('#splitBoots', this.split);
      localStorage.setItem('#outsideCorners', this.outsideCorners);
      localStorage.setItem('#collectorHeadCount', this.collectorHeadCount);
      localStorage.setItem('#pitchPockets', this.pitchPockets);
      localStorage.setItem('#closeBoots', this.closeBoots);
      localStorage.setItem('#drains', this.drains);
      localStorage.setItem('#vents', this.vents);
      // localStorage.setItem('#walkpads', this.walkPadsNeeded);
      localStorage.setItem('#membraneThickness', this.membraneThickness);
      localStorage.setItem('#splitBootsShow', this.splitBoots);
      localStorage.setItem('#wallPlates', this.wallPlates);
      localStorage.setItem('#coppingMetalLFT', this.copingMetalLFT);
      // localStorage.setItem('#scupper', this.scupper);
      // localStorage.setItem('#overflow', this.overflow);
      localStorage.setItem('#fieldRolls', this.fieldRolls);
      // localStorage.setItem('#fieldRollsShow', this.fieldRollsShow);
      // localStorage.setItem('#deckAreaSqf', this.deckSqf);
      // localStorage.setItem('#parapetAreSqf',this.parapetSqf);
      localStorage.setItem('#fieldScrews', this.fieldScrews);
  }


}












