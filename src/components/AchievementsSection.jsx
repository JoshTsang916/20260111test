import { Calendar, Users, GraduationCap, CheckCircle } from 'lucide-react'

// Achievements Section - 實戰成果展示
export default function AchievementsSection() {
    const achievements = [
        {
            icon: Calendar,
            title: '2026 首發里程碑',
            date: '2026/01/02',
            description: '成功舉辦首場 n8n 自動化工作坊，協助學員成功部署個人首個自動化機器人。',
            highlight: '首場工作坊'
        },
        {
            icon: Users,
            title: '全自動化活動系統',
            date: '實戰應用',
            description: '成功開發並部署「讀書會大型聚會報名系統」，整合網頁前端與 Line 官方帳號，實現無人值守的自動報到流程。',
            highlight: '零人工介入'
        },
        {
            icon: GraduationCap,
            title: '教育賦能系統',
            date: '持續優化中',
            description: '建置「學生進度追蹤系統」，透過 AI 自動分析學習數據，實現個人化教學反饋。',
            highlight: 'AI 驅動'
        }
    ]

    return (
        <section id="achievements" className="section-padding">
            <div className="max-w-7xl mx-auto">
                {/* 標題區 */}
                <div className="text-center mb-16">
                    <p className="text-coral-orange font-medium mb-3 tracking-wide">
                        Achievements
                    </p>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-deep-teal mb-4">
                        實戰成果
                    </h2>
                    <p className="text-deep-teal/60 max-w-2xl mx-auto">
                        我們不只教學，更創造真實的影響力。每一個成果都是經過驗證的實戰經驗。
                    </p>
                </div>

                {/* 成果卡片 */}
                <div className="grid md:grid-cols-3 gap-8">
                    {achievements.map((achievement, index) => (
                        <div
                            key={index}
                            className="card-organic p-6 relative group"
                        >
                            {/* 頂部標籤 */}
                            <div className="absolute -top-3 left-6">
                                <span className="px-3 py-1 bg-emerald text-white text-xs font-medium rounded-full shadow-sm">
                                    {achievement.highlight}
                                </span>
                            </div>

                            {/* 圖標 */}
                            <div className="w-14 h-14 bg-emerald/10 rounded-xl flex items-center justify-center mb-4 mt-2 group-hover:bg-emerald/20 transition-colors">
                                <achievement.icon className="w-7 h-7 text-emerald drop-shadow-sm" />
                            </div>

                            {/* 內容 */}
                            <h3 className="font-heading font-bold text-lg text-deep-teal mb-2">
                                {achievement.title}
                            </h3>
                            <p className="text-coral-orange text-sm font-medium mb-3">
                                {achievement.date}
                            </p>
                            <p className="text-deep-teal/60 text-sm leading-relaxed">
                                {achievement.description}
                            </p>

                            {/* 完成標記 */}
                            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-emerald/10">
                                <CheckCircle className="w-4 h-4 text-emerald" />
                                <span className="text-xs text-emerald font-medium">實戰驗證</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 統計數據 */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { value: '2026', label: '正式啟動' },
                        { value: '100%', label: '實戰教學' },
                        { value: '24/7', label: '自動化運行' },
                        { value: '∞', label: '成長潛力' }
                    ].map((stat, index) => (
                        <div key={index} className="text-center p-4">
                            <p className="text-3xl md:text-4xl font-heading font-bold text-emerald mb-1">
                                {stat.value}
                            </p>
                            <p className="text-deep-teal/60 text-sm">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
