import { Rocket, Target, Sprout } from 'lucide-react'

// Values Section - 核心價值展示
export default function ValuesSection() {
    const values = [
        {
            icon: Rocket,
            title: '賦能 Empowerment',
            description: '我們不只提供魚，更提供釣竿與漁場。目標是讓你具備「為自己打造工具」的能力，不再依賴封閉的套裝軟體。',
            color: 'emerald'
        },
        {
            icon: Target,
            title: '實踐 Practicality',
            description: '拒絕空談理論。所有的自動化流程都必須解決真實痛點。從 Line 官方帳號的報到系統到個人財務自動化，每一行代碼都為了解決實際問題而生。',
            color: 'coral-orange'
        },
        {
            icon: Sprout,
            title: '有機成長 Organic Growth',
            description: '系統不是死的。好的自動化流程應該像植物一樣，隨著你的需求變化而生長、適應。我們推崇 VibeCoding——在心流中與 AI 協作，讓技術適應你的直覺。',
            color: 'deep-teal'
        }
    ]

    return (
        <section id="values" className="section-padding">
            <div className="max-w-7xl mx-auto">
                {/* 標題區 */}
                <div className="text-center mb-16">
                    <p className="text-coral-orange font-medium mb-3 tracking-wide">
                        Our Values
                    </p>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-deep-teal mb-4">
                        核心價值
                    </h2>
                    <p className="text-deep-teal/60 max-w-2xl mx-auto">
                        這些價值觀驅動著我們的每一個決策，確保我們提供的不僅僅是技術，更是真正的改變力量。
                    </p>
                </div>

                {/* 價值卡片 */}
                <div className="grid md:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="card-organic p-8 text-center group relative overflow-hidden"
                        >
                            {/* 背景裝飾 */}
                            <div className={`absolute top-0 left-0 w-full h-1 bg-${value.color}`} />

                            {/* 圖標容器 */}
                            <div className={`
                w-20 h-20 mx-auto mb-6 rounded-2xl 
                flex items-center justify-center
                transition-all duration-300
                ${value.color === 'emerald' ? 'bg-emerald/10 group-hover:bg-emerald/20' : ''}
                ${value.color === 'coral-orange' ? 'bg-coral-orange/10 group-hover:bg-coral-orange/20' : ''}
                ${value.color === 'deep-teal' ? 'bg-deep-teal/10 group-hover:bg-deep-teal/20' : ''}
              `}>
                                <value.icon className={`
                  w-10 h-10 drop-shadow-sm
                  ${value.color === 'emerald' ? 'text-emerald' : ''}
                  ${value.color === 'coral-orange' ? 'text-coral-orange' : ''}
                  ${value.color === 'deep-teal' ? 'text-deep-teal' : ''}
                `} />
                            </div>

                            <h3 className="font-heading font-bold text-xl text-deep-teal mb-4">
                                {value.title}
                            </h3>
                            <p className="text-deep-teal/60 leading-relaxed text-sm">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
