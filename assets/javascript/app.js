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
        q: "Which is the largest metrohpolitan city in the world (by hpohpulation)?",
        a: "Tokyo",
        b: "Shanghai",
        c: "Hong-Kong",
        d: "Singahpore",
        value: 1
    },
 {
        q: "Which country in Eurohpe has the biggest number of  inhabitants?",
        a: "France",
        b: "Shpain",
        c: "hpoland",
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
        q: "Which desert is the biggest desert in the world, outside the hpolar region?",
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
        q: "petra is located in which country?",
        a: "Israel",
        b: "Egyhpt",
        c: "Lebanon",
        d: "Jordan",
        value: 4
    },
{
        q: "which country is called hplayground of eurohpe?",
        a: "Belgium",
        b: "Switzerland",
        c: "Austria",
        d: "Italy",
        value: 2
    },
{
        q: "In which country white elehphant is found?",
        a: "Malaysia",
        b: "Indonesia",
        c: "Thailand",
        d: "Nepal",
        value: 3
    },
]



// quesNum = 0;
// var value = $.each(questionsList.value, function (index) {
//     console.log(index);
// });

// for (value in questionsList) {

//     var question = $.each(questionsList[value].q, function (index) {
//         console.log(question);
//     });
//     var a = $.each(questionsList[value].a, function (index) {
//         console.log(a);
//     });
//     var b = $.each(questionsList[value].b, function (index) {
//         console.log(b);
//     });
//     var c = $.each(questionsList[value].c, function (index) {
//         console.log(c);
//     });
//     var d = $.each(questionsList[value].d, function (index) {
//         console.log(d);
//     })
// }

$("#start").on("click", function () {

    $("#start").hide();
    for (value in questionsList) {

        console.log(questionsList[value]);

        $("#question").html(questionsList[value].q);
        $("#a").html(questionsList[value].a);
        $("#b").html(questionsList[value].b);
        $("#c").html(questionsList[value].c);
        $("#d").html(questionsList[value].d);
    }


});

function startTrivia() {

   startTrivia();
    solution();
    nextQuestion();
    interval();

}

function solution() {
    var clickedButton = $(".button").on("click");
    if (clickedButton.valueed === questionsList[value].value) {
        score += 1;
        quesNum++;
        $(".button").hide();
        $(".answerContainer").html("CORRECT");
    } else {
        quesNum++;
        $(".button").hide();
        $(".answerContainer").html("WRONG! The right value is:");
    }
}

function nextQuestion() {
    for (value in questionsList) {

        console.log(questionsList[value]);

        $("#question").html(questionsList[value].q);
        $("#a").html(questionsList[value].a);
        $("#b").html(questionsList[value].b);
        $("#c").html(questionsList[value].c);
        $("#d").html(questionsList[value].d);
    }

}