/*

	Container component:

	1. 	Constructor:
		- Initialize State
		- Bind any child functions to this (component)

	2. 	Child Functions

	3. 	Render Function
		- Should call child component which contains markup

	4. 	Proptypes
		- provide proptype validation

	5. 	Connect Functions
		- mapStateToProps
		- mapDispatchToProps

	6. 	Export connect()
		- wraps up everything and connects this component to react

*/
import React from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';

class CoursesPage extends React.Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			course: { title: "" }
		};

		// typical React.createClass does binding automatically
		// In ES6, it's not automatic
		// best to place bind calls in constructor for performance issues
		this.onTitleChange = this.onTitleChange.bind(this);
		this.onClickSave = this.onClickSave.bind(this);
	}

	onTitleChange(event) {
		const course = this.state.course;
		course.title = event.target.value;
		this.setState({course: course});
	}

	onClickSave() {
		this.props.actions.createCourse(this.state.course);
	}

	courseRow(course, index){
		return <div key={index}>{course.title}</div>;
	}

	render() {
		return (
			<div>
				<h1>Courses</h1>
				<h4>Add Course</h4>
				<input
					type="text"
					onChange={this.onTitleChange}
					value={this.state.course.title} />
				<input
					type="submit"
					onClick={this.onClickSave}
					value="Save" />
				<hr/>
				{this.props.courses.map(this.courseRow)}
			</div>
		);
	}
}

// Define types for validation
CoursesPage.propTypes = {
	courses: React.PropTypes.array.isRequired,
	actions: React.PropTypes.object.isRequired
};

/*

	mapStateToProps and mapDispatchToProps - these are arbitrary names and can
	be set as anything.

	They are recommended in redux docs

*/

// this function exposes properties of state to props for this component
// state.courses is what courseReducer was aliased as
function mapStateToProps(state, ownProps) {
	return {
		courses: state.courses
	};
}

// short cut to map action to dispatch, so component can just call this.props.[actionFunction](params);
// once this is defined and passed in connect(), connect will no longer map a dispatch property on component
function mapDispatchToProps(dispatch){
	return {
		//createCourse: course => dispatch(courseActions.createCourse(course))
		// bindActionCreators is shortcut to exactly what it says
		// you could map actions individually (createCourse, etc.)
		actions: bindActionCreators(courseActions, dispatch)
	};
}

// connect returns a function and we're calling that function passing this module
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
