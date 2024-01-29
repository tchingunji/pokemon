import styled from 'styled-components';
import Spinner from 'react-spinners/ClipLoader';
import colors from 'shared/assets/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  width: 100%;
`;

export const InfoRow = styled.div`
  width: 100%;
  display: flex;
`;

export const ToolBar = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

export const Info = styled.p`
  display: flex;
  flex-direction: ${(props) => props.defaultValue};
  gap: 15px;
  font-size: 12px;
  align-items: center;
`;

export const BaseTable = styled.table`
  width: 100%;
  border: 1px solid ${colors.lightGray};
  border-collapse: collapse;

  @media (max-width: 975px) {
    & {
      border: none;
    }

    &,
    tbody,
    tr,
    td {
      display: block;
      width: 100%;
    }

    tr {
      border: 1px solid ${colors.lightGray};
      margin-bottom: 15px;

      &:last-child > td {
        border-bottom: 1px solid ${colors.lightGray};
      }
    }

    td {
      padding-left: 50%;
      text-align: right;
      position: relative;
      border-bottom: 1px solid ${colors.lightGray};
    }

    td:before {
      content: attr(data-label);
      position: absolute;
      left: 0;
      width: 50%;
      padding-left: 15px;
      text-align: left;
      font-weight: 700;
    }
  }
`;

export const TableHeader = styled.thead`
  width: 100%;
  position: sticky;
  top: 63px;
  z-index: 200;

  @media (max-width: 975px) {
    display: none;
  }
`;

export const HeaderColumn = styled.td`
  padding: 15px;
  font-size: 14px;
  border-bottom: 1px solid ${colors.lightGray};
  background-color: ${colors.softGray};
  font-weight: 500;
  color: ${colors.darkGray};
`;

export const HeaderRow = styled.tr``;

export const TableBody = styled.tbody`
  width: 100%;
`;

export const Row = styled.tr`
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background-color: ${colors.white};

  &:last-child > td {
    border-bottom: none;
  }

  &:hover td {
    transition: all 0.2s ease-in-out;
    background-color: ${colors.primaryLight};
  }
`;

export const EmptyColumn = styled.td.attrs({colSpan: 100})`
  padding: 15px !important;
  text-align: center !important;
  font-size: 12px;
  border-bottom: 1px solid ${colors.lightGray};
  color: ${colors.darkGray};
  font-weight: 600;
`;

export const LoaderContainer = styled.td.attrs({colSpan: 100})`
  padding: 15px !important;
  flex: 1;
  text-align: center !important;
`;

export const Loader = styled(Spinner).attrs({
  size: 18,
  color: colors.primary,
})``;
