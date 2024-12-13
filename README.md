# Gestion d'offres de formations maritimes

## Technologies utiliser

- HTML
- CSS
- JavaScript côté client
- Node.JS
- Express
- EJS
- MySQL

## Ce qui est demander

Développer une plateforme pour saisir des nouveaux étudiants, de proposer des offres de formation.

## INITIALISATION

Création de notre dossier : `mkdir gestionOffreMaritime`

initialisation de notre projet : `npm init`

### Instalation des différents pacquets **npm** que l'on va utiliser

```bash
npm install express --save
npm install ejs
npm install express-ejs-layouts
npm install express-session
npm install mysql2
npm install nodemon
npm install dotenv

```

### Création de fichier `.gitignore` pour exclure des fichiers et/ou des dossiers dans le git

```bash
touch .gitignore
```

### Initialisation de **git** dans notre projet

```bash
git init
git branch -M main
git add .
git commit -m "Mon_message"
git push -u origin main
```

## Structure du projet

### BASE DE DONNE

```sql
CREATE DATABASE offre_formation_maritime;

USE offre_formation_maritime;

/* Pour les eleves */
CREATE TABLE identification(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(155) NOT NULL,
    prenom VARCHAR(155) NOT NULL,
    email VARCHAR(155) NOT NULL
);

/* Pour les personnels */
CREATE TABLE admin(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nomIdentifiant VARCHAR(155) NOT NULL,
    password VARCHAR(155) NOT NULL
);

/* pour les formations*/
CREATE TABLE formation(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    titreFormation VARCHAR(155) NOT NULL,
    detailFormation VARCHAR(200) NOT NULL,
    lieuFormation VARCHAR(100) NOT NULL
);

```
