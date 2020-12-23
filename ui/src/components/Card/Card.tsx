import React, { useState } from "react";
import { ArrowRight32 } from '@carbon/icons-react';
import { Column, Button } from "carbon-components-react";

import { Route } from 'react-router-dom'
import "@carbon/ibmdotcom-styles";
import "./Card.scss";

export interface CardProps {
  title: string;
  imageUrl: string;
  description: string;
  details: string[];
}

export const Card: React.FC<CardProps> = ({
  title,
  imageUrl,
  description,
  details,
}) => {

  const [hoover, setHoover] = useState(false);
  return (
    <Column
      sm={2}
      md={2}
      lg={5}
      className="card"
      onMouseEnter={() => setHoover(true)}
      onMouseLeave={() => setHoover(false)}
    >
      <div className={`cardContainer ${hoover && "cardContainerHover"}`}>
        <img src={imageUrl} alt={title} />
        <h4>{title}</h4>
        {hoover ? (
          <>
            <ul className="list">
              {details.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <Route render={({ history }) => (
              <Button className="button" size="small" onClick={() => { history.push(`/${title}/details`) }}>
                View Solution
              </Button>
            )} />
          </>
        ) : (
            <>
              <p>{description}</p>
              <ArrowRight32 className="arrow" />
            </>
          )}
      </div>
    </Column>
  );
};
