import {CHANGE_SELECTION, DATE_RANGE} from '../constants';


const defaultFilter = {
  selected: [],
  dateRange: {
    from: null,
    to: null
  }
};

export default (filter = defaultFilter, action) => {
  const {type, payload} = action;

  switch (type) {
  case CHANGE_SELECTION: return {...filter, selected: payload.selected};

  case DATE_RANGE: return {...filter, dateRange: payload.dateRange};
  }

  return filter;
};