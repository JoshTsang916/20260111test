import {
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
    ArrowUp,
    Mail,
    MessageCircle,
    Headphones,
    Zap
} from 'lucide-react'

// 頁腳元件 - 包含版權、聯絡資訊、社交媒體連結、快速連結與返回頂部按鈕
export default function Footer() {
    const quickLinks = [
        { href: '#story', label: '關於我' },
        { href: '#values', label: '核心價值' },
        { href: '#achievements', label: '實戰成果' },
        { href: '#contact', label: '聯絡我們' },
    ]

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="bg-deep-teal text-mint-cream py-12 mt-20">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* 品牌資訊 */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Zap className="w-6 h-6 text-emerald" />
                            <h3 className="font-heading font-bold text-lg">Josh 昭巽</h3>
                        </div>
                        <p className="text-mint-cream/70 text-sm leading-relaxed">
                            AI 自動化顧問與講師，協助你在日常生活中創造屬於自己的自動化工作流，讓科技回歸人性。
                        </p>
                    </div>

                    {/* 快速連結 */}
                    <div>
                        <h4 className="font-heading font-semibold mb-4 text-emerald">快速連結</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-mint-cream/70 hover:text-emerald transition-colors text-sm"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 聯絡資訊 */}
                    <div>
                        <h4 className="font-heading font-semibold mb-4 text-emerald">聯絡我們</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-sm text-mint-cream/70">
                                <Mail className="w-4 h-4 text-coral-orange" />
                                <span>josh@automation.com</span>
                            </li>
                            <li className="flex items-center gap-2 text-sm text-mint-cream/70">
                                <MessageCircle className="w-4 h-4 text-coral-orange" />
                                <span>Line 官方帳號：@josh-auto</span>
                            </li>
                            <li className="flex items-center gap-2 text-sm text-mint-cream/70">
                                <Headphones className="w-4 h-4 text-coral-orange" />
                                <span>Podcast：人生鍛造所</span>
                            </li>
                        </ul>
                    </div>

                    {/* 社群媒體 */}
                    <div>
                        <h4 className="font-heading font-semibold mb-4 text-emerald">社群媒體</h4>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="p-2 bg-mint-cream/10 rounded-full hover:bg-emerald/20 transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5 text-mint-cream" />
                            </a>
                            <a
                                href="#"
                                className="p-2 bg-mint-cream/10 rounded-full hover:bg-emerald/20 transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5 text-mint-cream" />
                            </a>
                            <a
                                href="#"
                                className="p-2 bg-mint-cream/10 rounded-full hover:bg-emerald/20 transition-colors"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-5 h-5 text-mint-cream" />
                            </a>
                            <a
                                href="#"
                                className="p-2 bg-mint-cream/10 rounded-full hover:bg-emerald/20 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5 text-mint-cream" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* 版權與返回頂部 */}
                <div className="border-t border-mint-cream/20 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-mint-cream/60">
                        © 2026 Josh 昭巽 | AI Automation & VibeCoding. All Rights Reserved.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-sm text-mint-cream/70 hover:text-emerald transition-colors group"
                    >
                        <span>返回頂部</span>
                        <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    )
}
