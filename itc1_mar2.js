define(['pipAPI', 'https://github.com/hansika-k/iat/blob/main/touchtrue_nooverlap_marathi11.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({

		category1 : {
			name : 'ब्रँडेड', //Will appear in the data.
			title : {
				media : {word : 'ब्रँडेड'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
            {image: 'packaged1.jpg'},
				{image: 'packaged2.jpg'},
				{image: 'packaged3.jpg'},
				{image: 'packaged4.jpg'},
				{image: 'packaged5.jpg'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'चक्की', //Will appear in the data.
			title : {
				media : {word : 'चक्की'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
           	{image: 'chakki1.jpg'},
				{image: 'chakki2.jpg'},
				{image: 'chakki3.jpg'},
				{image: 'chakki4.jpg'},
				{image: 'chakki5.jpg'}
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
            	{image: 'hyg1.jpg'},
				{image: 'hyg2.jpg'},
				{image: 'hyg3.jpg'},
				{image: 'hyg4.jpg'},
				{image: 'hyg5.jpg'}
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
          {image: 'unhyg1.jpg'},
				{image: 'unhyg2.jpg'},
				{image: 'unhyg3.jpg'},
				{image: 'unhyg4.jpg'},
				{image: 'unhyg5.jpg'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},

		base_url : {//Where are your images at?
			image : 'https://hansika-k.github.io/iat/imagesjpg/'
		} 
	});
});
