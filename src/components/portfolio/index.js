import React from 'react';
import Tabs from './Tabs';
import Creative from './Creative';
import Fashion from './Fashion';
import Travel from './Travel';
import Portraits from './Portraits';


function Portfolio() {
  return (
    <div className="row columns">
      <Tabs>
      <div label="ALL">
          <Creative />
          <Fashion />
          <Travel />
          <Portraits />
        </div>
        <div label="CREATIVE">
          <Creative />
        </div>
        <div label="FASHION">
          <Fashion />
        </div>
        <div label="FASHION AND TRAVEL">
          <Travel />
        </div>
        <div label="PORTRAITS">
          <Portraits />
        </div>
      </Tabs>
    </div>
  );
}

export default  Portfolio