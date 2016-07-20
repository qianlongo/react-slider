import './Imgs.scss';
import {React} from '../../libs/base';

export default class Imgs extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    let {imgs, curIndex, animate} = this.props,
        count = imgs.length,
        styles = {
          width: 100 * count + '%',
          left: curIndex * 100 + '%'
        },
        nodes = imgs.map((item) => {
          return (
            <li className="slider-item" style={{
              width:  100/count + '%'
            }}>
              <img src={item.url} alt={item.alt} key={new Date().getTime()}/>
            </li>
          );
        });
    return (
      <div className="imgs-wrap">
        <ul style={styles} className={animate ? 'animate':''}>
          {nodes}
        </ul>
      </div>
    );
  }
}
