import { Mail, MessageCircle, Headphones, Send, Sparkles } from 'lucide-react'

// Contact Section - 聯絡資訊與 CTA
export default function ContactSection() {
    const contactMethods = [
        {
            icon: Mail,
            label: 'Email',
            value: 'josh@automation.com',
            href: 'mailto:josh@automation.com'
        },
        {
            icon: MessageCircle,
            label: 'Line 官方帳號',
            value: '@josh-auto',
            href: '#'
        },
        {
            icon: Headphones,
            label: 'Podcast',
            value: '搜尋「人生鍛造所」',
            href: '#'
        }
    ]

    return (
        <section id="contact" className="section-padding relative overflow-hidden">
            {/* 背景裝飾 */}
            <div className="absolute inset-0 bg-gradient-to-b from-mint-cream via-emerald/5 to-deep-teal/10" />
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-coral-orange/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* 標題區 */}
                <div className="text-center mb-12">
                    <p className="text-coral-orange font-medium mb-3 tracking-wide">
                        Start Your Journey
                    </p>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-deep-teal mb-4">
                        開始你的自動化旅程
                    </h2>
                    <p className="text-deep-teal/60 max-w-2xl mx-auto">
                        準備好為自己打造第二大腦了嗎？無論是參加工作坊，還是尋求一對一諮詢，現在就是最好的時刻。
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* CTA 區塊 */}
                    <div className="card-organic p-8 bg-gradient-to-br from-deep-teal to-deep-teal-light text-white relative overflow-hidden">
                        {/* 裝飾光點 */}
                        <div className="absolute top-4 right-4">
                            <Sparkles className="w-8 h-8 text-emerald/50 animate-pulse-soft" />
                        </div>
                        <div className="absolute bottom-8 left-8 w-24 h-24 bg-emerald/10 rounded-full blur-2xl" />

                        <div className="relative z-10">
                            <h3 className="font-heading font-bold text-2xl mb-4">
                                準備好改變了嗎？
                            </h3>
                            <p className="text-white/80 mb-8 leading-relaxed">
                                不論你是想要學習 n8n 自動化、探索 VibeCoding 的可能性，
                                或是為企業尋找更高效的運營方式，我都能幫助你找到最適合的解決方案。
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald hover:bg-emerald-dark rounded-xl font-semibold transition-colors"
                                >
                                    <Send className="w-5 h-5" />
                                    立即預約諮詢
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-semibold transition-colors border border-white/20"
                                >
                                    報名最新工作坊
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* 聯絡方式 */}
                    <div className="space-y-4">
                        <h3 className="font-heading font-bold text-xl text-deep-teal mb-6">
                            聯絡資訊
                        </h3>

                        {contactMethods.map((method, index) => (
                            <a
                                key={index}
                                href={method.href}
                                className="card-organic p-5 flex items-center gap-4 group hover:border-emerald/30 border border-transparent transition-all"
                            >
                                <div className="w-12 h-12 bg-emerald/10 rounded-xl flex items-center justify-center group-hover:bg-emerald/20 transition-colors">
                                    <method.icon className="w-6 h-6 text-emerald drop-shadow-sm" />
                                </div>
                                <div>
                                    <p className="text-sm text-deep-teal/60">{method.label}</p>
                                    <p className="font-medium text-deep-teal">{method.value}</p>
                                </div>
                            </a>
                        ))}

                        {/* 額外資訊 */}
                        <div className="mt-8 p-6 bg-coral-orange/10 rounded-xl">
                            <p className="text-deep-teal/80 text-sm text-center">
                                💡 工作坊與諮詢服務皆可線上進行，不受地域限制
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
