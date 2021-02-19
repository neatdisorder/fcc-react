import React from 'react';
import './quote-style.css';
import image1 from '../../assets/random-quote-machine-assets/john-cage-1.jpg';
import image2 from '../../assets/random-quote-machine-assets/john-cage-2.jpg';
import image3 from '../../assets/random-quote-machine-assets/john-cage-3.jpg';
import image4 from '../../assets/random-quote-machine-assets/john-cage-4.jpg';
import image5 from '../../assets/random-quote-machine-assets/john-cage-5.png';

class Quote extends React.Component {
  
    constructor(props) {
      super(props);
    };
    
    render() {
    
        const images = [image1, image2, image3, image4, image5];

        return (
            <section>
                <div id="img-container">
                    <img src={images[this.props.imageIndex]} />
                </div>
                <div id="quote-text-container">
                    <h2 id="quote-text">
                        {this.props.quote}
                    </h2>
                </div>
            </section>
        );
    };
    
  };

  export default Quote;