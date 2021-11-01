import React, { useState, useEffect } from 'react';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import locale_ja from './contents/locale/ja.json';
import locale_en from './contents/locale/en.json';
import './App.css';
import flag_jp from './contents/image/flag_jp.png';
import flag_us from './contents/image/flag_us.png';
import AboutUs from './components/AboutUs';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: locale_en },
    ja: { translation: locale_ja },
  },
  lng: 'ja',
  fallbackLng: 'ja',
  interpolation: { escapeValue: false }
});

function App() {
  const [t, i18n] = useTranslation();
  const [lang, setLang] = useState('ja');

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return (
    <div className="App">
      <header className="App-header">
        <div>Delegate liskjapan</div>
      </header>
      <AboutUs translation={t}/>
    </div>
  );
}

export default App;
