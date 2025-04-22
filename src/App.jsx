import Header from './components/Header';
import Overview from './components/Overview';
import Objectives from './components/Objectives';
import TypesOfDiabetes from './components/TypesOfDiabetes';
import OGTT from './components/OGTT';
import Procedure from './components/Procedure';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Overview />
      <Objectives />
      <TypesOfDiabetes />
      <OGTT />
      <Procedure />
      <Footer />
    </div>
  );
}

export default App;