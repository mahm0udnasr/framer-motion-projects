import DraggableCard from "./components/DraggableCard";
import Loader from "./components/Loader";
import ScrollIndicator from "./components/ScrollIndicator";

const App = () => {
  return (
    <div>
      {/* <h1 className="text-center p-5 text-xl font-bold text-teal-500 drop-shadow-md drop-shadow-teal-500">
        First Project
      </h1>
      <ScrollIndicator /> */}
      {/* <h1 className="text-center p-5 text-xl font-bold text-teal-500 drop-shadow-md drop-shadow-teal-500">
        Second Project
      </h1>
      <Loader /> */}
      <h1 className="text-center p-5 text-xl font-bold text-teal-500 drop-shadow-md drop-shadow-teal-500">
        Third Project
      </h1>
      <div className="flex items-center justify-center h-[100vh]">
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
      </div>
    </div>
  );
};

export default App;
