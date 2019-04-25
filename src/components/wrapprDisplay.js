import React from 'react';
import WrapprImage from './wrapprImage';

class WrapprDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      selectedColor: "gloss_black"
    }
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(e) {
    this.setState({
      selectedColor: e.target.value
    });
  }

  render() {
    //let imgUrl = '../images/' + this.state.selectedColor + '.jpg';
    let color = this.state.selectedColor;

    return (
      <div>
        <h1>WRAPPR</h1>
        <WrapprImage color={color}/>
        <select className="dropdown" value={this.state.selectedColor} onChange={this.changeColor}>
          <option value="gloss_black">Gloss Black</option>
          <option value="gloss_black_metallic">Gloss Black Metallic</option>
          <option value="satin_black">Satin Black</option>
          <option value="matte_black">Matte Black</option>
          <option value="brushed_metallic_black">Brushed Metallic Black</option>
          <option value="gloss_eclipse_metallic">Gloss Eclipse Metallic</option>
          <option value="gloss_white">Gloss White</option>
          <option value="satin_white">Satin White</option>
          <option value="matte_white">Matte White</option>
          <option value="gloss_pearl_white">Gloss Pearl White</option>
          <option value="satin_pearl_white">Satin Pearl White</option>
          <option value="gloss_diamond_white">Gloss Diamond White</option>
          <option value="sand_sparkle">Sand Sparkle</option>
          <option value="gloss_gold_metallic">Gloss Gold Metallic</option>
          <option value="gloss_diamond_amber">Gloss Diamond Amber</option>
          <option value="gloss_yellow">Gloss Yellow</option>
          <option value="satin_yellow">Satin Yellow</option>
          <option value="gloss_ambulance_yellow">Gloss Ambulance Yellow</option>
          <option value="matte_yellow_green_metallic">Matte Yellow Green Metallic</option>
          <option value="gloss_dark_yellow">Gloss Dark Yellow</option>
          <option value="gloss_orange">Gloss Orange</option>
          <option value="gloss_gold_orange_pearl">Gloss Gold Orange Pearl</option>
          <option value="satin_orange">Satin Orange</option>
          <option value="matte_orange">Matte Orange</option>
          <option value="matte_blaze_orange_metallic">Matte Blaze Orange Metallic</option>
          <option value="gloss_spark_metallic">Gloss Spark Metallic</option>
          <option value="matte_apple_metallic">Matte Green Apple Metallic</option>
          <option value="satin_grass_green">Satin Grass Green</option>
        </select>
        <p>Disclaimer: Textured wraps may not render to scale.</p>
      </div>
    );
  }
}

export default WrapprDisplay;
