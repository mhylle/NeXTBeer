# NeXTBeer
<!-- Badges section here. -->
[![Build Status](https://travis-ci.org/mhylle/nextbeer.svg?branch=master)](https://travis-ci.org/mhylle/nextbeer)

[![Dependency Status](https://david-dm.org/mhylle/nextbeer.svg)](https://david-dm.org/mhylle/nextbeer.svg)


[![npm](https://img.shields.io/npm/v/npm.svg)]()

<!--[![npm](https://img.shields.io/npm/v/%40angular/cli/next.svg)][npm-badge-url]-->
<!--[![npm](https://img.shields.io/npm/l/@angular/cli.svg)][npm-badge-url]-->
<!--[![npm](https://img.shields.io/npm/dm/@angular/cli.svg)][npm-badge-url]-->

The running version of the application can be found
https://mhylle.github.io/nextbeer/

NeXTBeer is a page designed to help inform Team Integration when the next beer will be served.

## Requirements
* 
* Mail functionality
* Schedule the next beer tasting
* Automatically determine who should give the next beer
* ?? 


test
## FRS
Baggrund
Hos kunden opleves et stigende behov for at kunne danne sig et overblik over fremtidige øl serveringer. Den nuværende løsning tillader en digitalløs koordinering blandt brugerne, hvorfor der ofte opleves en total forvirring af hvem som er næste øl giver. Dette har resulteret i et utal af UTH’er i slutbrugerens arbejdssituation. 

Der udvikles derfor en browserbaseret EDB løsning, som muliggør en digital koordinering af fremtidige øl-serveringer samt en løsning hvor slutbrugeren får det fornødne overblik over fremtidige øl-servering. I udviklingen vil der i høj grad være fri leg fra udvikleren/udviklernes side til at udvikle den bedst mulige løsning. Dvs. udviklerens egne implementerings- og udviklingsidéer vægtes højt. Fra kundes side lægges der op til en meget agile udviklingsproces. Kunden har oplyst at man i høj grad vil give folkene bag NextBEER lov til at komme på nye implementeringsmuligheder undervejs. 

#Requirements

###Need to have
1.	Det skal være muligt fra en brugervenlig GUI at tilføje/registrerer en øl-servering (event) i fremtiden.
2.	Det skal være muligt at tilføje følgende informationer i forbindelse med registrering af en fremtidig øl-servering
      1.	Mandatory info:
            1. Titel på øl
            1. Navn på bryghus
            1. Forventet serveringsform, dvs. flaske, dåse, fad/fustage etc. 
            1. Dato og klokkeslæt for servering
            1. Lokation for serveringen
      2.	Optional info
            1.	Beskrivelse af øl (fritekst)
            1.	Givers personlige rating af øl
            1.	Evt. mulighed for tags

3. Det skal være muligt at se tidspunkt, info samt et nedtællingsur for næstkommende øl-servering.
4. Det skal være muligt at se fremtidige registreret øl-servering i en kalender-lignende widget et sted på GUI’en
5. GUI’en skal være optimeret til storskærmsvisning 24/7
6. User management system

### Nice to have
6. Det skal være muligt at oprette sig som bruger i NextBEER
7.	En bruger skal have mulighed for at oprette events
8.	Den enkelte bruger skal have mulighed for at give kommentarer på en registreret fremtidig øl-servering event
9.	En bruger skal have mulighed for at angive ratings på øl
10.	Responsive UI design således NextBEER kan benyttes optimalt på mobil
11.	Integration til ’Untapped’ 

Leverance
Der accepteres en løsning hvor need-to-have funktionalitet leveres i første iteration. Senere kan videreudvikling patches.




#How to develop 


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
