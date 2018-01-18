import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: ${props => props.inverted ? '1px solid ${props.theme.primary}' : 'none'};
  border-radius: ${props => props.theme.baseRadius};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  display: inline-block;
  font-size: ${props =>
    (props.small && `${props.theme.baseFontSize * 0.875}px`)
    || (props.large && `${props.theme.baseFontSize * 1.375}px`)
    || props.theme.baseFontSize
  };
  font-weight: ${props => props.theme.fontSemibold};
  line-height: ${props =>
    (props.small && '2.2') || (props.large && '1.25') || '2.5'
  };
  padding: ${props => 
    props.large ? '16px 25px 17px' : '0 12px'
  };
  position: relative;
  text-align: center;
  color: ${props =>
    (props.inverted && props.theme.primary)
    || (props.link && props.theme.baseFontColor)
    || '#fff'
  };
  background-color: ${props =>
    (props.primary && props.theme.primary)
    || (props.danger && props.theme.danger)
    || ((props.inverted || props.link) && '#fff')
    || (props.disabled && props.theme.baseGrey)
  };

  &:hover {
    ${props => props.link && 'text-decoration: underline;'}
  }
`;

export default Button;