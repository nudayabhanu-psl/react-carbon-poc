import React from "react";
import { Masthead } from '@carbon/ibmdotcom-react';
import '@carbon/ibmdotcom-styles';

export const HeaderComponent = () => {

        const headerProps = {
          navigation: [{
            title: 'Home',
            url: '/',
            hasMenu:false
          }],
          hasNavigation: true,
          hasProfile: false,
          searchProps: {
            hasSearch: true,
            placeHolderText: "Search all of IBM",
            searchOpenOnload: false,
          },
        }
      
   return <Masthead {...headerProps}  />;

};
