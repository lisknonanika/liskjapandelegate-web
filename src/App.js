import React, { useState, useEffect } from 'react';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import locale_ja from './contents/locale/ja.json';
import locale_en from './contents/locale/en.json';
import './App.css';
import flag_jp from './contents/image/flag_jp.png';
import flag_us from './contents/image/flag_us.png';

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
        <div className="App-language">{lang === 'en'? <img src={flag_us} onClick={() => setLang('ja')}/>:<img src={flag_jp} onClick={() => setLang('en')} />}</div>
      </header>

      <div className="App-menu">
        <div className="active">About Us</div>
        <div>Vote Reward</div>
      </div>

      <div className="App-contents">
        <div className="title">About Us</div>
        <div>{t('日本で活動しているコミュニティです。')}</div>
        <div>{t('日本人向けにLiskに関する質問回答など様々な支援を行っています。')}</div>
        <div>{t('Liskや等コミュニティに関して不明な点がありましたらお気軽にご質問をどうぞ。')}</div>
        <div>Lisk address: lsk4u6zpqzzotweghzkyuqjmyeujbna5pkxm99vdt</div>

        <div className="title">Member</div>
        <div>{t('コミュニケーション')}：@ebifu222</div>
        <div>{t('開発・ノード管理')}：@ys_mdmg</div>

        <div className="title">Activity</div>
        <div>Lisk Service: Mainnet / Testnet</div>
        <div>Blog: note (ys_mdmg)</div>

        <div className="title">Donate</div>
        <div>Lisk japan：lsk4u6zpqzzotweghzkyuqjmyeujbna5pkxm99vdt</div>
      </div>
    </div>
  );
}

export default App;
