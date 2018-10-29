import { LOAD_USER_REQUEST } from '../constants/action-types';

export const getUserDetails = (payload) => {
  return {
    type: LOAD_USER_REQUEST,
    payload
  }
}