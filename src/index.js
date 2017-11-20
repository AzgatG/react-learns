import React from 'react'
import {render} from 'react-dom'

import './style.css'

import Root from './components/Root'
import {articles} from './fixtures'
import store from './store'


render(<Root articles={articles} />, document.getElementById('container'));
