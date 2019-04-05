var questions = {
  q1: ["Which city is the only city in the world situated on two continents?"],
  q2: ["Which is the largest metropolitan city in the world (by population)?"],
  q3: ["Which country in Europe has the biggest number of  inhabitants?"],
  q4: ["What is the largest country in the world?"],
  q5: ["Which countries share the longest border in the world?"],
  q6: ["Which desert is the biggest desert in the world, outside the Polar region?"],
  q7: ["Chichen Itza is located in which country?"],
  q8: ["Petra is located in which country"],
  q9: ["which country is called playground of europe?"],
  q10: ["In which country white elephant is found?"]
};

var answers = {
  a1: [{ a: "Ankara", b: "Istanbul", c: "Bursa", d: "Antalya" }],
  a2: [{ a: "Tokyo", b: "Shanghai", c: "Hong-Kong", d: "Singapore" }],
  a3: [{ a: "France", b: "Spain", c: "Poland", d: "Germany" }],
  a4: [{ a: "USA", b: "Russia", c: "China", d: "Canada" }],
  a5: [{ a: "China-India", b: "America-Mexico", c: "America-Canada", d: "Mongolia-China" }],
  a6: [{ a: "Sahara Desert", b: "Arabian Desert", c: "Kalahari Desert", d: "Gobi Desert" }],
  a7: [{ a: "Brazil", b: "Columbia", c: "Peru", d: "Mexico" }],
  a8: [{ a: "Belgium", b: "Switzerla` nd", c: "Austria", d: "Italy" }],
  a9: [{ a: "Israel", b: "Egypt", c: "Lebanon", d: "Jordan" }],
  a10: [{ a: "Malaysia", b: "Indonesia", c: "Thailand", d: "Nepal" }]
}

var details = {
  d1: ["Istanbul in Turkey is the city which sits on the Asian and European continent as the city spreads over two sides of a river canal, the Bosporus, which is separates the city in an Asian part and an European part."],
  d2: ["Tokyo in Japan is the largest city by population. More than 37 million people live in the metropolitan city."],
  d3: ["Germany has the biggest population in Europe. More than 82 million people live in this country in central Europe."],
  d4: ["Russia is the largest country with 6,602 million square miles. Then comes Canada, with 3,855 million square miles and then the United States with 3,797 million square miles. China has 3,705 million square miles."],
  d5: ["The border between the United States of America and Canada is the longest. It is over 8,800 km/5,500 miles long (including Alaska) and 8 Canadian provinces and territories and 13 US states are located along this border."],
  d6: ["The Sahara Desert is the biggest desert in the world and stretches over an area which is almost as big as the United States. It still grows every year!"],
  d7: ["Chichén Itzá is a complex of Mayan ruins on Mexico's Yucatán Peninsula. A massive step pyramid, known as El Castillo or Temple of Kukulcan, dominates the ancient city, which thrived from around 600 A.D. to the 1200s."],
  d8: ["Petra is a famous archaeological site in Jordan's southwestern desert. Dating to around 300 B.C., it was the capital of the Nabatean Kingdom. "],
  d9: ["Switzerland is a mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps. It's known for its ski resorts and hiking trails."],
  d10: ["White elephants also called as Albino Elephants are in Thailand, they are a rare kind of elephant. Also found in Burma, Thailand, Laos and Cambodia."]
}

var images = {
  i1: ["images\ans1.png"],
  i2: ["images\ans2.png"],
  i3: ["images\ans3.png"],
  i4: ["images\ans4.png"],
  i5: ["images\ans5.png"],
  i6: ["images\ans6.png"],
  i7: ["images\ans7.png"],
  i8: ["images\ans8.png"],
  i9: ["images\ans9.png"],
  i10: ["images\ans10.png"]
}



var time = 3000;

function startTrivia() {
  $("#start").on("click", function () {

    function askQuestion() {
      $("#start").hide();
      question1();
      timer();
      clicksAns();


    };
  });
}

function timer() {
  timer--;
  $("#timer").html("Time left: " + timer + "seconds");
  consolelog(timer);
  if(timer === 0)
  {
    clearInterval(interval);
    $(".button").remove();
    $("#question").remove();
    diplayAns();

  }
}


var hiddenImage = false;
var qcounter = 0;
var time = 30;
var score = 0;
varcorrectvalue;
var wrongvalue;
var interval,

function startGame() {

}

function gamePlay() {

    $("#start").on("click", function () {
        $("#start").hide();
        quest1();
        chooseCheckvalue();
        timeCount();
    });
}

function timeCount() {
    time = 12;
    interval = setInterval(timeRemaining, 1000)
    $("#valueContainer").append("<div class='timeRem'>"
        + "Time Remaining: " + "<div class = 'timerCountDown'></div>" +
        "</div>");
}

function timeRemaining() {
    time--
    $(".timerCountdown").text(time + " seconds")
    console.log(time);

    if (time === 0) {
        console.log("time" + time);
        clearInterval(interval);
        $(".buttons").remove();
        $("#question").remove();

        if (qcounter === 1) {
            var newDiv = newDiv.text("Times Up! " + "The correct value is " + questionsList.ans1[0].c)
            $(".valueContainer").append(correctvalue);

            setTimeout(function () {
                $("div").remove(".corAnsw")
            }, 5000);
        }
    }
}

function quest() {
    qcounter++
    $("#question").append(questionsList.q1);
    $("#a").append(questionsList.ans1[0].a)
    $("#b").append(questionsList.ans1[0].b)
    $("#c").append(questionsList.ans1[0].c)
    $("#d").append(questionsList.ans1[0].d)
    
}

function chooseCheckvalue() {
    $(".button").on("click", function(){
        var checkRightvalue =$(this).attr(".value");
        console.log(checkRightAnswer);
        clearInterval(interval);

        if(checRightAnswer == 1)

    });

}

function displayAns() {
  if (qcounter === 1){
    var answerDiv =$("<div class='rightAns'>");
    var rightAnswer =ansDiv.html("Times up! " + "Right answer is " + questions.answers);
    $(".options").append(rightAnswer);
    setTimeout(function(){
      $("div").remove(".rightAns");
    },5000)
  }
}

function question1() {
  qcounter++
  $("#question").append(questions.q1);
  $(".options").append("#a" + a1[0])
  $(".options").append("#b" + a1[1])
  $(".options").append("#c" + a1[2])
  $(".options").append("#d" + a1[2])
}

setTimeout(askQuestion, 3000);

function nextQuestion() {
  timer++;


function stopSlideshow() {

clearInterval(startTrivia());
  
  }
  
  // This will run the display image function as soon as the page loads.
  displayImage()

$("#start").click(startTrivia);

function displayImage() {
    $("#image-holder").html("<img src=" + images[count] + " width='400px'>");
  }
function startTrivia() {

    showQuestion = setInterval(nextQuestion, 3000);

  }















// Q1
// Which city is the only city in the world situated on two continents?
// A1
// Istanbul in Turkey is the city which sits on the Asian and European continent as the city spreads over two sides of a river canal, the Bosporus, which is separates the city in an Asian part and an European part.

// Q2
// Which is the largest metropolitan city in the world (by population)?
// A2
// Tokyo in Japan is the largest city by population. More than 37 million people live in the metropolitan city.

// Q3
// Which country in Europe has the biggest number of  inhabitants?
// A3
// Germany has the biggest population in Europe. More than 82 million people live in this country in central Europe.

// Q4
// What is the largest country in the world?
// A4
// Russia is the largest country with 6,602 million square miles. Then comes Canada, with 3,855 million square miles and then the United States with 3,797 million square miles. China has 3,705 million square miles.

// Q5
// Which countries share the longest border in the world?
// A5
// The border between the United States of America and Canada is the longest. It is over 8,800 km/5,500 miles long (including Alaska) and 8 Canadian provinces and territories and 13 US states are located along this border.

// Q6
// Which desert is the biggest desert in the world, outside the Polar region?
// A6
// The Sahara Desert is the biggest desert in the world and stretches over an area which is almost as big as the United States. It still grows every year!

// Q7
// Chichen Itza is located in which country?
// A7 
// Chichén Itzá is a complex of Mayan ruins on Mexico's Yucatán Peninsula. A massive step pyramid, known as El Castillo or Temple of Kukulcan, dominates the ancient city, which thrived from around 600 A.D. to the 1200s.

// Q8
// Petra is located in which country?
// A8 
// Petra is a famous archaeological site in Jordan's southwestern desert. Dating to around 300 B.C., it was the capital of the Nabatean Kingdom. 

// Q9
// which country is called playground of europe?
// A9 
// Switzerland is a mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps. It's known for its ski resorts and hiking trails.

// Q10
// In which country white elephant is found?
// A10 
// White elephants also called as Albino Elephants are in Thailand, they are a rare kind of elephant. Also found in Burma, Thailand, Laos and Cambodia.







