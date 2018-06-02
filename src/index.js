/**
 * @Author: AJI
 * @Date:   2018-05-31T08:43:29+08:00
 * @Email:  menzil@live.cn
 * @Last modified by:   AJI
 * @Last modified time: 2018-05-31T10:05:33+08:00
 */


import React from 'react';
import ReactDom from 'react-dom';

import "./style/main.sass";

import Homepage from './Containers/Homepage';

ReactDom.render(
	<Homepage />,
	document.getElementById('root')
);
