import React, { Component } from 'react';
import './App.css';
import CardView from './CardView/CardView';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cards: [
        {
          Title: 'Mercedes',
          Description: 'great',
          NumOfCarRentalsUntilToday: 10,
          Image: 'images/th.jpg'
        },
        {
          Title: 'BMW',
          Description: 'good',
          NumOfCarRentalsUntilToday: 6,
          Image: 'images/th1.jpg'
        },
        {
          Title: 'Honda',
          Description: 'good',
          NumOfCarRentalsUntilToday: 7,
          Image: 'images/th2.jpg'
        },
        {
          Title: 'Kia',
          Description: 'not bad',
          NumOfCarRentalsUntilToday: 5,
          Image: 'images/th3.jpg'
        },
        {
          Title: 'Cadilac',
          Description: 'elegant',
          NumOfCarRentalsUntilToday: 2,
          Image: 'images/th4.jpg'
        },
        {
          Title: 'Ferrari',
          Description: 'sport car',
          NumOfCarRentalsUntilToday: 1,
          Image: 'images/th5.jpg'
        },
        {
          Title: 'Mazerati',
          Description: 'elegant',
          NumOfCarRentalsUntilToday: 0,
          Image: 'images/th6.jpg'
        },
        {
          Title: 'Nissan',
          Description: 'sport car',
          NumOfCarRentalsUntilToday: 3,
          Image: 'images/th7.jpg'
        }

      ],
      showNum: true
    }
  }

  toggleHandler = () => {
    const doesSow = this.state.showNum
    this.setState({
      showNum: !doesSow
    })
  }


  render() {

    const btnStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid black',
      padding: '8px',
      cursor: 'pointer',
      marginTop: '20px',
      borderRadius: '10px'
    };

    return (
      <div className="App">
        <button style={btnStyle} onClick={this.toggleHandler}>Toggle Renting Num</button>
        <div className="cars-container">
          <Carousel>
            {
              this.state.cards.map((card, index) => {
                return (
                  <CardView key={index} car={card} showCarRentalNumbers={this.state.showNum} />
                )
              })
            }
          </Carousel>
        </div>
      </div>
    )
  }
}

export default App
