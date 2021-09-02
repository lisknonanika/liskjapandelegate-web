import React from 'react';
import Swal from 'sweetalert2'
import { convertBeddowsToLSK } from '@liskhq/lisk-transactions';
import '../App.css';

class Reward extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      reward: "0",
      history: []
    };
    this.setText = this.setText.bind(this);
    this.checkhReward = this.checkhReward.bind(this);
  }

  setText = (event) => {
    this.setState({address: event.target.value});
  }

  checkhReward = async() => {
    if (!this.state.address.trim()) {
      await Swal.fire({text: this.props.translation('Liskアドレスを入力してください。'), icon: 'error', confirmButtonColor: '#3085d6'});
      return;
    }

    let reward = "0";
    let history = [];
    try {
      const res = await fetch("https://payout.liskjapandelegate.jp", {mode: 'cors'});
      const json = await res.json();
      const data = json.voter.find((v) => this.state.address.toLocaleLowerCase() === v.address.toLocaleLowerCase());
      reward = convertBeddowsToLSK(data.reward);
      if (!data) {
        await Swal.fire({text: this.props.translation('データが見つかりませんでした。'), icon: 'error',confirmButtonColor: '#3085d6'});
        return;
      }
    } catch (err) {
      await Swal.fire({text: this.props.translation('データが見つかりませんでした。'), icon: 'error',confirmButtonColor: '#3085d6'});
      return;
    }

    try {
      const resH = await fetch(
        `https://service.lisk.com/api/v2/transactions?moduleAssetId=2:0&senderAddress=lsk4u6zpqzzotweghzkyuqjmyeujbna5pkxm99vdt&recipientAddress=${this.state.address.toLocaleLowerCase()}`,
        {mode: 'cors'}
      );
      const jsonH = await resH.json();
      for (const data of jsonH.data) {
        history.push({
          amount: convertBeddowsToLSK(data.asset.amount),
          timestamp: `${new Date(data.block.timestamp * 1000).toLocaleDateString()} ${new Date(data.block.timestamp * 1000).toLocaleTimeString()}`
        })
      }

    } catch (err) {
      // 何もしない
    }

    await Swal.fire({text: this.props.translation('見つかりました！'), icon: 'success', confirmButtonColor: '#3085d6'});
    this.setState({reward: reward, history: history});
  }

  render() {
    return (
      <div>
        <div className="App-contents">
          <div className="content-area">
            <div className="title">{this.props.translation('報酬の確認')}</div>
            <div className="content">
              <div className="form-area">
                <div>
                  <input type="text" className="textbox" value={this.state.address} placeholder={this.props.translation('Liskアドレスを入力してください')} onChange={(e) => this.setText(e)} />
                </div>
                <div>
                  <button className="button" onClick={async () => {await this.checkhReward()}}>{this.props.translation('報酬を確認する')}</button>
                </div>
              </div>
            </div>
          </div>

          <div className="content-area">
            <div className="title">{this.props.translation('結果')}</div>
            <div className="content">
              <div style={{borderBottom: "1px dotted #404041"}}>
                <div className="reward-title">{this.props.translation('報酬')}</div>
                <div className="reward-result">{this.state.reward} LSK</div>
              </div>
              <div>
                <div className="reward-title">{this.props.translation('直近10件の報酬')}</div>
                <div className="reward-result">
                  {this.state.history.length > 0?
                    this.state.history.map((o, i) => {
                      return <div key={i}>{o.amount} LSK ({o.timestamp})</div>;
                    })
                    :
                    "NO DATA"
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reward;
