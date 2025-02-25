import styled from "styled-components"
import { StyledComponent } from "../../../interfaces"
import { Color, Shadow } from "../../../enums-gb"

export const Component: StyledComponent<"div"> = styled.div`
  display: flex;
  width: 100%;
  padding: 40px 0;
  margin-bottom: 24px;
`

export const ContentWrapper: StyledComponent<"div"> = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`

export const ContentDivider: StyledComponent<"div"> = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;

  @media (min-width: 769px) {
    flex-direction: row;
    gap: 48px;
  }
`

export const MainContent: StyledComponent<"div"> = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: auto;
  max-width: 600px;
`

export const AdditionalContent: StyledComponent<"div"> = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: auto;
  min-width: 272px;
`

export const ButtonWrapper: StyledComponent<"div"> = styled.div`
  display: block;
  padding-bottom: 24px;

  @media (min-width: 769px) {
    display: flex;
  }
`

export const StatusWrapper: StyledComponent<"div"> = styled.div`
  display: flex;
  flex-direction: column;
`

export const ClassificationTables: StyledComponent<"div"> = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 991px) {
    flex-direction: row;
  }
`

export const ClassificationTable: StyledComponent<"div"> = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  background-color: ${Color.White};
  border-radius: 8px;
  box-shadow: ${Shadow.Small};
  padding: 20px;
`

export const ClassificationRow: StyledComponent<"div"> = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`

export const ClassificationPayment: StyledComponent<"div"> = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  background-color: ${Color.Transgraniczny100};
  padding: 8px;
`
