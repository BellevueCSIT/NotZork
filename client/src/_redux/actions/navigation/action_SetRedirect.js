// @flow
import type {Dispatch} from 'react-redux';

export const TYPE_NAVIGATION_SETREDIRECT = 'type_navigation_setredirect';

export default (path: string) => (dispatch: Dispatch): Promise<any> => {
    return new Promise((resolve) => {
        dispatch({type: TYPE_NAVIGATION_SETREDIRECT, payload: path});
        resolve(path);
    });
}

