# SO PEKOCKO
## Introduction
So Pekocko est un projet d'étude visant à apprendre à créer une API avec le framework EXPRESS et la base de donné MongoDB.

Je m'appelle [Alexandre LEMAS](https://www.linkedin.com/in/alexandre-lemas), étudiant chez Openclassrooms, et voici mon projet N°6.

👇 Je vous invite à tester mon projet en suivant les instructions ci-dessous. 👇

## 💡 Comment télécharger et faire fonctionner So Pekocko ? 💡
### 1 - Télécharger ⬇
Je vous invite à appuyer sur le bouton vert nommé "Code" en haut à droite de cette page, puis cliquez sur "Download ZIP".
Une fois ça fait, dézippez le projet, et placez le quelque part sur votre ordinateur.

### 2 - Installer les packages 🛠
Attention, pour pouvoir installer les packages, il vous faut avoir installer Node et NPM sur votre ordinateur. Si ce n'est pas déjà fait, je vous invite à suivre ce lien => https://nodejs.org/fr/download/

Je vous invite à ouvrir un terminal dans le dossier du projet, puis à executer les commande suivante, une par une :

`cd backend`

`npm install`

`cd ../`

`npm install`

Une fois ces commandes effectué, deux dossiers "node_modules" sont apparu à la racine du projet, puis dans le dossier "backend".

### 2 - Lancer le projet 🚀
Je vous invite à ouvrir un terminal dans le dossier du projet, puis à executer les commande suivante, une par une :

`cd backend`

`nodemon serve`

Gardez votre terminal ouvert, et ouvrez en un deuxième à la racine du projet. Vous y executerez la commande ci-dessous :

`ng serve`

✨ Félicitation vous venez de terminer l'installation, et la configuration de ce projet. ✨

Je vous invite maintenant à l'ouvrir en cliquant sur le lien suivant => http://localhost:4200/


## 🔒 Respect du RGPD et des standards de l'OWASP 🔒

### 💾 Le RGPD 💾
La définition du RGPD selon la [CNIL](https://www.cnil.fr/fr/rgpd-de-quoi-parle-t-on) :

>Le sigle RGPD signifie « Règlement Général sur la Protection des Données » (en anglais « General Data Protection Regulation » ou GDPR). Le RGPD encadre le traitement des données personnelles sur le territoire de l’Union européenne.
Le contexte juridique s’adapte pour suivre les évolutions des technologies et de nos sociétés (usages accrus du numérique, développement du commerce en ligne…).
Ce nouveau règlement européen s’inscrit dans la continuité de la Loi française Informatique et Libertés de 1978 et renforce le contrôle par les citoyens de l’utilisation qui peut être faite des données les concernant.
Il harmonise les règles en Europe en offrant un cadre juridique unique aux professionnels. Il permet de développer leurs activités numériques au sein de l’UE en se fondant sur la confiance des utilisateurs.

#### En quoi So Pikocko respecte mes données ?
Chez So Pikocko, nous sécurisons vos données, et cryptons votre mot de passe avec le puissant module [Bcrypt](https://fr.wikipedia.org/wiki/Bcrypt). De plus nous supprimons vos données de notre base de données, à votre demande.

#### Je veux supprimer mes données
Si vous souhaitez que nous effacions vos données, nous vous invitons à contacter notre développeur [Alexandre LEMAS](https://www.linkedin.com/in/alexandre-lemas) qui s'en chargera dans les plus brefs délais.  

### 📝 Les standards de L'OWASP 📝
Définition de l'OWASP selon [l'OWASP](https://owasp.org/) :
>L'Open Web Application Security Project ® (OWASP) est une fondation à but non lucratif qui travaille à améliorer la sécurité des logiciels. Grâce à des projets de logiciels open source menés par la communauté, des centaines de sections locales dans le monde, des dizaines de milliers de membres et des conférences éducatives et de formation de premier plan, la Fondation OWASP est la source pour les développeurs et les technologues de sécuriser le Web.
=> Outils et ressources
=> Communauté et réseautage
=> Éducation et formation
Pendant près de deux décennies, des entreprises, des fondations, des développeurs et des bénévoles ont soutenu la Fondation OWASP et son travail.

#### So Pikocko respect le Top 10 de l'OWASP ? 
L'OWASP à créé le [Top 10 des principaux risques de sécurité des application Web](https://owasp.org/www-project-top-ten/) à respecter si on veut se prémunir des attaques les plus communes.

Voici une énumération des ces 10 principaux risques, et comment So Pikocko les respectes :

1. [Injection SQL](https://owasp.org/www-project-top-ten/2017/A1_2017-Injection)

    So Pikocko n'utilise pas SQL
2. [Authentification de mauvaise qualité](https://owasp.org/www-project-top-ten/2017/A2_2017-Broken_Authentication)

    Utilisation des TOKEN d'authentification
3. [Exposition de données sensibles](https://owasp.org/www-project-top-ten/2017/A3_2017-Sensitive_Data_Exposure)

    Utilisation du Package BCRYPT, pour crypter les mot de passe
4. [XML Entités externes (XXE)](https://owasp.org/www-project-top-ten/2017/A4_2017-XML_External_Entities_(XXE))

    So Pikocko utilise le format JSON et non XML
5. [Manque dans le contrôle d'accès](https://owasp.org/www-project-top-ten/2017/A5_2017-Broken_Access_Control)

    Les routes de l'API sont sécurisées, et accessibles seulement avec le TOKEN d'authentification. De plus nous utilisons la dernière version d'EXPRESS.
    
