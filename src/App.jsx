import LasseMelcherSite from './LasseMelcherSite'
import { LanguageProvider } from './lib/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <LasseMelcherSite />
    </LanguageProvider>
  )
}

export default App
