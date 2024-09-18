import Footer from "./components/Footer";
import Parent from "./components/Parent";
import AgeProvider from "./Context";

//
const App = () => {
  return (


    <AgeProvider >
      <div className="app">
        <Parent />
      </div>
      <Footer/>
    </AgeProvider>
    

  );
};

export default App;
