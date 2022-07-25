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

const DetailPage = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton className="text-blue-500" />
          </IonButtons>
          <IonTitle>Detail Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1 className="text-2xl font-bold mt-3">DETAIL</h1>
        <IonItem details>
          <IonLabel>More Information</IonLabel>
        </IonItem>
        <IonItem details>
          <IonLabel>More Information</IonLabel>
        </IonItem>
        <IonItem details>
          <IonLabel>More Information</IonLabel>
        </IonItem>
        <IonItem details>
          <IonLabel>More Information</IonLabel>
        </IonItem>
        <IonItem details>
          <IonLabel>More Information</IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

const Homepage = () => {
  const history = useHistory();
  const nextPage = () => {
    history.push('/detail');
  };

  return (
    <IonPage>
      <IonContent>
        <div className="w-full h-screen items-center flex flex-col justify-center bg-black text-white">
          <p className="text-2xl">Placeholder</p>
          <IonButton
            className="mt-3"
            onClick={nextPage}
          >
            Next Page
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

const App = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route
            path="/home"
            component={Homepage}
            exact
          />
          <Route
            path="/detail"
            component={DetailPage}
            exact
          />
          <Route
            path="/"
            exact
          >
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
