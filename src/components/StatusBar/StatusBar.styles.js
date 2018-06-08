import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 65px;
  display: flex;
  justify-content: space-between;
  background: #FFF;
  padding: 10px 18px;
  border-radius: 5px;
  margin-top: ${props => props.isFooter ? 0 : '16px'};
`;

export const StatusItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  flex-basis: 0;
  padding: 0px 4px;
`;

export const StatusItemHeader = styled.div`
  text-align: center;
  color: #7f7f7f;
  border-bottom: 1px solid #EFEFEF;
  padding-bottom: 5px;

  span {
    font-size: 0.8em;

    &:nth-child(1) {
      font-weight: 500;
    }
  }
`;

export const StatusItemValue = styled.h4`
  font-weight: 500;
  margin: 4px 0;
  color: #3A3A3A;
  text-align: center;
  font-size: ${({ smallerFont }) => smallerFont && '.9em'};

  @media (max-width: 370px) {
    font-size: ${({ smallerFont }) => smallerFont && '.8em'};
  }
`;
