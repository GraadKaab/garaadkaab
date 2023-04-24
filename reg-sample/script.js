var speechRecognition = window.webkitSpeechRecognition

var  recognition = new speechRecognition()

var textbox = $("#textbox")

var instructions = $("#instructions")


var content = ''

recognition.continuous = true


//2nd button funs start here


var speechRecognition_2 = window.webkitSpeechRecognition

var  recognition_2 = new speechRecognition_2()

var textbox_2 = $("#textbox2")

var instructions_2 = $("#instructions2")


var content2 = ''

recognition_2.continuous = true






//recognition started

recognition.onstart = function ()
{

    instructions.text("Voice Recognition is on")
}

recognition.onspeechend = function(){

instructions.text("No Activity")

}

recognition.onerror = function (){

    instructions.text("Try Again")


}

recognition.onresult = function (event){

var current = event.resultIndex;

var transcript = event.results[current][0].transcript
content += transcript

textbox.val(content)

}

$("#start-btn").click(function(event){


if (content.length){

content +=''


}

recognition.start()

})
textbox.on('input',function()
{

content = $(this).val()

}

)



//recon start 2

recognition_2.onstart = function ()
{

    instructions_2.text("Voice Recognition is on")
}

recognition_2.onspeechend = function(){

instructions_2.text("No Activity")

}

recognition_2.onerror = function (){

    instructions_2.text("Try Again")


}

recognition_2.onresult = function (event){

var current_2 = event.resultIndex;

var transcript = event.results[current_2][0].transcript
content2 += transcript

textbox_2.val(content2)

}

$("#start-btn2").click(function(event){


if (content2.length){

content2 +=''


}

recognition_2.start()

})
textbox_2.on('input',function()
{

content2 = $(this).val()

}

)
