import { Heart, Phone, Instagram, MessageCircle } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-orange-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">FamilySpace</h1>
              <p className="text-xs text-gray-600 -mt-1">семейное пространство</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#activities" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Занятия
            </a>
            <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              О нас
            </a>
            <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Контакты
            </a>
          </nav>

          {/* Contact Info */}
          <div className="flex items-center space-x-4">
            {/* Social Links */}
            <div className="hidden sm:flex items-center space-x-2">
              <a
                href="https://instagram.com/reggio_stihiya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://t.me/reggio_stihiya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>

            {/* Phone */}
            <a
              href="tel:+79161964999"
              className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors font-semibold"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+7 (916) 196-4999</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
