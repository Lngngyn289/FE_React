import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomeHeader from './HomeHeader';
import Specialty from './Section/Specialty';
import MedicalFacility from './Section/MedicalFacility';
import OutstandingDoctor from './Section/OutstandingDoctor';
import HandBook from './Section/HandBook';
import './HomePage.scss';

// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "red" }}
//         onClick={onClick}
//       />
//     );
//   }
  
//   function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "green" }}
//         onClick={onClick}
//       />
//     );
//   }

class HomePage extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll:3,
            // nextArrow: <SampleNextArrow />,
            // prevArrow: <SamplePrevArrow />,
          };
        return (
            <div> 
                <HomeHeader/>
                <Specialty settings={settings}></Specialty>
                <MedicalFacility settings={settings}></MedicalFacility>
                <OutstandingDoctor settings={settings}></OutstandingDoctor>
                <HandBook settings={settings}></HandBook>
                <div style={{height: '300px'}}> </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
