import React, { Component } from "react";
import PropTypes from "prop-types";
import MovieList from "../movies/MovieList";
import "./Home.css";
import styled from "styled-components";

//CLASS BASED
class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1 className="text-center text-uppercase py-3">
          {this.props.greeting}
        </h1>
        <div>
          <MovieList />
        </div>
      </div>
    );
  }
}

//FUNCTION BASED
// export const Home = ({greeting} => {
//   return (
//     <WrapperDiv>
//       <h1 classNem ="text-center text-uppercase py-3">
//         {greeting}
//         </h1>
//         <div>
//           <MovieList/>
//         </div>
//     </WrapperDiv>
//   )
// }

// const WrapperDiv = styled.div`
//     margin



// Props and Default Props
Home.propTypes = {
  greeting: PropTypes.string,
};
Home.defaultProps = {
  greeting: "JK's Awesome Movie Page!",
};

export default Home;
