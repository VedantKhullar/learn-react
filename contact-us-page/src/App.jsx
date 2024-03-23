import './App.css';
import Navigation from './components/Navigation/Navigation';
import ContactHeader from './components/ContactHeader/ContactHeader';
import ContactBody from './components/ContactBody/ContactBody';

function App() {

  return (
    <div className='container'>
    <Navigation />
    <ContactHeader />
    <ContactBody />
    </div>
  )
}

export default App
