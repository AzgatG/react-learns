import {articles as defaultArticles} from '../fixtures'
import {CHANGE_SELECTION, DATE_RANGE} from '../constants'

const defaultFilters = {
    selected: [],
    dateRange: {
        from: null,
        to: null
    }
}

export default (filter = defaultFilter, action) => {
  const {type, payload} = action
  
  switch (type) {
    case CHANGE_SELECTION: {...filter, };

    case DATE_RANGE: console.log(payload);
  }

  return filter
}