import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ReactDOM from 'react-dom';

import { DataType, Events } from '../../enums';
import { ICellEditorProps } from '../CellEditor/CellEditor';
import FilterRowBoolean from './FilterRowBoolean';

Enzyme.configure({ adapter: new Adapter() });
const props: ICellEditorProps = {
  column: {
    dataType: DataType.Boolean,
    key: 'fieldName',
    title: 'Field',
  },
  dispatch: jest.fn(),
  field: 'fieldName',
  isSelectedRow: true,
  rowData: { column: 1 },
  rowKeyField: '',
};

describe('FilterRowBoolean', () => {
  it('renders without crashing', () => {
    const element = document.createElement('td');
    ReactDOM.render(<FilterRowBoolean {...props} />, element);
    ReactDOM.unmountComponentAtNode(element);
  });

  it('should fire FilterRowChanged', () => {
    const newValue = false;
    const column = { field: 'name', key: 'nameKey', dataType: DataType.Boolean };
    const wrapper = mount(<FilterRowBoolean {...props}  column={column} />);

    wrapper.find('input').props().onChange!({currentTarget: { checked: newValue} } as any);
    expect(props.dispatch).toBeCalledTimes(1);
    expect(props.dispatch).toBeCalledWith(
      Events.FilterRowChanged, { column: { ...column, filterRowValue: newValue } },
    );
  });
});
