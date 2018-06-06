import React, { Component } from 'react';
import {Row, Col, CardPanel,Icon, Collection, CollectionItem, Button} from 'react-materialize';
import ReportingViewStore from '../../viewStores/ReportingViewStore/ReportingViewStore';
//import ActionNewBloc from '../../actions/newBloc/ActionNewBloc';
import {observer} from "mobx-react";

@observer
class AddComponent extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }

  handleChangeData(element){
    ReportingViewStore.choiceInsight = true;
    console.log('new value', ReportingViewStore.choiceInsight);
    this.getIdData(element);
  }

  handleChangeType(element){
    ReportingViewStore.choiceTypeOfComponent = true;
    this.getIdType(element);
  }

  getIdData(element){
    switch(element){
      case 'Connexions':
        ReportingViewStore.insight='connexions';
        break;
      case "Licences actives":
        ReportingViewStore.insight="licences";
        break;
    }
  }

  getIdType(element){
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

  render() {
    return (
      <Row>
        <CardPanel className="teal lighten-4 black-text">
          <h2>Ajouter un composant</h2>
          <hr className="addComponent"/>
          <Collection header="Type de données">
            <CollectionItem className={ReportingViewStore.insight=="connexions" ? "active" : ""} id="connexions" onClick={(event)=> this.handleChangeData(event.target.textContent)}>Connexions</CollectionItem>
            <CollectionItem className={ReportingViewStore.insight=="licences" ? "active" : ""} id="licences" onClick={(event)=> this.handleChangeData(event.target.textContent)}>Licences actives</CollectionItem>
          </Collection>
          <div>
          {ReportingViewStore.choiceInsight ?
            <Collection header="Type de graphique">
              <CollectionItem id="camembert" className={ReportingViewStore.typeOfComponent=="camembert" ? "active" : ""} onClick={(event)=> this.handleChangeType(event.target.textContent)}>Camembert</CollectionItem>
              <CollectionItem id="barreGraph" className={ReportingViewStore.typeOfComponent=="barreGraph" ? "active" : ""} onClick={(event)=> this.handleChangeType(event.target.textContent)}>Graphique en barre</CollectionItem>
              <CollectionItem id="lineGraph" className={ReportingViewStore.typeOfComponent=="lineGraph" ? "active" : ""} onClick={(event)=> this.handleChangeType(event.target.textContent)}>Graphique en ligne</CollectionItem>
              <CollectionItem id="table" className={ReportingViewStore.typeOfComponent=="table" ? "active" : ""} onClick={(event)=> this.handleChangeType(event.target.textContent)}>Tableau</CollectionItem>
            </Collection>
            : <div></div>}
          </div>
          <div>
            {(ReportingViewStore.choiceInsight && ReportingViewStore.choiceTypeOfComponent) ?
              <Button waves='light'>Ajouter</Button>
              :
              <div></div>
            }
          </div>
        </CardPanel>
      </Row>

    );
  }
}

export default AddComponent;
