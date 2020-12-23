import React, { useState, useEffect } from "react";
import {
  Grid,
  Row,
  Column,
  Tag,
  Button,
  Accordion,
  AccordionItem,
} from "carbon-components-react";
import { useParams, Route } from "react-router-dom";

import { Share32, Wikis32, Function32 } from "@carbon/icons-react";

import "@carbon/ibmdotcom-styles";

import "./CompanyDetails.scss";

import { getCompanyDetails } from "../../service/api.service";

interface CompanyDetails {
  name: string;
  title: string;
  subTitle: string;
  imageUrl: string;
  website: string;
  backgroundImage: string;
  details: {
    subtitle: string;
    description: string;
  };
  extras: {
    heading: string;
    logo: string;
    details: string[];
  }[];
  highlights: {
    title: string;
    description: string;
  }[];
}

export const CompanyDetailsPage = () => {
  let { companyName } = useParams();
  const [companyDetails, setCompanyDetails] = useState<CompanyDetails>();

  useEffect(() => {
    if (companyName) {
      setCompanyDetails(getCompanyDetails(companyName));
    }
  }, [companyName]);

  return (
    <Grid style={{ padding: 0 }}>
      {companyDetails && (
        <>
          <Row
            style={{
              minHeight: "25rem",
              color: "white",
              backgroundImage: `url(${companyDetails?.backgroundImage})`,
            }}
          >
            <Column lg={10}>
              <Route
                render={({ history }) => (
                  <Row>
                    <p
                      onClick={() => {
                        history.push(`/`);
                      }}
                      style={{ padding: "1rem 0 1rem 2rem", cursor: "pointer" }}
                    >
                      Home
                    </p>
                    <p style={{ padding: "1rem" }}>/</p>
                    <p style={{ padding: "1rem 1rem 1rem 0" }}>{companyDetails.name}</p>
                  </Row>
                )}
              />
              <h1
                style={{ padding: "1rem", fontWeight: 400, fontSize: "3rem" }}
              >
                {companyDetails.name}
              </h1>
              <h3
                style={{ padding: "1rem", fontWeight: 300, fontSize: "2rem" }}
              >
                {companyDetails.title}
              </h3>
              <p style={{ padding: "0.6rem 1rem" }}>
                {companyDetails.subTitle}
              </p>
            </Column>
            <Column lg={6}>
              <img
                style={{ width: "18rem", margin: "4rem" }}
                src={companyDetails.imageUrl}
                alt={companyDetails.name}
              />
            </Column>
          </Row>

          <Row className="contactContainer">
            <Column
              lg={10}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Button size="small" kind="ghost">
                <div className="ribbonItems">
                  <Tag type="gray" style={{ backgroundColor: "gold" }}>
                    Gold
                  </Tag>
                  <br />
                  Business <br />
                  Partner
                </div>
              </Button>
              <Button size="small" kind="ghost">
                <div className="ribbonItems">
                  <Wikis32 /> <br />
                  Website
                </div>
              </Button>
              <Button size="small" kind="ghost">
                <div className="ribbonItems">
                  <Share32 /> <br />
                  Share
                </div>
              </Button>
            </Column>
            <Column
              lg={6}
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <Button size="small" kind="tertiary">
                Request a demo
              </Button>
              <Button size="small">Contact Partner</Button>
            </Column>
          </Row>
        </>
      )}
      <Row style={{ backgroundColor: "#f3f6fb" }}>
        <Column lg={4}>
          <div className="sideBarContainer">
            {companyDetails?.extras.map((item, index) => {
              return (
                <span key={index}>
                  <Row style={{ marginTop: "1.5rem", alignItems: "center" }}>
                    <Function32 className="sidebarIcon" />
                    <h5>{item.heading}</h5>
                  </Row>
                  <Row style={{ marginBottom: "1rem", marginTop: "0.5rem" }}>
                    <ul
                      style={{
                        listStyleType: "disc",
                        paddingLeft: "2rem",
                      }}
                    >
                      {item.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>
                          <p>{detail}</p>
                        </li>
                      ))}
                    </ul>
                  </Row>
                </span>
              );
            })}
          </div>
        </Column>
        <Column lg={12}>
          <div className="detailsContainer">
            <h2>Solution</h2>
            <h5>{companyDetails?.details.subtitle}</h5>
            <p>{companyDetails?.details.description}</p>

            <Accordion>
              {companyDetails?.highlights.map((item, index) => (
                <AccordionItem
                  title={item.title}
                  key={index}
                  className="highlightItem"
                >
                  {item.description}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Column>
      </Row>
    </Grid>
  );
};

// return (
//     <div className="companyDetailsContainer">
//         {details && <Grid>
//             <Row >
//                 <Column lg={16} style={{
//                     display: 'flex',
//                     alignItems: "center"
//                 }}>
//                     <Route render={({ history }) => (
//                         <>
//                             <ChevronLeft32 className="headerContent" style={{ cursor: 'pointer' }} onClick={() => { history.push(`/`) }} /><h1 className="headerContent">{companyName}</h1>
//                         </>
//                     )} />
//                 </Column>
//             </Row>
//             <Row>
//                 <Column lg={16} className="contentCenter">
//                     <img style={{ width: '20rem' }} src='https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_100000042-e1563305717660-1300x500.jpeg' alt={companyName} />
//                     {/* <img style={{ width: '20rem' }} src={details.imageUrl} alt={companyName} /> */}
//                 </Column>
//             </Row>
//             <Row>
//                 <Column lg={8}>
//                     <Row >
//                         <Column className="contentCenter">
//                             <h4>
//                                 {details.description}
//                             </h4>
//                         </Column>
//                     </Row>
//                     <Row>
//                         <Column className="contentCenter">
//                             {details.companyDetails}
//                         </Column>
//                     </Row>
//                 </Column>
//                 <Column lg={8} className="contentCenter">
//                     <ul className="detailsList">
//                         {details.details.map((item, index) => (
//                             <li key={index}>{item}</li>
//                         ))}
//                     </ul>
//                 </Column>
//             </Row>
//         </Grid>}
//     </div>
// );
