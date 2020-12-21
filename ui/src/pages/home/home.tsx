import React, { useState, useEffect } from "react";
import {
  Grid,
  Row,
  Column,
  Tile,
  Tag,
} from "carbon-components-react";
import { Close16 } from '@carbon/icons-react';

import "./home.scss";
import "carbon-components/scss/components/tabs/_tabs.scss";
import { Card } from "../../components/Card/Card";

import { getFilterdCardData } from '../../service/api.service'
import { SideBar } from '../../components/Sidebar/Sidebar'




export const Home = () => {
  const [appliedNameFilter, setAppliedNameFilter] = useState([]);
  const [cardListDetails, setCardListDetails] = useState([]);
  const [test, setTest] = useState(false);



  useEffect(() => {
    setCardListDetails(getFilterdCardData(appliedNameFilter))
  }, [appliedNameFilter]);

  const toggleFilter = (name) => {
    const filters = JSON.parse(JSON.stringify(appliedNameFilter));
    if (filters.includes(name)) {
      filters.splice(filters.indexOf(name), 1)
    } else {
      filters.push(name)
    }
    setAppliedNameFilter(filters)
    setTest(!test)
  }

  return (
    <>
      <Tile className="TileStyle">
        <h3 className="TitleHeading">Lorem ipsum dolor sit amet.</h3>
        <p className="TitleText">
          Lorem ipsum dolor sit amet, at solum copiosae maiestatis eos, in
          nominavi philosophia his, an saepe admodum pri.
        </p>
      </Tile>
      <Grid style={{ padding: 0 }}>
        <Row className="PageContainer">
          <Column lg={5} style={{ paddingRight: 0 }}>
            <SideBar  appliedFilter={appliedNameFilter} onChange={toggleFilter} />
          </Column>
          <Column lg={11} style={{ padding: 0 }}>
            <div className="TileContainer">
              {appliedNameFilter.length > 0 && <Row>
                {appliedNameFilter.map((filterName, index) => <Tag className="Tag" key={index} type="gray" title="Clear Filter" > {filterName} <Close16  className="TagClose" onClick={() => toggleFilter(filterName)}/></Tag>)}
              </Row>}
              <Row >
                {cardListDetails.map((cardProps, index) => {
                  return <Card {...cardProps} key={index} />;
                })}
              </Row>
            </div>
          </Column>
        </Row>
      </Grid>
    </>
  );
};
