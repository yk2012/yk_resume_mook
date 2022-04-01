import React from 'react';
import './index.less';
// import Avatar from '../assets/logo.jpg'

interface IProps {
  text: string;
  styles?: React.CSSProperties;
}

function Title({ text, styles }: IProps) { 
  return (
    <div style={styles} styleName="title">
      {text}
      {/* <Avatar/> */}
    </div>

  )
}

export default Title;