import AppSidebar from '@/components/company-profile/AppSidebar'
import MainContent from '@/components/company-profile/MainContent'
import DetailsPanel from '@/components/company-profile/DetailsPanel'

function App() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-background">
      <AppSidebar />
      <MainContent />
      <DetailsPanel />
    </div>
  )
}

export default App
