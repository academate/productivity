const randomQuoteFun = () => {
    let arrayObj = {"quoteArrOne" : ["\"<i>I hated every minute of training. But I said, 'Don't quit. Suffer now and live the rest of your life as a champion</i>.'\"<br><br><b>Muhammad Ali</b>",
                                        "\"<i>Remember the bad and forget the good to keep your own greatness in prespective</i>\"", 
                                        "\"<i>Every person is a world to explore</i>\"<br><br><b>Thich Nhat Hanh</b>",
                                        "\"They are forever free who renounce all selfish desires and break away from the ego care of \'I\', \'me\', and \'mine\'.\"<br><br><b>Bhagvad Gita</b>",
                                        "\"<i>Controlling your time is the highest dividend money pays</i>.\"",
                                        "\"<i>Good investing is not necessarily about making good decisions. It's about consistently not screwing up</i>.\""],
                    "quoteArrTwo" : ["\"<i>The ignorant work for their own profit… the wise work for the welfare of the world…</i>\"<br><br><b>Bhagavad Gita, 3:25</b>",
                                        "\"<i>Do not live as if you have ten thousand years left. Your fate hangs over you. While you are still living, while you still exist on this Earth, strive to become a genuinely great person.</i>\"<br><br><b>Marcus Aurelius, Roman emperor</b>",
                                        "\"<i>Everyone holds his fortune in his own hands, like a sculptor the raw material he will fashion into a figure.. .. The skill to mold the material into what we want must be learned and attentively cultivated.</i>\"<br><br><b>Johann Wolfgang von Goethe</b>",
                                        "\"<i>A child has no trouble believing the unbelievable, nor does the genius or the madman. It\'s only you and I, with our big brains and our tiny hearts, who doubt and overthink and hesitate</i>.\"<br><br><b>Steven Pressfield</b>",
                                        "\"<i>Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma — which is living with the results of other people\'s thinking. Don\'t let the noise of others\' opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition. They somehow already know what you truly want to become.</i>\"<br><br><b>Steve Jobs</b>",
                                        "\"<i>Your personal experiences with money make up maybe 0.00000001% of what's happened in the world, but maybe 80% of how you think the world works</i>.\""],
                    "quoteArrThree" : ["\"<i>It is well to be up before breakfast, for such habits contribute to health, wealth and wisdom</i>.\"<br><br><b>Aristotle</b>",
                                        "\"<i>The men who are great live with that which is substantial, they do not stay with that which is superficial; they abide with realities, they remain not with what is showy. The one they discard, the other they hold</i>.\"<br><br><b>Lao Tzu</b>",
                                        "\"<i>The life given us, by nature is short, but the memory of a well-spent life is eternal</i>.\"<br><br><b>Cicero</b>",
                                        "\"<i>The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart</i>.\"<br><br><b>Helen Keller</b>",
                                        "\"<i>Spending money to show people how much money you have is the fastest way to have less money</i>.\"<br><br><b>The Psychology of Money</b>",
                                        "\"<i>No matter how busy you may think you are, you must find time for reading, or surrender yourself to self-chosen ignorance</i>.\"",
                                        "\"<i>Very little is needed to make a happy life; it is all within yourself, in your way of thinking</i>\"<br><br><b>Marcus Aurelius</b>"],
                    "quoteArrFour" : ["\"<i>Spending money to show people how much money you have is the fastest way to have less money</i>.\"", 
                                        "\"<i>The most important part of every plan is planning on your plan not going according to plan</i>.\"", 
                                        "\"<i>Everything has a price, but not all prices appear on labels</i>.\"",
                                        "\"<i>You cannot escape the responsibility of tomorrow by evading it today</i>\"<br><br><b>Abraham Lincoln</b>", 
                                        "\"<i>Work on it TODAY, not tomorrow</i>\"", 
                                        "\"<i>Fools learn from experience. I prefer to learn from the experience of others</i>.\"<br><br><b>Otto Van Bismarck</b>",
                                        "\"<i>If life were predictable it would cease to be life, and be without flavor</i>\"<br><br><b>Eleanor Roosevelt</b>", 
                                        ]};

    let arrNames = ["quoteArrOne", "quoteArrTwo", "quoteArrThree", "quoteArrFour"];

    let randomKey = arrNames[Math.floor(Math.random() * 4)];

    let randomQuote = arrayObj[randomKey][(Math.floor(Math.random() * 6))];

    showQuote(randomQuote);
}

const showQuote = (theQuote) => {
    let quoteBox = document.getElementsByClassName("quote-box")[0];

    quoteBox.innerHTML = theQuote;
}
