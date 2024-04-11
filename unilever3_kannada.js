define(['pipAPI', 'https://cdn.jsdelivr.net/gh/hansika-k/iat@main/touchtrue.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({

		category1 : {
			name : 'ಸೋಪ್', //Will appear in the data.
			title : {
				media : {word : 'ಸೋಪ್'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
            {image: 'soap1.jpg'},
				{image: 'soap2.jpg'},
				{image: 'soap3.jpg'},
				{image: 'soap4.jpg'},
				{image: 'soap5.png'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Bಬಾಡಿವಾಶ್', //Will appear in the data.
			title : {
				media : {word : 'ಬಾಡಿವಾಶ್'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
           	{image: 'body1.jpg'},
				{image: 'body2.png'},
				{image: 'body3.jpg'},
				{image: 'body4.jpg'},
				{image: 'body5.jpg'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},
		attribute1 :
		{
			name : 'ಸ್ವಚ್ಛವಾದ',
			title : {
				media : {word : 'ಸ್ವಚ್ಛವಾದ'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
            	{word: 'ಶುಚಿಯಾದ'},
				{word: 'ಶುಧ್ಢ'},
				{word: 'ಆರೋಗ್ಯಪೂರ್ಣ'},
				{word: 'ಚೊಕ್ಕಟವಾದ'},
				{word: 'ಕೀಟಾಣುರಹಿತ'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :
		{
			name : 'ಸೌಂದರ್ಯ',
			title : {
				media : {word : 'ಸೌಂದರ್ಯ'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
          {word: 'ಪಾರ್ಲರ್'},
				{word: 'ಸ್ಪಾ'},
				{word: 'ಸೌಂದರ್ಯ'},
				{word: 'ಕೂದಲಿನ ಆರೈಕೆ'},
				{word: 'ಚರ್ಮದ ಆರೈಕೆ'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},

		base_url : {//Where are your images at?
			image : 'https://hansika-k.github.io/iat/imagesjpg/'
		} 
	});
});
