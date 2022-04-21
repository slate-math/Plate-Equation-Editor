import {
  getPluginType,
  getPlateEditorRef,
  getComboboxStoreById,
} from '@udecode/plate'
import { ToolbarButton } from '@udecode/plate-toolbar'
import { getEmptyBigOpNode } from './BigOperator/getEmptyBigOpNode'
import {
  BIG_OPERATOR,
  FRACTION,
  INTEGRAL,
  SUMMATION,
} from './defaults'
import { integralIcon } from './Icons/Integral/icon'
import { summationIcon } from './Icons/Summation/icon'
import { bigOpIcon } from './BigOperator'
import { ELEMENT_LIMIT, limitIcon } from './Limit'
import { logIcon } from './Log/getLogElements'

import { fractionIcon, getEmptyFractionNode } from './Fraction'
import { MatrixTableDropDown } from './Matrix/matrixDropDown'
import { ELEMENT_MATRIX } from './Matrix/defaults'
import { Matrix } from '@styled-icons/simple-icons/Matrix'
import { getIntegralNode, getSummationNode } from './UneditableBigOperator/getEmptyBigOpNode'
import { accentIcon } from './Accent/getAccentElements'
import EqLoader from './load'
import EqSaver from './save'
import { ELEMENT_ACCENT } from './Accent'
import { AccentDropDownMenu } from './Accent/AccentDropDownMenu'
import { LogDropDownMenu } from './Log/LogDropDownMenu'
import { ELEMENT_LOG } from './Log'
import { LimitDropDownMenu } from './Limit/LimitDropDownMenu'
import { MathMentionCombobox } from './mention/mathMentionComboBox'
import { ELEMENT_EQUATION_MENTION } from './mention/constants'
import { MENTIONABLES } from './mention/mentionables'
import { insertMathNode } from './insertMathNode'

export const MathToolbar = () => {
  const editor = getPlateEditorRef()!

  return (
    <>
      <ToolbarButton
        type={getPluginType(editor, INTEGRAL)}
        icon={integralIcon()}
        tooltip={{ content: 'Create Integral', theme: 'light-border' }}
        onMouseDown={(e) =>
          insertMathNode(getIntegralNode, editor)
        }
      />
      <ToolbarButton
        type={getPluginType(editor, SUMMATION)}
        icon={summationIcon()}
        tooltip={{ content: 'Create Summation', theme: 'light-border' }}
        onMouseDown={(e) =>
          insertMathNode(getSummationNode, editor)
        }
      />

      <LimitDropDownMenu
        pluginKey={ELEMENT_LIMIT}
        icon={limitIcon()}
        styles={{
          root: {
            marginLeft: 10,
            marginRight: 15,
          },
        }}
      />

      {/* <ToolbarButton
        styles={{
          root: {
            marginLeft: 10,
            marginRight: 15,
          },
        }}
        type={getPluginType(editor, LIMIT)}
        icon={limitIcon()}
        tooltip={{ content: 'Create Limit', theme: 'light-border' }}
        onMouseDown={(e) => insertMathNode(getEmptyLimNode, editor)}
      /> */}

      <LogDropDownMenu
        pluginKey={ELEMENT_LOG}
        icon={logIcon()}
        styles={{
          root: {
            marginRight: 20,
          },
        }}
      />

      {/* <ToolbarButton
          styles={{
            root: {
              'marginRight': 20
            }
          }}
          type={getPluginType(editor, LOG)}
          icon={logIcon()}
          tooltip={{content: "Create Log", theme: 'light-border'}} 
          onMouseDown={e=> insertMathNode(getLogarithmToBaseNnode, editor)}
      /> */}

      <ToolbarButton
        type={getPluginType(editor, FRACTION)}
        icon={fractionIcon()}
        tooltip={{ content: 'Create Fraction', theme: 'light-border' }}
        onMouseDown={(e) => insertMathNode(getEmptyFractionNode, editor)}
      />
      <ToolbarButton
        type={getPluginType(editor, BIG_OPERATOR)}
        icon={bigOpIcon()}
        tooltip={{ content: 'Create Big Operator', theme: 'light-border' }}
        onMouseDown={(e) => insertMathNode(getEmptyBigOpNode, editor)}
      />

      <MatrixTableDropDown
        pluginKey={ELEMENT_MATRIX}
        icon={<Matrix />}
        selectedIcon={<Matrix />}
      />
      
      <MathMentionCombobox items={MENTIONABLES} id={ELEMENT_EQUATION_MENTION} />
      <AccentDropDownMenu pluginKey={ELEMENT_ACCENT} icon={accentIcon()} />

      <EqLoader />
      <EqSaver />
    </>
  )
}

