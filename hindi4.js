define(['pipAPI', 'https://cdn.jsdelivr.net/gh/hansika-k/iat@main/touchtrue.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({

		category1 : {
			name : 'टिकाऊ', //Will appear in the data.
			title : {
				media : {word : 'टिकाऊ'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
            {word: 'जैविक'},
				{word: 'प्राकृतिक'},
				{word: 'पुन उपयोग'},
				{word: 'ग्‍लास'},
				{word: 'इलेक्ट्रिक कार'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'अस्थि‍र', //Will appear in the data.
			title : {
				media : {word : 'अस्थि‍र'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
           	{word: 'सिंथेटिक'},
				{word: 'व्‍यक्ति-नि‍र्मित'},
				{word: 'एक उपयोग'},
				{word: 'प्‍लास्टिक'},
				{word: 'पेट्रोल कार'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},
		attribute1 :
		{
			name : 'अच्‍छा',
			title : {
				media : {word : 'अच्‍छा'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
            	{word: 'उपयोगी'},
				{word: 'खुशी'},
				{word: 'शांति'},
				{word: 'मुस्‍कुराहट'},
				{word: 'चमकीला'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :
		{
			name : 'बुरा',
			title : {
				media : {word : 'बुरा'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
          {word: 'बेकार'},
				{word: 'दुख'},
				{word: 'युद्ध'},
				{word: 'धमकी'},
				{word: 'अंधकार'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},

		base_url : {//Where are your images at?
			image : 'https://baranan.github.io/minno-tasks/images/'
		} 
	});
});
