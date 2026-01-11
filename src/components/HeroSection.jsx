import { Sparkles, Cpu, Users } from 'lucide-react'

// Hero Section - 主視覺區塊，展示核心價值主張與服務
export default function HeroSection() {
    const services = [
        {
            icon: Cpu,
            title: 'AI 自動化工作坊',
            description: '親手打造你的第一套自動化系統'
        },
        {
            icon: Sparkles,
            title: 'VibeCoding 實戰教學',
            description: '用直覺與 AI 對話，寫出屬於你的工具'
        },
        {
            icon: Users,
            title: '企業自動化諮詢',
            description: '客製化流程設計，優化營運效率'
        }
    ]

    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center section-padding pt-24 relative overflow-hidden"
        >
            {/* 背景裝飾 */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-emerald/10 rounded-full blur-3xl animate-pulse-soft" />
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-coral-orange/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto text-center relative z-10">
                {/* 主標題區 */}
                <div className="mb-12">
                    <p className="text-emerald font-medium mb-4 tracking-wide">
                        數位生態系的園丁
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-deep-teal mb-6 leading-tight">
                        與 AI 共築
                        <span className="text-emerald block md:inline"> 自動化未來</span>
                    </h1>
                    <p className="text-lg md:text-xl text-deep-teal/70 max-w-3xl mx-auto leading-relaxed">
                        在這個資訊過載的時代，我們不該被工具奴役，而該成為工具的創造者。
                        <br className="hidden md:block" />
                        我是 <strong className="text-emerald">Josh（昭巽）</strong>，你的 AI 自動化顧問。
                    </p>
                </div>

                {/* 副標題 */}
                <p className="text-deep-teal/60 max-w-2xl mx-auto mb-12">
                    協助個人與企業透過 n8n 與 VibeCoding，打造專屬的自動化工作流，
                    讓重複的勞動轉化為有機運轉的數位資產。
                </p>

                {/* CTA 按鈕 */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                    <a href="#contact" className="btn-primary text-lg px-8 py-4">
                        立即預約諮詢
                    </a>
                    <a href="#story" className="btn-secondary text-lg px-8 py-4">
                        了解更多
                    </a>
                </div>

                {/* 服務卡片 */}
                <div className="grid md:grid-cols-3 gap-6 mt-12">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="card-organic p-6 text-left hover:border-emerald/30 border border-transparent"
                        >
                            <service.icon className="w-10 h-10 text-emerald drop-shadow-sm mb-4" />
                            <h3 className="font-heading font-bold text-lg text-deep-teal mb-2">
                                {service.title}
                            </h3>
                            <p className="text-deep-teal/60 text-sm">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
