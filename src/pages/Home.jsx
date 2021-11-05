import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Card from '../components/CardView/CardView'
import TopBar from './TopBar';

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showNum: true
        }
        this.toggleHandler = this.toggleHandler.bind(this)
    }


    toggleHandler() {
        this.setState((prevState) => {
            return { showNum: !prevState.showNum }
        })
    }


    render() {
        const cards = [
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

        ]

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
                <TopBar/>
                <div className="cars-container">
                    <Carousel>
                        {
                            cards.map((card, index) => {
                                return (
                                    <Card key={index} car={card} showCarRentalNumbers={this.state.showNum} />
                                )
                            })
                        }
                    </Carousel>
                </div>
                <button style={btnStyle} onClick={this.toggleHandler}>Renting Number</button>
            </div>
        )
    }
}

export default Home;