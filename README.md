# WeatherApp - Angular
 
## Description
Ce projet scolaire représente le code côté client de l'application WeatherApp, développé en utilisant Angular, MongoDB et Node.js.
Elle permet aux utilisateurs de consulter les prévisions météorologiques en fonction de leur localisation géographique. 


## Arborescence des fichiers
Le dossier app contient les composants, les pages et les services de l'application.
Les composants sont organisés en fonction de leur rôle, tandis que les services fournissent des fonctionnalités telles que l'authentification et la gestion des sessions..

```
my-app/
src/
├── app/
│   ├── components/
│   │   ├── login/
│   │   │   ├── login.component.html
│   │   │   ├── login.component.css
│   │   │   ├── login.component.ts
│   │   │   └── login.component.spec.ts
│   │   ├── map/
│   │   │   ├── map.component.html
│   │   │   ├── map.component.css
│   │   │   ├── map.component.ts
│   │   │   └── map.component.spec.ts
│   │   ├── navbar/
│   │   │   ├── navbar.component.html
│   │   │   ├── navbar.component.css
│   │   │   ├── navbar.component.ts
│   │   │   └── navbar.component.spec.ts
│   │   └── sidebar/
│   │       ├── sidebar.component.html
│   │       ├── sidebar.component.css
│   │       ├── sidebar.component.ts
│   │       └── sidebar.component.spec.ts
│   ├── pages/
│   │   ├── cgu/
│   │   │   ├── cgu.component.html
│   │   │   ├── cgu.component.css
│   │   │   ├── cgu.component.ts
│   │   │   └── cgu.component.spec.ts
│   │   ├── history/
│   │   │   ├── history.component.html
│   │   │   ├── history.component.css
│   │   │   ├── history.component.ts
│   │   │   └── history.component.spec.ts
│   │   ├── home/
│   │   │   ├── home.component.html
│   │   │   ├── home.component.css
│   │   │   ├── home.component.ts
│   │   │   └── home.component.spec.ts
│   │   └── not-found/
│   │       ├── not-found.component.html
│   │       ├── not-found.component.css
│   │       ├── not-found.component.ts
│   │       └── not-found.component.spec.ts
│   ├── services/
│   │   ├── auth-google.service.ts
│   │   ├── session.service.ts
│   │   └── auth-guard.service.ts
│   ├── app-routing.module.ts
│   └── app.module.ts
├── assets/
├── environments/
│   ├── environment.ts
│   ├── environment.development.ts
├── index.html
└── ...
```

### Composants
- **Login Component** : Permet aux utilisateurs de se connecter à l'application en utilisant leur compte Google.
Il affiche également un lien qui redirige vers les conditions d'utilisation.
- **Map Component** : Affiche une carte interactive où les utilisateurs peuvent voir leur emplacement actuel et rechercher des emplacements spécifiques.
- **Sidebar Component** : Est un menu latéral pour la navigation intuitive entre les différentes pages de l'application.


### Pages
- **Login Component** : Est l'interface principale de l'application, offrant l'authentification via Google Sign-In pour accéder à toutes les fonctionnalités de l'application.
- **CGU Page** : Présente les conditions générales d'utilisation de l'application.
- **History Page** : Affiche l'historique des sessions météorologiques précédentes de l'utilisateur.
- **Home Page** : Agit en tant que page d'accueil de l'application après s'être authentifié.
Elle indique la positon actuelle de l'utilisateur sur la carte interactive et les prévisions météorologiques actuelles en fonction de sa position.
- **Not-found Page**: Apparaît lorsqu'une URL spécifique n'est pas trouvée.

### Services
- **AuthGoogle Service** : Gère l'authentification des utilisateurs via Google OAuth.
- **Session Service** : Gère les sessions utilisateur et communique avec le backend pour récupérer les données météorologiques.


## Technologies utilisées
- [Angular](https://angular.io/): Framework JavaScript open-source, développé par Google, utilisé pour construire l'application web.
- [Bootstrap](https://getbootstrap.com/) : Framework front-end open-source, utilisé pour faciliter la conception et le développement d'interfaces utilisateur réactives et mobiles.
- [Google OAuth](https://developers.google.com/identity/protocols/oauth2?hl=fr) : Service d'authentification utilisé pour permettre aux utilisateurs de se connecter à l'application en utilisant leur compte Google.
- [API Leaflet](https://leafletjs.com/): API, bibliothèque JavaScript utilisée pour afficher des cartes interactives.
- [API OpenWeather](https://openweathermap.org/): API Utilisée pour récupérer les conditions météorologiques en temps réel en fonction de la position géographique de l'utilisateur.


## Configuration
L'application utilise les environnements de développement pour gérer les variables spécifiques à chaque environnement, telles que les clés API et les URL de backend.

### Développement
1. Clônez le dépôt depuis Github.
2. Installation des dépendances: Exécutez la commande `npm install`
3. Inscrire les variables d'environnements dans les fichiers en question
4. Tester l'application localement: Exécutez la commande `ng serve`

### Éléments nécessaires pour accéder à la solution:
- Un appareil compatible avec une connexion Internet.
- Un navigateur web moderne tel que Google Chrome, Mozilla Firefox, ou Safari.
- Un compte Google valide pour l'authentification via Google sign-in.


---

*Note : Ce code représente la partie cliente de l'application. Assurez-vous de lancer l'API côté serveur avant d'utiliser l'application côté client.*

*Assurez-vous que les liens vers les bibliothèques et fichiers JavaScript/CSS externes sont toujours valides au moment de l'exécution. Mise à jour recommandée pour les versions les plus récentes des bibliothèques.*