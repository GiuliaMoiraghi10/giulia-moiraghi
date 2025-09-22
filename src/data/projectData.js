import brochurecdr2 from '../assets/portfolio/brochurecdr2.jpg';
import sclight from '../assets/portfolio/sclight.png';
import aeg from '../assets/portfolio/aeg.jpg';
import age from '../assets/portfolio/age.jpg';
import armocromia from '../assets/portfolio/armocromia.jpg';
import carnevale from '../assets/portfolio/carnevale.jpg';
import cdr from '../assets/portfolio/cdr.jpg';
import debra from '../assets/portfolio/debra.jpg';
import jeunesse from '../assets/portfolio/jeunesse.jpg';
import osteomedlab from '../assets/portfolio/osteomedlab.jpg';
import quadriblu from '../assets/portfolio/quadriblu.jpg';
import quadripiante from '../assets/portfolio/quadripiante.jpg';
import wedding from '../assets/portfolio/wedding.jpg';

import boolbnbimage from '../assets/portfolio/boolbnbimage.png';
import boolbnbmok from '../assets/portfolio/boolbnbmok.png';
import boolbnbvideo from '../assets/portfolio/boolbnbvideo.mp4';
import juicyimage from '../assets/portfolio/juicyimage.jpg';
import juicyvideo from '../assets/portfolio/juicyvideo.mp4';
import spasailorimage from '../assets/portfolio/spasailor.png';
import spasailorvideo from '../assets/portfolio/spasailor.mp4';
import taskmanagerimage from '../assets/portfolio/taskmanager.png';
import taskmanagervideo from '../assets/portfolio/taskmanager.mp4';
import { video } from 'framer-motion/client';

export const projects = [
    {
        id: 1,
        category: "Grafica",
        title: "Brochure",
        image: brochurecdr2,
        type: "image"
    },
    {
        id: 2,
        category: "Grafica",
        title: "Brochure",
        image: sclight,
        type: "image"
    },
    {
        id: 3,
        category: "Grafica",
        title: "Pieghevole",
        image: osteomedlab,
        type: "image"
    },
    {
        id: 4,
        category: "Grafica",
        title: "Locandina",
        image: jeunesse,
        type: "image"
    },
    {
        id: 5,
        category: "Grafica",
        title: "Arredamento",
        image: quadripiante,
        type: "image"
    },
    {
        id: 6,
        category: "Grafica",
        title: "Arredamento",
        image: quadriblu,
        type: "image"
    },
    {
        id: 7,
        category: "Grafica",
        title: "Wedding",
        image: wedding,
        type: "image"
    },
    {
        id: 8,
        category: "Grafica",
        title: "Locandina",
        image: armocromia,
        type: "image"
    },
    {
        id: 9,
        category: "Grafica",
        title: "Locandina",
        image: carnevale,
        type: "image"
    },
    {
        id: 10,
        category: "Grafica",
        title: "Locandina",
        image: debra,
        type: "image"
    },
    {
        id: 11,
        category: "Grafica",
        title: "Volantino",
        image: aeg,
        type: "image"
    },
    {
        id: 12,
        category: "Grafica",
        title: "Moduli",
        image: cdr,
        type: "image"
    },
    {
        id: 13,
        category: "Grafica",
        title: "Logo",
        image: age,
        type: "image"
    },
    {
        id: 14,
        category: "Web",
        title: "BoolBnb",
        image: boolbnbimage,
        type: "image",
        video: boolbnbvideo,
        description: "Progetto finale realizzato in team alla fine del percorso formativo presso Boolean. Questa web app è stata realizzata in due settimane e insieme abbiamo creato un sito di ricerca per affitto immobili chiamato Boolbnb. Tra le varie funzionalità implementate troviamo: ricerca tramite filtri dell'immobile desiderato, la possibilità di visionare tutti gli immobili presenti nel database, possibilità di caricare un nuovo immobile, lasciare recensioni e like e possibilità di contattare l'host. Progetto finale realizzato in team alla fine del percorso formativo presso Boolean. Questa web app è stata realizzata in due settimane e insieme abbiamo creato un sito di ricerca per affitto immobili chiamato Boolbnb. Tra le varie funzionalità implementate troviamo: ricerca tramite filtri dell'immobile desiderato, la possibilità di visionare tutti gli immobili presenti nel database, possibilità di caricare un nuovo immobile, lasciare recensioni e like e possibilità di contattare l'host. Competenze: React.js · Node.js · Express · MySQL"
    },
    {
        id: 15,
        category: "Web",
        title: "Juicy",
        image: juicyimage,
        type: "image",
        video: juicyvideo,
        description: "Ho progettato un e-commerce di succhi di frutta con Figma, puntando su un design fresco e armonioso. Ho scelto una palette di colori pastello per trasmettere leggerezza e benessere, integrando transizioni fluide per un’esperienza di navigazione moderna ed elegante. Competenze: Figma · Photoshop · Graphic Design · UX/UI"
    },
    {
        id: 16,
        category: "Web",
        title: "Spa Sailor",
        image: spasailorimage,
        type: "image",
        video: spasailorvideo,
        description: "Ho sviluppato una SPA in React ispirata a Sailor Moon, pensata per esplorare personaggi, oggetti e trasformazioni della serie. L’app consente ricerca, filtri, ordinamento alfabetico, schede di dettaglio e confronto tra elementi. È possibile salvare preferiti, rendendo l’esperienza personalizzata, fluida e in linea con lo stile dell’anime. Competenze: HTML5 · CSS · React.js · Tailwind · Front-end"
    },
    {
        id: 17,
        category: "Web",
        title: "Task Manager",
        image: taskmanagerimage,
        type: "image",
        video: taskmanagervideo,
        description: "Ho creato un Task Manager web che permette di gestire attività in modo semplice ed efficiente. Include filtri avanzati, ricerca ottimizzata, ordinamenti personalizzati e conferme tramite modali per azioni critiche. L’interfaccia curata e le prestazioni ottimizzate garantiscono un utilizzo fluido e professionale. Competenze: HTML5 · CSS · React.js · Tailwind · Front-end"
    },
];