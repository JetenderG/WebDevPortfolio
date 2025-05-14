import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';
import Navigation from './components/navigation';
import MainContainer from './components/main/main_container';
function App() {
  return (
    <div className="App">
      
      <Navigation />
        <MainContainer/>
      <Footer/>
    </div>
  );
}

export default App;
