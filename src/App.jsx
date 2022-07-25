import React from 'react';
import {
  IonContent,
  IonPage,
  IonRouterOutlet,
  IonApp,
  IonToolbar,
  IonHeader,
  IonButtons,
  IonBackButton,
  IonButton,
  IonTitle,
  IonItem,
  IonLabel,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route, useHistory } from 'react-router-dom';

setupIonicReact();

function HomePage() {
  const history = useHistory();
  const nextPage = () => {
    history.push('/detail');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Makan Bang</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>HOME PAGE</h1>
        <IonButton onClick={nextPage}>NEXT PAGE</IonButton>
      </IonContent>
    </IonPage>
  );
}

function DetailPage() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Detail Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>DETAIL</h1>
        <IonItem details>
          <IonLabel>More Information</IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
}

function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/home" component={HomePage} exact />
          <Route path="/detail" component={DetailPage} exact />
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
