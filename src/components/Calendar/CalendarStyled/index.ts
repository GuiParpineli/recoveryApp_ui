import styled, {css} from "styled-components";

export const Day = styled.div`
  display: inline-block;
  height: 20px;
  width: 20px;
  transform: scale(0.9);
  transition: all ease 0.2s;
  cursor: pointer;
  border-radius: 20px;

  ${(props: { state: string; }) => props.state === "nonPertenceMonth" &&
          css`
            opacity: 0.3;
            cursor: default;

            &.week-view {
              height: 100px;
            }
          `}
  &.week-view {
    display: flex;
    flex-wrap: wrap;
    height: fit-content;
    width: fit-content;
    justify-content: center;
    max-width: 300px;

    .add-task-btn:hover {
      color: #2e2f3a;
    }

    .add-task-btn:active {
      transform: scale(1.2);
    }
  }
`;
