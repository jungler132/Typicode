import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

function UsersSVG(props) {
  return (
    <Svg
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle
        cx={9}
        cy={9}
        r={4}
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <Path
        d="M16 19c0-3.314-3.134-6-7-6s-7 2.686-7 6M15 13a4 4 0 10-3-6.646"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <Path
        d="M22 19c0-3.314-3.134-6-7-6-.807 0-2.103-.293-3-1.235"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </Svg>
  );
}

export default UsersSVG;
