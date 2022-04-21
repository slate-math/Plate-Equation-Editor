import { ELEMENT_TR, TablePluginOptions } from '@udecode/plate-table';
import { ELEMENT_DEFAULT, TElement } from '@udecode/plate-core';
import { getEmptyBoxNode } from '../EquationBoxElement/getEquationBoxNode';
import { ELEMENT_UNEDITABLE_BIG_OPERATOR } from './defaults';
import { getEquationTextNode } from '../EquationText';


export const getEmptyUneditableBigOpNode = (text?:string) => {
  if(!text) return <TElement>{}
  return <TElement>{
    type: ELEMENT_UNEDITABLE_BIG_OPERATOR,
    children: [
      getEmptyBoxNode(.75,'auto','12px','-10px'),
      getEquationTextNode(text),
      getEmptyBoxNode(.75),
    ],
  };
}

export const getIntegralNode = () => {
  return <TElement>getEmptyUneditableBigOpNode('\u222b')
}

export const getSummationNode = () => {
  return <TElement>getEmptyUneditableBigOpNode('\u2211')
}