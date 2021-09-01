import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
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
        <div className="App-language">{lang === 'en'? <img src={flag_us} alt="en" onClick={() => setLang("ja")}/>:<img src={flag_jp} alt="ja" onClick={() => setLang("en")} />}</div>
      </header>

      <div className="App-menu">
        <div className="active">About Us</div>
        <div>Vote Reward</div>
      </div>

      <div className="App-contents">
        <div className="content-area">
          <div className="title">About Us</div>
          <div className="content">
            <div>{t('日本で活動しているコミュニティです。')}</div>
            <div>{t('日本人向けにLiskに関する質問回答など様々な支援を行っています。')}</div>
            <div>{t('Liskや等コミュニティに関して不明な点がありましたらお気軽にご質問をどうぞ。')}</div>
          </div>
        </div>

        <div className="content-area">
          <div className="title">Delegate Info</div>
          <div className="content">
            <div className="row">
              <div className="name">liskjapan</div>
              <div className="address">
                <a href="https://lisk.observer/account/lsk4u6zpqzzotweghzkyuqjmyeujbna5pkxm99vdt" target="_blank">lsk4u6zpqzzotweghzkyuqjmyeujbna5pkxm99vdt</a>
              </div>
            </div>
            <div className="row" style={{marginTop: "5px"}}>
              <div className="text">{t('※投票・寄付は上記へお願いします。')}</div>
            </div>
          </div>
        </div>

        <div className="content-area">
          <div className="title">Member</div>
          <div className="content">
            <div className="row">
              <div className="name">Lisk Japan Delegate</div>
              <div className="text">
                <a href="https://lisk.observer/account/lsk4u6zpqzzotweghzkyuqjmyeujbna5pkxm99vdt" target="_blank">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115.4 136.3" className="lisk-icon">
                    <g>
                      <g>
                        <path d="M45.1,136.1l17.8-20c0.3-0.3,0.1-0.8-0.4-0.8H42.9c-0.1,0-0.3-0.1-0.4-0.2L25.9,96.5
                          c-0.1-0.2-0.2-0.4-0.1-0.6l27.8-47.7c0.1-0.2,0.1-0.4,0-0.5L42.1,27.9c-0.2-0.3-0.7-0.3-0.9,0L0.1,98.5C0,98.7,0,98.9,0.1,99.1
                          l33,37.1c0.1,0.1,0.2,0.2,0.4,0.2h11.2C44.8,136.3,45,136.2,45.1,136.1z"/>
                        <path d="M57.3,0.3L45.7,20.1c-0.1,0.2-0.1,0.4,0,0.5l12,20.6l0,0l31.8,54.6c0.1,0.2,0.1,0.4-0.1,0.6l-16.8,18.8h0
                          l-17.9,20.2c-0.3,0.3-0.1,0.8,0.4,0.8h26.8c0.1,0,0.3-0.1,0.4-0.2l33-37.1c0.1-0.2,0.2-0.4,0.1-0.6L58.1,0.3
                          C58-0.1,57.5-0.1,57.3,0.3z"/>
                      </g>
                    </g>
                  </svg> Lisk
                </a>
              </div>
              <div className="text"><a href="https://twitter.com/liskjapan_dlgt" target="_blank"><FontAwesomeIcon icon={faTwitter}/> Twitter</a></div>
            </div>
            <div className="row" style={{borderBottom: "1px dotted #404041"}}>
              <ul>
                <li>{t('当コミュニティが運営するTwitterアカウント')}</li>
                <li>{t('Liskに関する情報を定期的に自動ツイート')}</li>
              </ul>
            </div>

            <div className="row">
              <div className="name">ebifu222</div>
              <div className="text"><a href="https://twitter.com/ebifu222" target="_blank"><FontAwesomeIcon icon={faTwitter}/> Twitter</a></div>
            </div>
            <div className="row" style={{borderBottom: "1px dotted #404041"}}>
              <ul>
                <li>{t('Twitter:Lisk Japan Delegate の管理者')}</li>
                <li>{t('Liskに関する質問内容の回答など日本人へのサポートを実施')}</li>
              </ul>
            </div>

            <div className="row">
              <div className="name">ys_mdmg</div>
              <div className="text">
                <a href="https://lisk.observer/account/lskb7gxff65y6epkmkoqe8xkq7qu5bcnnet6d2nco" target="_blank">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115.4 136.3" className="lisk-icon">
                    <g>
                      <g>
                        <path d="M45.1,136.1l17.8-20c0.3-0.3,0.1-0.8-0.4-0.8H42.9c-0.1,0-0.3-0.1-0.4-0.2L25.9,96.5
                          c-0.1-0.2-0.2-0.4-0.1-0.6l27.8-47.7c0.1-0.2,0.1-0.4,0-0.5L42.1,27.9c-0.2-0.3-0.7-0.3-0.9,0L0.1,98.5C0,98.7,0,98.9,0.1,99.1
                          l33,37.1c0.1,0.1,0.2,0.2,0.4,0.2h11.2C44.8,136.3,45,136.2,45.1,136.1z"/>
                        <path d="M57.3,0.3L45.7,20.1c-0.1,0.2-0.1,0.4,0,0.5l12,20.6l0,0l31.8,54.6c0.1,0.2,0.1,0.4-0.1,0.6l-16.8,18.8h0
                          l-17.9,20.2c-0.3,0.3-0.1,0.8,0.4,0.8h26.8c0.1,0,0.3-0.1,0.4-0.2l33-37.1c0.1-0.2,0.2-0.4,0.1-0.6L58.1,0.3
                          C58-0.1,57.5-0.1,57.3,0.3z"/>
                      </g>
                    </g>
                  </svg> Lisk
                </a>
              </div>
              <div className="text"><a href="https://twitter.com/ys_mdmg" target="_blank"><FontAwesomeIcon icon={faTwitter}/> Twitter</a></div>
              <div className="text"><a href="https://github.com/lisknonanika" target="_blank"><FontAwesomeIcon icon={faGithub}/> GitHub</a></div>
              <div className="text"><a href="https://note.com/lisknonanika" target="_blank"><FontAwesomeIcon icon={faBookOpen}/> note</a></div>
            </div>
            <div className="row">
              <ul>
                <li>{t('ノード・サイト管理者')}</li>
                <li>{t('Liskに関するツール・アプリの開発')}</li>
                <li>{t('Liskに関する質問内容の回答など日本人へのサポートを実施')}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="content-area">
          <div className="title">Product & Manage</div>
          <div className="content">
            <div className="row">
              <div className="name">Lisk Sercice</div>
              <div className="text">
                <a href="https://mainnet-service.liskjapandelegate.jp/api/status" target="_blank">Mainnet</a>
                &nbsp;/&nbsp;
                <a href="https://testnet-service.liskjapandelegate.jp/api/status" target="_blank">Testnet</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
