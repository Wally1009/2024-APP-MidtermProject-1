// SharedParentComponent.js

import React, { useState } from 'react';
import Men_PerfumeDetail from './Men_PerfumeDetail';
import Men_PerfumeDetailScreen from './Men_PerfumeDetailScreen';

const SharedParentComponent = () => {
  const [heartClicked, setHeartClicked] = useState(false);

  return (
    <>
      <Men_PerfumeDetail heartClicked={heartClicked} setHeartClicked={setHeartClicked} />
      <Men_PerfumeDetailScreen heartClicked={heartClicked} setHeartClicked={setHeartClicked} />
    </>
  );
};

export default SharedParentComponent;
