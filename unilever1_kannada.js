define(['pipAPI', 'https://cdn.jsdelivr.net/gh/hansika-k/iat@main/touchtrue.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({

		category1 : {
			name : 'ಗಂಡಸು', //Will appear in the data.
			title : {
				media : {word : 'ಗಂಡಸು'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
            {word: 'ರಾಹುಲ್'},
				{word: 'ರೋಹಿತ್'},
				{word: 'ಅಭಿಷೇಕ್'},
				{word: 'ಆನಂದ್'},
				{word: 'ಮನೀಶ್'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'ಹೆಂಗಸು', //Will appear in the data.
			title : {
				media : {word : 'ಹೆಂಗಸು'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
           	{word: 'ಆಯುಷಿ'},
				{word: 'ತಾನ್ಯಾ'},
				{word: 'ರಿಯಾ'},
				{word: 'ದೀಪಿಕಾ'},
				{word: 'ನೇಹಾ'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},
		attribute1 :
		{
			name : 'ಸ್ವಚ್ಛತೆಯಿಲ್ಲದ',
			title : {
				media : {word : 'ಸ್ವಚ್ಛತೆಯಿಲ್ಲದ'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
            	{word: 'ಕೊಳಕಾದ'},
				{word: 'ಅಶುಧ್ಢವಾದ'},
				{word: 'ರೋಗಿಷ್ಟ'},
				{word: 'ಹೇಸಿಗೆಯಾದ'},
				{word: 'ಕಲೆಯಾದ'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :
		{
			name : 'ಸ್ವಚ್ಛ',
			title : {
				media : {word : 'ಸ್ವಚ್ಛ'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
          {word: 'ಶುಚಿ'},
				{word: 'ಶುಧ್ಢ'},
				{word: 'ಆರೋಗ್ಯಪೂರ್ಣ'},
				{word: 'ಚೊಕ್ಕಟ'},
				{word: 'ಕೀಟಾಣುರಹಿತ'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},

		base_url : {//Where are your images at?
			image : 'https://hansika-k.github.io/iat/imagesjpg/'
		} 
	});
});
