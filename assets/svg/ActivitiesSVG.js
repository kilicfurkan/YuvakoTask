import React from 'react'
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg'

const SvgComponent = props => (
  <Svg width={202} height={118} fill="none" {...props}>
    <Path fill="url(#prefix__pattern0)" d="M0 0h202v118H0z" />
    <Defs>
      <Pattern
        id="prefix__pattern0"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#prefix__image0" transform="scale(.0061 .01042)" />
      </Pattern>
      <Image
        id="prefix__image0"
        width={164}
        height={96}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
)

export default SvgComponent
