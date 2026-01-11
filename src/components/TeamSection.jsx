import { Cpu, Code, Mic, Dumbbell } from 'lucide-react'

// Team Section - 團隊介紹（Josh 個人）
export default function TeamSection() {
    const expertise = [
        {
            icon: Cpu,
            title: 'AI 自動化專家',
            description: '擅長 n8n 串接與工作流設計'
        },
        {
            icon: Code,
            title: 'VibeCoding 推廣者',
            description: '提倡用自然語言驅動程式開發'
        },
        {
            icon: Mic,
            title: '「人生鍛造所」主理人',
            description: '透過 Podcast 分享科技、閱讀與健身的成長心法'
        },
        {
            icon: Dumbbell,
            title: '健身愛好者',
            description: '深信身體的強健是心智運作的基石'
        }
    ]

    return (
        <section id="team" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto">
                {/* 標題區 */}
                <div className="text-center mb-16">
                    <p className="text-coral-orange font-medium mb-3 tracking-wide">
                        The Founder
                    </p>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-deep-teal">
                        團隊與推動者
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* 個人資訊卡片 */}
                    <div className="card-organic p-8 relative overflow-hidden">
                        {/* 背景裝飾 */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-emerald/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-coral-orange/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                        <div className="relative z-10">
                            {/* 頭像佔位 */}
                            <div className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald/20 to-deep-teal/20 flex items-center justify-center">
                                <span className="text-4xl font-heading font-bold text-deep-teal">J</span>
                            </div>

                            <div className="text-center">
                                <h3 className="font-heading font-bold text-2xl text-deep-teal mb-2">
                                    Josh（昭巽）
                                </h3>
                                <p className="text-coral-orange font-medium mb-4">
                                    創辦人 / AI 自動化講師 / Podcaster
                                </p>
                                <p className="text-deep-teal/60 leading-relaxed">
                                    一位追求極致效率與生活平衡的實踐者。相信科技應該服務於人，而非奴役人。
                                    透過 AI 自動化，幫助更多人從重複性工作中解放，專注於真正重要的事。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 專業領域 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {expertise.map((item, index) => (
                            <div
                                key={index}
                                className="p-5 bg-mint-cream rounded-xl hover:shadow-natural transition-all duration-300 group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                                        <item.icon className="w-6 h-6 text-emerald drop-shadow-sm" />
                                    </div>
                                    <div>
                                        <h4 className="font-heading font-semibold text-deep-teal mb-1">
                                            {item.title}
                                        </h4>
                                        <p className="text-deep-teal/60 text-sm">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
