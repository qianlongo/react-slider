import './Dots.scss';
import {React} from '../../libs/base';

export default class Dots extends React.Component{

  constructor(props){
    super(props);
  }

  handleMove(o){
    this.props.move(o - this.props.curIndex);
  }

  render(){
    let {curIndex, count} = this.props,
        nodes = [];

        for(var i = 0; i < count; i++){
          nodes.push((
            <span className={'slider-dot' +  (i === Math.abs(curIndex) ? ' slider-dot-selected':'')}
                  onClick={this.handleMove.bind(this,-i)}
                  key={i}  
            >
            </span>
          ))
        }

    return (
      <div className="slider-dots-wrap">
        {nodes}
      </div>
    );
  }
}
