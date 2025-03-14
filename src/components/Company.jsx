import React, { useState, useEffect } from "react";
import "./Company.css";

const Company = () => {
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [areas, setAreas] = useState(0);
  const [employees, setEmployees] = useState(0);

  const animateCounter = (setter, targetValue, duration) => {
    let start = 0;
    const increment = targetValue / (duration / 50);
    const interval = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        start = targetValue;
        clearInterval(interval);
      }
      setter(Math.floor(start));
    }, 50);
  };

  useEffect(() => {
    animateCounter(setExperience, 15, 2000);
    animateCounter(setProjects, 100, 2000);
    animateCounter(setAreas, 8, 2000);
    animateCounter(setEmployees, 100, 2000);
  }, []);

  return (
    <div className="company-container">
      <div className="indicators-section">
        <div className="abstract-background"></div>
        <h2>Показники компанії</h2>
        <div className="indicators-grid">
          <div className="indicator">
            <div className="icon">
              <span role="img" aria-label="star">⭐</span>
            </div>
            <div className="counter">{experience}</div>
            <p>Наш досвід становить понад 15 років</p>
          </div>

          <div className="indicator">
            <div className="icon">
              <span role="img" aria-label="building">🏢</span>
            </div>
            <div className="counter">{projects}</div>
            <p>Виконано понад 100 великих об’єктів</p>
          </div>

          <div className="indicator">
            <div className="icon">
              <span role="img" aria-label="gear">⚙️</span>
            </div>
            <div className="counter">{areas}</div>
            <p>Ми спеціалізуємося у 8 сферах діяльності</p>
          </div>

          <div className="indicator">
            <div className="icon">
              <span role="img" aria-label="people">👥</span>
            </div>
            <div className="counter">{employees}</div>
            <p>Наша команда налічує понад 100 працівників</p>
          </div>
        </div>
      </div>

      <div className="about-section">
        <h2>Про нашу компанію</h2>
        <p>
          Ось уже понад 15 років ми виконуємо повний комплекс інженерних робіт — від проєктування до введення в експлуатацію як для приватних будинків, так і для великих промислових об’єктів по всій Україні.
          Ми орієнтуємося на досвідчених фахівців, набуті знання та стратегічне планування. Наші експерти здійснюють контроль якості на кожному етапі, а постійне навчання і розвиток персоналу дозволяє нам забезпечити максимальну ефективність у виконанні Ваших задач.
          Наша компанія надає гарантійне обслуговування та супровід встановлених нами систем. Виконуємо весь спектр робіт із дотриманням усіх регламентних вимог, рекомендованих виробником.
          По завершенню гарантійного періоду, наша компанія пропонує замовникам комплекс послуг з післягарантійного обслуговування на договірній основі. В рамках цього сервісу наші фахівці здійснюють необхідні роботи з виїздом до замовника, забезпечуючи підтримку та надійність систем протягом усього терміну експлуатації.
        </p>
      </div>

      <div className="services-section">
        <h2>Наші послуги та системи</h2>
        <div className="services-grid">
          <div className="services-column">
            <h3>Ми виконуємо</h3>
            <ul>
              <li>Постійна інженерного об’єднання</li>
              <li>Виконання повитової, сантехнічних вузлів та автоматики</li>
              <li>Монтаж інженерних систем</li>
              <li>Пусконалагоджувальні роботи та сервісне обслуговування</li>
            </ul>
          </div>
          <div className="services-column">
            <h3>Системи</h3>
            <ul>
              <li>Вентиляції, кондиціонування повітря та опалення (ОВ)</li>
              <li>Тепловий насос, котельні та ІТП</li>
              <li>Водопостачання та водовідведення (ВК)</li>
              <li>Автоматизації та диспетчеризації</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
