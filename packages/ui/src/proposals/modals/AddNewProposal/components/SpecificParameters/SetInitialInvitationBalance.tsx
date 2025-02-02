import React from 'react'

import { useApi } from '@/api/hooks/useApi'
import { InputComponent, InputNumber } from '@/common/components/forms'
import { Row } from '@/common/components/Modal'
import { RowGapBlock } from '@/common/components/page/PageContent'
import { TextMedium } from '@/common/components/typography'
import { useObservable } from '@/common/hooks/useObservable'

export const SetInitialInvitationBalance = () => {
  const { api } = useApi()
  const currentBalance = useObservable(api?.query.members.initialInvitationBalance(), [])

  return (
    <RowGapBlock gap={24}>
      <Row>
        <RowGapBlock gap={8}>
          <h4>Specific parameters</h4>
          <TextMedium lighter>Set Initial Invitation Balance</TextMedium>
        </RowGapBlock>
      </Row>
      <Row>
        <RowGapBlock gap={12}>
          <InputComponent
            name="setInitialInvitationBalance.amount"
            label="Invitation Balance"
            tight
            units="tJOY"
            required
          >
            <InputNumber
              id="amount-input"
              name="setInitialInvitationBalance.amount"
              isTokenValue
              isInBN
              placeholder="0"
            />
          </InputComponent>
          <Row>
            <TextMedium lighter>The current balance is {currentBalance?.toString()} tJOY.</TextMedium>
          </Row>
        </RowGapBlock>
      </Row>
    </RowGapBlock>
  )
}
