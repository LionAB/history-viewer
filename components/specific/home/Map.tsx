"use client";

import { MapContainer, TileLayer, useMap ,Marker,Popup, MapContainerProps} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { CircleX, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { useState,useRef } from 'react';
import Filter from './Filter';
import FlyToMarker from './FlyToMarker';
interface Evenement {
    id:number;
    title:string;
    description:string;
    position:[number,number];
    category:string;
    year:number;
}
const defaultPosition:[number,number] = [46.5397,2.4303];
const icon:Icon =new Icon({
  iconUrl: "/marker.svg",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})
const eventsData :Evenement[]=
[
  {
    id: 1,
    title: "Débarquement de Normandie (D-Day)",
    description: "Les forces alliées ont débarqué sur les plages de Normandie, France, le 6 juin 1944, marquant un tournant décisif de la Seconde Guerre mondiale.",
    position: [49.4144, -0.8322],
    category: "Guerre",
    year: 1944
  },
  {
    id: 2,
    title: "Prise de la Bastille",
    description: "Le 14 juillet 1789, les révolutionnaires ont pris d'assaut la prison de la Bastille, un événement clé du début de la Révolution française.",
    position: [48.853, 2.369],
    category: "Révolution",
    year: 1789
  },
  {
    id: 3,
    title: "Bataille de Waterloo",
    description: "Napoléon Bonaparte a été défait à la bataille de Waterloo le 18 juin 1815, mettant fin à son règne en tant qu'Empereur des Français.",
    position: [50.6804, 4.4125],
    category: "Guerre",
    year: 1815
  },
  {
    id: 4,
    title: "Traité de Versailles",
    description: "Signé le 28 juin 1919, le traité de Versailles a officiellement mis fin à la Première Guerre mondiale.",
    position: [48.8049, 2.1204],
    category: "Diplomatie",
    year: 1919
  },
  {
    id: 5,
    title: "Manifestations de mai 1968",
    description: "Une période de troubles civils en France durant mai 1968, caractérisée par des manifestations, des grèves et l'occupation d'universités et d'usines.",
    position: [48.8566, 2.3522],
    category: "Politique",
    year: 1968
  },
  {
    id: 6,
    title: "Libération de Paris",
    description: "Paris a été libérée de l'occupation allemande le 25 août 1944, pendant la Seconde Guerre mondiale.",
    position: [48.8566, 2.3522],
    category: "Guerre",
    year: 1944
  },
  {
    id: 7,
    title: "Édit de Nantes",
    description: "Émis le 13 avril 1598 par Henri IV de France, accordant des droits substantiels aux huguenots.",
    position: [47.2184, -1.5536],
    category: "Religieux",
    year: 1598
  },
  {
    id: 8,
    title: "Révolution française",
    description: "Une période de changements sociaux et politiques radicaux en France de 1789 à 1799, qui a profondément affecté l'histoire française et moderne.",
    position: [48.8566, 2.3522],
    category: "Révolution",
    year: 1789
  },
  {
    id: 9,
    title: "Bataille d'Azincourt",
    description: "Une grande victoire anglaise dans la guerre de Cent Ans qui a eu lieu le 25 octobre 1415.",
    position: [50.2918, 2.2029],
    category: "Guerre",
    year: 1415
  },
  {
    id: 10,
    title: "Chute du mur de Berlin",
    description: "Bien que cela ne se soit pas passé en France, la chute du mur de Berlin le 9 novembre 1989 a eu des implications politiques significatives en France et en Europe.",
    position: [52.5163, 13.3777],
    category: "Politique",
    year: 1989
  },
  {
    id: 11,
    title: "Couronnement de Napoléon",
    description: "Napoléon Bonaparte a été couronné Empereur des Français le 2 décembre 1804.",
    position: [48.8529, 2.3500],
    category: "Politique",
    year: 1804
  },
  {
    id: 12,
    title: "Bataille de Verdun",
    description: "Une des plus grandes et longues batailles de la Première Guerre mondiale, combattue du 21 février au 18 décembre 1916.",
    position: [49.1568, 5.3872],
    category: "Guerre",
    year: 1916
  },
  {
    id: 13,
    title: "Signature du traité de Maastricht",
    description: "Le traité de Maastricht, signé le 7 février 1992, a conduit à la création de l'Union européenne.",
    position: [50.8514, 5.6909],
    category: "Diplomatie",
    year: 1992
  },
  {
    id: 14,
    title: "Exécution de Louis XVI",
    description: "Le roi Louis XVI a été exécuté par guillotine le 21 janvier 1793, pendant la Révolution française.",
    position: [48.8566, 2.3522],
    category: "Révolution",
    year: 1793
  },
  {
    id: 15,
    title: "Règne de Louis XIV",
    description: "Le règne de Louis XIV, le Roi Soleil, de 1643 à 1715, marqua l'apogée de la monarchie absolue en France.",
    position: [48.8049, 2.1204],
    category: "Monarchie",
    year: 1643
  },
  {
    id: 16,
    title: "Bataille de Marignan",
    description: "Une bataille décisive dans les guerres d'Italie, combattue du 13 au 14 septembre 1515 par les forces de François Ier de France.",
    position: [45.3639, 9.2995],
    category: "Guerre",
    year: 1515
  },
  {
    id: 17,
    title: "Massacre de la Saint-Barthélemy",
    description: "Une série d'assassinats ciblés et de violences catholiques contre les huguenots le 24 août 1572.",
    position: [48.8566, 2.3522],
    category: "Religieux",
    year: 1572
  },
  {
    id: 18,
    title: "Bataille de Poitiers",
    description: "Une grande victoire anglaise pendant la guerre de Cent Ans qui a eu lieu le 19 septembre 1356.",
    position: [46.5802, 0.3404],
    category: "Guerre",
    year: 1356
  },
  {
    id: 19,
    title: "Traité de Paris",
    description: "Le traité de Paris, signé en 1783, a mis fin à la guerre d'indépendance américaine.",
    position: [48.8566, 2.3522],
    category: "Diplomatie",
    year: 1783
  },
  {
    id: 20,
    title: "Bataille de Tours",
    description: "Combattue le 10 octobre 732, la bataille a arrêté l'avancée nord de l'Islam depuis la péninsule ibérique.",
    position: [47.3941, 0.6848],
    category: "Guerre",
    year: 732
  },
  {
    id: 21,
    title: "Traité de Tordesillas",
    description: "Signé le 7 juin 1494, ce traité divise le Nouveau Monde entre les royaumes d'Espagne et du Portugal.",
    position: [40.9744, -8.1078],
    category: "Diplomatie",
    year: 1494
  },
  {
    id: 22,
    title: "Concile de Trente",
    description: "Tenue de 1545 à 1563, cette série de réunions ecclésiastiques a initié la Contre-Réforme.",
    position: [46.0679, 11.1213],
    category: "Religieux",
    year: 1545
  },
  {
    id: 23,
    title: "Traité de Westphalie",
    description: "Signé en 1648, il mit fin à la guerre de Trente Ans et marqua un tournant dans l'histoire de la diplomatie européenne.",
    position: [52.3792, 9.7671],
    category: "Diplomatie",
    year: 1648
  },
  {
    id: 24,
    title: "Réforme Protestante",
    description: "Initiée par Martin Luther en 1517, elle provoqua une scission dans l'Église chrétienne.",
    position: [51.9674, 11.0562],
    category: "Religieux",
    year: 1517
  },
  {
    id: 25,
    title: "Accords de Camp David",
    description: "Signés en 1978, ces accords de paix entre Israël et l'Égypte ont été un jalon dans les relations internationales au Moyen-Orient.",
    position: [39.6483, -77.4638],
    category: "Diplomatie",
    year: 1978
  },
  {
    id: 26,
    title: "Guerre de Sécession",
    description: "Conflit civil aux États-Unis de 1861 à 1865 entre les États du Nord et ceux du Sud.",
    position: [39.7837, -100.4459],
    category: "Guerre",
    year: 1861
  },
  {
    id: 27,
    title: "Premier vol habité",
    description: "Le 12 avril 1961, Youri Gagarine devint le premier homme à voyager dans l'espace.",
    position: [55.7558, 37.6176],
    category: "Other",
    year: 1961
  },
  {
    id: 28,
    title: "Révolution russe",
    description: "En 1917, la révolution bolchevique mena à la création de l'Union soviétique.",
    position: [55.7558, 37.6176],
    category: "Politique",
    year: 1917
  },
  {
    id: 29,
    title: "Guerre des Six Jours",
    description: "En juin 1967, ce conflit armé entre Israël et plusieurs États arabes a redéfini les frontières du Moyen-Orient.",
    position: [31.7683, 35.2137],
    category: "Guerre",
    year: 1967
  },
  {
    id: 30,
    title: "Crise des missiles de Cuba",
    description: "En octobre 1962, une confrontation entre les États-Unis et l'Union soviétique faillit provoquer une guerre nucléaire.",
    position: [23.1136, -82.3666],
    category: "Politique",
    year: 1962
  },
  {
    id: 31,
    title: "Fondation de l'ONU",
    description: "Le 24 octobre 1945, les Nations Unies ont été créées pour promouvoir la paix mondiale.",
    position: [40.7128, -74.0060],
    category: "Diplomatie",
    year: 1945
  },
  {
    id: 32,
    title: "Guerre du Vietnam",
    description: "Un conflit prolongé de 1955 à 1975 opposant le Nord communiste et le Sud soutenu par les États-Unis.",
    position: [21.0285, 105.8542],
    category: "Guerre",
    year: 1955
  },
  {
    id: 33,
    title: "Déclaration d'indépendance des États-Unis",
    description: "Le 4 juillet 1776, les treize colonies américaines déclarèrent leur indépendance de la Grande-Bretagne.",
    position: [39.9526, -75.1652],
    category: "Politique",
    year: 1776
  },
  {
    id: 34,
    title: "Traité de Gand",
    description: "Signé le 24 décembre 1814, ce traité mit fin à la guerre de 1812 entre les États-Unis et le Royaume-Uni.",
    position: [51.0543, 3.7174],
    category: "Diplomatie",
    year: 1814
  },
  {
    id: 35,
    title: "Révolution mexicaine",
    description: "Commencée en 1910, cette révolution entraîna de grands changements politiques et sociaux au Mexique.",
    position: [19.4326, -99.1332],
    category: "Politique",
    year: 1910
  },
  {
    id: 36,
    title: "Invention de l'imprimerie",
    description: "En 1440, Johannes Gutenberg inventa l'imprimerie, révolutionnant la diffusion des connaissances.",
    position: [49.9929, 8.2473],
    category: "Other",
    year: 1440
  },
  {
    id: 37,
    title: "Conquête de Constantinople",
    description: "Le 29 mai 1453, les Ottomans prirent Constantinople, marquant la fin de l'Empire byzantin.",
    position: [41.0082, 28.9784],
    category: "Guerre",
    year: 1453
  },
  {
    id: 38,
    title: "Seconde croisade",
    description: "De 1147 à 1149, cette expédition militaire chrétienne visait à reconquérir la Terre Sainte.",
    position: [31.7683, 35.2137],
    category: "Religieux",
    year: 1147
  },
  {
    id: 39,
    title: "Chute de Constantinople",
    description: "La chute de Constantinople aux mains des Ottomans le 29 mai 1453 marqua la fin de l'Empire byzantin.",
    position: [41.0082, 28.9784],
    category: "Guerre",
    year: 1453
  },
  {
    id: 40,
    title: "Guerre de Cent Ans",
    description: "Conflit entre la France et l'Angleterre de 1337 à 1453, caractérisé par une série de batailles épiques.",
    position: [48.8566, 2.3522],
    category: "Guerre",
    year: 1337
  },
  {
    id: 41,
    title: "Indépendance du Ghana",
    description: "Le Ghana devint le premier pays africain à obtenir son indépendance du Royaume-Uni le 6 mars 1957.",
    position: [5.6037, -0.1870],
    category: "Politique",
    year: 1957
  },
  {
    id: 42,
    title: "Nelson Mandela élu président",
    description: "Nelson Mandela devint le premier président noir de l'Afrique du Sud après les premières élections multiraciales en 1994.",
    position: [-25.7461, 28.1881],
    category: "Politique",
    year: 1994
  },
  {
    id: 43,
    title: "Massacre de Sharpeville",
    description: "Le 21 mars 1960, une manifestation pacifique contre l'apartheid à Sharpeville, Afrique du Sud, fut réprimée violemment, faisant 69 morts.",
    position: [-26.6868, 27.8569],
    category: "Politique",
    year: 1960
  },
  {
    id: 44,
    title: "Révolution égyptienne",
    description: "En 1952, le Mouvement des Officiers libres renversa la monarchie égyptienne, menant à la création de la République égyptienne.",
    position: [30.0444, 31.2357],
    category: "Politique",
    year: 1952
  },
  {
    id: 45,
    title: "Indépendance de l'Algérie",
    description: "Après une guerre de huit ans contre la France, l'Algérie obtint son indépendance le 5 juillet 1962.",
    position: [36.7372, 3.0865],
    category: "Politique",
    year: 1962
  },
  {
    id: 46,
    title: "Décolonisation de l'Afrique",
    description: "Entre 1950 et 1975, de nombreux pays africains obtinrent leur indépendance des puissances coloniales européennes.",
    position: [9.0820, 8.6753],
    category: "Politique",
    year: 1960
  },
  {
    id: 47,
    title: "Génocide rwandais",
    description: "En 1994, environ 800 000 Tutsis et Hutus modérés furent massacrés en 100 jours au Rwanda.",
    position: [-1.9403, 29.8739],
    category: "Guerre",
    year: 1994
  },
  {
    id: 48,
    title: "Fin de l'apartheid en Afrique du Sud",
    description: "En 1991, les lois d'apartheid furent abrogées, mettant fin à des décennies de ségrégation raciale en Afrique du Sud.",
    position: [-25.7479, 28.2293],
    category: "Politique",
    year: 1991
  },
  {
    id: 49,
    title: "Révolution tunisienne",
    description: "En 2011, la révolution tunisienne conduisit à la chute du président Ben Ali, marquant le début du Printemps arabe.",
    position: [36.8065, 10.1815],
    category: "Politique",
    year: 2011
  },
  {
    id: 50,
    title: "Conférence de Berlin",
    description: "De 1884 à 1885, la Conférence de Berlin régla la colonisation et le partage de l'Afrique par les puissances européennes.",
    position: [52.5200, 13.4050],
    category: "Diplomatie",
    year: 1884
  },
  {
    id: 51,
    title: "Guerre d'indépendance de l'Angola",
    description: "De 1961 à 1974, l'Angola mena une guerre contre le Portugal pour obtenir son indépendance.",
    position: [-8.8390, 13.2894],
    category: "Guerre",
    year: 1975
  },
  {
    id: 52,
    title: "Indépendance du Kenya",
    description: "Le 12 décembre 1963, le Kenya obtint son indépendance du Royaume-Uni.",
    position: [-1.2921, 36.8219],
    category: "Politique",
    year: 1963
  },
  {
    id: 53,
    title: "Bataille d'Omdurman",
    description: "Le 2 septembre 1898, une force britannique-égyptienne défit l'armée des Mahdistes au Soudan, consolidant la domination britannique.",
    position: [15.6415, 32.4807],
    category: "Guerre",
    year: 1898
  },
  {
    id: 54,
    title: "Conférence d'Accra",
    description: "En 1958, la première conférence des États africains indépendants s'est tenue à Accra, Ghana, pour discuter de la décolonisation.",
    position: [5.6037, -0.1870],
    category: "Diplomatie",
    year: 1958
  },
  {
    id: 55,
    title: "Création de l'Union africaine",
    description: "Le 9 juillet 2002, l'Union africaine fut créée pour remplacer l'Organisation de l'unité africaine, visant à promouvoir l'intégration et la coopération entre les États africains.",
    position: [9.0300, 38.7400],
    category: "Diplomatie",
    year: 2002
  },
]



export default function Map() {
  const [activeEvent, setActiveEvent] = useState<Evenement | null>(null);
  const popupElRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [map, setMap] = useState<MapContainerProps| null>(null);
 
  const [favoris, setFavoris] = useState<number[]>(() =>{
  const sauvegardeFavoris = localStorage.getItem('favoris');
  return sauvegardeFavoris ? JSON.parse(sauvegardeFavoris) : [];
});
const handleListItemClick = (eventId: number) => {
  //find by id
  const event = eventsData.find((event) => event.id === eventId);

  if (event) {
    //set the active to open the popup
    setActiveEvent(event);
  }
};
console.log(activeEvent)

const handleClickFavoris = (eventId:number) => {
  console.log('ajout favoris', eventId)

  let updatedFavoris = favoris.filter((id) => id !== eventId);
  if(!favoris.includes(eventId)){
    updatedFavoris = [eventId, ...updatedFavoris];
  
  }
 
  setFavoris(updatedFavoris);
  localStorage.setItem('favoris', JSON.stringify(updatedFavoris));
  
  
}
const handleMapReady = () => {
  if (!map) return;
  setMap(map);

}
/*  const handleClikClosePopup = () => {
  if (!popupElRef.current || !map) return;
  popupElRef.current._close();
 } */


    return(
      <div className="content max-h-500px ">
        <div className=" map-content flex flex-col flex-grow-7 gap-6 h-[600px] ">
          <Filter setSelectedCategory={setSelectedCategory} />
            <MapContainer  center={defaultPosition} className="map-container -z-1" zoom={5} scrollWheelZoom={true} >
            <TileLayer
              attribution='&copy; OpenStreetMap France |&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
              zIndex={-12}
            />
            
          {eventsData
            .filter(
              (event) =>
                !selectedCategory || event.category === selectedCategory
            )
            .map((event) => {
              return (
                <Marker
                  key={event.id}
                  position={event.position}
                  icon={icon}
                  eventHandlers={{
                    click: () => {
                      setActiveEvent(event);
                    },
                  }}
                />
              );
            })}
            {activeEvent && (
                <Popup ref={popupElRef} position={activeEvent.position}  closeButton={true} eventHandlers={{
                remove: () => {
                  setActiveEvent(null);
                  console.log('remove active event', activeEvent)

                 },
                
                }}>
                  <div className="popup-inner flex justify-between ">
                    <h2 className="text-primary text-lg jsu">{activeEvent.title}</h2>{/* <Button onClick={()=>handleClikClosePopup} variant="ghost" size="icon">
          <CircleX className="text-red-500" /> 
        </Button>*/}
                  </div>
                  <p className="">
                    {activeEvent.description}
                  </p>
                  <p className="">{activeEvent.year}</p>
                  <p>{activeEvent.category}</p>
            
            <Button onClick={() => handleClickFavoris(activeEvent.id)}>
              {favoris.includes(activeEvent.id) ?(   <span role="img" aria-label="heart" className="">
                      ❌ Retirer Favoris
                    </span>
                    ) : (
                      <span role="img" aria-label="heart" className="">
                      ⭐ Ajouter Favoris
                    </span>
                    )}
            </Button>
            
            </Popup> )}
            {activeEvent && (
                <FlyToMarker position={activeEvent.position} zoomLevel={8} />
              )}
          </MapContainer>
        </div>
      <div className='liked-events  flex flex-col  grow-2'>
        <h2 className=" text-2xl mb-5">
        <span role="img" aria-label="heart" className="">
                  ⭐ Evenement(s) favoris
        </span></h2>
       
         <div className="flex-1 overflow-y-auto  max-h-500px">
          <div className="container-fav flex flex-col gap-4 p-4  ">
          {favoris
            .map((id) => {
              return eventsData.find((event) => event.id === id);
            })
            .map((event) => {
              return (
                <div className="flex flex-col items-start gap-2 rounded-md border border-gray-200 p-4 text-sm transition-all hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800"
                  key={event?.id}
                  
                  onClick={() => {
                    handleListItemClick(event?.id as number);
                  }}
                >
                  
                  <div className="flex w-full items-center gap-1">
                    <Star className='mr-6'/>
                    <div >{event?.title}</div>
                    <div className="ml-auto text-xs text-gray-500 dark:text-gray-400">{event?.year}</div>
                </div>
                <div className="line-clamp-2 text-gray-500 dark:text-gray-400">{event?.description}</div>
               
              </div>
              );
            })}
            {/* <div className="flex flex-col items-start gap-2 rounded-md border border-gray-200 p-4 text-sm transition-all hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800">
                  
                  <div className="flex w-full items-center gap-1">
                    <Star className='mr-6'/>
                    <div >Titre</div>
                    <div className="ml-auto text-xs text-gray-500 dark:text-gray-400">XXXX</div>
                </div>
                <div className="line-clamp-2 text-gray-500 dark:text-gray-400">Allied forces landed on the beaches of Normandy, France on June 6, 1944, marking a pivotal turn in World War II.</div>
               
              </div>
              <div className="flex flex-col items-start gap-2 rounded-md border border-gray-200 p-4 text-sm transition-all hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800">
                  
                  <div className="flex w-full items-center gap-1">
                    <Star className='mr-6'/>
                    <div >Titre</div>
                    <div className="ml-auto text-xs text-gray-500 dark:text-gray-400">XXXX</div>
                </div>
                <div className="line-clamp-2 text-gray-500 dark:text-gray-400">Allied forces landed on the beaches of Normandy, France on June 6, 1944, marking a pivotal turn in World War II.</div>
               
              </div>
              <div className="flex flex-col items-start gap-2 rounded-md border border-gray-200 p-4 text-sm transition-all hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800">
                  
                  <div className="flex w-full items-center gap-1">
                    <Star className='mr-6'/>
                    <div >Titre</div>
                    <div className="ml-auto text-xs text-gray-500 dark:text-gray-400">XXXX</div>
                </div>
                <div className="line-clamp-2 text-gray-500 dark:text-gray-400">Allied forces landed on the beaches of Normandy, France on June 6, 1944, marking a pivotal turn in World War II.</div>
               
              </div>
              <div className="flex flex-col items-start gap-2 rounded-md border border-gray-200 p-4 text-sm transition-all hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800">
                  
                  <div className="flex w-full items-center gap-1">
                    <Star className='mr-6'/>
                    <div >Titre</div>
                    <div className="ml-auto text-xs text-gray-500 dark:text-gray-400">XXXX</div>
                </div>
                <div className="line-clamp-2 text-gray-500 dark:text-gray-400">Allied forces landed on the beaches of Normandy, France on June 6, 1944, marking a pivotal turn in World War II.</div>
               
              </div>
              <div className="flex flex-col items-start gap-2 rounded-md border border-gray-200 p-4 text-sm transition-all hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800">
                  
                  <div className="flex w-full items-center gap-1">
                    <Star className='mr-6'/>
                    <div >Titre</div>
                    <div className="ml-auto text-xs text-gray-500 dark:text-gray-400">XXXX</div>
                </div>
                <div className="line-clamp-2 text-gray-500 dark:text-gray-400">Allied forces landed on the beaches of Normandy, France on June 6, 1944, marking a pivotal turn in World War II.</div>
               
              </div>
              <div className="flex flex-col items-start gap-2 rounded-md border border-gray-200 p-4 text-sm transition-all hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800">
                  
                  <div className="flex w-full items-center gap-1">
                    <Star className='mr-6'/>
                    <div >Titre</div>
                    <div className="ml-auto text-xs text-gray-500 dark:text-gray-400">XXXX</div>
                </div>
                <div className="line-clamp-2 text-gray-500 dark:text-gray-400">Allied forces landed on the beaches of Normandy, France on June 6, 1944, marking a pivotal turn in World War II.</div>
               
              </div>
              <div className="flex flex-col items-start gap-2 rounded-md border border-gray-200 p-4 text-sm transition-all hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800">
                  
                  <div className="flex w-full items-center gap-1">
                    <Star className='mr-6'/>
                    <div >Titre</div>
                    <div className="ml-auto text-xs text-gray-500 dark:text-gray-400">XXXX</div>
                </div>
                <div className="line-clamp-2 text-gray-500 dark:text-gray-400">Allied forces landed on the beaches of Normandy, France on June 6, 1944, marking a pivotal turn in World War II.</div>
               
              </div>
              <div className="flex flex-col items-start gap-2 rounded-md border border-gray-200 p-4 text-sm transition-all hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800">
                  
                  <div className="flex w-full items-center gap-1">
                    <Star className='mr-6'/>
                    <div >Titre</div>
                    <div className="ml-auto text-xs text-gray-500 dark:text-gray-400">XXXX</div>
                </div>
                <div className="line-clamp-2 text-gray-500 dark:text-gray-400">Allied forces landed on the beaches of Normandy, France on June 6, 1944, marking a pivotal turn in World War II.</div>
               
              </div>
              <div className="flex flex-col items-start gap-2 rounded-md border border-gray-200 p-4 text-sm transition-all hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800">
                  
                  <div className="flex w-full items-center gap-1">
                    <Star className='mr-6'/>
                    <div >Titre</div>
                    <div className="ml-auto text-xs text-gray-500 dark:text-gray-400">XXXX</div>
                </div>
                <div className="line-clamp-2 text-gray-500 dark:text-gray-400">Allied forces landed on the beaches of Normandy, France on June 6, 1944, marking a pivotal turn in World War II.</div>
               
              </div> */}
           
            
          </div>
        </div>
        </div>
    </div>
    )
}