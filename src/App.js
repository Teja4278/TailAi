import React from 'react' ;
import Header from './components/Header'
import Home from './components/Home'
import AIWorkflowCards from './components/AIWorkflowCards';
import Banner from './components/Banner';
import Faqsection from './components/Faqsection';
import Aboutsection from './components/Aboutsection';
import Articlessection from './components/Articlessection';
import Contactsection from './components/Contactsection';
import Footer from './components/Footer';
function App() {
  return (
    <div>
  <Header />
  <Home />
  <AIWorkflowCards />
  <Banner />
  <Faqsection />
  <Aboutsection />
  <Articlessection />
  <Contactsection />
  <Footer />
    </div>
  )
}

export default App
