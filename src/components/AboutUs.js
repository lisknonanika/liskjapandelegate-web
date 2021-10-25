import React from 'react';
import '../App.css';
import notice from '../contents/image/notice.jpg';

class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <div className="App-contents">
          <div className="content-area">
            <div className="title" style={{backgroundColor: "#da0000", borderColor: "#da0000", fontWeight: "bold"}}>{this.props.translation('おしらせ')}</div>
            <div className="content" style={{backgroundColor: "rgba(233, 223, 37, 0.05)", borderColor: "#da0000"}}>
              <div>
                <img src={notice} style={{objectFit:'cover', width:'100%'}}></img>
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
