import { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'

// 導覽列元件 - 固定於頂部，含毛玻璃效果與漢堡選單
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { href: '#story', label: '關於我' },
        { href: '#values', label: '核心價值' },
        { href: '#team', label: '團隊' },
        { href: '#achievements', label: '成就' },
        { href: '#press', label: '媒體' },
        { href: '#contact', label: '聯絡' },
    ]

    const handleClick = () => {
        setIsOpen(false)
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-emerald/20">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 lg:px-8">
                {/* Logo */}
                <a
                    href="#"
                    className="flex items-center gap-2 text-xl font-bold text-deep-teal font-heading"
                >
                    <Zap className="w-6 h-6 text-emerald drop-shadow-sm" />
                    <span>Josh 昭巽</span>
                </a>

                {/* Desktop 導覽連結 */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-deep-teal/80 hover:text-emerald transition-colors font-medium"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a href="#contact" className="btn-primary">
                        立即預約諮詢
                    </a>
                </div>

                {/* Mobile 漢堡選單按鈕 */}
                <button
                    className="md:hidden p-2 text-deep-teal hover:text-emerald transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile 全螢幕選單 */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 top-14 bg-mint-cream/95 backdrop-blur-lg z-40">
                    <div className="flex flex-col items-center justify-center h-full gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={handleClick}
                                className="text-2xl font-heading text-deep-teal hover:text-emerald transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={handleClick}
                            className="btn-primary text-lg mt-4"
                        >
                            立即預約諮詢
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}
