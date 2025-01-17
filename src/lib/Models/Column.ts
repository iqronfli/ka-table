import { DataType, SortDirection } from '../enums';

import { Field } from '../types';
import { PopupPosition } from './PopupPosition';

export class Column<TData = any> {
    public colGroup?: React.ColHTMLAttributes<HTMLElement>;
    public dataType?: DataType;
    public field?: Field;
    public filterRowOperator?: any;
    public filterRowValue?: any;
    public headerFilterValues?: any[];
    public headerFilterPopupPosition?: PopupPosition;
    public headerFilterListItems?: (props: { data?: TData[] }) => any[];
    public filter?: (value: any, filterValue: any, rowData?: TData) => boolean;
    public isHeaderFilterPopupShown?: boolean;
    public isEditable?: boolean;
    public isFilterable?: boolean;
    public isResizable?: boolean;
    public isSortable?: boolean;
    public key!: string;
    public sortDirection?: SortDirection;
    public sortIndex?: number;
    public style?: React.CSSProperties;
    public title?: string;
    public visible?: boolean;
    public width?: number | string;
}
