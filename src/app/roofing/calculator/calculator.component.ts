import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  // Values to be Set
  brand: any = "Duro Last";
  warranty: any = "15 YNDL";
  membraneThickness: number = 50;
  attachmentType: any = "Mechanically";
  insulationValue: number = 30;
  deckType: any = "metal";

  deckAreaSqf: number = 7569;
  parapetAreSqf: number = 2648;
  rtuLFT: number = 450;
  outsideCorners: any = 15;
  pitchPockets: any = 15;
  closeBoots: number = 15;
  splitBoots: number = 15;
  drains: number = 1;
  downSpoutLFT: number = 28;
  vents: number = 1;
  collectorHeadCount: number = 5;
  walkpadsLFT: number = 276;
  membraneStretch: number = 7;
  copingMetalLFT: number = 782;
  copingMetalStretch: number = 5;


  panduitBands: number;
  totalRoofSqf: number;
  screwType: any;
  totalRoofSQ: number;
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
  fieldScrews: number;
  fieldRolls: any;
  mastic: any;
  pictureFrameRolls: any;
  totalScrews: number;
  wallPlates: any;
  insulationBoardCount: number;
  insulationScrewCount: number;
  insulationScrewPlates: any;
  membraneType: any;
  sealantCaulk: number;
  parapetMembraneScrews: number;
   pictureFrameSQ: number;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//   // Values to be Set
//   brand: any = "";
//   warranty: any = "";
//   attachmentType: any = "";
//   insulationValue: any = "";
//   deckType: any = "";
//   membraneThickness: any = "";
//   deckAreaSqf: any = "";
//   parapetAreSqf: any = "";
//   rtuLFT: any = "";
//   outsideCorners: any = "";
//   pitchPockets: any = "";
//   closeBoots: any = "";
//   splitBoots: any = "";
//   drains: any = "";
//   downSpoutLFT: any = "";
//   vents: any = "";
//   collectorHeadCount: any = "";
//   walkpadsLFT: any = "";
//   membraneStretch: any = "";
//   copingMetalLFT: any = "";
//   copingMetalStretch: number;
//
//
//   panduitBands: number;
//   totalRoofSqf: number;
//   screwType: any;
//   totalRoofSQ: any;
//   screwSize: any;
//
//
//   closeBootsShow: any;
//
// // Values to be caluclated
//   deckSQ: any = "";
//   parapetSQ: any = "";
//   pitchPocketFiller: number;
//   termbarCount: number;
//   walkPadsNeeded: number;
//   insulationScrews: any;
//   pictureFramScrews: any;
//   fieldScrews: any;
//   fieldRolls: any;
//   mastic: any;
//   pictureFrameRolls: any;
//   totalScrews: any;
//   wallPlates: any;
//   insulationBoardCount: any;
//   insulationScrewCount: any;
//   insulationScrewPlates: any;
//   membraneType: any;
//   sealantCaulk: number;
//   parapetMembraneScrews: number;
//      pictureFrameSQ: number;


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
    this.totalRoofSqf = this.deckAreaSqf + this.parapetAreSqf;
    this.insulationBoardCountCalculations();
    this._totalSQ();
  }

  _totalSQ() {
    this.totalRoofSQ = this.deckSQ + this.parapetSQ;
  }

  typeOfScrew() {
    if (this.deckType.toLowerCase() != "wood") {
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
    if (this.membraneType.toLowerCase() == "pvc") {
      this.vents = this.deckAreaSqf / 1000;
    } else {
      this.vents = 0;
    }
  }

  bootSupplies() {
    this.panduitBands = this.closeBoots + this.splitBoots;
    let totalBootsNeeded = this.panduitBands
    this.sealantCaulk = totalBootsNeeded / 2;
  }

  walkPadsToInstall() {
    this.walkPadsNeeded = (this.walkpadsLFT * 12) / 60;
  }

  membraneStretchCount() {
    if (this.membraneStretch >= 5) {
      this.parapetMembraneScrews = (this.copingMetalLFT / 100) * 200;
      this.wallPlates = this.parapetMembraneScrews;
    }
  }

  //testing this function
    setBrand(brand: string){
    this.brand = brand;
    }

  insulationBoardCountCalculations() {
    this.insulationBoardCount = Math.ceil(this.deckSQ / 6.24);
    this.insulationScrewCount = Math.ceil((this.deckSQ / 3.12) * 5);
    this.insulationScrewPlates = Math.ceil(this.insulationScrewCount);

  }

  rollCount(){
    this._pictureFrameRolls();
    this._fieldRollsCount();
    this._totalScrewCount();

  }

  _pictureFrameRolls(){
    this.pictureFrameRolls = Math.ceil(this.copingMetalLFT / 100);
      this.pictureFrameSQ = this.pictureFrameRolls * 500 ;

  }

  _fieldRollsCount(){
    let leftOverSquares: number = this.totalRoofSQ - this.pictureFrameSQ;
    this.fieldRolls = leftOverSquares / 1000;
  }

  _totalScrewCount(){
   this.totalScrews =  this.insulationScrewCount + this.fieldScrews;
  }




  _saveAllValuesLocaly() {
      localStorage.setItem('#brand', this.brand);
      localStorage.setItem('#warranty', this.warranty);
      localStorage.setItem('#attachmentType', this.attachmentType);
      // localStorage.setItem('#splitBoots', this.split);
      localStorage.setItem('#outsideCorners', this.outsideCorners);
      localStorage.setItem('#collectorHeadCount', this.collectorHeadCount.toString());
      localStorage.setItem('#pitchPockets', this.pitchPockets);
      localStorage.setItem('#closeBoots', this.closeBoots.toString());
      localStorage.setItem('#drains', this.drains.toString());
      localStorage.setItem('#vents', this.vents.toString());
      // localStorage.setItem('#walkpads', this.walkPadsNeeded);
      localStorage.setItem('#membraneThickness', this.membraneThickness.toString());
      localStorage.setItem('#splitBootsShow', this.splitBoots.toString());
      localStorage.setItem('#wallPlates', this.wallPlates);
      localStorage.setItem('#coppingMetalLFT', this.copingMetalLFT.toString());
      // localStorage.setItem('#scupper', this.scupper);
      // localStorage.setItem('#overflow', this.overflow);
      localStorage.setItem('#fieldRolls', this.fieldRolls);
      // localStorage.setItem('#fieldRollsShow', this.fieldRollsShow);
      // localStorage.setItem('#deckAreaSqf', this.deckSqf);
      // localStorage.setItem('#parapetAreSqf',this.parapetSqf);
      localStorage.setItem('#fieldScrews', this.fieldScrews.toString());
  }


}












