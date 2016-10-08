import './Imgs.scss';
import {React} from '../../libs/base';

export default class Imgs extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      onOff: true
    }
  }

  render(){
    let {imgs, curIndex, animate} = this.props,
        count = imgs.length,
        styles = {
          width: 100 * count + '%',
          left: curIndex * 100 + '%'
        },
        nodes = imgs.map((item, i) => {
          return (
            <li className="slider-item" style={{
              width:  100/count + '%'
            }} key={i}>
              <img src={item.url} alt={item.alt}/>
            </li>
          );
        });

    return (
      <div className="imgs-wrap">
        <ul style={styles} ref="ul" className={animate ? 'animate':''}>
          {nodes}
        </ul>
      </div>
    );
  }
}
