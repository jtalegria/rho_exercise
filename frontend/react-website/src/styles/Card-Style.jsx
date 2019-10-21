import styled from "styled-components";

const StyledCard = styled.div`
  .card {
    display: grid;
    grid-template-columns: 300px;
    grid-template-rows: 210px 150px 110px;
    grid-template-areas: "image" "text" "stats";

    /*font-family: roboto;*/
    border-radius: 18px;
    background: white;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.8);
    text-align: center;

    transition: 0.5s ease;
    cursor: pointer;
    margin: 30px;
    font-family: 'Quicksand', sans-serif;
  }

  .card-image {
    grid-area: image;
    background-image: url(${props => props.imgUrl});
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-size: cover;
  }

  .card-text {
    grid-area: text;
    margin: 25px;
    text-Decoration: none;
  }

  .card-text .date {
    color: rgb(255, 7, 110);
    font-size: 13px;
  }

  .card-text p {
    color: grey;
    font-size: 15px;
    font-weight: 300;
  }

  .card-text h2 {
    font-size: 28px;
    line-height: 55px;
  }

  .card-stats {
    grid-area: stats;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    /*background: rgb(255, 7, 110);*/
    /*background: #b1917b;*/
    background: linear-gradient(to bottom right, #d0b4a0, #b1917b);
  }

  .card-stats .stat {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    color: white;
  }

  .card-stats .type {
    font-size: 11px;
    /*font-weight: 300;*/
    text-transform: uppercase;
  }

  .card-stats .value {
    font-size: 22px;
    /*font-weight: 500;*/
  }

  .card-stats .border {
    border-left: 1px solid rgb(172, 26, 87);
    border-right: 1px solid rgb(172, 26, 87);
  }

  .card-stats .value sup {
    font-size: 12px;
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
  }
`;
export default StyledCard;
