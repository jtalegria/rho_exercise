import styled from "styled-components";

const Results = styled.div`
  .card {
    display: grid;
    grid-template-columns: 550px;
    grid-template-rows: 110px;
    grid-template-areas: "stats";

    font-family: roboto;
    border-radius: 18px;
    background: white;
    /*box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);*/
    text-align: center;

    transition: 0.5s ease;
    margin: 30px;
    font-family: 'Quicksand', sans-serif;
  }


  .card-stats {
    grid-area: stats;
    display: grid;
    grid-template-columns: 15fr 1fr 15fr;
    grid-template-rows: 1fr;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-top-right-radius:4px;
    /*background: rgb(255, 7, 110);*/
    /*background: linear-gradient(to bottom right, #50D5B7, #3fbfa2);*/
    background: linear-gradient(to bottom right, #c5a289, #b1917b);
  }

  .card-stats .stat {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    color: white;
  }

  .card-stats .divider {
    /*background: #fcfcfc;*/
    transform: rotate(-30deg)
  }

  .card-stats .type {
    font-size: 25px;
    font-weight: 300;
    text-transform: uppercase;
  }

  .card-stats .value {
    font-size: 20px;
    font-weight: 500;
    border-bottom: 3px solid #766152;
  }



`;
export default Results;
