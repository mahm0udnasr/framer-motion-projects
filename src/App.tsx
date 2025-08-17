import Loader from "./components/Loader";
import ScrollIndicator from "./components/ScrollIndicator";

const App = () => {
  return (
    <div>
      {/* <h1 className="text-center p-5 text-xl font-bold text-teal-500 drop-shadow-md drop-shadow-teal-500">
        First Project
      </h1>
      <ScrollIndicator /> */}
      <h1 className="text-center p-5 text-xl font-bold text-teal-500 drop-shadow-md drop-shadow-teal-500">
        Second Project
      </h1>
      <Loader />
    </div>
  );
};

export default App;
