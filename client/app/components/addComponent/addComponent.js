import React, { Component } from 'react';
import {Row, Col, CardPanel,Icon, Collection, CollectionItem, Button} from 'react-materialize';
import ReportingViewStore from '../../viewStores/ReportingViewStore/ReportingViewStore';
//import ActionNewBloc from '../../actions/newBloc/ActionNewBloc';
import {observer} from "mobx-react";
import ActionNewBloc from '../../actions/newBloc/actionNewBloc.js';

@observer
class AddComponent extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }

  render() {
    return (
      <Row>
        <CardPanel className="teal lighten-4 black-text">
          <h2>Ajouter un composant</h2>
          <hr className="addComponent"/>
          <Collection header="Type de données">
            <CollectionItem className={ReportingViewStore.insight=="connexions" ? "active" : ""} id="connexions" onClick={(event)=> ActionNewBloc.handleChangeData(event.target.textContent)}>Connexions</CollectionItem>
            <CollectionItem className={ReportingViewStore.insight=="licences" ? "active" : ""} id="licences" onClick={(event)=> ActionNewBloc.handleChangeData(event.target.textContent)}>Licences actives</CollectionItem>
          </Collection>
          <Collection header="Type de graphique">
              <CollectionItem id="camembert" className={ReportingViewStore.typeOfComponent=="camembert" ? "active" : ""} onClick={(event)=> ActionNewBloc.handleChangeType(event.target.textContent)}>Camembert</CollectionItem>
              <CollectionItem id="barreGraph" className={ReportingViewStore.typeOfComponent=="barreGraph" ? "active" : ""} onClick={(event)=> ActionNewBloc.handleChangeType(event.target.textContent)}>Graphique en barre</CollectionItem>
              <CollectionItem id="lineGraph" className={ReportingViewStore.typeOfComponent=="lineGraph" ? "active" : ""} onClick={(event)=> ActionNewBloc.handleChangeType(event.target.textContent)}>Graphique en ligne</CollectionItem>
              <CollectionItem id="table" className={ReportingViewStore.typeOfComponent=="table" ? "active" : ""} onClick={(event)=> ActionNewBloc.handleChangeType(event.target.textContent)}>Tableau</CollectionItem>
          </Collection>
          <div>
            {(ReportingViewStore.choiceInsight && ReportingViewStore.choiceTypeOfComponent) ?
              <Button waves='light' onClick={ActionNewBloc.handleClick}>Ajouter</Button>
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
