
let poems = [
    "I'm just a teenage dirtbag",
    "The world is a vampire",
    "Sunday's on the phone to Monday",
    "She came back wearing a smile",
    "Mirror mirror on the wall what's the meaning of it all",
    "It's not what you like but what you are like that's important",
    "I wish I was homeward bound",
    "Sorry I'm not home right now I'm walking into spiderwebs",
    "I just want you to know who I am",
    "Caught between the tides of pain and rapture",
    "I became insane with long intervals of horrible sanity",
    "I wandered lonely as a cloud",
    "She comes and goes no one knows",
    "Love is a wild thing",
    "Tread softly because you tread on my dreams",
    "Things fall apart",
    "Toss me a cigarette I think there's one in my raincoat",
    "Lose your dreams and you will lose your mind",
    "Show me how you do it and I'll promise you I'll run away with you",
    "I'm also just a girl standing in front of a boy asking him to love her",
    "Seasons of mists and mellow fruitfulness",
    "Alien passions and strange imaginings",
    "Well you look like yourself but you're somebody else",
    "Pitch black flesh and bone",
    "I must admit I can't explain",
    "Some people think they're always right",
    "And you may find yourself living in a shotgun shack",
    "Guess I'll hang my tears out to dry",
    "I’m losing my edge to the art school Brooklynites in little jackets and borrowed nostalgia",
    "We go out in the world and take our chances",
    "A new day will dawn for those who stand strong",
    "I thought I was dreaming when you said you loved me",
    "You text nothing like you look",
    "I'm lonely but I ain't that lonely yet",
    "You took a white orchid turned it blue",
    "The greatest thing you’ll ever learn is just to love and be loved in return",
    "If you’re a bird I’m a bird",
    "I wasn’t actually in love but I felt a sort of tender curiosity",
    "I don't wanna be just a memory",
    "Today is the greatest day I've ever known",
    "Thank you for being a friend",

  ];
 
  let max = poems.length - 1;
  let min = 0; 
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  
  
  let randomPoem = poems[randomNumber]; 
  
 
  let poemTag = document.getElementById("poem");
  
  poemTag.innerHTML = randomPoem; 
  
