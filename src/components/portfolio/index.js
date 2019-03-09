import React from 'react';
import {Link} from 'gatsby';
import Tabs from './Tabs';
import Creative from './Creative';
import Fashion from './Fashion';
import Travel from './Travel';
import Portraits from './Portraits';

function Portfolio() {
  return (
    <div className="col-md-12">
      <Tabs>
        <div label="CREATIVE" className="col ">
          <Creative />
        </div>
        <div label="FASHION" className="col">
          <Fashion />
        </div>
        <div label="FASHION AND TRAVEL" className="col">
          <Travel />
        </div>
        <div label="PORTRAITS" className="col">
          <Portraits />
        </div>
      </Tabs>
    </div>
  );
}

export default  Portfolio