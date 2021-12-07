import styled from "styled-components";

export const CartContainer = styled.div`
  background: #DCDCDC;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: auto;

  h1 {
    margin: 60px auto;
  }

  div {
    display: flex;
    margin: 60px auto;
  }

  div button {
    width: 120px;
    padding: 15px 20px;
    text-align: center;
    border: none;
    background: #6c5ce7;
    border-radius: 30px;
    color: #fff;
    cursor: pointer;
    margin: auto 10px;
  }
`;

export const Table = styled.table`
  background-color: white;
  border-collapse: collapse;
  font-size: 0.9em;
  min-width: 400px;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

  thead tr {
    background-color: #6c5ce7;
    color: white;
    text-align: left;
    font-weight: bold;
  }

  th,
  td {
    padding: 15px 15px;
  }

  tbody tr {
    border-bottom: 1px solid #ddd;
  }

  tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  tbody tr:last-of-type {
    border-bottom: 4px solid #6c5ce7;
  }
`;
