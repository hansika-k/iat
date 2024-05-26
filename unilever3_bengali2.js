define(['pipAPI', 'https://cdn.jsdelivr.net/gh/hansika-k/iat@main/touchtrue_bengali1.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({

		category1 : {
			name : 'সাবান', //Will appear in the data.
			title : {
				media : {word : 'সাবান'}, //Name of the category presented in the task.
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
			name : 'বডিওয়াশ', //Will appear in the data.
			title : {
				media : {word : 'বডিওয়াশ'}, //Name of the category presented in the task.
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
			name : 'স্বাস্থ্যকর',
			title : {
				media : {word : 'স্বাস্থ্যকর'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
            	{word: 'পরিষ্কার'},
				{word: 'বিশুদ্ধ'},
				{word: 'সুস্থ'},
				{word: 'স্যানিটারি'},
				{word: 'জীবাণুমুক্ত'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :
		{
			name : 'সৌন্দর্য',
			title : {
				media : {word : 'সৌন্দর্য'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
          {word: 'পার্লার'},
				{word: 'স্পা'},
				{word: 'কসমেটিক'},
				{word: 'চুলের যত্ন'},
				{word: 'ত্বকের যত্ন'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},

		base_url : {//Where are your images at?
			image : 'https://hansika-k.github.io/iat/imagesjpg/'
		} 
	});
});
