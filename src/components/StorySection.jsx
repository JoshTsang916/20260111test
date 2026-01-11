import { TrendingUp, BookOpen, Wrench } from 'lucide-react'

// Story Section - 關於鍛造者的故事
export default function StorySection() {
    return (
        <section id="story" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* 文字內容 */}
                    <div>
                        <p className="text-coral-orange font-medium mb-3 tracking-wide">
                            關於鍛造者
                        </p>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-deep-teal mb-6">
                            從「零觀眾」到
                            <span className="text-emerald">「自動化賦能」</span>
                            的旅程
                        </h2>

                        <div className="space-y-4 text-deep-teal/70 leading-relaxed">
                            <p>
                                每一段自動化的旅程，都始於對現狀的不滿與改變的渴望。
                            </p>
                            <p>
                                2026 年初，我開啟了人生第二曲線。從零開始，我經歷了創作的孤獨與技術的陣痛。
                                我深刻理解，真正的自動化並非冰冷的代碼堆砌，而是一場關於「個人成長」的修煉。
                            </p>
                            <p>
                                我將自己視為<strong className="text-deep-teal">「人生鍛造所」</strong>的鐵匠，
                                利用 n8n 與 VibeCoding 作為我的錘與砧。我不僅僅是教你如何串接 API，
                                更是教你如何建立一套能自我演化的<strong className="text-emerald">個人成長系統</strong>。
                            </p>
                            <p>
                                從讀書會的報名系統到學生進度追蹤，我所教授的一切，皆是我親身驗證、每日運行的實戰成果。
                            </p>
                        </div>
                    </div>

                    {/* 視覺卡片 */}
                    <div className="relative">
                        {/* 主視覺容器 */}
                        <div className="card-organic p-8 relative overflow-hidden">
                            {/* 背景漸層 */}
                            <div className="absolute inset-0 bg-gradient-to-br from-deep-teal/5 to-coral-orange/10" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-emerald/20 rounded-full flex items-center justify-center">
                                        <TrendingUp className="w-8 h-8 text-emerald" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading font-bold text-deep-teal">轉變的軌跡</h3>
                                        <p className="text-deep-teal/60 text-sm">從混亂到秩序</p>
                                    </div>
                                </div>

                                {/* 對比展示 */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-deep-teal/10 rounded-xl">
                                        <p className="text-xs text-deep-teal/60 mb-2">過去</p>
                                        <ul className="text-sm text-deep-teal/80 space-y-1">
                                            <li>• 手動重複作業</li>
                                            <li>• 資料散落各處</li>
                                            <li>• 時間被瑣事填滿</li>
                                        </ul>
                                    </div>
                                    <div className="p-4 bg-emerald/10 rounded-xl">
                                        <p className="text-xs text-emerald mb-2">現在</p>
                                        <ul className="text-sm text-deep-teal/80 space-y-1">
                                            <li>• 自動化工作流</li>
                                            <li>• 系統化管理</li>
                                            <li>• 專注創造價值</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 浮動圖標 */}
                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-coral-orange/20 rounded-full flex items-center justify-center animate-float">
                            <BookOpen className="w-6 h-6 text-coral-orange" />
                        </div>
                        <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-emerald/20 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
                            <Wrench className="w-6 h-6 text-emerald" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
