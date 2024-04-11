define(['pipAPI', 'https://cdn.jsdelivr.net/gh/hansika-k/iat@main/touchtrue.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({

		category1 : {
			name : 'পুরুষ', //Will appear in the data.
			title : {
				media : {word : 'পুরুষ'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
            {word: 'রাহুল'},
				{word: 'রোহিত'},
				{word: 'অভিষেক'},
				{word: 'আনন্দ'},
				{word: 'মনীশ'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'মহিলা', //Will appear in the data.
			title : {
				media : {word : 'মহিলা'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
           	{word: 'আয়ুশি'},
				{word: 'তানিয়া'},
				{word: 'রিয়া'},
				{word: 'দীপিকা'},
				{word: 'নেহা'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},
		attribute1 :
		{
			name : 'অস্বাস্থ্যকর',
			title : {
				media : {word : 'অস্বাস্থ্যকর'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
            	{word: 'নোংরা'},
				{word: 'অশুদ্ধ'},
				{word: 'অসুস্থ'},
				{word: 'নোংরা'},
				{word: 'দাগ লাগা'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :
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

		base_url : {//Where are your images at?
			image : 'https://hansika-k.github.io/iat/imagesjpg/'
		} 
	});
});
