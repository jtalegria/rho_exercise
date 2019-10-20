import styled from 'styled-components'

const Page404 = styled.div`

#notfound {
    position: relative;
    height: 100vh;
    background-color: #fafbfd;
  }
  
  #notfound .notfound {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
  }
  
  .notfound {
    max-width: 520px;
    width: 100%;
    text-align: center;
  }
  

  .notfound h1 {
    font-family: 'Quicksand', sans-serif;
    font-size: 86px;
    text-transform: uppercase;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 8px;
    color: #151515;
  }
  
  .notfound h2 {
    font-family: 'Quicksand', sans-serif;
    font-size: 26px;
    margin: 0;
    font-weight: 700;
    color: #151515;
  }
  
  .notfound button {
    font-family: 'Quicksand', sans-serif;
    font-size: 14px;
    text-decoration: none;
    text-transform: uppercase;
    background: #d0b4a0;
    display: inline-block;
    padding: 15px 30px;
    border-radius: 5px;
    color: #fff;
    font-weight: 700;
    margin-top: 20px;
    cursor: pointer

    :hover{
        background: #b1917b;
      }
    }
  }


  
  @media only screen and (max-width: 767px) {
      .notfound .notfound-bg {
        width: 287px;
        margin: auto;
      }
  
      .notfound .notfound-bg > div {
        height: 85px;
    }
  }
  
  @media only screen and (max-width: 480px) {
    .notfound h1 {
      font-size: 68px;
    }
  
    .notfound h2 {
      font-size: 18px;
    }
`

export default Page404