import React from 'react';
import {camera, trash,close} from 'ionicons/icons'
import {usePhotoGallery} from '../hooks/usePhotoGallery'
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar ,IonFab,IonFabButton,
IonIcon, IonGrid,IonRow, IonCol,IonImg, IonActionSheet} from '@ionic/react';

const Tab2: React.FC = () => {
  const {takePhoto} = usePhotoGallery();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem routerLink="/tab2/details">
            <IonLabel>
              <h2>Go to detail</h2>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
      <IonContent>

        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={()=>takePhoto()}>
            <IonIcon icon={camera}></IonIcon> 
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;