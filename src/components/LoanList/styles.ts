import styled from "styled-components";
import { FaCheck } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  width: 1087px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 8px;
  min-height: 460px;

  thead {
    height: 60px;
    background: rgba(128, 200, 207, 0.20348);

    th {
      text-align: left;
      font-size: 13px;
      padding: 22px 0;

      &:first-of-type {
        border-top-left-radius: 8px;
        width: 64px;
      }

      &:last-of-type {
        border-top-right-radius: 8px;
        text-align: center;
      }
    }
  }

  tbody {
    tr {
      padding: 11px;

      &:nth-of-type(2n) {
        background: rgba(0, 0, 0, 0.0475579);
      }

      td {
        padding: 11px 0 9px 0;

        &:first-of-type {
          text-align: center;
          width: 64px;
        }

        &:last-of-type {
          text-align: right;
          padding-right: 40px;
        }

        input[type="checkbox"] {
          appearance: none;
          border: 1px solid #f2f2f2;
          background: #ffffff;
          border-radius: 2px;
          width: 16px;
          height: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
        }
        input:checked {
          background-color: #ff7600;

          &::before {
            color: #ffffff;
            content: 'v';
          }
        }
      }
    }
  }
`;

export const ListFooter = styled.div`
  display: flex;
  padding: 16px 110px 12px 110px;
  justify-content: flex-end;

  
`;
