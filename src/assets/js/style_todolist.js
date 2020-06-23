import styled from 'styled-components';

export const TodoListWrapper = styled.div`
  width: 380px;
  height: 300px;
  margin: 100px auto;
  border: 1px solid #777;
  text-align: center;
`;

export const ControlWrapper = styled.div`
  width: 100%;
  height: 100px;
  line-height: 100px;
  border-bottom: 1px solid #333;
`;

export const TodosWrapper = styled.ul`
  width: 100%;
  height: 200px;
`;

export const TodoItem = styled.li`
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #eee;
`;

export const TodoInput = styled.input.attrs({
  placeholder: '请输入新的 todo',
})`
  width: 160px;
  height: 38px;
  padding: 0 30px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #999;
  }
`;
