
import React from 'react';
import MenuTop from './components/menu-top-header/MenuTop';
import Header from './components/header/Header/';
import Content from './components/content-center/Content/';
import Footer from './components/footer/Footer/';
import './assets/styles.css';



const App = () => {
  return (
    <div>
      <div>
      <MenuTop/>
      </div>
      <div>
      <Header/>
      </div> 
      <div>
        <Content/>
        </div> 
        <div>
          <Footer/>
          </div>    
      </div>
  )
}

export default App;