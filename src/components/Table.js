import React, { Component } from 'react';
import { usersJSON } from '../data';

export default class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: usersJSON,
		}
	}

	componentWillReceiveProps(nextProps) {

	if(	this.props.sortBy !== nextProps.sortBy){
		let newData =[...this.state.users];
		switch( nextProps.sortBy){
			case "age":
				newData=	newData.sort(this.compareByAge)
				break;
				case "name":
					newData=	newData.sort(this.compareByName)

				break;
				case "rank":
					newData=	newData.sort(this.compareByRank)

				break;
				case "points":
					newData=	newData.sort(this.compareByPoints)

				break;
				default:
		}
		this.setState({
			users:[...newData]
		})
	
	}

	}

	// complete the comparators
	compareByAge(a, b) {
		return a.age - b.age;
	}

	compareByName(a, b) {
		return a.name.localeCompare(b.name);
	}

	compareByPoints(a, b) {
		return a.points - b.points;
	}

	compareByRank(a, b) {
		return a.rank - b.rank;
	}


	render() {

		let tds = null;
		if (this.state.users) {
			tds = this.state.users.map(item => {
				return (
					<tr>
						<td>{item.age}</td>
						<td>{item.name}</td>
						<td>{item.points}</td>
						<td>{item.rank}</td>

					</tr>

				);
			});
		}

		return (<div>
			<table className="table table-striped">
				<thead>
					<tr key="head">
						<th>Age</th>
						<th>Name</th>
						<th>Points</th>
						<th>Rank</th>
					</tr>
				</thead>
				<tbody>
					{tds}

				</tbody>
			</table>
		</div>)
	}
}
