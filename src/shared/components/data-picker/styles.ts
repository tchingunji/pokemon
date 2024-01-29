import {IoChevronBack, IoChevronForward} from 'react-icons/io5';
import colors from 'shared/assets/colors';
import styled from 'styled-components';

interface DayProps {
  active?: boolean;
}

interface ColumnProps {
  isDay?: number;
  active: boolean;
}

interface ConfirmProps {
  active: boolean;
}

export const Container = styled.div`
  padding: 15px;
  border-radius: 8px;
  width: 280px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  background-color: ${colors.white};
`;

export const Table = styled.table`
  font-size: 12px;
  border-collapse: collapse;
  width: 100%;
`;

export const TableHeader = styled.thead``;

export const HeaderRow = styled.tr``;

export const HeaderColumn = styled.td`
  text-align: center;
  padding-bottom: 5px;
  border: 2px solid ${colors.white};
  color: ${colors.darkGray};
  font-weight: 500;
`;

export const TableBody = styled.tbody``;

export const Row = styled.tr``;

export const Column = styled.td<ColumnProps>`
  position: relative;
  cursor: pointer;

  &:hover div {
    border-color: ${(props) => (props.isDay ? colors.primary : colors.white)};
  }
`;

export const Day = styled.div<DayProps>`
  border-spacing: 2px;
  border: 2px solid
    ${(props) => (props.active ? colors.primary : colors.transparent)};
  width: 30px;
  height: 30px;
  margin-left: 5px;
  border-radius: 50%;
  color: ${(props) => (props.active ? colors.white : colors.darkGray)};
  background-color: ${(props) =>
    props.active ? colors.primary : colors.transparent};
  ${(props) => !props.active && `background-color: ${colors.white}`};
  cursor: pointer;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Empty = styled.td`
  width: 30px;
  height: 30px;
  position: relative;
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const PrevMonth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  transition: all 0.1s ease-in-out;
  border-radius: 2px;

  &:hover {
    background-color: ${colors.lightGray};
    transition: all 0.1s ease-in-out;
  }
`;

export const NextMonth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  transition: all 0.1s ease-in-out;
  border-radius: 2px;

  &:hover {
    background-color: ${colors.lightGray};
    transition: all 0.1s ease-in-out;
  }
`;

export const Month = styled.h3`
  color: ${colors.primary};
`;

export const PrevIcon = styled(IoChevronBack)`
  background-color: ${colors.transparent};
`;

export const NextIcon = styled(IoChevronForward)`
  background-color: ${colors.transparent};
`;

export const DateInputs = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 10px;
`;

export const Input = styled.div`
  flex: 1;
  background-color: ${colors.softGray};
  color: ${colors.gray};
  padding: 10px 0;
  border-radius: 5px;
  text-align: center;
`;

export const Footer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
  justify-content: flex-end;
`;

export const Confirm = styled.div<ConfirmProps>`
  padding: 5px;
  color: ${(props) => (props.active ? colors.primary : colors.lightGray)};
  transition: all ease-in-out 0.2s;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.active && colors.primary};
    transition: all ease-in-out 0.2s;
    background-color: ${(props) => props.active && colors.primaryLight};
  }
`;
