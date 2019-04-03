import React, { Fragment } from "react";
import CarouselImage from "../CarouselImage/CarouselImage";
import Header from "../Header/Header.js";
import CarouselCard from "../CarouselCard/CarouselCard";
import VideoPlayer from "../VideoPlayer/VideoPlayer.js";
import MovieDescription from "../MovieDescription/MovieDescription.js";
import maynoothLogo from "../../assets/maynoothLogo.svg";
import phoneMockup from "../../assets/phoneMockup.png";
import webMockup from "../../assets/webMockup.png";
import arrowLeft from "../../assets/leftArrow.svg";
import arrowRight from "../../assets/rightArrow.svg";
import a from "../../assets/ae.svg";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import "./AboveFold.css";

const linkToWebPrototype = "https://xd.adobe.com/view/26fdade8-6568-4742-4717-a28e2bd5b9bb-50cc/";
const linkToMobilePrototype = "https://xd.adobe.com/view/4e140fe2-244e-45f8-6e78-3f801c8e8978-3825/";

const AboveFold = () =>
  <Fragment>
    <Header className='c-header-container' />
    {/*<div className='clearfix' />*/}
    <Carousel
      arrowLeft={<img className="c-carousel__arrow" src={arrowLeft} />}
      arrowRight={<img className="c-carousel__arrow" src={arrowRight} />}
      addArrowClickHandler
    >
      <CarouselCard
        media={
          <VideoPlayer videoId="ZoK6NT7kq9E" />
        }
        description={
          <MovieDescription
            title="Adastra"
            subTitle="Infographics"
            duration="0:46 sec"
          >
            <p>
              A promotional video for a mobile app and website which tracks fitness progress.
            </p>
            <p>
              A short animation created in After Effects.
            </p>
          </MovieDescription>
        }
      />

      <CarouselCard
        media={
          <VideoPlayer videoId="XlN48Yi8Chw" />
        }
        description={
          <MovieDescription
            title="Ask Me"
            subTitle="Short Film"
            duration="5:00 min"
          >
            <p>
              An innocent game takes an unexpected turn.
            </p>
            <p>
              Starring:<br />
              Livia Coyle as Alice<br />
              Martin Gardavsky as Nick<br />
            </p>
            <p>
              Director & Writer: Anika Kowalska<br />
              Edited in AVID by Anika Kowalska<br />
            </p>
            <p>
              Shot at Prague Film School, part of the summer workshop 2018.
            </p>
          </MovieDescription>
        }
      />

      <CarouselCard
        media={
          <CarouselImage src={webMockup} />
        }
        description={
          <MovieDescription
            title="Maynooth"
            subTitle="UI Website Prototype"
          >
            <p>
              A prototype of a website for a furniture reseller.
            </p>
            <p>
              High fidelity design created in Xd:
            </p>
            <p>
              <a className="c-movie-desc__link" target="_blank" href={linkToWebPrototype}>
                <img src={maynoothLogo} />
              </a>
            </p>
          </MovieDescription>
        }
      />
      <CarouselCard
        media={
          <CarouselImage src={phoneMockup} />
        }
        description={
          <MovieDescription
            title="Maynooth"
            subTitle="UI App Prototype"
          >
            <p>
              A prototype of an app for a furniture reseller.
            </p>
            <p>
              High fidelity design created in Xd:
            </p>
            <p>
              <a className="c-movie-desc__link" target="_blank" href={linkToMobilePrototype}>
                <img src={maynoothLogo} />
              </a>
            </p>
          </MovieDescription>
        }
      />
    </Carousel>
  </Fragment>;

AboveFold.propTypes = {};
AboveFold.defaultProps = {};

export default AboveFold;
