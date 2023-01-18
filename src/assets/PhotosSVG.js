import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function PhotosSVG(props) {
  return (
    <Svg
      width="30px"
      height="30px"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M384 0v384H0V0h384zM109.227 142.933L42.666 249.881v91.452h298.667v-76.587l-64-64-65.493 65.494-102.613-123.307zm136.106-57.6c-17.673 0-32 14.327-32 32 0 17.673 14.327 32 32 32 17.673 0 32-14.327 32-32 0-17.673-14.327-32-32-32z"
        transform="translate(64 64)"
        fill="#000"
        stroke="none"
        strokeWidth={1}
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default PhotosSVG;
