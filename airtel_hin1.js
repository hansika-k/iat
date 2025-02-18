define(['pipAPI', 'https://cdn.jsdelivr.net/gh/hansika-k/iat@main/touchtrue_nooverlap_hindi2.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({

		category1 : {
			name : 'प्रीपेड', //Will appear in the data.
			title : {
				media : {word : 'प्रीपेड'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
            {word: 'रिचार्ज'},
				{word: 'टॉप उप'},
				{word: 'पैक'},
				{word: 'वैलिडिटी'},
				{word: 'दैनिक डेटा'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'पोस्टपेड', //Will appear in the data.
			title : {
				media : {word : 'पोस्टपेड'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
           	{word: 'बिल पेमेंट'},
				{word: 'रोलओवर'},
				{word: 'पारिवारिक प्लान'},
				{word: 'रेंटल'},
				{word: 'मासिक डेटा'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},
		attribute1 :
		{
			name : 'भाषा',
			title : {
				media : {word : 'भाषा'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
            	{word: 'वाक्य'},
				{word: 'शब्द'},
				{word: 'वाक्यांश'},
				{word: 'शब्दकोष'},
				{word: 'टाइपो'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :
		{
			name : 'गणना',
			title : {
				media : {word : 'गणना'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
          {word: 'समीकरण'},
				{word: 'नंबर'},
				{word: 'गणित'},
				{word: 'अनुमान'},
				{word: 'गिनती में गलती'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},

		base_url : {//Where are your images at?
			image : 'https://hansika-k.github.io/iat/imagesjpg/'
		} 
	});
});
