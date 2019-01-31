import React from 'react';
import Tabs from './Tabs';
import Creative from './Creative';
import Fashion from './Fashion';
import Travel from './Travel';
import Portraits from './Portraits';


function Page() {
  return (
    <div>
      <Tabs>
      <div label="Travel">
          <Travel />
        </div>
      </Tabs>
    </div>
  );
}

export default  Page