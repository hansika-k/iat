define(['pipAPI', 'https://cdn.jsdelivr.net/gh/hansika-k/iat@main/touchtrue_hindi.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({

		category1 : {
			name : 'मैं', //Will appear in the data.
			title : {
				media : {word : 'मैं'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
            {word: 'अपना'},
				{word: 'स्वयं'},
				{word: 'मेरा'},
				{word: 'खुद'},
				{word: 'स्वत:'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : ' दूसरे', //Will appear in the data.
			title : {
				media : {word : ' दूसरे'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
           	{word: 'परिवार'},
				{word: 'सास-ससुर'},
				{word: 'पति'},
				{word: 'बच्चे'},
				{word: 'वो'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},
		attribute1 :
		{
			name : 'स्वच्छ',
			title : {
				media : {word : 'स्वच्छ'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
            	{word: 'साफ'},
				{word: 'शुद्ध'},
				{word: 'स्वस्थ'},
				{word: 'एंटीसेप्टिक'},
				{word: 'कीटानुरहित'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :
		{
			name : 'अस्वच्छ',
			title : {
				media : {word : 'अस्वच्छ'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
          {word: 'गंदा'},
				{word: 'अशुद्ध'},
				{word: 'बीमार'},
				{word: 'मैला'},
				{word: 'दाग'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},

		base_url : {//Where are your images at?
			image : 'https://hansika-k.github.io/iat/imagesjpg/'
		} 
	});
});
