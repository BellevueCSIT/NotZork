// @flow
import type {Dispatch} from 'react-redux';

export const TYPE_NAVIGATION_SETPATH = 'type_navigation_setpath';

export default (path: string) => (dispatch: Dispatch): Promise<any> => {
    return new Promise((resolve) => {
        dispatch({type: TYPE_NAVIGATION_SETPATH, payload: path});
        resolve(path);
    });
}