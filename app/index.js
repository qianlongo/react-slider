import {React, Render} from './libs/base';
import App from './components/App/App';

let app = document.createElement('div');
    app.className = 'container';
    document.body.appendChild(app);

let imgs = [
  {
    url: 'http://www.wallcoo.com/nature/Amazing_Color_Landscape_2560x1600/wallpapers/1920x1200/Amazing_Landscape_166.jpg',
    alt: 'images-1',
  },
  {
    url: 'http://www.wallcoo.com/nature/Amazing_Color_Landscape_2560x1600/wallpapers/1920x1080/Amazing_Landscape_25.jpg',
    alt: 'images-2',
  },
  {
    url: 'http://img.article.pchome.net/00/31/45/50/pic_lib/wm/lsml_08.jpg',
    alt: 'images-3',
  },
  {
    url: 'http://www.3dmgame.com/uploads/allimg/150116/156-1501160F432.jpg',
    alt: 'images-4',
  },
  {
    url: 'http://bizhi.zhuoku.com/wall/jie/20070325/Webshots/039.jpg',
    alt: 'images-5',
  }
];

  Render.render( <App imgs={imgs} animate={true} speed={2}></App>, app);
