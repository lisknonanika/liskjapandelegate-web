import React from 'react';
import '../App.css';

class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <div className="App-contents">
          <div className="content-area">
            <div className="title" style={{backgroundColor: "#da0000", borderColor: "#da0000", fontWeight: "bold"}}>{this.props.translation('おしらせ')}</div>
            <div className="content" style={{backgroundColor: "rgba(233, 223, 37, 0.05)", borderColor: "#da0000"}}>
              <div style={{marginTop: "10px", textAlign: "center", fontWeight: "bold"}}>
                ノード停止についてのお知らせ
              </div>

              <div style={{marginTop: "10px"}}>
                既にTwitter等でアナウンスされている通り、新グループ「Lisk CommuLab」の理念に賛同し協力するため、私たちliskjapanデリゲートは10月31日の最終払出を最後にノードを停止することとなりました。
              </div>
              <div style={{fontSize: "0.65rem"}}>
                ※ノード停止の理由：Liskエコシステムを守るべき立場であるデリゲートが複数ノードを管理することがタブーとされているためです。
              </div>
              <div style={{marginTop: "10px"}}>
                既に投票していただいている皆様には多大なるご迷惑をお掛け致しますがご理解の程よろしくお願いいたします。
              </div>

              <div style={{marginTop: "10px"}}>
                なお、「Lisk CommuLab」は、12月1日より鋳造の有効化と報酬計算を開始する予定です。
              </div>
              <div>
                詳しくは、<a href="https://note.com/liskcommulab/n/n1ba460ab394e" target="_new">こちら</a>をご覧ください。
                (English -&gt; <a href="https://note.com/liskcommulab/n/ncf7163771c4d" target="_new">here</a>)
              </div>
              
              <div style={{marginTop: '10px'}}>
                {this.props.translation('新デリゲート')}&nbsp;
                <a href="https://lisk.observer/account/lsk5tyhc6tw76ybwwzt9vcefy3gryjvprkcj329tw" target="_new">commulab</a>
              </div>
              <div>
                {this.props.translation('新デリゲートサイト')}&nbsp;
                <a href="https://liskcommulab.jp" target="_new">Lisk CommuLab</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default AboutUs;
