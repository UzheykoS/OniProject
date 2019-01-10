import { Theme } from '@material-ui/core';
import { WithStyles } from '@material-ui/core/styles/withStyles';
import * as React from 'react';
import { WithUtilsProps } from '../../_shared/WithUtils';
import DateTimePickerView, { DateTimePickerViewType } from '../../constants/DateTimePickerView';
import { MaterialUiPickersDate } from '../../typings/date';
export declare const styles: (theme: Theme) => Record<"separator" | "toolbar" | "ampmSelection" | "ampmLabel" | "hourMinuteLabel" | "dateHeader" | "timeHeader">;
export declare type MeridiemMode = 'am' | 'pm';
export interface DateTimePickerHeaderProps extends WithUtilsProps, WithStyles<typeof styles> {
    date: MaterialUiPickersDate;
    meridiemMode: MeridiemMode;
    openView: DateTimePickerViewType;
    onOpenViewChange: (view: DateTimePickerView) => void;
    setMeridiemMode: (mode: MeridiemMode) => () => void;
    ampm?: boolean;
}
export declare const DateTimePickerHeader: React.SFC<DateTimePickerHeaderProps>;
declare const _default: React.ComponentType<Pick<Pick<DateTimePickerHeaderProps, "ampm" | "date" | "classes" | "innerRef" | "meridiemMode" | "openView" | "onOpenViewChange" | "setMeridiemMode"> & {
    children?: React.ReactNode;
}, "children" | "ampm" | "date" | "meridiemMode" | "openView" | "onOpenViewChange" | "setMeridiemMode">>;
export default _default;