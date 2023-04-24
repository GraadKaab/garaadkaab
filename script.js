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





//3rd varibales declartions




var speechRecognition_3 = window.webkitSpeechRecognition

var  recognition_3 = new speechRecognition_3()

var textbox_3 = $("#textbox3")

var instructions_3 = $("#instructions3")


var content3 = ''

recognition_3.continuous = true


//4th varibales declartions




var speechRecognition_4 = window.webkitSpeechRecognition

var  recognition_4 = new speechRecognition_4()

var textbox_4 = $("#textbox4")

var instructions_4 = $("#instructions4")


var content4 = ''

recognition_4.continuous = true










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




//recon start 3

recognition_3.onstart = function ()
{

    instructions_3.text("Voice Recognition is on")
}

recognition_3.onspeechend = function(){

instructions_3.text("No Activity")

}

recognition_3.onerror = function (){

    instructions_3.text("Try Again")


}

recognition_3.onresult = function (event){

var current_3 = event.resultIndex;

var transcript = event.results[current_3][0].transcript
content3 += transcript

textbox_3.val(content3)

}

$("#start-btn3").click(function(event){


if (content3.length){

content3 +=''


}

recognition_3.start()

})
textbox_3.on('input',function()
{

content3 = $(this).val()

}

)


//recon start 4

recognition_4.onstart = function ()
{

    instructions_4.text("Voice Recognition is on")
}

recognition_4.onspeechend = function(){

instructions_4.text("No Activity")

}

recognition_4.onerror = function (){

    instructions_4.text("Try Again")


}

recognition_4.onresult = function (event){

var current_4 = event.resultIndex;

var transcript = event.results[current_4][0].transcript
content4 += transcript

textbox_4.val(content4)

}

$("#start-btn4").click(function(event){


if (content4.length){

content4 +=''


}

recognition_4.start()

})
textbox_4.on('input',function()
{

content4 = $(this).val()

}

)
