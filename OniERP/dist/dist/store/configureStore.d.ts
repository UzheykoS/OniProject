import { AnyAction, Store } from 'redux';
import { Check } from '../utils/types';
export default function configureStore(initialState: any): Store<{
    hasErrored: boolean;
    isLoading: boolean;
    items: any[];
    check: any;
    history: Check[];
}, AnyAction> & {
    dispatch: {};
};
