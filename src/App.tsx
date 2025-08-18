import AdvancedSidebar from "./components/AdvancedSidebar";
import Carousel from "./components/Carousel";
import DraggableCard from "./components/DraggableCard";
import Loader from "./components/Loader";
import ProgressSteps from "./components/ProgressSteps";
import ScrollCarousel from "./components/ScrollCarousel";
import ScrollIndicator from "./components/ScrollIndicator";
import StickyNav from "./components/StickyNav";

const App = () => {
  return (
    <div>
      {/*<ScrollIndicator /> */}

      {/*<Loader /> */}

      {/* <div className="flex items-center justify-center h-[100vh]">
        <DraggableCard
          style={{
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
          }}
        >
          Card 1
        </DraggableCard>
        <DraggableCard
          style={{
            background: "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)",
          }}
        >
          Card 2
        </DraggableCard>
        <DraggableCard
          style={{
            background: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
          }}
        >
          Card 3
        </DraggableCard>
      </div> */}

      {/* <div className="flex items-center justify-center h-screen">
        <Carousel />
      </div>  */}

      {/* <div className="flex justify-center items-center h-screen w-full">
        <AdvancedSidebar />
      </div> */}

      {/* <ScrollCarousel /> */}

      {/* <StickyNav /> */}
      <ProgressSteps />
    </div>
  );
};

export default App;
