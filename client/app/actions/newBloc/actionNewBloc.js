import {observable, computed, action} from 'mobx';
import ReportingViewStore from '../../viewStores/ReportingViewStore/ReportingViewStore.js';
import DataBaseService from '../../services/getDataService.js';

class NewBlocAction {

  @action handleChangeData(element){
    ReportingViewStore.choiceInsight = true;
    console.log('new value', ReportingViewStore.choiceInsight);
    this.getIdData(element);
  }

  @action handleChangeType(element){
    ReportingViewStore.choiceTypeOfComponent = true;
    this.getIdType(element);
  }

  @action getIdData(element){
    switch(element){
      case 'Connexions':
        ReportingViewStore.insight='connexions';
        break;
      case "Licences actives":
        ReportingViewStore.insight="licences";
        break;
    }
  }

  @action getIdType(element){
    switch(element){
      case "Camembert":
        ReportingViewStore.typeOfComponent="camembert";
        break;
      case "Graphique en barre":
        ReportingViewStore.typeOfComponent="barreGraph";
        break;
      case "Graphique en ligne":
        ReportingViewStore.typeOfComponent="lineGraph";
        break;
      case "Tableau":
        ReportingViewStore.typeOfComponent="table";
        break;
    }
  }

  //récupération du composant à construire
  @action handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.', ReportingViewStore.insight, ReportingViewStore.typeOfComponent);
    const data = DataBaseService.getGlobalData(ReportingViewStore.insight);
    console.log("data",data);
  }

}


export default new NewBlocAction();
