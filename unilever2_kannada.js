define(['pipAPI', 'https://cdn.jsdelivr.net/gh/hansika-k/iat@main/touchtrue.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({

		category1 : {
			name : 'ಸ್ವಚ್ಛವಾದ', //Will appear in the data.
			title : {
				media : {word : 'ಸ್ವಚ್ಛವಾದ'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
            {word: 'ಶುಚಿಯಾದ'},
				{word: 'ಶುಧ್ಢ'},
				{word: 'ಆರೋಗ್ಯಪೂರ್ಣ'},
				{word: 'ಚೊಕ್ಕಟ'},
				{word: 'ಕೀಟಾಣುರಹಿತ'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'ಸೌಂದರ್ಯ', //Will appear in the data.
			title : {
				media : {word : 'ಸೌಂದರ್ಯ'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
           	{word: 'ಪಾರ್ಲರ್'},
				{word: 'ಸ್ಪಾ'},
				{word: 'ಸೌಂದರ್ಯವರ್ಧಕಗಳು'},
				{word: 'ಕೂದಲಿನ ಆರೈಕೆ'},
				{word: 'ಚರ್ಮದ ಆರೈಕೆ'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},
		attribute1 :
		{
			name : 'ಅವಶ್ಯಕತೆ',
			title : {
				media : {word : 'ಅವಶ್ಯಕತೆ'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
            	{word: 'ಆಹಾರ'},
				{word: 'ನೀರು'},
				{word: 'ಅತ್ಯಗತ್ಯ'},
				{word: 'ಮೂಲಭೂತ'},
				{word: 'ಅಗತ್ಯ'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :
		{
			name : 'ತೊಡಗುವಿಕೆ',
			title : {
				media : {word : 'ತೊಡಗುವಿಕೆ'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
          {word: 'ಭೋಗ'},
				{word: 'ಪುರಸ್ಕಾರ'},
				{word: 'ಆಡಂಬರದ'},
				{word: 'ಎಲ್ಲೆ ಮೀರಿದ'},
				{word: 'ಓಲೈಸುವ'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},

		base_url : {//Where are your images at?
			image : 'https://hansika-k.github.io/iat/imagesjpg/'
		} 
	});
});
