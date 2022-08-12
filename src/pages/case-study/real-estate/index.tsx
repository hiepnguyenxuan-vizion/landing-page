import React from 'react';

import { Container } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

import Hero from 'components/Hero';
import VzBtn from 'components/VzBtn';
import CardBorder from 'components/CardBorder';
import LetHaveAChat from 'components/LetHaveAChat';

import ReContent from './components/ReContent';
import ReChart from './components/ReChart';

export interface IRealEstate {}

const RealEstate: React.FC = () => {
  const navigate = useNavigate();

  const goToContact = () => navigate('/contact-us');
  const goToTour = () => navigate('/start-tour');

  return (
    <>
      <Hero className="pb-0">
        <div className="position-relative">
          <h2 className="text-vz-white font-weight-bold text-center vz-re--title__mobile">
            Real Estate
          </h2>
        </div>
        <CardBorder className="vz-re--hero-card">
          <div className="position-relative">
            <h2 className="text-vz-red font-weight-bold text-center vz-re--title">
              Real Estate
            </h2>
          </div>
          <p className="text-black py-3 text-center vz-re--desc m-0">
            Vizion 360° Renders <br /> &#38; Virtual Tours
          </p>
        </CardBorder>
      </Hero>
      <div className="vz-re my-5 py-3">
        <Container>
          <div className="vz-re--content-head">
            <p className="m-0 text-center vz-re--content-desc">
              If you want to immerse your customers in something new and
              exciting while also allowing them to feel real-life experiences, a
              360 Virtual tour is a good recommendation.
              <br />
              <br />
              Instead of showing your customers boring photos and papers, give
              them a link to a virtual tour where they can explore every corner
              of the apartment and see how the furniture is arranged. We can
              transform an empty space into the most realistic space, allowing
              your customers to easily imagine how their house will look and
              contributing to your success in closing the deal with your
              customer.
            </p>
          </div>
          <ReContent reverse no="01" text="Competitive Advantage Is A Plus.">
            <p className="m-0 vz-re--content-desc">
              Many real estate agents are now looking for tools to enhance their
              business results and including the amazing technology into the
              sale strategy will provide the competitive advantages. Our
              advanced technologies allow them to continuously learn, improve,
              and boost revenue.
              <br />
              <br />
              360° Renders elevate your marketing strategy by providing
              potential buyers with a fully immersive experience of the
              property.
              <br />
              <br />
              By creating a 360° Virtual Tour link from Vizion, customers will
              be able to walk through the property from all angles, making it
              even more impressive. All projects, external, internal,
              residential, and commercial, are welcome.
            </p>
          </ReContent>
          <ReContent no="02" text="Saving Cost And Effort.">
            <p className="m-0 vz-re--content-desc">
              With an online virtual tour, potential buyers can view and
              interact with your pre-construction development from home or
              anywhere. The buyer can walk through all of the rooms and see the
              various finishes. A complete visual walkthrough emotionally
              engages your buyers and prepares them to buy Off Plan.
            </p>
          </ReContent>
        </Container>
        <div className="my-5">
          <LetHaveAChat />
        </div>
        <Container>
          <ReContent no="03" text="Amazing 3D Experiences">
            <p className="m-0 vz-re--content-desc">
              Our ultra-realistic Digital twins real-time are created using
              patented pipeline processes and meet the most stringent
              real-estate industry standards. Customers may find a digital
              experience to be one of the most exciting because it allows them
              to fully interact with the environment, products, and assets.
              <br />
              <br />
              Our solution is completely immersing potential buyers and
              investors in the spaces and projects you wish to sell or rent.
              Giving them access to all of your available listings on the
              market.
            </p>
          </ReContent>
          <ReContent reverse no="04" text="More And Popular.">
            <p className="m-0 vz-re--content-desc">
              According to the home buyers and sellers generational trends
              report for 2021, the percentage of home buyers in the United
              States who use virtual tours and floor plans has increased by more
              than 10% compared to 2019. Almost 80% of home buyers and sellers
              would switch to a real estate agent who offers immersive 3D tours
              of listed properties.
              <br />
              <br />
              99 percent of sellers agree that 3D tours would give their listing
              a competitive advantage. With the massive development of
              technologies, particularly in The Industrial Revolution 4.0,
              implementing technologies in every aspect of daily life is
              becoming increasingly popular in developing countries such as
              Vietnam. Virtual tours and floor plans are a good option for not
              only real estate agencies and brokers, but also for regular
              customers who want something new, different, unique, and
              effective.
            </p>
          </ReContent>
          <div className="w-100 my-5">
            <ReChart />
          </div>
          <ReContent
            no="05"
            text="Easy To Find The Information/ Details Of Every Single Project Just By One Click"
          >
            <p className="m-0 vz-re--content-desc">
              You don't need to bring a lot of paperwork to present to clients;
              simply using their mobile phone or an iPad, you can show them
              detailed information with a single click. All of the project
              details, floor plans, and project information will be displayed to
              your customer in a more interesting and exciting manner; simply
              send this link to your customer, and they can review it as many
              times as they want.
              <br />
              <br />
              You can save time by explaining to your client, and they can share
              this link with their friends and family, increasing the popularity
              of your project.
            </p>
          </ReContent>
          <CardBorder className="bg-vz-light-gray py-4 border-0">
            <h3 className="text-center vz-re--cta-title py-3">
              Interested in this topic?
            </h3>
            <div className="d-flex justify-content-center vz-re--cta-action">
              <VzBtn
                onClick={goToContact}
                className="vz-btn text-white text-uppercase"
                color="vz-red"
                title="Book a Demo"
              />
              <div className="vz-re--cta-divider"></div>
              <VzBtn
                onClick={goToTour}
                className="vz-btn text-vz-gray text-uppercase"
                title="Start Tour"
                color="vz-white"
              />
            </div>
          </CardBorder>
        </Container>
      </div>
    </>
  );
};

export default RealEstate;
