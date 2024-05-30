// SharedParentComponent.js

import React, { useState } from 'react';
import Men_PerfumeDetail from './Men_PerfumeDetail';
import Men_PerfumeDetailScreen from './Men_PerfumeDetailScreen';
import Men_JacketDetail from './Men_JacketDetail';
import Men_JacketDetailScreen from './Men_JacketDetailScreen';
import Men_PantsDetail from './Men_PantsDetail';
import Men_PantsDetailScreen from './Men_PantsDetailScreen';
import Men_TshirtDetail from './Men_TshirtDetail';
import Men_TshirtDetailScreen from './Men_TshirtDetailScreen';


const SharedParentComponent = () => {
  const [heartClicked, setHeartClicked] = useState(false);

  return (
    <>
      <Men_PerfumeDetail heartClicked={heartClicked} setHeartClicked={setHeartClicked} />
      <Men_PerfumeDetailScreen heartClicked={heartClicked} setHeartClicked={setHeartClicked} />
      <Men_JacketDetail heartClicked={heartClicked} setHeartClicked={setHeartClicked} />
      <Men_JacketDetailScreen heartClicked={heartClicked} setHeartClicked={setHeartClicked} />
      <Men_PantsDetail heartClicked={heartClicked} setHeartClicked={setHeartClicked} />
      <Men_PantsDetailScreen heartClicked={heartClicked} setHeartClicked={setHeartClicked} />
      <Men_TshirtDetail heartClicked={heartClicked} setHeartClicked={setHeartClicked} />
      <Men_TshirtDetailScreen heartClicked={heartClicked} setHeartClicked={setHeartClicked} />
    </>
  );
};

export default SharedParentComponent;
