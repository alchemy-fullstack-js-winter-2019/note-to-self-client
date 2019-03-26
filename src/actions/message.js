import { createAction } from 'promise-middleware-redux';

export const [
  createMessage,
  CREATE_MESSAGE,
  CREATE_MESSAGE_PENDING,
  CREATE_MESSAGE_FULFILLED,
  CREATE_MESSAGE_REJECTED
] = createAction('CREATE_MESSAGE', createMessage);
  

export const UPDATE_DATE = 'UPDATE_DATE';
export const updateDate = date => ({
  type: UPDATE_DATE,
  payload: date
});
export const UPDATE_PUBLIC = 'UPDATE_PUBLIC';
export const updatePublic = value => ({
  type: UPDATE_PUBLIC,
  payload: value
});

export const UPDATE_TIME = 'UPDATE_TIME';
export const updateTime = time => ({
  type: UPDATE_TIME,
  payload: time
});

export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export const updateMessage = message => ({
  type: UPDATE_MESSAGE,
  payload: message
});
