define(['pipAPI', 'https://cdn.jsdelivr.net/gh/hansika-k/iat@main/touchtrue_hindi.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({

		category1 : {
			name : 'स्वच्छ', //Will appear in the data.
			title : {
				media : {word : 'स्वच्छ'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
            {word: 'साफ'},
				{word: 'शुद्ध'},
				{word: 'स्वस्थ'},
				{word: 'सेनेटरी'},
				{word: 'रोगाणुमुक्त'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'सुंदरता', //Will appear in the data.
			title : {
				media : {word : 'सुंदरता'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
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
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},
		attribute1 :
		{
			name : 'ज़रूरत',
			title : {
				media : {word : 'ज़रूरत'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
            	{word: 'खाना'},
				{word: 'पानी'},
				{word: 'आवश्यक'},
				{word: 'बुनियादी'},
				{word: 'आवश्यकता'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :
		{
			name : 'आसक्ति',
			title : {
				media : {word : 'आसक्ति'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
          {word: 'विलासिता'},
				{word: 'आलिंगन'},
				{word: 'अपव्यय'},
				{word: 'अधिकता'},
				{word: 'सजना सँवरना'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},

		base_url : {//Where are your images at?
			image : 'https://hansika-k.github.io/iat/imagesjpg/'
		} 
	});
});
