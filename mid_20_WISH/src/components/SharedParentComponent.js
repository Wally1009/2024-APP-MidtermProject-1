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
import Women_JacketDetail from './Women_JacketDetail';
import Women_JacketDetailScreen from './Women_JacketDetailScreen';
import Women_TshirtDetail from './Women_TshirtDetail';
import Women_TshirtDetailScreen from './Women_TshirtDetailScreen';
import Women_PantsDetail from './Women_PantsDetail';
import Women_PantsDetailScreen from './Women_PantsDetailScreen';
import Women_PerfumeDetail from './Women_PerfumeDetail';
import Women_PerfumeDetailScreen from './Women_PerfumeDetailScreen';
import FashionDetail from './Fashion/FashionDetail';
import FashionDetailScreen from './Fashion/FashionDetailScreen';


const SharedParentComponent = () => {
  const [heartClicked, setHeartClicked] = useState(false);

  return (
    <>
      <Women_JacketDetail heartClicked={heartClicked} setHeartClicked={setHeartClicked} />
      <Women_JacketDetailScreen heartClicked={heartClicked} setHeartClicked={setHeartClicked} /> 
      <Women_TshirtDetail heartClicked={heartClicked} setHeartClicked={setHeartClicked} />
      <Women_TshirtDetailScreen heartClicked={heartClicked} setHeartClicked={setHeartClicked} />
      <Women_PerfumeDetail heartClicked={heartClicked} setHeartClicked={setHeartClicked} />
      <Women_PerfumeDetailScreen heartClicked={heartClicked} setHeartClicked={setHeartClicked} />
      <Women_PantsDetail heartClicked={heartClicked} setHeartClicked={setHeartClicked} />
      <Women_PantsDetailScreen heartClicked={heartClicked} setHeartClicked={setHeartClicked} />
      <Men_JacketDetail heartClicked={heartClicked} setHeartClicked={setHeartClicked} />
      <Men_JacketDetailScreen heartClicked={heartClicked} setHeartClicked={setHeartClicked} />
      <Men_PantsDetail heartClicked={heartClicked} setHeartClicked={setHeartClicked} />
      <Men_PantsDetailScreen heartClicked={heartClicked} setHeartClicked={setHeartClicked} />
      <Men_TshirtDetail heartClicked={heartClicked} setHeartClicked={setHeartClicked} />
      <Men_TshirtDetailScreen heartClicked={heartClicked} setHeartClicked={setHeartClicked} />
      <Men_PerfumeDetail heartClicked={heartClicked} setHeartClicked={setHeartClicked} />
      <Men_PerfumeDetailScreen heartClicked={heartClicked} setHeartClicked={setHeartClicked} />
      <FashionDetail heartClicked={heartClicked} setHeartClicked={setHeartClicked} />
      <FashionDetailScreen heartClicked={heartClicked} setHeartClicked={setHeartClicked} />
    </>
  );
};

export default SharedParentComponent;
