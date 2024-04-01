define(['pipAPI', 'https://cdn.jsdelivr.net/gh/hansika-k/iat@main/touchtrue.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({

		category1 : {
			name : 'Packaged', //Will appear in the data.
			title : {
				media : {word : 'Packaged'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
            {word: 'packaged1.jpg'},
				{word: 'packaged2.jpg'},
				{word: 'packaged3.jpg'},
				{word: 'packaged4.jpg'},
				{word: 'packaged5.jpg'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Chakki', //Will appear in the data.
			title : {
				media : {word : 'Chakki'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
           	{word: 'chakki1.jpg'},
				{word: 'chakki2.jpg'},
				{word: 'chakki3.jpg'},
				{word: 'chakki4.jpg'},
				{word: 'chakki5.jpg'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},
		attribute1 :
		{
			name : 'Positive',
			title : {
				media : {word : 'Positive'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
 {image: 'healthy'},
				{image: 'hygienic'},
				{image: 'nutritious'},
				{image: 'fresh'},
				{image: 'tasty'}
			], 
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :
		{
			name : 'Negative',
			title : {
				media : {word : 'Negative'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
  {image: 'unhealthy'},
				{image: 'stale'},
				{image: 'rotten'},
				{image: 'impure'},
				{image: 'unhygienic'}
			], 
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},

		base_url : {//Where are your images at?
			image : 'https://hansika-k.github.io/iat/imagesjpg/'
		} 
	});
});
