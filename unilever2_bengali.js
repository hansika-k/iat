define(['pipAPI', 'https://cdn.jsdelivr.net/gh/hansika-k/iat@main/touchtrue.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({

		category1 : {
			name : 'স্বাস্থ্যকর', //Will appear in the data.
			title : {
				media : {word : 'স্বাস্থ্যকর'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
            {word: 'পরিষ্কার'},
				{word: 'বিশুদ্ধ'},
				{word: 'সুস্থ'},
				{word: 'স্যানিটারি'},
				{word: 'জীবাণুমুক্ত'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'সৌন্দর্য', //Will appear in the data.
			title : {
				media : {word : 'সৌন্দর্য'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
           	{word: 'পার্লার'},
				{word: 'স্পা'},
				{word: 'প্রসাধনী'},
				{word: 'চুলের যত্ন'},
				{word: 'ত্বকের যত্ন'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},
		attribute1 :
		{
			name : 'প্রয়োজনীয়তা',
			title : {
				media : {word : 'প্রয়োজনীয়তা'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
            	{word: 'খাদ্য'},
				{word: 'জল'},
				{word: 'অপরিহার্য'},
				{word: 'মৌলিক'},
				{word: 'প্রয়োজন'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :
		{
			name : 'প্রবৃত্তি',
			title : {
				media : {word : 'প্রবৃত্তি'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
          {word: 'বিলাসিতা'},
				{word: 'ট্রিট'},
				{word: 'বাড়াবাড়ি'},
				{word: 'অতিরিক্ত'},
				{word: 'প্যাপারিং'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},

		base_url : {//Where are your images at?
			image : 'https://hansika-k.github.io/iat/imagesjpg/'
		} 
	});
});
