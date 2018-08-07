import { createAction, Action } from "redux-actions";
import {
    LOAD_ITEMS,
    LOAD_ITEMS_FULFILLED,
    LOAD_ITEMS_REJECTED,
    SHOW_BUSY,
    CREATE_CHECK,
    PROCESS_CHECKOUT,
    ADD_DRINK,
    ADD_DESSERT,
    SET_PAYMENT_TYPE,
    SET_ORDER_TYPE,
    APPEND_DATA,
    UPDATE_DATA
} from './actionTypes';
import { DrinksType, DessertType, Payment, OrderType, 
    ValueInputOption, InsertDataOption, ValueRenderOption, DateTimeRenderOption } from './utils/types';

export const ProcessFetchData = (spreadsheetId: string) => {
    return async (dispatch) => {
        dispatch(itemsIsLoading(true));
        try {
            const response = await  window['gapi'].client.sheets.spreadsheets.values.get({
                spreadsheetId: spreadsheetId,
                range: 'A2:B4',
            });
            const items = await response.result.values;
            dispatch(itemsFetchDataSuccess(items));
        }
        catch (ex) {
            dispatch(itemsHasErrored(true));
            console.log(ex);
            throw Error(ex);
        }
        finally {
            dispatch(itemsIsLoading(false));
        }
    };
};

export const ProcessAppendData = (spreadsheetId: string, valueRange: any) => {
    return async (dispatch) => {
        dispatch(itemsIsLoading(true));
        try {
            const response = await window['gapi'].client.sheets.spreadsheets.values.append({
                spreadsheetId: spreadsheetId,
                range: 'A6:D9',
                valueInputOption: ValueInputOption.USER_ENTERED,
                insertDataOption: InsertDataOption.OVERWRITE,
                includeValuesInResponse: true,
                responseValueRenderOption: ValueRenderOption.FORMATTED_VALUE
            }, { values: valueRange });
            //TODO: Process response result
            const items = await response.result.values;
            debugger;
            dispatch(itemsFetchDataSuccess(items));
        }
        catch (ex) {
            dispatch(itemsHasErrored(true));
            console.log(ex);
            throw Error(ex);
        }
        finally {
            dispatch(itemsIsLoading(false));
        }
    };
};

export const ProcessUpdateData = (spreadsheetId: string, valueRange: any) => {
    return async (dispatch) => {
        dispatch(itemsIsLoading(true));
        try {
            const response = await window['gapi'].client.sheets.spreadsheets.values.update({
                spreadsheetId: spreadsheetId,
                range: 'A6:D10',
                valueInputOption: ValueInputOption.USER_ENTERED,
                includeValuesInResponse: true,
                responseValueRenderOption: ValueRenderOption.FORMATTED_VALUE,
                responseDateTimeRenderOption: DateTimeRenderOption.FORMATTED_STRING
            }, { values: valueRange });
            //TODO: Process response result
            const items = await response.result.values;
            debugger;
            dispatch(itemsFetchDataSuccess(items));
        }
        catch (ex) {
            dispatch(itemsHasErrored(true));
            console.log(ex);
            throw Error(ex);
        }
        finally {
            dispatch(itemsIsLoading(false));
        }
    };
};

export const ProcessFetchDataFake = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(itemsHasErrored(true));
        }, 5000);
    };
}

export const CreateCheck = createAction(CREATE_CHECK);

export const AddDrink = createAction(ADD_DRINK, (type: DrinksType, size: string) => [type, size]);

export const AddDessert = createAction(ADD_DESSERT, (type: DessertType, taste: string, size: string) => [type, taste, size]);

export const SetPaymentType = createAction(SET_PAYMENT_TYPE, (type: Payment) => type);

export const SetOrderType = createAction(SET_ORDER_TYPE, (type: OrderType) => type);

export const ProcessCheckout = createAction(PROCESS_CHECKOUT);

export const itemsHasErrored = createAction(LOAD_ITEMS_REJECTED, (hasErrored: boolean) => hasErrored);

export const itemsIsLoading = createAction(LOAD_ITEMS, (isLoading: boolean) => isLoading);

export const itemsFetchDataSuccess = createAction(LOAD_ITEMS_FULFILLED, (items: any[]) => items);

export const ShowBusy = createAction(SHOW_BUSY, (isBusy: boolean) => isBusy);