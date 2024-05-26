define(['pipAPI', 'https://cdn.jsdelivr.net/gh/hansika-k/iat@main/touchtrue_bengali1.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({

		category1 : {
			name : 'আমাকে', //Will appear in the data.
			title : {
				media : {word : 'আমাকে'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
            {word: 'নিজেকে'},
				{word: 'নিজের থেকে'},
				{word: 'আমার'},
				{word: 'স্বয়ং'},
				{word: 'আমি'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'অন্যান্য', //Will appear in the data.
			title : {
				media : {word : 'অন্যান্য'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
           	{word: 'পরিবার'},
				{word: 'শ্বশুরবাড়ি'},
				{word: 'স্বামী'},
				{word: 'শিশু'},
				{word: 'তাদের'}
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
				{word: 'এন্টিসেপটিক'},
				{word: 'বাণু মুক্ত'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :
		{
			name : 'অস্বাস্থ্যকর',
			title : {
				media : {word : 'অস্বাস্থ্যকর'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
          {word: 'নোংরা'},
				{word: 'অপবিত্র'},
				{word: 'অসুস্থ'},
				{word: 'ময়লা'},
				{word: 'দাগ'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},

		base_url : {//Where are your images at?
			image : 'https://hansika-k.github.io/iat/imagesjpg/'
		} 
	});
});
