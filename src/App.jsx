import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import ClickButton from './components/ClickButton'
import ToggleSwitch from './components/ToggleSwitch'
import ProfileCard from './components/ProfileCard'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <List />
      <ClickButton />
      <ToggleSwitch />
      <ProfileCard
        name="TSOLER HAYITIAN"
        role="Frontend-utvecklare"
        initials="TH"
      />
      <Footer />
    </>
  )
}

export default App
