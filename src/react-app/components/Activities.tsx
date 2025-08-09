import { Palette, Music, BookOpen, Users, Baby, Zap } from 'lucide-react';

const activities = [
  {
    id: 1,
    title: 'Творческие мастерские',
    description: 'Развиваем креативность и воображение через рисование, лепку и рукоделие',
    icon: Palette,
    age: '3-12 лет',
    duration: '1 час',
    gradient: 'from-pink-400 to-rose-500',
    bgGradient: 'from-pink-50 to-rose-50'
  },
  {
    id: 2,
    title: 'Музыкальные занятия',
    description: 'Знакомство с музыкой, ритмом и инструментами в игровой форме',
    icon: Music,
    age: '2-8 лет',
    duration: '45 мин',
    gradient: 'from-purple-400 to-indigo-500',
    bgGradient: 'from-purple-50 to-indigo-50'
  },
  {
    id: 3,
    title: 'Развивающие игры',
    description: 'Логические игры и задания для развития мышления и памяти',
    icon: BookOpen,
    age: '4-10 лет',
    duration: '1 час',
    gradient: 'from-blue-400 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50'
  },
  {
    id: 4,
    title: 'Семейные мероприятия',
    description: 'Праздники, квесты и мероприятия для всей семьи',
    icon: Users,
    age: 'Все возрасты',
    duration: '2-3 часа',
    gradient: 'from-green-400 to-emerald-500',
    bgGradient: 'from-green-50 to-emerald-50'
  },
  {
    id: 5,
    title: 'Мама и малыш',
    description: 'Специальные программы для самых маленьких с мамой',
    icon: Baby,
    age: '6 мес - 3 года',
    duration: '30-45 мин',
    gradient: 'from-orange-400 to-yellow-500',
    bgGradient: 'from-orange-50 to-yellow-50'
  },
  {
    id: 6,
    title: 'Активные игры',
    description: 'Подвижные игры и упражнения для физического развития',
    icon: Zap,
    age: '3-12 лет',
    duration: '1 час',
    gradient: 'from-red-400 to-pink-500',
    bgGradient: 'from-red-50 to-pink-50'
  }
];

export default function Activities() {
  return (
    <section id="activities" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Наши <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">программы</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Разнообразные занятия и мероприятия, которые помогают детям развиваться и семьям сближаться
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => {
            const IconComponent = activity.icon;
            return (
              <div
                key={activity.id}
                className={`bg-gradient-to-br ${activity.bgGradient} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group`}
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${activity.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {activity.description}
                  </p>
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm">
                  <div className="bg-white/70 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="font-medium text-gray-700">{activity.age}</span>
                  </div>
                  <div className="bg-white/70 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="font-medium text-gray-700">{activity.duration}</span>
                  </div>
                </div>

                {/* Button */}
                <button className={`w-full mt-6 bg-gradient-to-r ${activity.gradient} text-white py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-[1.02]`}>
                  Записаться
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-3xl p-8 md:p-12 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Не нашли подходящую программу?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Свяжитесь с нами, и мы поможем подобрать идеальное занятие для вашего ребенка или всей семьи
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Получить консультацию
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
