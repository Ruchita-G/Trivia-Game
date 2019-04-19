var questionsList = [
    {
        q: "Which city is the only city in the world situated on two continents?",
        a: "Ankara",
        b: "Istanbul",
        c: "Bursa",
        d: "Antalya",
        value: 2
    },
    {
        q: "Which is the largest metropolitan city in the world (by population)?",
        a: "Tokyo",
        b: "Shanghai",
        c: "Hong-Kong",
        d: "Singapore",
        value: 1
    },
    {
        q: "Which country in Europe has the biggest number of  inhabitants?",
        a: "France",
        b: "Spain",
        c: "poland",
        d: "Germany",
        value: "4"
    },
    {
        q: "What is the largest country in the world?",
        a: "USA",
        b: "Russia",
        c: "China",
        d: "Canada",
        value: 2
    },
    {
        q: "Which countries share the longest border in the world?",
        a: "China-India",
        b: "America-Mexico",
        c: "America-Canada",
        d: "Mongolia-China",
        value: "3"
    },
    {
        q: "Which desert is the biggest desert in the world, outside the polar region?",
        a: "Sahara Desert",
        b: "Arabian Desert",
        c: "Kalahari Desert",
        d: "Gobi Desert",
        value: 1
    },
    {
        q: "Chichen Itza is located in which country?",
        a: "Brazil",
        b: "Columbia",
        c: "Peru",
        d: "Mexico",
        value: 4
    },
    {
        q: "Petra is located in which country?",
        a: "Israel",
        b: "Egypt",
        c: "Lebanon",
        d: "Jordan",
        value: 4
    },
    {
        q: "which country is called playground of europe?",
        a: "Belgium",
        b: "Switzerland",
        c: "Austria",
        d: "Italy",
        value: 2
    },
    {
        q: "In which country white elephant is found?",
        a: "Malaysia",
        b: "Indonesia",
        c: "Thailand",
        d: "Nepal",
        value: 3
    },
]

var moreInfo = [
    {
        pic: "assets/images/ans1.png",
        info: "Istanbul in Turkey is the city which sits on the Asian and European continent as the city spreads over two sides of a river canal, the Bosporus, which is separates the city in an Asian part and an European part."
    },
    {
        pic: "assets/images/ans2.png",
        info: "Tokyo in Japan is the largest city by population. More than 37 million people live in the metropolitan city."
    },
    {
        pic: "assets/images/ans3.png",
        info: "Germany has the biggest population in Europe. More than 82 million people live in this country in central Europe."
    },
    {
        pic: "assets/images/ans4.png",
        info: "Russia is the largest country with 6,602 million square miles. Then comes Canada, with 3,855 million square miles and then the United States with 3,797 million square miles. China has 3,705 million square miles."
    },
    {
        pic: "assets/images/ans5.png",
        info: "America and Canada - The border between the United States of America and Canada is the longest. It is over 8,800 km/5,500 miles long (including Alaska) and 8 Canadian provinces and territories and 13 US states are located along this border."
    },
    {
        pic: "assets/images/ans6.png",
        info: "Sahara Desert is the biggest desert in the world and stretches over an area which is almost as big as the United States. It still grows every year!"
    },
    {
        pic: "assets/images/ans7.png",
        info: "Mexico - Chichén Itzá is a complex of Mayan ruins on Mexico's Yucatán Peninsula. A massive step pyramid, known as El Castillo or Temple of Kukulcan, dominates the ancient city, which thrived from around 600 A.D. to the 1200s."
    },
    {
        pic: "assets/images/ans8.png",
        info: "Jordan - Petra is a famous archaeological site in Jordan's southwestern desert. Dating to around 300 B.C., it was the capital of the Nabatean Kingdom. "
    },
    {
        pic: "assets/images/ans9.png",
        info: "Switzerland is a mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps. It's known for its ski resorts and hiking trails."
    },
    {
        pic: "assets/images/ans10.png",
        info: "Thailand - White elephants also called as Albino Elephants are in Thailand, they are a rare kind of elephant. Also found in Burma, Thailand, Laos and Cambodia."
    },

]

var i = -1;
var j = -1;
var timer = 31;
var intervalId;
var correctAns = 0;

// =====================================================

$(document).on("click", ".ansBtn", function () {

    $("#alertDiv").hide();
    $("#scoreDiv").hide();


    if (i < questionsList.length) {

        $(".card").show();

        console.log($(this).val());
        console.log(questionsList[i].value);

        if ($(this).val() == questionsList[i].value) {
            correctAns++;

            $("#alertDiv").html("<h1 'color: blue'>Correct Answer!!!</h1>");
            $("#alertDiv").show(500);
            $(".row").hide();
        }
        else {
            $("#alertDiv").html("<h1 'color: red'>That's Incorrect!!!</h1>");
            $("#alertDiv").show(500);
            $(".row").hide();
        };
    };
    nextInfo();

})
// =====================================================

function count() {
    timer--;

    $("#timer").html(`<h1>${timer} seconds left!</h1>`);

    if (!timer) {
        $("#alertDiv").html("<h1 'color:', orange>Time's UP!!!</h1>");
        $("#alertDiv").show(500);
        $(".row").hide();
        $(".card").show();
        nextInfo();
    }
}

// =====================================================

$("#start").on("click", function start() {
    
    $("#alertDiv").hide();
    $("#scoreDiv").hide();
    $("#start").hide();
    $(".row").show();
    intervalId = setInterval(count, 1000);
    nextQuestion();
});

function nextQuestion() {
    $(".row").show();

    i++;

    $("#alertDiv").hide();
    $(".card").hide();

    if (i === questionsList.length) {

        $(".row").hide();
        $("#timer").hide();
        $("#scoreDiv").html(`<h1>You got ${correctAns}/10 Correct Answers<br>Thanks for Playing</h1>`);
        $("#scoreDiv").show(500);
        $("#start").show();
        $(".card").hide();

    } else {

        timer = 16;

        $("#question").html(`<h1>${questionsList[i].q}</h1>`);
        $("#a").html(`<h1>${questionsList[i].a}</h1>`);
        $("#b").html(`<h1>${questionsList[i].b}</h1>`);
        $("#c").html(`<h1>${questionsList[i].c}</h1>`);
        $("#d").html(`<h1>${questionsList[i].d}</h1>`);
    }



}
function nextInfo() {

    j++;

    if (j < moreInfo.length) {

        timer = 10;

        $("#pic").html("<img src=" + moreInfo[j].pic + " width='900px' height='600px'>");
        $("#info").html("<h2>" + moreInfo[j].info + "</h2>");
    }

    setTimeout(nextQuestion, 3000);


}

