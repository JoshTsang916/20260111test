import './index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import StorySection from './components/StorySection'
import ValuesSection from './components/ValuesSection'
import TeamSection from './components/TeamSection'
import AchievementsSection from './components/AchievementsSection'
import PressSection from './components/PressSection'
import ContactSection from './components/ContactSection'

// 主應用程式元件 - Josh AI 自動化顧問品牌網站
// 採用 Solarpunk 風格與 Eco Garden 配色方案
function App() {
  return (
    <div className="min-h-screen bg-mint-cream">
      {/* 導覽列 - 固定於頂部 */}
      <Navbar />

      {/* 主要內容區塊 */}
      <main>
        <HeroSection />
        <StorySection />
        <ValuesSection />
        <TeamSection />
        <AchievementsSection />
        <PressSection />
        <ContactSection />
      </main>

      {/* 頁腳 */}
      <Footer />
    </div>
  )
}

export default App
