define(['pipAPI', 'https://cdn.jsdelivr.net/gh/hansika-k/iat@main/touchtrue_hindi.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({

		category1 : {
			name : 'साबुन', //Will appear in the data.
			title : {
				media : {word : 'साबुन'}, //Name of the category presented in the task.
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
			name : 'बॉडी वाश', //Will appear in the data.
			title : {
				media : {word : 'बॉडी वाश'}, //Name of the category presented in the task.
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
			name : 'सुंदरता',
			title : {
				media : {word : 'सुंदरता'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
          {word: 'पारलर'},
				{word: 'स्पा'},
				{word: 'कॉस्मेटिक'},
				{word: 'हेयर केयर'},
				{word: 'स्किनकेयर'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},

		base_url : {//Where are your images at?
			image : 'https://hansika-k.github.io/iat/imagesjpg/'
		} 
	});
});
