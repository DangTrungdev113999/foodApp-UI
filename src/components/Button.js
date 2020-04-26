import React from 'react';
import styled from 'styled-components';

const TouchableOpacity = styled.TouchableOpacity`
  flex: 1;
  ${({width}) => width && `width: ${width};`}
  ${({height}) => height && `height: ${height};`}
  ${({margin}) => margin && `margin: ${margin};`}
  ${({padding}) => padding && `padding: ${padding};`}
  ${({border}) =>
    border &&
    `
    border-width: 1;
    border-color: gray;
  `}
  ${({borderWidth}) => borderWidth && `border-width: ${borderWidth};`}
  ${({borderColor}) => borderColor && `border-color: ${borderColor};`}
  ${({bgColor}) => bgColor && `background-color: ${bgColor};`}
  ${({centered}) => centered && 'justify-content: center;'}
  ${({justifyContent}) =>
    justifyContent && `justify-content: ${justifyContent}`}
  ${({direction}) => direction && `flex-direction: ${direction};`}
  ${({middle}) => middle && 'align-items: center;'} 
  ${({borderRadius}) => borderRadius && `border-radius: ${borderRadius}`}
  ${({shadow}) =>
    shadow &&
    `
    shadow-opacity: 0.14;
    showdow-radius: 4;
    shadowColor; #000;
    showdowOffset: {
      height: 0,
      width: 0
    }
  `}
  ${({style}) => style && {...style}}

`;

const Button = ({children, onPress, ...rest}) => (
  <TouchableOpacity onPress={onPress} {...rest}>
    {children}
  </TouchableOpacity>
);

export default Button;