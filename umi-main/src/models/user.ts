import { queryCurrent, getAccountLogin } from '@/services/user';
import { history } from 'umi'
import { Reducer } from 'redux';
import { Effect } from 'dva';

export interface UserState {
    currentUser: {};
}

export interface UserModelType {
    namespace: string;
    state: UserState;
    effects: {
        fetchCurrent: Effect;
        login: Effect;
    };
    reducers: {
        saveCurrentUser: Reducer<UserState>;
    };
}

const UserModel: UserModelType = {
    namespace: 'user',
    state: {
        currentUser: {},
    },
    effects: {
        *fetchCurrent(_, { call, put }) {
            const response = yield call(queryCurrent);
            if (response.errorCode === "0") {
                yield put({
                    type: 'saveCurrentUser',
                    payload: response.data,
                });
            }
        },
        *login({ payload }, { call, put }) {
            const response = yield call(getAccountLogin, payload);
            if (response.errorCode === "0") {
                history.replace('/');
            }
        },

    },
    reducers: {
        saveCurrentUser(state, action) {
            return {
                ...state,
                currentUser: action.payload || {},
            };
        },
    },
}

export default UserModel;