// Action Creator
// creates actions with a type passing state (course data)
// this is a convenience function, it returns an action
export function createCourse(course){
	// in ES6, you can avoid "course: course" - if right hand is same as left hand, you can omit.
	return {type: 'CREATE_COURSE', course};
}
