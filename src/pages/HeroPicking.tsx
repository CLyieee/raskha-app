import MainLayout from '../app/layouts/MainLayout';
import HeroCard from '../app/components/Card/heroCard'; // Adjust the import path as necessary
import { IMG } from '../app/config/asset';

const middleContent = (
  <div className="flex flex-col items-center font-nunito"> {/* Apply Nunito font here */}
    <h1 className='text-3xl md:text-4xl font-bold text-center font-macondo'>Pick a Hero</h1> {/* Apply Macondo font here */}
    <div className="overflow-x-auto overflow-y-hidden h-[19] mb-28">
      <div className="flex space-x-5 max-w-[calc(3*16rem)]"> 
        {/* HeroCard instances */}
        {[
          { title: "Anika", image: IMG.anika, skills: ["Skill 1", "Skill 2", "Skill 3"] },
          { title: "Atri", image: IMG.atri, skills: ["Skill A", "Skill B", "Skill C"] },
          { title: "Faros", image: IMG.faros, skills: ["Skill X", "Skill Y", "Skill Z"] },
          { title: "Goshen", image: IMG.goshen, skills: ["Skill D", "Skill E", "Skill F"] },
          { title: "Jumka", image: IMG.jumka, skills: ["Skill G", "Skill H", "Skill I"] },
          { title: "Kidu", image: IMG.kidu, skills: ["Skill G", "Skill H", "Skill I"] },
          { title: "Mahui", image: IMG.mahui, skills: ["Burn", "Pillar", "Inferno"] },
          { title: "Mert", image: IMG.mert, skills: ["Skill G", "Skill H", "Skill I"] },
          { title: "Ogumi", image: IMG.ogumi, skills: ["Skill G", "Skill H", "Skill I"] },
          { title: "Sajik", image: IMG.sajik, skills: ["Skill G", "Skill H", "Skill I"] },
          { title: "Shai", image: IMG.shai, skills: ["Skill G", "Skill H", "Skill I"] },
          { title: "Tala", image: IMG.tala, skills: ["Skill G", "Skill H", "Skill I"] },
        ].map((hero, index) => (
          <div className="flex-none" key={index}>
            <HeroCard 
              title={hero.title}  
              image={hero.image}
              skills={hero.skills} 
              buttonLabel="Pick" 
              onButtonClick={() => console.log(`Button ${index + 1} Clicked`)} 
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const HeroPicking = () => {
  return (
    <MainLayout
      leftContent={""}
      middleContent={middleContent}
      rightContent={""}
    />
  );
};
