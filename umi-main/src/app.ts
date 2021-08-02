

import React, { useState } from 'react';

// export const qiankun = (e) => {
//   return {
//     apps: [
//       {
//         name: 'react-app',
//         entry: process.env.NODE_ENV === 'production' ? '/child/react-app/' : '//localhost:7003',
//         props: {
//           age: 1,
//         },
//       },
//       {
//         name: 'umi-app',
//         entry: process.env.NODE_ENV === 'production' ? '/child/umi-app/' : '//localhost:7002',
//         props: {
//           age: 1,
//         },
//       },
//       {
//         name: 'antd-pro',
//         entry: process.env.NODE_ENV === 'production' ? '/child/antd-pro/' : '//localhost:7004',
//         props: {
//           age: 1,
//         },
//       },
//     ],
//     lifeCycles: {
//       afterMount: (props) => {
//         console.log('props', props);
//       },
//     },
//   }
// }

export const useQiankunStateForSlave = () => {
  const [globalState, setQiankunGlobalState] = useState({
    slogan: 'Hello MicroFrontend',
  });
  return {
    globalState,
    setQiankunGlobalState,
  };
};

export const dva = {
  config: {
    hmr: true,
    onError(err: ErrorEvent) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};