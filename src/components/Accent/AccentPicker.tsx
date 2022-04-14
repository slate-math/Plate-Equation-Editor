import { AccentButton } from './AccentButton'
import { AccentType } from './AccentType'
import RightwardsArrowAbove from '../../assets/RightwardsArrowAbove.png'
import LeftwardsArrowAbove from '../../assets/LeftwardsArrowAbove.png'
import RightLeftArrowAbove from '../../assets/RightLeftArrowAbove.png'
import Tilde from '../../assets/Tilde.png'
import Dot from '../../assets/Dot.png'
import DoubleDot from '../../assets/DoubleDot.png'
import RightwardHarpoonAccent from '../../assets/RightwardHarpoonAccent.png'
import Bar from '../../assets/Bar.png'
import OverCurlyBrace from '../../assets/OverCurlyBrace.png'
import OverParenthesis from '../../assets/OverParenthesis.png'
import Breve from '../../assets/Breve.png'
import HatAccent from '../../assets/HatAccent.png'
import Check from '../../assets/Check.png'
import TripleDot from '../../assets/TripleDot.png'
import Grave from '../../assets/Grave.png'
import Acute from '../../assets/Acute.png'
import { insertNodes, getPlateEditorRef } from '@udecode/plate'
import { selectFirstBox } from '../util'
import {
  getEmptyAccentNode,

} from './getEmptyAccentNode'
import { insertMathNode } from '../toolbar'
/*
rightward: 	\u2192
leftward 	\u2190
leftarrow 	\u2194
tilde:		\u007E
dot:		\u00B7
ddot		\u0022
rharpoon:	\u21C0
bar:		\u2015
overcurley	\u23DE
overpar		\u23DC
breve		\u23D1
hat		\u005E
check acc	\u02C7
triple dot	\u20DB
grave		\u0060
acute		\u02CA
*/
const initializeEquationMap = () => {
  const editor = getPlateEditorRef()!
  const nameToClickFuncMap = new Map<string, any>()
  nameToClickFuncMap.set('1x1', () => {
    insertMathNode(getEmptyAccentNode, editor, '\u2192')
    selectFirstBox(editor)
  })
  nameToClickFuncMap.set('1x2', () => {
    insertMathNode(getEmptyAccentNode, editor, '\u2190')
    selectFirstBox(editor)
  })
  nameToClickFuncMap.set('1x3', () => {
    insertMathNode(getEmptyAccentNode, editor, '\u2194')
    selectFirstBox(editor)
  })
  nameToClickFuncMap.set('1x4', () => {
    insertMathNode(getEmptyAccentNode, editor, '\u007E')
    selectFirstBox(editor)
  })
  nameToClickFuncMap.set('2x1', () => {
    insertMathNode(getEmptyAccentNode, editor, '\u00B7')
    selectFirstBox(editor)
  })
  nameToClickFuncMap.set('2x2', () => {
    insertMathNode(getEmptyAccentNode, editor, '\u0022')
    selectFirstBox(editor)
  })
  nameToClickFuncMap.set('2x3', () => {
    insertMathNode(getEmptyAccentNode, editor, '\u21C0')
    selectFirstBox(editor)
  })
  nameToClickFuncMap.set('2x4', () => {
    insertMathNode(getEmptyAccentNode, editor, '\u2015')
    selectFirstBox(editor)
  })
  nameToClickFuncMap.set('3x1', () => {
    insertMathNode(getEmptyAccentNode, editor, '\u23DE')
    selectFirstBox(editor)
  })
  nameToClickFuncMap.set('3x2', () => {
    insertMathNode(getEmptyAccentNode, editor, '\u23DC')
    selectFirstBox(editor)
  })
  nameToClickFuncMap.set('3x3', () => {
    insertMathNode(getEmptyAccentNode, editor, '\u23D1')
    selectFirstBox(editor)
  })
  nameToClickFuncMap.set('3x4', () => {
    insertMathNode(getEmptyAccentNode, editor, '\u005E')
    selectFirstBox(editor)
  })
  nameToClickFuncMap.set('4x1', () => {
    insertMathNode(getEmptyAccentNode, editor, '\u02C7')
    selectFirstBox(editor)
  })
  nameToClickFuncMap.set('4x2', () => {
    insertMathNode(getEmptyAccentNode, editor, '\u20DB')
    selectFirstBox(editor)
  })
  nameToClickFuncMap.set('4x3', () => {
    insertMathNode(getEmptyAccentNode, editor, '\u0060')
    selectFirstBox(editor)
  })
  nameToClickFuncMap.set('4x4', () => {
    insertMathNode(getEmptyAccentNode, editor, '\u02CA')
    selectFirstBox(editor)
  })

  const nameToImgMap = new Map<string, any>()
  nameToImgMap.set('1x1', RightwardsArrowAbove)
  nameToImgMap.set('1x2', LeftwardsArrowAbove)
  nameToImgMap.set('1x3', RightLeftArrowAbove)
  nameToImgMap.set('1x4', Tilde)
  nameToImgMap.set('2x1', Dot)
  nameToImgMap.set('2x2', DoubleDot)
  nameToImgMap.set('2x3', RightwardHarpoonAccent)
  nameToImgMap.set('2x4', Bar)
  nameToImgMap.set('3x1', OverCurlyBrace)
  nameToImgMap.set('3x2', OverParenthesis)
  nameToImgMap.set('3x3', Breve)
  nameToImgMap.set('3x4', HatAccent)
  nameToImgMap.set('4x1', Check)
  nameToImgMap.set('4x2', TripleDot)
  nameToImgMap.set('4x3', Grave)
  nameToImgMap.set('4x4', Acute)
  return { nameToClickFuncMap, nameToImgMap }
}

type AccentPickerProps = {
  accent?: string
  accents: AccentType[]
}

export const AccentPicker = ({ accents }: AccentPickerProps) => {
  const { nameToClickFuncMap, nameToImgMap } = initializeEquationMap()
  return (
    <div className="accent-container" id="accentContainer">
      {accents.map(({ name }) => (
        <AccentButton
          name={name}
          image={nameToImgMap.get(name)}
          onClick={nameToClickFuncMap.get(name)}
        />
      ))}
    </div>
  )
}
