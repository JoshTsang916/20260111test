import { Headphones, Quote, ExternalLink, TrendingUp, BookOpen } from 'lucide-react'

// Press Section - 媒體與觀點
export default function PressSection() {
    const topics = [
        {
            icon: TrendingUp,
            title: '最新集數',
            description: '探討 VibeCoding 如何改變非工程師的職涯發展'
        },
        {
            icon: BookOpen,
            title: '熱門話題',
            description: '從體脂 34% 到 29.9% 的健身紀律如何應用於學習 AI'
        }
    ]

    return (
        <section id="press" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto">
                {/* 標題區 */}
                <div className="text-center mb-16">
                    <p className="text-coral-orange font-medium mb-3 tracking-wide">
                        Media & Insights
                    </p>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-deep-teal mb-4">
                        媒體與觀點
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Podcast 主卡片 */}
                    <div className="card-organic p-8 relative overflow-hidden">
                        {/* 背景裝飾 */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-coral-orange/10 to-emerald/10 rounded-full -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10">
                            {/* Podcast 圖標 */}
                            <div className="w-20 h-20 bg-gradient-to-br from-emerald to-deep-teal rounded-2xl flex items-center justify-center mb-6 shadow-natural">
                                <Headphones className="w-10 h-10 text-white" />
                            </div>

                            <h3 className="font-heading font-bold text-2xl text-deep-teal mb-2">
                                人生鍛造所 Podcast
                            </h3>
                            <p className="text-deep-teal/60 mb-6">
                                在這裡，我記錄了技術與心智的雙重修煉。
                            </p>

                            {/* 引言 */}
                            <div className="bg-mint-cream p-6 rounded-xl relative">
                                <Quote className="absolute top-4 left-4 w-6 h-6 text-emerald/30" />
                                <blockquote className="text-deep-teal/80 italic pl-6 leading-relaxed">
                                    「自動化不只是為了省時間，而是為了把時間花在更值得的事情上——比如閱讀、健身，與陪伴家人。」
                                </blockquote>
                                <p className="text-sm text-coral-orange mt-3 pl-6">
                                    —— 節錄自《人生鍛造所》
                                </p>
                            </div>

                            {/* 連結按鈕 */}
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 mt-6 text-emerald font-medium hover:text-emerald-dark transition-colors group"
                            >
                                <span>收聽 Podcast</span>
                                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* 話題列表 */}
                    <div className="space-y-6">
                        {topics.map((topic, index) => (
                            <div
                                key={index}
                                className="card-organic p-6 group hover:border-emerald/30 border border-transparent transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 bg-emerald/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-emerald/20 transition-colors">
                                        <topic.icon className="w-6 h-6 text-emerald drop-shadow-sm" />
                                    </div>
                                    <div>
                                        <h4 className="font-heading font-semibold text-deep-teal mb-2">
                                            {topic.title}
                                        </h4>
                                        <p className="text-deep-teal/60 text-sm leading-relaxed">
                                            {topic.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* 搜尋提示 */}
                        <div className="p-6 bg-gradient-to-r from-emerald/10 to-coral-orange/10 rounded-xl">
                            <p className="text-deep-teal/80 text-center">
                                🎧 在各大 Podcast 平台搜尋
                                <strong className="text-emerald">「人生鍛造所」</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
