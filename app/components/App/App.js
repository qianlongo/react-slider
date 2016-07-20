import './App.scss';
import {React} from '../../libs/base';
import Imgs from '../Imgs/Imgs';
import Dots from '../Dots/Dots';
import Arrows from '../Arrows/Arrows';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      curIndex: 0
    }
  }

  autoPlay(){
    this.timer = setInterval(()=>{
      this.move(-1);
    }, this.props.speed * 1000);
  }

  clearAutoPlay(){
    clearInterval(this.timer);
  }

  move(index){
    let _index = this.state.curIndex + index;

    if(_index > 0){
      _index = -(this.props.imgs.length - 1);
    }

    if(_index < -(this.props.imgs.length - 1)){
      _index = 0;
    }

    this.setState({
      curIndex: _index
    })
  }

  componentDidMount(){
    if(this.props.autoPlay){
      this.autoPlay();
    }
  }

  render(){
    let {autoPlay, imgs} = this.props,
        count = imgs.length,
        generateArrows = <Arrows move = {this.move.bind(this)} />,
        generateDots = <Dots curIndex={this.state.curIndex} count={count} move={this.move.bind(this)} />;

    return (
      <div className="slider-wrap"
        onMouseOver={autoPlay ? this.clearAutoPlay.bind(this) : null}
        onMouseOut={autoPlay ? this.autoPlay.bind(this) : null}
      >
        <Imgs
          imgs={imgs}
          curIndex={this.state.curIndex}
          animate={this.props.animate}
        />
        {this.props.hasArrows ? generateArrows: null}
        {this.props.hasDots ? generateDots: null}

      </div>
    );
  }
}

App.timer = null;
App.defaultProps = {
  autoPlay: true,
  hasArrows: true,
  hasDots: true,
  animate: true,
  speed: 2
}
