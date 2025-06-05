import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

const locations = [
  {
    name: "СК Восток-Спорт",
    address: "ул. Лейтенанта Шмидта д.17",
    schedule: "Пн, Ср, Пт: 16:00-20:00"
  },
  {
    name: "МБОУ «СОШ №6»",
    address: "Казанская д.4",
    schedule: "Пн, Ср, Пт: 16:00-20:00"
  },
  {
    name: "МАОУ «Лицей «Технический»",
    address: "ул. Ковальчука д.6",
    schedule: "Пн, Ср, Пт: 16:00-20:00"
  },
  {
    name: "МБОУ «СОШ №13»",
    address: "ул. Набережная д.1",
    schedule: "Сб: 10:00-14:00"
  }
];

const ScheduleSection = () => {
  const schedule = [
    {
      day: 'Понедельник',
      groups: [
        { time: '16:00 - 17:30', age: '6-8 лет', level: 'Начинающие' },
        { time: '18:00 - 19:30', age: '9-12 лет', level: 'Средний уровень' },
      ]
    },
    {
      day: 'Среда',
      groups: [
        { time: '16:00 - 17:30', age: '6-8 лет', level: 'Начинающие' },
        { time: '18:00 - 19:30', age: '13-16 лет', level: 'Продвинутый' },
      ]
    },
    {
      day: 'Пятница',
      groups: [
        { time: '16:00 - 17:30', age: '9-12 лет', level: 'Средний уровень' },
        { time: '18:00 - 19:30', age: '13-16 лет', level: 'Продвинутый' },
      ]
    },
    {
      day: 'Суббота',
      groups: [
        { time: '10:00 - 11:30', age: '6-8 лет', level: 'Начинающие' },
        { time: '12:00 - 13:30', age: 'Все возрасты', level: 'Открытая тренировка' },
      ]
    }
  ];

  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-russo mb-6">
            <span className="gradient-text">РАСПИСАНИЕ</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите удобное время для тренировок вашего ребенка
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {schedule.map((day, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 animate-scale-in border-2 hover:border-viking-orange/30">
              <CardHeader className="bg-gradient-to-r from-viking-orange to-viking-red text-white">
                <CardTitle className="text-xl font-bold text-center">{day.day}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {day.groups.map((group, groupIndex) => (
                    <div key={groupIndex} className="p-4 bg-gray-50 rounded-lg hover:bg-viking-orange/5 transition-colors">
                      <div className="font-bold text-viking-orange text-lg">{group.time}</div>
                      <div className="text-gray-700 font-medium">{group.age}</div>
                      <div className="text-sm text-gray-600">{group.level}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-4xl mx-auto card-gradient border-viking-orange/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-3 mb-6">
                <MapPin className="w-6 h-6 text-viking-orange" />
                <h3 className="text-2xl font-bold text-gray-800">Место проведения</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {locations.map((location, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-viking-orange/5 transition-colors">
                    <h4 className="font-bold text-lg text-gray-800 mb-2">{location.name}</h4>
                    <p className="text-gray-600 mb-2">{location.address}</p>
                    <p className="text-sm text-viking-orange">{location.schedule}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;