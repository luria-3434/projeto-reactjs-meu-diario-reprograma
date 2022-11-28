import { Header } from './components/Header'
import {Footer} from './components/Footer'
import {Cards} from './components/Cards'
import { Bio } from './components/Bio'
import './App.css'

function App() {


  return (
    <div className="App">
      <Header conteudo="Alguns Segredinhos Sobre Mim! "/>
      <Bio/>
      <Cards/>
      <Footer conteudo="Feito com amor e odio por Luria sob supervisão de Simara Conceição"/>
    </div>
  )
}

export default App
