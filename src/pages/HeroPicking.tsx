import MainLayout from '../app/layouts/MainLayout';
import HeroCard from '../app/components/Card/heroCard'; // Adjust the import path as necessary
import { IMG } from '../app/config/asset';

const middleContent = (
  
  <div className="flex flex-col items-center">
     {/* Adjusted size here */}
     <h1 className='text-3xl md:text-4xl font-bold text-center'>Pick a Hero</h1>
    <div className="overflow-x-auto overflow-y-hidden h-[19] mb-28">
      <div className="flex space-x-5 max-w-[calc(3*16rem)]"> 
        {/* HeroCard instances */}
        <div className="flex-none">
          <HeroCard 
            title="Anika"  
            image={IMG.anika}
            skills={["Skill 1", "Skill 2", "Skill 3"]} 
            buttonLabel="Pick" 
            onButtonClick={() => console.log("Button 1 Clicked")} 
          />
        </div>
        <div className="flex-none">
          <HeroCard 
            title="Atri" 
            image={IMG.atri}
            skills={["Skill A", "Skill B", "Skill C"]} 
            buttonLabel="Pick" 
            onButtonClick={() => console.log("Button 2 Clicked")} 
          />
        </div>
        <div className="flex-none">
          <HeroCard 
            title="Faros" 
            image={IMG.faros}
            skills={["Skill X", "Skill Y", "Skill Z"]} 
            buttonLabel="Pick" 
            onButtonClick={() => console.log("Button 3 Clicked")} 
          />
        </div>
        <div className="flex-none">
          <HeroCard 
            title="Goshen" 
            image={IMG.goshen}
            skills={["Skill D", "Skill E", "Skill F"]} 
            buttonLabel="Pick" 
            onButtonClick={() => console.log("Button 4 Clicked")} 
          />
        </div>
        <div className="flex-none">
          <HeroCard 
            title="Jumka" 
            image={IMG.jumka}
            skills={["Skill G", "Skill H", "Skill I"]} 
            buttonLabel="Pick" 
            onButtonClick={() => console.log("Button 5 Clicked")} 
          />
        </div>
        <div className="flex-none">
          <HeroCard 
            title="Kidu" 
            image={IMG.kidu}
            skills={["Skill G", "Skill H", "Skill I"]} 
            buttonLabel="Pick" 
            onButtonClick={() => console.log("Button 6 Clicked")} 
          />
        </div>
        <div className="flex-none">
          <HeroCard 
            title="Mahui" 
            image={IMG.mahui}
            skills={["Burn", "Pillar", "Inferno"]} 
            buttonLabel="Pick" 
            onButtonClick={() => console.log("Button 6 Clicked")} 
          />
        </div>
        <div className="flex-none">
          <HeroCard 
            title="Mert" 
            image={IMG.mert}
            skills={["Skill G", "Skill H", "Skill I"]} 
            buttonLabel="Pick" 
            onButtonClick={() => console.log("Button 6 Clicked")} 
          />
        </div>
         <div className="flex-none">
          <HeroCard 
            title="Ogumi" 
            image={IMG.ogumi}
            skills={["Skill G", "Skill H", "Skill I"]} 
            buttonLabel="Pick" 
            onButtonClick={() => console.log("Button 6 Clicked")} 
          />
        </div>
         <div className="flex-none">
          <HeroCard 
            title="Sajik" 
            image={IMG.sajik}
            skills={["Skill G", "Skill H", "Skill I"]} 
            buttonLabel="Pick" 
            onButtonClick={() => console.log("Button 6 Clicked")} 
          />
        </div>
         <div className="flex-none">
          <HeroCard 
            title="Shai" 
            image={IMG.shai}
            skills={["Skill G", "Skill H", "Skill I"]} 
            buttonLabel="Pick" 
            onButtonClick={() => console.log("Button 6 Clicked")} 
          />
        </div>
         <div className="flex-none">
          <HeroCard 
            title="Tala" 
            image={IMG.tala}
            skills={["Skill G", "Skill H", "Skill I"]} 
            buttonLabel="Pick" 
            onButtonClick={() => console.log("Button 6 Clicked")} 
          />
        </div>

      </div>
    </div>
    {/* <h1>About</h1>
    <select name="Player 1" id="">
      <option value="">Bot 1 (Player1)</option>
    </select>
    <select name="Player 1" id="">
      <option value="">Bot 1 (Player1)</option>
    </select> */}
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
