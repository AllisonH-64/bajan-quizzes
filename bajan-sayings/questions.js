// The question bank for both quizzes. The Bajan Sayings Quiz asks every question;
// Test Yuh Brain draws 5 at random from each round.

// Round 1: [saying, what it means, [wrong meanings]]
const Q = [
 ["De higher de monkey climb, de more he show he tail.","The higher you rise, the more your faults are on show.",["Hard work will always lift you up.","Showing off is the quickest way to make friends.","Climb carefully or you will fall."]],
 ["Cat luck ain't dog luck.","What one person gets away with, another may not.",["Some people are simply born lucky.","Pets bring good fortune to a home.","Never trust your luck twice."]],
 ["Every skin-teet ain't a laugh.","Not every smile is a friendly one.",["Laughter is the best medicine.","People who laugh a lot have nothing to hide.","Don't laugh at other people's misfortune."]],
 ["Wuh sweeten goat mout does bun he tail.","What's pleasant now can cause you trouble later.",["Too much sugar is bad for you.","Greedy people never get enough.","Sweet talk will get you anywhere."]],
 ["Duppy know who to frighten.","Bullies pick on people they know won't stand up to them.",["Guilty people are always the most scared.","Spirits only come out at night.","Some people are easily fooled."]],
 ["Wuh ain't meet yuh ain't pass yuh.","Trouble that hasn't reached you yet may still be coming.",["Opportunities only come once.","Don't look back at what's behind you.","Mind your own business."]],
 ["Doan hang ya hat where ya han' cyan reach.","Don't take on more than you can manage or afford.",["Keep your things where you can find them.","Stubborn people never change.","The humble will be lifted up."]],
 ["Every dog got he day an' every puss got he cock.","Everyone's turn comes, including their day of reckoning.",["Always be on time.","Animals are smarter than people think.","Rest when the work is done."]],
 ["If crab doan walk 'bout, he won' get feed.","If you don't get out and make an effort, you won't get anywhere.",["Travel broadens the mind.","Slow and steady wins the race.","Stay home and stay out of trouble."]],
 ["One-smart dead at Two-smart street.","Someone who thinks they're clever will meet somebody cleverer.",["Two heads are better than one.","Clever people always help each other.","Keep your secrets to yourself."]],
 ["Every piece o' cloth got he owner.","What's meant for you will find its way to you.",["Take what you can while you can.","Never lend what you can't afford to lose.","Look after your own before others."]],
 ["Eggs doan go to big rock dance.","Stay out of places and business where you can easily get hurt.",["Only invite people you like to a party.","Rich and poor should dance together.","Everyone should be welcome at a celebration."]],
 ["Mout open, story jump out.","Someone who talks carelessly will let a secret slip.",["A good storyteller always draws a crowd.","Speak up when you're wronged.","Close your mouth when you eat."]],
 ["De same dog dat bring a bone does carry one.","Someone who brings you gossip about others will carry gossip about you.",["A good friend always shares what they have.","Loyal dogs always come home.","Give and you shall receive."]],
 ["Every hoe got he stick in de bush.","There's a partner out there for everyone.",["Every job has the right tool.","Hard work always finds its reward.","Every problem has a hidden cause."]],
 ["Har ears ya wont hear, own way ya gine feel.","If you won't listen to warnings, you'll suffer the consequences.",["Actions speak louder than words.","Feelings run deeper than words.","Say nothing and you'll hear everything."]],
 ["Dog got four foot but he cyan walk four road.","You can't do everything at once.",["Strong people can carry heavy loads.","Always choose the shortest path.","A good dog always finds its way home."]],
 ["Monkey know wuh tree to climb.","People know exactly whom they can take advantage of.",["Everyone has a talent.","Children learn by copying their parents.","Climb high and you'll see far."]],
 ["Hard times mek monkey climb tree.","Tough times push people to do things they wouldn't normally do.",["Monkeys are always up to mischief.","Climb high and your troubles will pass.","Hard work always pays off in the end."]],
 ["Coward man does keep sound bone.","Being careful keeps you out of harm's way.",["Brave people always win in the end.","Cowards never get anywhere.","Eat well and your bones stay strong."]],
 ["Do so ain' like so.","People don't like it when you treat them the way they treat others.",["Do as you're told and don't complain.","Things are never as they seem.","Practice makes perfect."]],
 ["Cuss-cuss doan bore hole in nobody skin.","Insults and harsh words can't really hurt you.",["Bad language should never be used.","People who quarrel always make up.","Thick skin comes with age."]],
 ["Sorry fuh mawga dog, mawga dog turn roun' bite yuh.","Show pity to an ungrateful person and they may turn on you.",["Always feed strays and they'll protect you.","Thin dogs are the most dangerous.","Never apologise to someone who has wronged you."]],
 ["Hungry dog does eat raw corn.","When people are desperate, they will accept whatever they can get.",["Raw food is good for you.","Never feed a dog from the table.","Greedy people are never satisfied."]],
 ["Cockroach doan business in fowl party.","The weak should stay out of the affairs of those who can harm them.",["Keep your house clean before guests come.","Don't go to a party you weren't invited to.","Small creatures always find a way in."]],
 ["Pretty-pretty things does fool li'l children.","Flashy things easily take in the naive.",["Children should be given nice things.","Beauty is only skin deep.","Always buy the best you can afford."]],
 ["Wuh is joke to you is death to me.","What you find funny can cause someone else real harm.",["Laughter can cure any sorrow.","Never joke about serious matters at church.","Some people have no sense of humour."]]
];
// Round 2: [start of saying, correct ending, [wrong endings], meaning]
const F = [
 ["Every bush is","a man.",["a hiding place.","a friend in need.","worth a look."],"A guilty or frightened person sees danger everywhere."],
 ["Poor man cyan get justice in","rich man court.",["poor man house.","de mornin'.","a hurry."],"The poor won't get fairness when the rich are the judges."],
 ["New broom does sweep clean, but ol' broom","know de corners.",["need a new handle.","sweep de yard.","cyan find de dust."],"Newcomers may impress, but experience knows where the problems are."],
 ["Teet' an' tongue does","got words.",["bite de hand.","keep de peace.","get old together."],"Even the closest people fall out sometimes."],
 ["Rain doan fall 'pon","one man house-top.",["de poor man roof.","de rich man field.","de ol' church."],"Trouble comes to everyone, not just you."],
 ["Egg doan go to","big rock dance.",["de market.","de fowl yard.","church on Sunday."],"Stay out of places and business where you can easily get hurt."],
 ["Ole sparks does","rekindle.",["burn out.","go cold.","fly 'way."],"Old flames are easily rekindled."],
 ["Wuh ya doan know","cyan hurt ya.",["does come back 'round.","gine find ya.","cyan help ya."],"What you don't know can't hurt you."],
 ["Ya doan miss de water till","de well run dry.",["de rain come.","de pipe burst.","ya bathe."],"You don't value something until it's gone."],
 ["A rolling stone","gathers no moss.",["gathers speed.","breaks a window.","finds a home."],"Someone who keeps moving about never settles or builds anything up."],
 ["After laughter","there's tears.",["there's food.","there's sleep.","comes more laughter."],"Good times can soon turn to sorrow, so don't get carried away."],
 ["Every day bucket go in de well, one day","de rope does pop.",["de water gine turn sweet.","de bucket gine get full.","de well gine fill up."],"Keep taking the same risk and one day it catches up with you."],
 ["Wuh doan kill does","fatten.",["hurt.","teach.","mek yuh cry."],"What doesn't kill you makes you stronger."],
 ["Night does run till","day ketch he.",["de moon set.","de stars come out.","de sea calm."],"Wrongdoing gets found out in the end."],
 ["Trouble doan set up like","rain.",["breeze.","sunshine.","de sea."],"Trouble comes without warning."],
 ["Yuh can hide an' buy land, but yuh cyan hide an'","work it.",["sell it.","hide de money.","forget it."],"You can do some things in secret, but the results will show."],
 ["Many hands","make light work.",["make a mess.","clap loud.","need plenty food."],"When everyone helps, the job gets easier."],
 ["Patience man ride","donkey.",["de bus.","to town.","home late."],"Be patient and you'll get where you're going."],
 ["If yuh lie down wid dog,","yuh gine get up wid fleas.",["yuh gine sleep sound.","yuh gine wake up early.","he gine guard yuh."],"Keep bad company and you'll pick up their bad ways."],
 ["Wuh is fuh yuh","cyan be un-fuh yuh.",["gine cost yuh.","does come late.","somebody gine tek."],"What's meant for you will come to you."],
 ["Wuh happen in de dark","does come out in de light.",["does stay in de dark.","nobody gine see.","does frighten de children."],"Secrets come out in the end."]
];
// Round 3: [question, correct answer, [wrong answers], note shown after answering, group]
// Test Yuh Brain asks at most one song from each group, so a round isn't all Gabby.
const S = [
 ["Finish the song title: Emma don't know …","me now",["de way home","wuh she do","me name"],"Emma Don't Know Me Now","merrymen"],
 ["Who sang \"Beautiful Barbados\"?","The Merrymen",["Mighty Gabby","Red Plastic Bag","Rihanna"],"\"Beautiful Barbados\" is by The Merrymen.","merrymen"],
 ["Which calypsonian sang \"Jack\", the song that became an anthem against private beaches?","Mighty Gabby",["The Merrymen","Red Plastic Bag","Grynner"],"Mighty Gabby's \"Jack\" took on the tourism industry and the selling off of public beaches.","gabby"],
 ["Name the song: Mighty Gabby's 1985 calypso about a plan to store the bodies of dead Americans in Barbados.","Cadavers",["Boots","The List","Bridgetown"],"\"Cadavers\" (1985) by Mighty Gabby.","gabby"],
 ["Name the song: Mighty Gabby's calypso criticising the government's part in the U.S. invasion of Grenada.","Boots",["Jack","Cadavers","Heart Transplant"],"\"Boots\" by Mighty Gabby.","gabby"],
 ["Finish the song title: Mighty Gabby's 1979 Road March winner, \"Burn Mr …\"","Harding",["Brown","Clarke","Payne"],"\"Burn Mr Harding\" won the Crop Over Road March in 1979.","gabby"],
 ["Mighty Gabby won his first Calypso Monarch title in 1968 with which song?","Heart Transplant",["Family Planning","Licks Like Fire","Bajan Fisherman"],"\"Heart Transplant\" (1968). He won again in 1969 with \"Family Planning\".","gabby"],
 ["Finish the folk song title: Murder in de …","Market",["Mornin'","Cane Field","Rum Shop"],"\"Murder in the Market\" is a traditional Bajan folk song.","folk"],
 ["Finish the folk song title: Lick an' …","Lock Up",["Run","Roll","Lef'"],"\"Lick an' Lock Up\" is a traditional Bajan folk song.","folk"],
 ["Which Bajan group formed in 1962 and is known for \"Island in the Sun\" and \"Big Bamboo\"?","The Merrymen",["The Escorts International","Spice & Company","Krosfyah"],"The Merrymen formed in 1962, led by Emile Straker.","merrymen"],
 ["Finish the title of Mighty Grynner's 1984 Road March winner: Stinging …","Bees",["Nettles","Wasps","Ants"],"\"Stinging Bees\" won Grynner the Road March in 1984, part of three wins in a row (1983 to 1985).","grynner"],
 ["The Spring Garden Highway, where Crop Over revellers jump every Kadooment, was renamed after which calypsonian?","Mighty Grynner",["Mighty Gabby","Red Plastic Bag","Lil Rick"],"It is now the Mighty Grynner Highway, honouring Barbados' King of the Road.","grynner"],
 ["Which Bajan soca queen sang \"Roll It Gal\" in 2005?","Alison Hinds",["Rihanna","Destra Garcia","Faye-Ann Lyons"],"Alison Hinds, the Queen of Soca, released \"Roll It Gal\" in 2005.","soca"],
 ["Finish the title of Rihanna's very first single: Pon de …","Replay",["Road","Beach","Bus"],"\"Pon de Replay\" (2005) launched Rihanna from Barbados to the world.","soca"]
];
