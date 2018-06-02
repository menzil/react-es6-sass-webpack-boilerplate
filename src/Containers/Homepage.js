/**
 * @Author: AJI
 * @Date:	 2018-05-31T09:30:19+08:00
 * @Email:	menzil@live.cn
 * @Last modified by:   AJI
 * @Last modified time: 2018-05-31T16:43:19+08:00
 */



import React, {Component} from 'react';

class Homepage extends Component {
	constructor(props){
		super(props);
		this.state = {
			count: 0
		}
	}

	componetWillMount(){
		console.log('componetWillMount');
	}



	componentDidMount(){
		console.log('componentDidMount');
	}

	componentWillUnmount(){
		console.log('componentWillUnmount');
	}

	shouldComponentUpdate(nextProps, nextState){
		if(this.state != nextState){
			return true;
		}
		console.log('shouldComponentUpdate');
		return false;
	}

	Counter(){
		this.setState({
			count: this.state.count + 1
		});
		this.getGistlist();
	}
	render(){
		return(
			<div className="container">
				<button onClick={()=>this.Counter()} className="counter">
					Click Count: {this.state.count}
				</button>
			</div>
		)
	}
}

export default Homepage;
