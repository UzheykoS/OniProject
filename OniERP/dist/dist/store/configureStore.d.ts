import { AnyAction, Store } from 'redux';
import { Check } from '../utils/types';
export default function configureStore(initialState: any): Store<{
    lastId: any;
    hasErrored: boolean;
    isLoading: boolean;
    items: any[];
    check: any;
    history: Check[];
    log: string;
    errorMessage: string;
}, AnyAction> & {
    dispatch: {};
};
