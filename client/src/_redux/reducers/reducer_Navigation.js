// @flow
import _ from 'lodash';
import {TYPE_NAVIGATION_SETREDIRECT} from '../actions/navigation/action_SetRedirect';
import {TYPE_NAVIGATION_SETPATH} from '../actions/navigation/action_SetPath';

export type ReducerNavigationType = {
    currentPath: string,
    redirectPath: ?string
}

const DEFAULT_STATE: ReducerNavigationType = {
    currentPath: '/',
    redirectPath: null
};

export default (state: ReducerNavigationType = DEFAULT_STATE, action: any): ReducerNavigationType => {

    let newState: ReducerNavigationType = _.cloneDeep(state);

    switch (action.type) {
        case TYPE_NAVIGATION_SETREDIRECT: {
            newState.redirectPath = action.payload;
            break;
        }
        case TYPE_NAVIGATION_SETPATH: {
            newState.redirectPath = null;
            newState.currentPath = action.payload;
            break;
        }
        default: {
            break;
        }
    }

    return newState;

}