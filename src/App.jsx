import Navbar from './components/Navbar'
import UseState from './components/UseState'
import Questions from './components/Questions'
import Conditional from './components/Conditional'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <UseState />
      <Questions />
      <Conditional />
      <Footer />
    </div>
  );
}

export default App;
