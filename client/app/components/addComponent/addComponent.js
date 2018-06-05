import React, { Component } from 'react';
import {Row, Col, CardPanel,Icon, Collection, CollectionItem} from 'react-materialize';
import ReportingViewStore from '../../viewStores/ReportingViewStore/ReportingViewStore';
//import ActionNewBloc from '../../actions/newBloc/ActionNewBloc';

class AddComponent extends Component {
  constructor(props) {
    super(props);

  /*  this.state = {

  };  */
  }

  render() {
    return (
      <Row>
        <CardPanel className="teal lighten-4 black-text">
          <h2>Ajouter un composant</h2>
          <hr className="addComponent"/>
          <Collection header="Type de données">
            <CollectionItem>Connexions</CollectionItem>
            <CollectionItem>Licences actives</CollectionItem>
          </Collection>
          <Collection header="Type de graphique">
            <CollectionItem>Camembert</CollectionItem>
            <CollectionItem>Graphique en barre</CollectionItem>
            <CollectionItem>Graphique en ligne</CollectionItem>
            <CollectionItem>Tableau</CollectionItem>
          </Collection>
        </CardPanel>
      </Row>

    );
  }
}

export default AddComponent;
