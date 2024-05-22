define(['pipAPI', 'https://cdn.jsdelivr.net/gh/hansika-k/iat@main/touchtrue_feedback3.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({

		category1 : {
			name : 'Career', //Will appear in the data.
			title : {
				media : {word : 'Career'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
            {word: 'Job'},
				{word: 'Corporation'},
				{word: 'Salary'},
				{word: 'Office'},
				{word: 'Professional'},
				{word: 'Management'},
				{word: 'Business'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Family', //Will appear in the data.
			title : {
				media : {word : 'Family'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
           	{word: 'Wedding'},
				{word: 'Marriage'},
				{word: 'Parents'},
				{word: 'Relatives'},
				{word: 'Household'},
				{word: 'Home'}, 
				{word: 'Children'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},
		attribute1 :
		{
			name : 'Male',
			title : {
				media : {word : 'Male'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
            	{word: 'Harsh'},
				{word: 'Amit'},
				{word: 'Aditya'},
				{word: 'Rohan'},
				{word: 'Sameer'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :
		{
			name : 'Female',
			title : {
				media : {word : 'Female'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
          {word: 'Anusha'},
				{word: 'Aarti'},
				{word: 'Savita'},
				{word: 'Lata'},
				{word: 'Karishma'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},

		base_url : {//Where are your images at?
			image : 'https://baranan.github.io/minno-tasks/images/'
		},
		// Add the debriefing settings here
        showDebriefing: true, // Show feedback in the last trial? Relevant only in a Qualtrics IAT because in Qualtrics we cannot access the saved feedback and IAT score later in the survey.
        // Texts for the trials that show the debriefing.
        preDebriefingText: 'Press space to see your result', // Text in the trial that comes before showing the debriefing.
        preDebriefingTouchText: 'Touch the bottom green area to see your result', // Touch version for the text in the trial that comes before showing the debriefing.
        debriefingTextTop: 'Your result:', // Will be shown above the feedback text.
        // ATTENTION: We do not recommend showing participants their results. The IAT is a typical psychological measure so it is not very accurate.
        // In Project Implicit's website, you can see that we added much text to explain that there is still much unknown about the meaning of these results.
        // We strongly recommend that you provide all these details in the debriefing of the experiment.
        debriefingTextBottom: 'This result is not a definitive assessment of your attitudes. It is provided for educational purposes only.' // Will be shown below the feedback text.
	});
});
