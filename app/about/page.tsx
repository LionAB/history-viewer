import IconCloud from "@/components/magicui/icon-cloud";
 
const slugs = [
  "typescript",
    "nextdotjs",
    "tailwindcss",
    "github",
    "render",
    "visualstudiocode",
    "leaflet",
    "shadcnui",

];
 
export default function About(){
    return (
    <>
      <div className="flex flex-col p-20 ">
        <div className="my-6">
     <h1 className="my-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">HistoryViewer c'est quoi ? 🤔</h1>

    <p>HistoryViewer est Avant tout un  projet  qui permet aux utilisateurs de localiser des événements historiques sur une carte interactive.<br/>
     Grâce à cette application, les passionnés d'histoire, les étudiants et les chercheurs peuvent explorer des événements marquants de différentes époques et géographies, et visualiser les connexions entre eux de manière intuitive.</p>
   </div>
   <div className="my-6">
    <h2 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">Comment ça marche ?</h2>
    <p>Les utilisateurs peuvent rechercher des événements historiques en fonction de leur emplacement et  de leur catégorie (pour le moment...). Ils peuvent également ajouter des événements historiques à leur favoris. </p>
</div>
<div className="mt-6">
    <h2 className="my-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white"> C'est fait comment ?</h2>
   
    <div className="flex flex-row flex-wrap">
        
        <div className="text-stack w-2/4 min-w-52">
            
            <p>Le frontend de HistoryViewer est construit avec Next.js, Tailwind CSS et TypeScript. La carte interactive est basée sur la bibliothèque de cartographie open-source Leaflet. L'interface utilisateur est conçue pour être simple et intuitive, avec des fonctionnalités  de filtrage pour faciliter l'exploration des événements historiques.</p>
            <br/>
            <ul className="list-disc list-inside">
                <li>Next.js</li>
                <li>Leaflet</li>
                <li>Tailwind CSS</li>
                <li>Shadcn</li>
                <li>TypeScript</li>
            </ul>
        </div>
        <div className="anim-stack flex-1">
        <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden  bg-background px-20 pb-20 pt-8 ">
            <IconCloud iconSlugs={slugs} />
        </div>
        </div>
    </div>
    </div>
    </div>
    </>
        
    );
}