import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import ClickButton from './components/ClickButton'
import ToggleSwitch from './components/ToggleSwitch'
import ProfileCard from './components/ProfileCard'
import TaskList from './components/TaskList'
import StatusBadge from './components/StatusBadge'
import ProgressBar from './components/ProgressBar'

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
      <TaskList
        tasks={[
          { id: 1, text: "Handla mat", done: true },
          { id: 2, text: "Städa", done: false },
        ]}
      />
      <StatusBadge status="active" />
      <StatusBadge status="pending" />
      <StatusBadge status="inactive" />
      <ProgressBar percent={65} />
      <Footer />
    </>
  )
}

export default App
