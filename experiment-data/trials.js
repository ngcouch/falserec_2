
var trial = {
    type: "html-button-response",
    stimulus: function() {

	//retrieve the sentence
	return jsPsych.timelineVariable('sentence', true)
	
    },
    choices: ["1", "2", "3", "4", "5"]
}

var task_loop = {
    timeline: [trial],
    timeline_variables: function() {

	if (condition == 1 || condition == 3) {

	    return list_1
	}

	else {

	    return list_2
	}
	
    },
    randomize_order: true
}

var recognition_loop = {
    timeline: [trial],
    timeline_variables: sentences,
    randomize_order: true
}
