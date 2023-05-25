import React from 'react';
// ADD IMPORTS BACK FOR GRAPHS SECTION
import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png';
import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png';
import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png';
import HrfPhoto from '../../../styles/Images/paper-stack.jpg';
import '../../../styles/RenderLandingPage.less';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
// for the purposes of testing PageNav
// import PageNav from '../../common/PageNav';

function RenderLandingPage(props) {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const history = useHistory();

  return (
    <div className="main">
      <div className="header">
        <div className="header-text-container">
          <h1>Asylum Office Grant Rate Tracker</h1>
          <h3>
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions
          </h3>
        </div>
      </div>

      {/* Graphs Section: Add code here for the graphs section for your first ticket */}
      <div className="graphs-section">
        {/* Rows & Columns */}
        <Row gutter={24}>
          <Col span={8}>
            <div className="grant-rates-by-office-graph-container">
              <img
                src={GrantRatesByOfficeImg}
                alt="Bar graph for grant rates by office"
                className="bar-graph-img"
              />
              <h3>Search Grant Rates By Office</h3>
            </div>
          </Col>

          <Col span={8}>
            <div className="grant-rates-by-nationality-container">
              <img
                src={GrantRatesByNationalityImg}
                alt="Pie chart for grant rates by nationality"
                className="pie-chart-img"
              />
              <h3>Search Grant Rates By Nationality</h3>
            </div>
          </Col>

          <Col span={8}>
            <div className="grant-rates-over-time-container">
              <img
                src={GrantRatesOverTimeImg}
                alt="Line graph for grant rates over time"
                className="line-graph-img"
              />
              <h3>Search Grant Rates Over Time</h3>
            </div>
          </Col>
        </Row>

        {/* <div className="bar-graph-img-container">
          <img
            src={GrantRatesByOfficeImg}
            alt="Bar graph for grant rates by office"
            className="bar-graph-img"
          />
        </div> */}
        {/* <div className="bar-graph-text-container">
          <h3>Search Grant Rates By Office</h3>
        </div> */}

        {/* <div className="pie-chart-img-container">
          <img
            src={GrantRatesByNationalityImg}
            alt="Pie chart for grant rates by nationality"
            className="pie-chart-img"
          />
        </div> */}
        {/* <div className="pie-chart-text-container">
          <h3>Search Grant Rates By Nationality</h3>
        </div> */}

        {/* <div className="line-graph-img-container">
          <img
            src={GrantRatesOverTimeImg}
            alt="Line graph for grant rates over time"
            className="line-graph-img"
          />
        </div> */}
        {/* <div className="line-graph-text-container">
          <h3>Search Grant Rates Over Time</h3>
        </div> */}
      </div>

      <div className="view-more-data-btn-container">
        <Button
          type="default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
          onClick={() => history.push('/graphs')}
        >
          View the Data
        </Button>
      </div>

      <div className="download-the-data-btn-container">
        <Button
          type="default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
        >
          Download the Data
        </Button>
      </div>

      <div className="middle-section">
        <div className="hrf-img-container">
          <img src={HrfPhoto} alt="Human Rights First" className="hrf-img" />
        </div>
        <div className="middle-section-text-container">
          <h3>
            Human Rights First has created a search tool to give you a
            user-friendly way to explore a data set of asylum decisions between
            FY 2016 and May 2021 by the USCIS Asylum Office, which we received
            through a Freedom of Information Act request. You can search for
            information on asylum grant rates by year, nationality, and asylum
            office, visualize the data with charts and heat maps, and download
            the data set
          </h3>
        </div>
      </div>
      <div>
        {/* Bottom Section: Add code here for the graphs section for your first ticket */}
        <div className="bottom-section">
          <div className="bottom-section-title-container">
            <h1>Systemic Disparity Insights</h1>
          </div>

          <div className="data-container">
            <div className="first-data-point-container">
              <div className="first-data-point-title">
                <h2>36%</h2>
              </div>
              <div className="first-data-point-text">
                <h3>
                  By the end of the Trump administration, the average asylum
                  office grant rate had fallen 36 percent from an average of 44
                  percent in fiscal year 2016 to 28 percent in fiscal year 2020.
                </h3>
              </div>
            </div>

            <div className="second-data-point-container">
              <div className="second-data-point-title">
                <h2>5%</h2>
              </div>
              <div className="second-data-point-text">
                <h3>
                  The New York asylum office grant rate dropped to 5 percent in
                  fiscal year 2020.
                </h3>
              </div>
            </div>

            <div className="third-data-point-container">
              <div className="third-data-point-title">
                <h2>6x Lower</h2>
              </div>
              <div className="third-data-point-text">
                <h3>
                  Between fiscal year 2017 and 2020, the New York asylum
                  office's average grant rate was six times lower than the San
                  Fransisco asylum office.
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="read-more-btn-container">
          <Button
            type="default"
            style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
          >
            Read More
          </Button>
        </div>

        <p onClick={() => scrollToTop()} className="back-to-top">
          Back To Top ^
        </p>
      </div>
    </div>
  );
}
export default RenderLandingPage;
