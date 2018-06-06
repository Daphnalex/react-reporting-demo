import {observable} from "mobx";

class ReportingViewStore {

  @observable choiceInsight;
  @observable choiceTypeOfComponent;
  @observable insight;
  @observable typeOfComponent;
  @observable reporting;
  @observable component;

  constructor(){
    this.choiceInsight=false;
    this.choiceTypeOfComponent=false;
    this.insight='';
    this.typeOfComponent='';
    this.reporting=[];
    this.component = {}
  }

}

export default new ReportingViewStore();
