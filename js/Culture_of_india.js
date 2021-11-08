var imageopacityval=1;
var changeimage=false;
var reduceTimer=true;
var timer;
var increasetimer;
var imageCounterIncrementor=0;
var classElementsArray=document.getElementsByClassName("submenu");
function showsubmenu(){
	      for(var i=0;i<6;i++){
			classElementsArray[i].style.display="block";  
		  }
	document.getElementById("familystruct").innerHTML="Family Structure";
	document.getElementById("marrages").innerHTML="Marriages";
	document.getElementById("clothing").innerHTML="Clothing";
	document.getElementById("cuisine").innerHTML="Cuisine";
	document.getElementById("greetings").innerHTML="Greetings";
	document.getElementById("festival").innerHTML="Festival";
		document.getElementById("familystructimg").src="images/menuIcons/family1.png";
	document.getElementById("marriagimg").src="images/menuIcons/wedding1.png";
	document.getElementById("clothingimg").src="images/menuIcons/clothing1.png";
	document.getElementById("cuisineimg").src="images/menuIcons/cusine1.png";
	document.getElementById("greetingsimg").src="images/menuIcons/greeting1.png";
	document.getElementById("festivalimg").src="images/menuIcons/festival1.png";
	
}

function hidesubmenu(){
	 for(var i=0;i<6;i++){
			classElementsArray[i].style.display="none";  
		  }
	document.getElementById("familystruct").innerHTML="";
	document.getElementById("marrages").innerHTML="";
	document.getElementById("clothing").innerHTML="";
	document.getElementById("cuisine").innerHTML="";
	document.getElementById("greetings").innerHTML="";
	document.getElementById("festival").innerHTML="";
		document.getElementById("familystructimg").removeAttribute("src");
	document.getElementById("marriagimg").removeAttribute("src");
	document.getElementById("clothingimg").removeAttribute("src");
	document.getElementById("cuisineimg").removeAttribute("src");
	document.getElementById("greetingsimg").removeAttribute("src");
	document.getElementById("festivalimg").removeAttribute("src");
}

function showsubmenu2(){
		 for(var i=12;i<14;i++){
			classElementsArray[i].style.display="block";  
		  } 
	document.getElementById("LanguageLiterature").innerHTML="Language & Literature";
	document.getElementById("epic").innerHTML="Epic";
	document.getElementById("LanguageLiteratureimg").src="images/menuIcons/lanlit.png";
	document.getElementById("epicimg").src="images/menuIcons/epic1.png";
	}
	

function hidesubmenu2(){
         	 for(var i=12;i<14;i++){
			classElementsArray[i].style.display="none";  
		  }
	document.getElementById("LanguageLiterature").innerHTML="";
	document.getElementById("epic").innerHTML="";
	document.getElementById("LanguageLiteratureimg").removeAttribute("src");
	document.getElementById("epicimg").removeAttribute("src");
    }

function showsubmenu3(){
	for(var i=6;i<12;i++){
			classElementsArray[i].style.display="block";  
		  }
	document.getElementById("dance").innerHTML="Dance";
	document.getElementById("dt").innerHTML="Drama & Threater";
	document.getElementById("music").innerHTML="Music";
	document.getElementById("painting").innerHTML="Painting";
	document.getElementById("sculpture").innerHTML="Sculpture";
	document.getElementById("architecture").innerHTML="Architecture";
		document.getElementById("danceimg").src="images/menuIcons/dance1.png";
	document.getElementById("dtimg").src="images/menuIcons/dt1.png";
	document.getElementById("musicimg").src="images/menuIcons/music1.png";
	document.getElementById("paintingimg").src="images/menuIcons/painting1.png";
	document.getElementById("sculptureimg").src="images/menuIcons/sculpture1.png";
	document.getElementById("architectureimg").src="images/menuIcons/architecture1.png";
}

function hidesubmenu3(){
		 for(var i=6;i<12;i++){
			classElementsArray[i].style.display="none";  
		  }
	document.getElementById("dance").innerHTML="";
	document.getElementById("dt").innerHTML="";
	document.getElementById("music").innerHTML="";
	document.getElementById("painting").innerHTML="";
	document.getElementById("sculpture").innerHTML="";
	document.getElementById("architecture").innerHTML="";
		document.getElementById("danceimg").removeAttribute("src");
	document.getElementById("dtimg").removeAttribute("src");
	document.getElementById("musicimg").removeAttribute("src");
	document.getElementById("paintingimg").removeAttribute("src");
	document.getElementById("sculptureimg").removeAttribute("src");
	document.getElementById("architectureimg").removeAttribute("src");
}

function showsubmenu4(){
		 for(var i=14;i<16;i++){
			classElementsArray[i].style.display="block";  
		  }
	document.getElementById("game").innerHTML="Games";
	document.getElementById("martial").innerHTML="Martial Arts";
	document.getElementById("gameimg").src="images/menuIcons/games1.png";
	document.getElementById("martialimg").src="images/menuIcons/mar1.png";
	}
	

function hidesubmenu4(){
		 for(var i=14;i<16;i++){
			classElementsArray[i].style.display="none";  
		  }
	document.getElementById("game").innerHTML="";
	document.getElementById("martial").innerHTML="";
	document.getElementById("gameimg").removeAttribute("src");
	document.getElementById("martialimg").removeAttribute("src");
    }
	
function showsubmenu5(){
		 for(var i=16;i<18;i++){
			classElementsArray[i].style.display="block";  
		  }
	document.getElementById("gon").innerHTML="Gift of nature";
	document.getElementById("animals").innerHTML="Animals";
	document.getElementById("gonimg").src="images/menuIcons/gift_of_nat.png";
	document.getElementById("animalsimg").src="images/menuIcons/animal.png";
	}
	

function hidesubmenu5(){
	 for(var i=16;i<18;i++){
			classElementsArray[i].style.display="none";  
		  }
	document.getElementById("gon").innerHTML="";
	document.getElementById("animals").innerHTML="";
	document.getElementById("gonimg").removeAttribute("src");
	document.getElementById("animalsimg").removeAttribute("src");
    }	
	
function imageroter(){
	setTimeout(fadder,2000);
	//document.getElementById("banneroter").src="images/banners/monuments2.png";
	//document.getElementById("banneroter").height="200";
	//document.getElementById("banneroter").width="100%";
}

function fadder(){
	if(changeimage)
	{
	   imageopacityval=0;
	   document.getElementById("banneroter").style.opacity=imageopacityval;
	   var imageurl=urlcreator();
	  // alert(imageurl);
	   document.getElementById("banneroter").src= imageurl;                               //"images/banners/monuments2.png";
	  increasetimer=setInterval(opacityincreaser, 100); 
	}
	if(reduceTimer){
	  timer=setInterval(opacityreducer, 100);
	}
}

function opacityreducer()
{reduceTimer=false;
 imageopacityval=imageopacityval-0.03;
 document.getElementById("banneroter").style.opacity=imageopacityval;	
 if(imageopacityval<0.15){
	 changeimage=true;
	 reduceTimer=false;
	 clearInterval(timer);
	 fadder();
 }
}


function opacityincreaser()
{
 changeimage=false;
 imageopacityval=imageopacityval+0.03;
 document.getElementById("banneroter").style.opacity=imageopacityval;	
 if(imageopacityval>0.95){
	 changeimage=false;
	 clearInterval(increasetimer);
	 reduceTimer=true;
	 imageroter()
 }
}

function urlcreator()
{   
    var urlimage; 
	imageCounterIncrementor=imageCounterIncrementor+1;	
	//alert(typeof(imageCounterIncrementor));
	if(imageCounterIncrementor>7){
		imageCounterIncrementor=0;
	}
	switch(imageCounterIncrementor){
		case 1:
		        urlimage="images/banners/monuments2.png";
				break;
		case 2:
		        urlimage="images/banners/holi.png";
				break;
		case 3:
		        urlimage="images/banners/forest.png";
				break;
		case 4:
		        urlimage="images/banners/animals.png";
				break;
		case 5:
		        urlimage="images/banners/animal2.png";
				break;
		case 6:
		        urlimage="images/banners/odishi.png";
				break;	
		case 7:
		        urlimage="images/banners/food.png";
				break;					
		default: 
		        urlimage="images/banners/india_galance.png";
				break;
	}
	return urlimage;
}

function introductiondata(){
	var content="The culture of India is the way of living of the people of India. India's languages, religions, dance, music, architecture, food, and customs differ from place to place within the country. The Indian culture, often labeled as an amalgamation of several cultures, spans across the Indian subcontinent and has been influenced by a history that is several millennia old.Many elements of India's diverse cultures, such as Indian religions, yoga and Indian cuisine, have had a profound impact across the world."
	var content1;
	if(content.length>350){
		content1=content.substr(0,350);
		content1=content1+'.....<br>'+'<span style="color:blue" id="info">Read full in Scroller below</span>';  
	}
	document.getElementById("Texter").innerHTML=content1;
	document.getElementById("Texter2").innerHTML=content;
	document.getElementById("pager").innerHTML="Page 1 of 20";
	document.getElementById("TitleHeading").innerHTML="Introduction";
	document.getElementById("bodyImages").src="images/bodyImages/introduction1.png";
	var acdc=document.getElementById("mysong").src;
var song= acdc.substr(acdc.lastIndexOf('/') + 1);

if(song=="intro.mp3"){
	return;
}else{
	document.getElementById("mysong").src="songs/intro.mp3";
	document.getElementById("myplayer").src="songs/intro.mp3";
}
}

function religiondata(){
	var content="India is the birthplace of Hinduism, Buddhism, Jainism and Sikhism, collectively known as Indian religions.Indian religions are a major form of world religions along with Abrahamic ones. Today, Hinduism and Buddhism are the world's third and fourth-largest religions respectively, with over 2 billion followers altogether, and possibly as many as 2.5 or 2.6 billion followers.India is one of the most religiously diverse nations in the world, with some of the most deeply religious societies and cultures. Religion plays a central and definitive role in the life of many of its people.According to the 2011 census, 79.8% of the population of India practice Hinduism. Islam (14.2%), Christianity (2.3%), Sikhism (1.7%), Buddhism (0.7%) and Jainism (0.4%) are the other major religions followed by the people of India. Many tribal religions, such as Sarnaism, are found in India, though these have been affected by major religions such as Hinduism, Buddhism, Islam and Christianity. Jainism, Zoroastrianism, Judaism, and the Bahá'í Faith are also influential but their numbers are smaller. Atheism and agnostics also have visible influence in India, along with a self-ascribed tolerance to other faiths";
	var content1;
	if(content.length>350){
		content1=content.substr(0,350);
		content1=content1+'.....<br>'+'<span style="color:blue" id="info">Read full in Scroller below</span>';  
	}
	document.getElementById("Texter").innerHTML=content1;
	document.getElementById("Texter2").innerHTML=content;
	document.getElementById("pager").innerHTML="Page 2 of 20";
	document.getElementById("TitleHeading").innerHTML="Religion";
	document.getElementById("bodyImages").src="images/bodyImages/religion.png";
	var acdc=document.getElementById("mysong").src;
var song= acdc.substr(acdc.lastIndexOf('/') + 1);

if(song=="om.mp3"){
	return;
}else{
	document.getElementById("mysong").src="songs/om.mp3";
	document.getElementById("myplayer").src="songs/om.mp3";
}
	
}

function fsdata(){
	var content="For generations, India has a prevailing tradition of the joint family system. It is a system under which extended members of a family – parents, children, the children's spouses and their offspring, etc. – live together. Usually, the oldest male member is the head in the joint Indian family system. He mostly makes all important decisions and rules, and other family members are likely abide by them. In a 1966 study, Orenstein and Micklin analysed India's population data and family structure. Their studies suggest that Indian household sizes had remained similar over the 1911 to 1951 period. Thereafter, with urbanisation and economic development, India has witnessed a break up of traditional joint family into more nuclear-like families.[24][25] Sinha, in his book, after summarising the numerous sociological studies done on Indian family, notes that over the last 60 years, the cultural trend in most parts of India has been an accelerated change from joint family to nuclear families, much like population trends in other parts of the world. The traditional large joint family in India, in the 1990s, accounted for a small percent of Indian households, and on average had lower per capita household income. He finds that joint family still persists in some areas and in certain conditions, in part due to cultural traditions and in part due to practical factors. Youth in lower socio-economic classes are more inclined to spend time with their families than their peers due to differing ideologies in rural and urban parenting."
	var content1;
	if(content.length>350){
		content1=content.substr(0,350);
		content1=content1+'.....<br>'+'<span style="color:blue" id="info">Read full in Scroller below</span>';  
	}
	document.getElementById("Texter").innerHTML=content1;
	document.getElementById("Texter2").innerHTML=content;
	document.getElementById("pager").innerHTML="Page 3 of 20";
	document.getElementById("TitleHeading").innerHTML="Family Structure";
	document.getElementById("bodyImages").src="images/bodyImages/family_structure.png";
	var acdc=document.getElementById("mysong").src;
var song= acdc.substr(acdc.lastIndexOf('/') + 1);

if(song=="life.mp3"){
	return;
}else{
	document.getElementById("mysong").src="songs/life.mp3";
	document.getElementById("myplayer").src="songs/life.mp3";
}
}

function marragedata(){
	var content="For centuries, arranged marriages have been the tradition in Indian society. Even today, the majority of Indians have their marriages planned by their parents and other respected family-members. In the past, the age of marriage was young. The average age of marriage for women in India has increased to 21 years, according to 2011 Census of India. In 2009, about 7% of women got married before the age of 18.In some marriages the bride's family provide a dowry to the bridegroom. Traditionally, the dowry was considered a woman's share of the family wealth, since a daughter had no legal claim on her natal family's real estate. It also typically included portable valuables such as jewelery and household goods that a bride could control throughout her life. Historically, in most families the inheritance of family estates passed down the male line. Since 1956, Indian laws treat males and females as equal in matters of inheritance without a legal will.Indians are increasingly using a legal will for inheritance and property succession, with about 20 percent using a legal will by 2004.In India, the divorce rate is low — 1% compared with about 40% in the United States.These statistics do not reflect a complete picture, though. There is a dearth of scientific surveys or studies on Indian marriages where the perspectives of both husbands and wives were solicited in-depth. Sample surveys suggest the issues with marriages in India are similar to trends observed elsewhere in the world. The divorce rates are rising in India. Urban divorce rates are much higher. Women initiate about 80 percent of divorces in India.";
		var content1;
	if(content.length>350){
		content1=content.substr(0,350);
		content1=content1+'.....<br>'+'<span style="color:blue" id="info">Read full in Scroller below</span>';  
	}
	document.getElementById("Texter").innerHTML=content1;
	document.getElementById("Texter2").innerHTML=content;
	document.getElementById("pager").innerHTML="Page 4 of 20";
	document.getElementById("TitleHeading").innerHTML="Marriages";
	document.getElementById("bodyImages").src="images/bodyImages/marriages1.png";
	var acdc=document.getElementById("mysong").src;
var song= acdc.substr(acdc.lastIndexOf('/') + 1);

if(song=="life.mp3"){
	return;
}else{
	document.getElementById("mysong").src="songs/life.mp3";
	document.getElementById("myplayer").src="songs/life.mp3";
}
}

/*function marragedata(){
	var content="For centuries, arranged marriages have been the tradition in Indian society. Even today, the majority of Indians have their marriages planned by their parents and other respected family-members. In the past, the age of marriage was young. The average age of marriage for women in India has increased to 21 years, according to 2011 Census of India. In 2009, about 7% of women got married before the age of 18.In some marriages the bride's family provide a dowry to the bridegroom. Traditionally, the dowry was considered a woman's share of the family wealth, since a daughter had no legal claim on her natal family's real estate. It also typically included portable valuables such as jewelery and household goods that a bride could control throughout her life. Historically, in most families the inheritance of family estates passed down the male line. Since 1956, Indian laws treat males and females as equal in matters of inheritance without a legal will.Indians are increasingly using a legal will for inheritance and property succession, with about 20 percent using a legal will by 2004.In India, the divorce rate is low — 1% compared with about 40% in the United States.These statistics do not reflect a complete picture, though. There is a dearth of scientific surveys or studies on Indian marriages where the perspectives of both husbands and wives were solicited in-depth. Sample surveys suggest the issues with marriages in India are similar to trends observed elsewhere in the world. The divorce rates are rising in India. Urban divorce rates are much higher. Women initiate about 80 percent of divorces in India.";
		var content1;
	if(content.length>350){
		content1=content.substr(0,350);
		content1=content1+'.....<br>'+'<span style="color:blue" id="info">Read full in Scroller below</span>';  
	}
	document.getElementById("Texter").innerHTML=content1;
	document.getElementById("Texter2").innerHTML=content;
	document.getElementById("pager").innerHTML="Page 4 of 20";
}*/

function clothingdata()
{
	var content="Traditional clothing in India greatly varies across different parts of the country and is influenced by local culture, geography, climate and rural/urban settings. Popular styles of dress include draped garments such as sari for women and dhoti or lungi or panche (in Kannada) for men. Stitched clothes are also popular such as churidar or salwar-kameez for women, with dupatta (long scarf) thrown over shoulder completing the outfit. Salwar is often loose fitting, while churidar is a tighter cut.For men, stitched versions include kurta-pyjama and European-style trousers and shirts for men. In urban centres, people can often be seen in jeans, trousers, shirts, suits, kurtas and variety of other fashions.In public and religious places, Indian dress etiquette discourages exposure of skin and wearing transparent or tight clothes.Most Indian clothes are made from cotton which is ideal for the region's hot weather.Since India's weather is mostly hot and rainy, majority of Indians wear sandals.Indian women perfect their sense of charm and fashion with make up and ornaments. Bindi, mehendi, earrings, bangles and other jewelry are common. On special occasions, such as marriage ceremonies and festivals, women may wear cheerful colours with various ornaments made with gold, silver or other regional stones and gems.Bindi is often an essential part of a Hindu woman's make up. Worn on their forehead, some consider the bindi as an auspicious mark. Traditionally, the red bindi was worn only by married Hindu women, and coloured bindi was worn by single women, but now all colours and glitter has become a part of women's fashion. Some women wear sindoor - a traditional red or orange-red powder (vermilion) in the parting of their hair (locally called mang). Sindoor is the traditional mark of a married woman for Hindus. Single Hindu women do not wear sindoor; neither do over 1 million Indian women from religions other than Hindu and agnostics/atheists who may be married.";
	var content1;
	if(content.length>350){
		content1=content.substr(0,350);
		content1=content1+'.....<br>'+'<span style="color:blue" id="info">Read full in Scroller below</span>';  
	}
	document.getElementById("Texter").innerHTML=content1;
	document.getElementById("Texter2").innerHTML=content;
	document.getElementById("pager").innerHTML="Page 5 of 20";
	document.getElementById("TitleHeading").innerHTML="Clothing";
	document.getElementById("bodyImages").src="images/bodyImages/clothing.png";
	var acdc=document.getElementById("mysong").src;
var song= acdc.substr(acdc.lastIndexOf('/') + 1);

if(song=="life.mp3"){
	return;
}else{
	document.getElementById("mysong").src="songs/life.mp3";
	document.getElementById("myplayer").src="songs/life.mp3";
}
}

function cuisinedata(){
	var content="Food is an integral part of every human culture. Chang notes that the importance of food in understanding human culture lies in its infinite variability - a variability that is not essential for species survival. For survival needs, people everywhere could eat the same and some simple food. But human cultures, over the ages, experiment, innovate and develop sophisticated cuisines. Cuisines become more than a source of nutrients, they reflect human knowledge, culture, art and expression of love.Indian food is as diverse as India. Indian cuisines use numerous ingredients, deploy a wide range of food preparation styles, cooking techniques and culinary presentation. From salads to sauces, from vegetarian to meat, from spices to sensuous, from breads to desserts, Indian cuisine is invariably complex. Harold McGee, a favourite of many Michelin-starred chefs, writes 'for sheer inventiveness with milk itself as the primary ingredient, no country on earth can match India.'";
	var content1;
	if(content.length>350){
		content1=content.substr(0,350);
		content1=content1+'.....<br>'+'<span style="color:blue" id="info">Read full in Scroller below</span>';  
	}
	document.getElementById("Texter").innerHTML=content1;
	document.getElementById("Texter2").innerHTML=content;
	document.getElementById("pager").innerHTML="Page 6 of 20";
	document.getElementById("TitleHeading").innerHTML="Cuisine";
		document.getElementById("bodyImages").src="images/bodyImages/Cuisine.png";
		var acdc=document.getElementById("mysong").src;
var song= acdc.substr(acdc.lastIndexOf('/') + 1);

if(song=="life.mp3"){
	return;
}else{
	document.getElementById("mysong").src="songs/life.mp3";
	document.getElementById("myplayer").src="songs/life.mp3";
}

}

function greetingdata(){
	var content="Namaste (Sanskrit), Namaskar (Hindi), Juhar/Namaskar in Odia, Namaskar, Swagatam (Marathi) or Namaskara (Kannada) or Namaskaram (Telugu, Malayalam), Vanakkam (Tamil),Nomoshkaar (Bengali), Nomoskar (Assamese) is a common spoken greeting or salutation when people meet or a form of farewell when they depart. Namaskar is considered a slightly more formal version than Namaste but both express deep respect. It is commonly used in India and Nepal by Hindus, Jains and Buddhists, and many continue to use this outside the Indian subcontinent. In Indian and Nepali culture, the word is spoken at the beginning of written or verbal communication. However, the same hands folded gesture may be made wordlessly, or said without the folded hand gesture. The word is derived from Sanskrit (namah): to bow, reverential salutation, and respect, and (te): 'to you'. Taken literally, it means 'I bow to you'. In Hinduism it means 'I bow to the divine in you.' In most Indian families, younger men and women are taught to seek the blessing of their elders by reverentially bowing to their elders. This custom is known as Pranāma.";
	var content1;
	if(content.length>350){
		content1=content.substr(0,320);
		content1=content1+'.....<br>'+'<span style="color:blue" id="info">Read full in Scroller below</span>';  
	}
	document.getElementById("Texter").innerHTML=content1;
	document.getElementById("Texter2").innerHTML=content;
	document.getElementById("pager").innerHTML="Page 7 of 20";
	document.getElementById("TitleHeading").innerHTML="Greetings";
		document.getElementById("bodyImages").src="images/bodyImages/greetin.png";
		var acdc=document.getElementById("mysong").src;
var song= acdc.substr(acdc.lastIndexOf('/') + 1);

if(song=="life.mp3"){
	return;
}else{
	document.getElementById("mysong").src="songs/life.mp3";
	document.getElementById("myplayer").src="songs/life.mp3";
}
}

function festivaldata(){
	var content="India, being a multi-cultural and multi-religious society, celebrates holidays and festivals of various religions. The three national holidays in India, the Independence Day, the Republic Day and the Gandhi Jayanti, are celebrated with zeal and enthusiasm across India. In addition, many Indian states and regions have local festivals depending on prevalent religious and linguistic demographics. Popular religious festivals include the Hindu festivals of Navratri, Diwali, Maha Shivratri, Ganesh Chaturthi, Durga puja, Holi, Ratha-Yatra, Ugadi, Rakshabandhan, and Dussehra. Several harvest festivals such as Sankranthi, Pongal and Raja sankaranti swinging festival 'Nuakhai' are also fairly popular.Indian New year festival are celebrated in different part of India with unique style in different times. Ugadi, Bihu, Gudhi Padwa, Puthandu, Vishu and Vishuva Sankranti are the New years festival of different part of India.Certain festivals in India are celebrated by multiple religions. Notable examples include Diwali, which is celebrated by Hindus, Sikhs and Jains, and Buddh Purnima, celebrated by Buddhists. Sikh Festivals, such as Guru Nanak Jayanti, Baisakhi are celebrated with full fanfare by Sikhs and Hindu. Adding colours to the culture of India, the Dree Festival is one of the tribal festivals of India celebrated by the Apatanis of the Ziro valley of Arunachal Pradesh, which is the easternmost state of India.Islam in India is the second largest religion with over 172 million Muslims, according to India's 2011 census. The Islamic festivals which are observed and are declared public holiday in India are; Eid ul Fitr, Eid ul Adha-(Bakr Eid), Milad un Nabi, Muharram and Shab-e-Barat.Some of the Indian states have declared regional holiday's for the particular regional popular festivals; such as Arba'een, Jumu'ah-tul-Wida and Shab-e-Qadar.Christianity is India's third largest religion. With over 23 million Christians, of which 17 million are Roman Catholics, India is home to many Christian festivals. The country celebrates Christmas and Good Friday as public holidays.Regional fairs are also common and festive in India. For example, Pushkar fair is one of the world's largest markets and Sonepur mela is the largest livestock fair in Asia.";
    var content1;
	if(content.length>350){
		content1=content.substr(0,350);
		content1=content1+'.....<br>'+'<span style="color:blue" id="info">Read full in Scroller below</span>';  
	}
	document.getElementById("Texter").innerHTML=content1;
	document.getElementById("Texter2").innerHTML=content;
	document.getElementById("pager").innerHTML="Page 8 of 20";
	document.getElementById("TitleHeading").innerHTML="Festival";
	document.getElementById("bodyImages").src="images/bodyImages/festival.png";
	var acdc=document.getElementById("mysong").src;
var song= acdc.substr(acdc.lastIndexOf('/') + 1);

if(song=="life.mp3"){
	return;
}else{
	document.getElementById("mysong").src="songs/life.mp3";
	document.getElementById("myplayer").src="songs/life.mp3";
}
	}
	
/*function festivaldata(){
	var content="India, being a multi-cultural and multi-religious society, celebrates holidays and festivals of various religions. The three national holidays in India, the Independence Day, the Republic Day and the Gandhi Jayanti, are celebrated with zeal and enthusiasm across India. In addition, many Indian states and regions have local festivals depending on prevalent religious and linguistic demographics. Popular religious festivals include the Hindu festivals of Navratri, Diwali, Maha Shivratri, Ganesh Chaturthi, Durga puja, Holi, Ratha-Yatra, Ugadi, Rakshabandhan, and Dussehra. Several harvest festivals such as Sankranthi, Pongal and Raja sankaranti swinging festival 'Nuakhai' are also fairly popular.Indian New year festival are celebrated in different part of India with unique style in different times. Ugadi, Bihu, Gudhi Padwa, Puthandu, Vishu and Vishuva Sankranti are the New years festival of different part of India.Certain festivals in India are celebrated by multiple religions. Notable examples include Diwali, which is celebrated by Hindus, Sikhs and Jains, and Buddh Purnima, celebrated by Buddhists. Sikh Festivals, such as Guru Nanak Jayanti, Baisakhi are celebrated with full fanfare by Sikhs and Hindu. Adding colours to the culture of India, the Dree Festival is one of the tribal festivals of India celebrated by the Apatanis of the Ziro valley of Arunachal Pradesh, which is the easternmost state of India.Islam in India is the second largest religion with over 172 million Muslims, according to India's 2011 census. The Islamic festivals which are observed and are declared public holiday in India are; Eid ul Fitr, Eid ul Adha-(Bakr Eid), Milad un Nabi, Muharram and Shab-e-Barat.Some of the Indian states have declared regional holiday's for the particular regional popular festivals; such as Arba'een, Jumu'ah-tul-Wida and Shab-e-Qadar.Christianity is India's third largest religion. With over 23 million Christians, of which 17 million are Roman Catholics, India is home to many Christian festivals. The country celebrates Christmas and Good Friday as public holidays.Regional fairs are also common and festive in India. For example, Pushkar fair is one of the world's largest markets and Sonepur mela is the largest livestock fair in Asia.";
    var content1;
	if(content.length>350){
		content1=content.substr(0,350);
		content1=content1+'.....<br>'+'<span style="color:blue" id="info">Read full in Scroller below</span>';  
	}
	document.getElementById("Texter").innerHTML=content1;
	document.getElementById("Texter2").innerHTML=content;
	document.getElementById("pager").innerHTML="Page 8 of 20";
	document.getElementById("TitleHeading").innerHTML="Festival";
   }*/
	
function dancedata(){
	var content="India has had a long romance with the art of dance. Nātyaśāstra (Science of Dance) and Abhinaya Darpana (Mirror of Gesture) are two surviving Sanskrit documents, both estimated to be between 1700 to 2200 years old.The Indian art of dance as taught in these ancient books, according to Ragini Devi, is the expression of inner beauty and the divine in man. It is a deliberate art, nothing is left to chance, each gesture seeks to communicate the ideas, each facial expression the emotions.Indian dance includes eight classical dance forms, many in narrative forms with mythological elements. The eight classical forms accorded classical dance status by India's National Academy of Music, Dance, and Drama are: bharatanatyam of the state of Tamil Nadu, kathak of Uttar Pradesh, kathakali and mohiniattam of Kerala, kuchipudi of Andhra Pradesh, yakshagana of Karnataka, manipuri of Manipur, odissi (orissi) of the state of Odisha and the sattriya of Assam.In addition to the formal arts of dance, Indian regions have a strong free form, folksy dance tradition. Some of the folk dances include the bhangra of Punjab; the bihu of Assam; the zeliang of Nagaland; the chhau of Jharkhand and Bengal; the Ghumura Dance, Gotipua, Mahari dance and Dalkhai of Odisha; the qauwwalis, birhas and charkulas of Uttar Pradesh; the jat-jatin, nat-natin and saturi of Bihar; the ghoomar of Rajasthan; the dandiya and garba of Gujarat; the kolattam of Andhra Pradesh; the yakshagana of Karnataka ; lavani of Maharashtra;Dekhnni of Goa. Recent developments include adoption of international dance forms particularly in the urban centres of India, and the extension of Indian classical dance arts by the Kerala Christian community, to tell stories from the Bible.";
	 var content1;
	if(content.length>350){
		content1=content.substr(0,350);
		content1=content1+'.....<br>'+'<span style="color:blue" id="info">Read full in Scroller below</span>';  
	}
	document.getElementById("Texter").innerHTML=content1;
	document.getElementById("Texter2").innerHTML=content;
	document.getElementById("pager").innerHTML="Page 9 of 20";
	document.getElementById("TitleHeading").innerHTML="Dance";
	document.getElementById("bodyImages").src="images/bodyImages/dances.png";
	var acdc=document.getElementById("mysong").src;
var song= acdc.substr(acdc.lastIndexOf('/') + 1);

if(song=="art.mp3"){
	return;
}else{
	document.getElementById("mysong").src="songs/art.mp3";
	document.getElementById("myplayer").src="songs/art.mp3";
}
   }	
   
 function dtdata(){
	var content="Indian drama and theatre has a long history alongside its music and dance. Kalidasa's plays like Shakuntala and Meghadoota are some of the older dramas, following those of Bhasa. One of the oldest surviving theatre traditions of the world is the 2,000-year-old Kutiyattam of Kerala. It strictly follows the Natya Shastra. Nātyāchārya Māni Mādhava Chākyār is credited for reviving the age old drama tradition from extinction. He was known for mastery of Rasa Abhinaya. He started to perform the Kalidasa plays like Abhijñānaśākuntala, Vikramorvaśīya and Mālavikāgnimitra; Bhasa's Swapnavāsavadatta and Pancharātra; Harsha's Nagananda"; 
	var content1;
	if(content.length>350){
		content1=content.substr(0,350);
		content1=content1+'.....<br>'+'<span style="color:blue" id="info">Read full in Scroller below</span>';  
	}
	document.getElementById("Texter").innerHTML=content1;
	document.getElementById("Texter2").innerHTML=content;
	document.getElementById("pager").innerHTML="Page 10 of 20";
	document.getElementById("TitleHeading").innerHTML="Drama & Theatre"; 
	document.getElementById("bodyImages").src="images/bodyImages/drama.png";
		var acdc=document.getElementById("mysong").src;
var song= acdc.substr(acdc.lastIndexOf('/') + 1);

if(song=="art.mp3"){
	return;
}else{
	document.getElementById("mysong").src="songs/art.mp3";
	document.getElementById("myplayer").src="songs/art.mp3";
}
 }  
 
 function musicdata(){
	 var content="Music is an integral part of India's culture. Natyasastra, a 2000-year-old Sanskrit text, describes five systems of taxonomy to classify musical instruments. One of these ancient Indian systems classifies musical instruments into four groups according to four primary sources of vibration: strings, membranes, cymbals, and air. According to Reis Flora, this is similar to the Western theory of organology. Archeologists have also reported the discovery of a 3000-year-old, 20-key, carefully shaped polished basalt lithophone in the highlands of Odisha.The oldest preserved examples of Indian music are the melodies of the Samaveda (1000 BC) that are still sung in certain Vedic Śrauta sacrifices; this is the earliest account of Indian musical hymns. It proposed a tonal structure consisting of seven notes, which were named, in descending order, as Krusht, Pratham, Dwitiya, Tritiya, Chaturth, Mandra and Atiswār. These refer to the notes of a flute, which was the only fixed frequency instrument. The Samaveda, and other Hindu texts, heavily influenced India's classical music tradition, which is known today in two distinct styles: Carnatic and Hindustani music. Both the Carnatic music and Hindustani music systems are based on the melodic base (known as Rāga), sung to a rhythmic cycle (known as Tāla); these principles were refined in the nātyaśāstra (200 BC) and the dattilam (300 AD).The current music of India includes multiple varieties of religious, classical, folk, popular and pop music.";
	 var content1;
	if(content.length>350){
		content1=content.substr(0,350);
		content1=content1+'.....<br>'+'<span style="color:blue" id="info">Read full in Scroller below</span>';  
	}
	document.getElementById("Texter").innerHTML=content1;
	document.getElementById("Texter2").innerHTML=content;
	document.getElementById("pager").innerHTML="Page 11 of 20";
	document.getElementById("TitleHeading").innerHTML="Music";
		document.getElementById("bodyImages").src="images/bodyImages/music.png";
			var acdc=document.getElementById("mysong").src;
var song= acdc.substr(acdc.lastIndexOf('/') + 1);

if(song=="art.mp3"){
	return;
}else{
	document.getElementById("mysong").src="songs/art.mp3";
	document.getElementById("myplayer").src="songs/art.mp3";
}
 }
 
 function paintdata(){
	  var content="Cave paintings from Ajanta, Bagh, Ellora and Sittanavasal and temple paintings testify to a love of naturalism. Most early and medieval art in India is Hindu, Buddhist or Jain. A freshly made coloured floor design (Rangoli) is still a common sight outside the doorstep of many (mostly South Indian) Indian homes. Raja Ravi Varma is one of the classical painters from medieval India.Pattachitra, Madhubani painting, Mysore painting, Rajput painting, Tanjore painting, Mughal painting are some notable Genres of Indian Art; while Nandalal Bose, M. F. Husain, S. H. Raza, Geeta Vadhera, Jamini Roy and B. Venkatappa are some modern painters. Among the present day artists, Atul Dodiya, Bose Krishnamacnahri, Devajyoti Ray and Shibu Natesan represent a new era of Indian art where global art shows direct amalgamation with Indian classical styles. These recent artists have acquired international recognition. Jehangir Art Gallery, Mumbai, Mysore Palace has on display a few good Indian paintings.";
	  var content1;
	if(content.length>350){
		content1=content.substr(0,350);
		content1=content1+'.....<br>'+'<span style="color:blue" id="info">Read full in Scroller below</span>';  
	}
	document.getElementById("Texter").innerHTML=content1;
	document.getElementById("Texter2").innerHTML=content;
	document.getElementById("pager").innerHTML="Page 12 of 20";
	document.getElementById("TitleHeading").innerHTML="Painting";
	document.getElementById("bodyImages").src="images/bodyImages/painting.png";
		var acdc=document.getElementById("mysong").src;
var song= acdc.substr(acdc.lastIndexOf('/') + 1);

if(song=="art.mp3"){
	return;
}else{
	document.getElementById("mysong").src="songs/art.mp3";
	document.getElementById("myplayer").src="songs/art.mp3";
}
 }
 
  function sculpturedata(){
	  var content="The first sculptures in India date back to the Indus Valley civilisation, where stone and bronze figures have been discovered. Later, as Hinduism, Buddhism, and Jainism developed further, India produced some extremely intricate bronzes as well as temple carvings. Some huge shrines, such as the one at Ellora were not constructed by using blocks but carved out of solid rock.Sculptures produced in the northwest, in stucco, schist, or clay, display a very strong blend of Indian and Classical Hellenistic or possibly even Greco-Roman influence. The pink sandstone sculptures of Mathura evolved almost simultaneously. During the Gupta period (4th to 6th centuries) sculpture reached a very high standard in execution and delicacy in modeling. These styles and others elsewhere in India evolved leading to classical Indian art that contributed to Buddhist and Hindu sculpture throughout Southeast Central and East Asia.";
	  var content1;
	if(content.length>350){
		content1=content.substr(0,350);
		content1=content1+'.....<br>'+'<span style="color:blue" id="info">Read full in Scroller below</span>';  
	}
	document.getElementById("Texter").innerHTML=content1;
	document.getElementById("Texter2").innerHTML=content;
	document.getElementById("pager").innerHTML="Page 13 of 20";
	document.getElementById("TitleHeading").innerHTML="Sculpture";
		document.getElementById("bodyImages").src="images/bodyImages/sculpture.png";
			var acdc=document.getElementById("mysong").src;
var song= acdc.substr(acdc.lastIndexOf('/') + 1);

if(song=="art.mp3"){
	return;
}else{
	document.getElementById("mysong").src="songs/art.mp3";
	document.getElementById("myplayer").src="songs/art.mp3";
}
 }
 
  function architecturedata(){
	  var content="Indian architecture encompasses a multitude of expressions over space and time, constantly absorbing new ideas. The result is an evolving range of architectural production that nonetheless retains a certain amount of continuity across history. Some of its earliest production are found in the Indus Valley Civilisation (2600–1900 BC) which is characterised by well planned cities and houses. Religion and kingship do not seem to have played an important role in the planning and layout of these towns.During the period of the Mauryan and Gupta empires and their successors, several Buddhist architectural complexes, such as the caves of Ajanta and Ellora and the monumental Sanchi Stupa were built. Later on, South India produced several Hindu temples like Chennakesava Temple at Belur, the Hoysaleswara Temple at Halebidu, and the Kesava Temple at Somanathapura, Brihadeeswara Temple, Thanjavur built by Raja Raja Chola, the Sun Temple, Konark, Sri Ranganathaswamy Temple at Srirangam, and the Buddha stupa (Chinna Lanja dibba and Vikramarka kota dibba) at Bhattiprolu. Angkor Wat, Borobudur and other Buddhist and Hindu temples indicate strong Indian influence on South East Asian architecture, as they are built in styles almost identical to traditional Indian religious buildings.";
	  var content1;
	if(content.length>350){
		content1=content.substr(0,350);
		content1=content1+'.....<br>'+'<span style="color:blue" id="info">Read full in Scroller below</span>';  
	}
	document.getElementById("Texter").innerHTML=content1;
	document.getElementById("Texter2").innerHTML=content;
	document.getElementById("pager").innerHTML="Page 14 of 20";
	document.getElementById("TitleHeading").innerHTML="Architecture"; 
	document.getElementById("bodyImages").src="images/bodyImages/architecture.png";
		var acdc=document.getElementById("mysong").src;
var song= acdc.substr(acdc.lastIndexOf('/') + 1);

if(song=="art.mp3"){
	return;
}else{
	document.getElementById("mysong").src="songs/art.mp3";
	document.getElementById("myplayer").src="songs/art.mp3";
}
  }
  
  function lang_liter(){
	var content="The Rigvedic Sanskrit is one of the oldest attestations of any Indo-Aryan language, and one of the earliest attested members of the Indo-European language family. The discovery of Sanskrit by early European explorers of India led to the development of comparative Philology. The scholars of the 18th century were struck by the far reaching similarity of Sanskrit, both in grammar and vocabulary, to the classical languages of Europe. Intensive scientific studies that followed have established that Sanskrit and many Indian derivative languages belong to the family which includes English, German, French, Italian, Spanish, Celtic, Greek, Baltic, Armenian, Persian, Tocharian and other Indo-European languages.The evolution of language within India may be distinguished over three periods: old, middle and modern Indo-Aryan. The classical form of old Indo-Aryan was sanskrit meaning polished, cultivated and correct, in distinction to Prakrit - the practical language of the migrating masses evolving without concern to proper pronunciation or grammar, the structure of language changing as those masses mingled, settled new lands and adopted words from people of other native languages. Prakrita became middle Indo-Aryan leading to Pali (the language of early Buddhists and Ashoka era in 200-300 BCE), Prakrit (the language of Jain philosophers) and Apabhramsa (the language blend at the final stage of middle Indo-Aryan). It is Apabhramsa, scholars claim, that flowered into Hindi, Gujarati, Bengali, Marathi, Punjabi and many other languages now in use in India's north, east and west. All of these Indian languages have roots and structure similar to Sanskrit, to each other and to other Indo-European languages. Thus we have in India three thousand years of continuous linguistic history recorded and preserved in literary documents. This enables scholars to follow language evolution and observe how, by changes hardly noticeable from generation to generation, an original language alters into descendant languages that are now barely recognisable as the same.";  
	var content1;
	if(content.length>350){
		content1=content.substr(0,350);
		content1=content1+'.....<br>'+'<span style="color:blue" id="info">Read full in Scroller below</span>';  
	}
	document.getElementById("Texter").innerHTML=content1;
	document.getElementById("Texter2").innerHTML=content;
	document.getElementById("pager").innerHTML="Page 15 of 20";
	document.getElementById("TitleHeading").innerHTML="Language & Literature";  
document.getElementById("bodyImages").src="images/bodyImages/laguage.png";	
var acdc=document.getElementById("mysong").src;
var song= acdc.substr(acdc.lastIndexOf('/') + 1);

if(song=="literature.mp3"){
	return;
}else{
	document.getElementById("mysong").src="songs/literature.mp3";
	document.getElementById("myplayer").src="songs/literature.mp3";
}
  }
  
   function epicdata(){
	var content="The Rāmāyaṇa and the Mahābhārata are the oldest preserved and well-known epics of India. Versions have been adopted as the epics of Southeast Asian countries like Philippines, Thailand, Malaysia and Indonesia. The Ramayana consists of 24,000 verses in seven books (kāṇḍas) and 500 cantos (sargas), and tells the story of Rama (an incarnation or Avatar of the Hindu preserver-god Vishnu), whose wife Sita is abducted by the demon king of Lanka, Ravana. This epic played a pivotal role in establishing the role of dhárma as a principal ideal guiding force for Hindu way of life.The earliest parts of the Mahabharata text date to 400 BC and is estimated to have reached its final form by the early Gupta period (c. 4th century AD). Other regional variations of these, as well as unrelated epics include the Tamil Ramavataram, Kannada Pampa Bharata, Hindi Ramacharitamanasa, and Malayalam Adhyathmaramayanam. In addition to these two great Indian epics, there are five major epics in the classical Tamil language — Silappatikaram, Manimekalai, Civaka-cintamani and Valayapathi-kundalakesi.";   
    var content1;
	if(content.length>350){
		content1=content.substr(0,350);
		content1=content1+'.....<br>'+'<span style="color:blue" id="info">Read full in Scroller below</span>';  
	}
	document.getElementById("Texter").innerHTML=content1;
	document.getElementById("Texter2").innerHTML=content;
	document.getElementById("pager").innerHTML="Page 16 of 20";
	document.getElementById("TitleHeading").innerHTML="Epic"; 
	document.getElementById("bodyImages").src="images/bodyImages/epic.png";	
	var acdc=document.getElementById("mysong").src;
var song= acdc.substr(acdc.lastIndexOf('/') + 1);

if(song=="literature.mp3"){
	return;
}else{
	document.getElementById("mysong").src="songs/literature.mp3";
	document.getElementById("myplayer").src="songs/literature.mp3";
}
   }
   
   function gamedata(){
	var content="Field hockey is the official national sport in India. At a time when it was especially popular, the India national field hockey team won the 1975 Men's Hockey World Cup, and 8 gold, 1 silver, and 2 bronze medals at the Olympic Games. However, field hockey in India no longer has the following that it once did.Cricket is considered the most popular sport in India.The India national cricket team won the 1983 Cricket World Cup, the 2011 Cricket World Cup, the 2007 ICC World Twenty20, the 2013 ICC Champions Trophy and shared the 2002 ICC Champions Trophy with Sri Lanka. Domestic competitions include the Ranji Trophy, the Duleep Trophy, the Deodhar Trophy, the Irani Trophy and the Challenger Series. In addition, BCCI conducts the Indian Premier League, a Twenty20 competition.Football is popular in the Indian state of West Bengal. The city of Kolkata is the home to the largest stadium in India, and the second largest stadium in the world by capacity, Salt Lake Stadium. The city of joy is a centre of football activity in India and is home to top national clubs such as Mohun Bagan A.C., Kingfisher East Bengal F.C., Prayag United S.C., and the Mohammedan Sporting Club.Chess is commonly believed to have originated in northwestern India during the Gupta empire, where its early form in the 6th century was known as chaturanga. Other games which originated in India and continue to remain popular in wide parts of northern India include Kabaddi, Gilli-danda, and Kho kho. Traditional southern Indian games include Snake boat race and Kuttiyum kolum.In 2011, India inaugurated a privately built Buddh International Circuit, its first motor racing circuit. The 5.14-kilometre circuit is in Greater Noida, Uttar Pradesh, near Delhi. The first Formula One Indian Grand Prix event was hosted here in October 2011.";   
    var content1;
	if(content.length>350){
		content1=content.substr(0,350);
		content1=content1+'.....<br>'+'<span style="color:blue" id="info">Read full in Scroller below</span>';  
	}
	document.getElementById("Texter").innerHTML=content1;
	document.getElementById("Texter2").innerHTML=content;
	document.getElementById("pager").innerHTML="Page 17 of 20";
	document.getElementById("TitleHeading").innerHTML="Games"; 
	document.getElementById("bodyImages").src="images/bodyImages/games.png";	
var acdc=document.getElementById("mysong").src;
var song= acdc.substr(acdc.lastIndexOf('/') + 1);

if(song=="sport.mp3"){
	return;
}else{
	document.getElementById("mysong").src="songs/sport.mp3";
	document.getElementById("myplayer").src="songs/sport.mp3";
}
	
   }
   
   function martialdata(){
	   var content="One of the best known forms of ancient Indian martial arts is the Kalarippayattu from Kerala. This ancient fighting style originated in southern India in the 12th century BCE and is regarded as one of the oldest surviving martial arts.[137] In this form martial arts, various stages of physical training include ayurvedic massage with sesame oil to impart suppleness to the body (uzichil); a series of sharp body movements so as to gain control over various parts of the body (miapayattu); and, complex sword fighting techniques (paliyankam).[citation needed] Silambam, which was developed around 200 AD, traces its roots to the Sangam period in southern India. Silambam is unique among Indian martial arts because it uses complex footwork techniques (kaaladi), including a variety of spinning styles. A bamboo staff is used as the main weapon.The ancient Tamil Sangam literature mentions that between 400 BCE and 600 CE, soldiers from southern India received special martial arts training which revolved primarily around the use of spear (vel), sword (val) and shield (kedaham).";
	  var content1;
	if(content.length>350){
		content1=content.substr(0,350);
		content1=content1+'.....<br>'+'<span style="color:blue" id="info">Read full in Scroller below</span>';  
	}
	document.getElementById("Texter").innerHTML=content1;
	document.getElementById("Texter2").innerHTML=content;
	document.getElementById("pager").innerHTML="Page 18 of 20";
	document.getElementById("TitleHeading").innerHTML="Martial Arts";
document.getElementById("bodyImages").src="images/bodyImages/martialart.png";	
var acdc=document.getElementById("mysong").src;
var song= acdc.substr(acdc.lastIndexOf('/') + 1);

if(song=="sport.mp3"){
	return;
}else{
	document.getElementById("mysong").src="songs/sport.mp3";
	document.getElementById("myplayer").src="songs/sport.mp3";
}
   }
   
      function forestdata(){
	 var content="Forestry in India is a significant rural industry and a major environmental resource. India is one of the ten most forest-rich countries of the world along with the Russian Federation, Brazil, Canada, United States of America, China, Democratic Republic of the Congo, Australia, Indonesia and Sudan. Together, India and these countries account for 67 percent of total forest area of the world. India's forest cover grew at 0.22% annually over 1990-2000, and has grown at the rate of 0.46% per year over 2000-2010, after decades where forest degradation was a matter of serious concern.";  
	 var content1;
	if(content.length>350){
		content1=content.substr(0,350);
		content1=content1+'.....<br>'+'<span style="color:blue" id="info">Read full in Scroller below</span>';  
	}
	document.getElementById("Texter").innerHTML=content1;
	document.getElementById("Texter2").innerHTML=content;
	document.getElementById("pager").innerHTML="Page 19 of 20";
	document.getElementById("TitleHeading").innerHTML="Gift of Nature";  
document.getElementById("bodyImages").src="images/bodyImages/gift_of_nature.png";
	var acdc=document.getElementById("mysong").src;
var song= acdc.substr(acdc.lastIndexOf('/') + 1);

if(song=="nature.mp3"){
	return;
}else{
	document.getElementById("mysong").src="songs/nature.mp3";
	document.getElementById("myplayer").src="songs/nature.mp3";
}	
   }
   
   function animaldata(){
	 var content="The varied and rich wildlife of India has had a profound impact on the region's popular culture. Common name for wilderness in India is Jungle which was adopted by the British colonialists to the English language. The word has been also made famous in The Jungle Book by Rudyard Kipling. India's wildlife has been the subject of numerous other tales and fables such as the Panchatantra and the Jataka tales.In Hinduism, the cow is regarded as a symbol of ahimsa (non-violence), mother goddess and bringer of good fortune and wealth. For this reason, cows are revered in Hindu culture and feeding a cow is seen as an act of worship.As of January 2012, cow remains a divisive topic in India. Several states of India have passed laws to protect cows, while many states have no restrictions on the production and consumption of beef. Some groups oppose the butchering of cows, while other Indian groups are vehement that what kind of meat one eats ought to be a matter of personal choice in a democracy.";  
	 var content1;
	if(content.length>350){
		content1=content.substr(0,350);
		content1=content1+'.....<br>'+'<span style="color:blue" id="info">Read full in Scroller below</span>';  
	}
	document.getElementById("Texter").innerHTML=content1;
	document.getElementById("Texter2").innerHTML=content;
	document.getElementById("pager").innerHTML="Page 20 of 20";
	document.getElementById("TitleHeading").innerHTML="Animals";  
document.getElementById("bodyImages").src="images/bodyImages/animals.png";	
	var acdc=document.getElementById("mysong").src;
var song= acdc.substr(acdc.lastIndexOf('/') + 1);

if(song=="nature.mp3"){
	return;
}else{
	document.getElementById("mysong").src="songs/nature.mp3";
	document.getElementById("myplayer").src="songs/nature.mp3";
}
   }
   
