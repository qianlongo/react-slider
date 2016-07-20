import './Arrows.scss';
import {React} from '../../libs/base';

export default class Arrows extends React.Component {
  constructor(props){
    super(props);
  }

  handleMove(o){
    this.props.move(o);
  }

  render(){
    return (
      <div className="slider-arrows-wrap">
        <span className="slider-arrow slider-arrow-left" onClick={this.handleMove.bind(this, -1)}>&lt;</span>
        <span className="slider-arrow slider-arrow-right" onClick={this.handleMove.bind(this, 1)}>&gt;</span>
      </div>
    );
  }
}
