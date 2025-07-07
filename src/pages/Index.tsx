import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const NetworkNode = ({
    className,
    delay = 0,
  }: {
    className?: string;
    delay?: number;
  }) => (
    <div
      className={`absolute w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 animate-pulse ${className}`}
      style={{ animationDelay: `${delay}s` }}
    />
  );

  const Connection = ({
    className,
    delay = 0,
  }: {
    className?: string;
    delay?: number;
  }) => (
    <div
      className={`absolute h-px bg-gradient-to-r from-purple-500/30 to-cyan-500/30 animate-pulse ${className}`}
      style={{ animationDelay: `${delay}s` }}
    />
  );

  const BlobShape = ({
    className,
    delay = 0,
  }: {
    className?: string;
    delay?: number;
  }) => (
    <div
      className={`absolute rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 animate-pulse ${className}`}
      style={{
        animationDelay: `${delay}s`,
        transform: `scale(${1 + Math.sin(Date.now() * 0.001 + delay) * 0.1})`,
      }}
    />
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Blobs */}
        <BlobShape
          className="w-96 h-96 top-20 -left-20 animate-blob"
          delay={0}
        />
        <BlobShape
          className="w-80 h-80 top-96 right-10 animate-blob-slow"
          delay={1}
        />
        <BlobShape
          className="w-60 h-60 bottom-20 left-1/3 animate-float"
          delay={2}
        />

        {/* Neural Network Visualization */}
        <NetworkNode className="top-32 left-1/4" delay={0} />
        <NetworkNode className="top-48 left-1/3" delay={0.5} />
        <NetworkNode className="top-64 left-1/2" delay={1} />
        <NetworkNode className="top-80 left-2/3" delay={1.5} />
        <NetworkNode className="top-96 right-1/4" delay={2} />

        <Connection className="top-32 left-1/4 w-32 rotate-12" delay={0} />
        <Connection className="top-48 left-1/3 w-40 rotate-45" delay={0.5} />
        <Connection className="top-64 left-1/2 w-36 -rotate-12" delay={1} />
        <Connection className="top-80 left-2/3 w-28 rotate-30" delay={1.5} />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 pt-20 pb-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1
            className={`text-6xl md:text-8xl font-black mb-6 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
          >
            <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
              NeuralForge
            </span>
          </h1>
          <p
            className={`text-xl md:text-2xl font-medium text-slate-600 mb-8 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            Платформа машинного обучения нового поколения
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "0.4s" }}
          >
            <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white px-8 py-6 text-lg font-medium rounded-full">
              Начать бесплатно
            </Button>
            <Button
              variant="outline"
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-6 text-lg font-medium rounded-full"
            >
              Смотреть демо
            </Button>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
            ML-Платформа
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Создавайте, обучайте и развертывайте модели машинного обучения без
            границ
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "Brain",
              title: "AutoML",
              desc: "Автоматическое создание моделей",
            },
            {
              icon: "Zap",
              title: "Быстрое обучение",
              desc: "Ускоренные алгоритмы обучения",
            },
            {
              icon: "Cloud",
              title: "Облачное развертывание",
              desc: "Масштабируемая инфраструктура",
            },
            {
              icon: "BarChart",
              title: "Аналитика",
              desc: "Глубокая аналитика данных",
            },
            {
              icon: "Shield",
              title: "Безопасность",
              desc: "Защита корпоративного уровня",
            },
            {
              icon: "Cpu",
              title: "GPU/TPU",
              desc: "Высокопроизводительные вычисления",
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon
                    name={feature.icon as any}
                    className="text-white"
                    size={24}
                  />
                </div>
                <h3 className="text-xl font-black mb-2 text-slate-800">
                  {feature.title}
                </h3>
                <p className="text-slate-600 font-medium">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
            Функции
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Полный стек инструментов для машинного обучения
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {[
              {
                title: "Drag & Drop интерфейс",
                desc: "Создавайте модели визуально без кодирования",
              },
              {
                title: "Предобученные модели",
                desc: "Библиотека готовых моделей для быстрого старта",
              },
              {
                title: "Реальное время",
                desc: "Мониторинг и обновление моделей в реальном времени",
              },
              {
                title: "API интеграция",
                desc: "Простая интеграция с существующими системами",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`flex items-start space-x-4 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
                style={{ animationDelay: `${1.2 + index * 0.2}s` }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="CheckCircle" className="text-white" size={16} />
                </div>
                <div>
                  <h3 className="text-xl font-black mb-2 text-slate-800">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 font-medium">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl p-8 backdrop-blur-sm">
              <div className="bg-white/80 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-black text-slate-800">Обучение модели</h4>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div
                      className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div
                      className="w-3 h-3 bg-red-500 rounded-full animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-slate-600">
                      Точность
                    </span>
                    <span className="text-sm font-black text-slate-800">
                      94.7%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full"
                      style={{ width: "94.7%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-slate-600">
                      Эпоха 847/1000
                    </span>
                    <span className="text-sm font-black text-slate-800">
                      2:34 мин
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
            Команда
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Эксперты в области AI и машинного обучения
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { name: "Анна Петрова", role: "CEO & AI Researcher", avatar: "👩‍💻" },
            { name: "Дмитрий Козлов", role: "CTO & ML Engineer", avatar: "👨‍💻" },
            { name: "Мария Сидорова", role: "Data Scientist", avatar: "👩‍🔬" },
          ].map((member, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm text-center ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: `${1.8 + index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-black mb-2 text-slate-800">
                  {member.name}
                </h3>
                <p className="text-slate-600 font-medium">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Investment Section */}
      <section className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
            Инвестиции
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Поддержка ведущих венчурных фондов
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {[
              {
                amount: "$50M",
                round: "Серия A",
                investor: "TechVentures Capital",
              },
              {
                amount: "$15M",
                round: "Seed",
                investor: "AI Innovations Fund",
              },
              {
                amount: "$5M",
                round: "Pre-seed",
                investor: "StartupHub Ventures",
              },
            ].map((investment, index) => (
              <div
                key={index}
                className={`flex items-center space-x-6 p-6 bg-white/80 rounded-2xl backdrop-blur-sm hover:shadow-lg transition-all duration-300 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
                style={{ animationDelay: `${2.4 + index * 0.2}s` }}
              >
                <div className="text-3xl font-black text-transparent bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text">
                  {investment.amount}
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-800">
                    {investment.round}
                  </h3>
                  <p className="text-slate-600 font-medium">
                    {investment.investor}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl p-8 backdrop-blur-sm">
              <div className="bg-white/80 rounded-2xl p-6">
                <h4 className="font-black text-slate-800 mb-4">
                  Рост инвестиций
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-slate-600">
                      2022
                    </span>
                    <div className="flex-1 mx-4 bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full"
                        style={{ width: "30%" }}
                      ></div>
                    </div>
                    <span className="text-sm font-black text-slate-800">
                      $5M
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-slate-600">
                      2023
                    </span>
                    <div className="flex-1 mx-4 bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                    <span className="text-sm font-black text-slate-800">
                      $15M
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-slate-600">
                      2024
                    </span>
                    <div className="flex-1 mx-4 bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                    <span className="text-sm font-black text-slate-800">
                      $50M
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center bg-gradient-to-r from-purple-600 to-cyan-500 rounded-3xl p-16 text-white">
          <h2 className="text-5xl font-black mb-4">
            Начните создавать будущее
          </h2>
          <p className="text-xl font-medium mb-8 opacity-90">
            Присоединяйтесь к революции машинного обучения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-purple-600 hover:bg-slate-100 px-8 py-6 text-lg font-medium rounded-full">
              Попробовать бесплатно
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-medium rounded-full"
            >
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 container mx-auto px-4 py-12 border-t border-slate-200">
        <div className="text-center">
          <h3 className="text-2xl font-black mb-4 bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
            NeuralForge
          </h3>
          <p className="text-slate-600 font-medium">
            © 2024 NeuralForge. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
