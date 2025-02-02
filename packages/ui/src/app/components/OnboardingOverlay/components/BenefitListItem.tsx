import React from 'react'
import styled from 'styled-components'

import { BenefitsTableLayout } from '@/app/components/OnboardingOverlay/components/BenefitsTable'
import { CheckboxIcon } from '@/common/components/icons'
import { CrossIcon } from '@/common/components/icons/CrossIcon'
import { TableListItem } from '@/common/components/List'
import { TextMedium } from '@/common/components/typography'
import { Colors } from '@/common/constants'

interface Props {
  text: string
}

export const BenefitListItem = ({ text }: Props) => (
  <Item $colLayout={BenefitsTableLayout}>
    <Circle color={Colors.Green[500]}>
      <CheckboxIcon />
    </Circle>
    <StyledText bold>{text}</StyledText>
  </Item>
)

const Item = styled(TableListItem)`
  border: none;
  height: 44px;
  background-color: ${Colors.Black[600]};
  //opacity: 0.5;
  border-radius: 0;
  display: flex;
  justify-content: flex-start;

  &:not(:last-child) {
    margin-bottom: 5px;
  }

  > *:not(:first-child) {
    text-align: center;
  }

  > *:first-child {
    text-align: right;
  }
`

const Circle = styled.span<{ color: string }>`
  justify-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 28px;
  width: 28px;
  background-color: ${({ color }) => color};

  svg {
    color: ${Colors.White};
  }
`

const StyledText = styled(TextMedium)`
  padding-left: 8px;
  color: ${Colors.White};
`
