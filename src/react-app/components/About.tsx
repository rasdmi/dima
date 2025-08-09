import { Heart, Users, Star, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              О <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">нашем центре</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              FamilySpace — это место, где каждая семья найдет что-то особенное. Мы создали уютное пространство для развития детей и укрепления семейных связей.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Индивидуальный подход</h3>
                  <p className="text-gray-600">Каждый ребенок уникален, и мы учитываем особенности развития каждого малыша</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Семейные ценности</h3>
                  <p className="text-gray-600">Мы помогаем семьям проводить время вместе и создавать теплые воспоминания</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Профессионализм</h3>
                  <p className="text-gray-600">Наши педагоги — опытные специалисты с профильным образованием</p>
                </div>
              </div>
            </div>

            <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Познакомиться с командой
            </button>
          </div>

          {/* Right Content - Image placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 mb-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">4.9</h4>
                    <p className="text-gray-600 text-sm">Рейтинг</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">500+</h4>
                    <p className="text-gray-600 text-sm">Семей</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Что говорят родители:</h4>
                <p className="text-gray-600 text-sm italic">
                  "Наша дочка с удовольствием ходит на занятия. Здесь создана особая атмосфера тепла и заботы. Рекомендуем всем!"
                </p>
                <p className="text-gray-500 text-xs mt-2">— Анна, мама Софии</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
