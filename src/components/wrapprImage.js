import React from 'react';
import solstice from '../cars/Solstice.png';
import gloss_black from '../images/gloss_black.jpg';
import gloss_black_metallic from '../images/gloss_black_metallic.jpg';
import satin_black from '../images/satin_black.jpg';
import matte_black from '../images/matte_black.jpg';
import brushed_metallic_black from '../images/brushed_metallic_black.jpg';
import gloss_eclipse_metallic from '../images/gloss_eclipse_metallic.jpg';
import gloss_white from '../images/gloss_white.jpg';
import matte_white from '../images/matte_white.jpg';
import satin_white from '../images/satin_white.jpg';
import gloss_pearl_white from '../images/gloss_pearl_white.jpg';
import satin_pearl_white from '../images/satin_pearl_white.jpg';
import gloss_diamond_white from '../images/gloss_diamond_white.jpg';
import sand_sparkle from '../images/sand_sparkle.jpg';
import gloss_gold_metallic from '../images/gloss_gold_metallic.jpg';
import gloss_diamond_amber from '../images/gloss_diamond_amber.jpg';
import gloss_yellow from '../images/gloss_yellow.jpg';
import satin_yellow from '../images/satin_yellow.jpg';
import gloss_ambulance_yellow from '../images/gloss_ambulance_yellow.jpg';
import matte_yellow_green_metallic from '../images/matte_yellow_green_metallic.jpg';
import gloss_dark_yellow from '../images/gloss_dark_yellow.jpg';
import gloss_orange from '../images/gloss_orange.jpg';
import gloss_gold_orange_pearl from '../images/gloss_gold_orange_pearl.jpg';
import satin_orange from '../images/satin_orange.jpg';
import matte_orange from '../images/matte_orange.jpg';
import matte_blaze_orange_metallic from '../images/matte_blaze_orange_metallic.jpg';
import gloss_spark_metallic from '../images/gloss_spark_metallic.jpg';
import matte_apple_metallic from '../images/matte_apple_metallic.jpg';
import satin_grass_green from '../images/satin_grass_green.jpg';

class WrapprImage extends React.Component {

  render() {
    let color;
    switch(this.props.color){
      case 'gloss_black':                   color = gloss_black; break;
      case 'gloss_black_metallic':          color = gloss_black_metallic; break;
      case 'satin_black':                   color = satin_black; break;
      case 'matte_black':                   color = matte_black; break;
      case 'brushed_metallic_black':        color = brushed_metallic_black; break;
      case 'gloss_eclipse_metallic':        color = gloss_eclipse_metallic; break;
      case 'gloss_white':                   color = gloss_white; break;
      case 'satin_white':                   color = satin_white; break;
      case 'matte_white':                   color = matte_white; break;
      case 'gloss_pearl_white':             color = gloss_pearl_white; break;
      case 'satin_pearl_white':             color = satin_pearl_white; break;
      case 'gloss_diamond_white':           color = gloss_diamond_white; break;
      case 'sand_sparkle':                  color = sand_sparkle; break;
      case 'gloss_gold_metallic':           color = gloss_gold_metallic; break;
      case 'gloss_diamond_amber':           color = gloss_diamond_amber; break;
      case 'gloss_yellow':                  color = gloss_yellow; break;
      case 'satin_yellow':                  color = satin_yellow; break;
      case 'gloss_ambulance_yellow':        color = gloss_ambulance_yellow; break;
      case 'matte_yellow_green_metallic':   color = matte_yellow_green_metallic; break;
      case 'gloss_dark_yellow':             color = gloss_dark_yellow; break;
      case 'gloss_orange':                  color = gloss_orange; break;
      case 'gloss_gold_orange_pearl':       color = gloss_gold_orange_pearl; break;
      case 'satin_orange':                  color = satin_orange; break;
      case 'matte_orange':                  color = matte_orange; break;
      case 'matte_blaze_orange_metallic':   color = matte_blaze_orange_metallic; break;
      case 'gloss_spark_metallic':          color = gloss_spark_metallic; break;
      case 'matte_apple_metallic':          color = matte_apple_metallic; break;
      case 'satin_grass_green':             color = satin_grass_green; break;
      default:                              color = gloss_black;
    }
    let style = {
      backgroundImage: 'url(' + color + ')'
    }

    return (
      <div className='imageContainer' style={style}>
        <img src={solstice} alt="Solstice"/>
      </div>
    );
  }
}

export default WrapprImage;
