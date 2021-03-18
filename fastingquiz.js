// add variables

$(document).ready(function () {

    var answers = [];
    var meta = [];
    var numOfOne = 0;
    var numOfTwo = 0;
    var numOfThree = 0;
    var numOfFour = 0;
    var numOfFive = 0;

    // For single answer questions

    // $(".btn").on("click", function () {



    //var meta2 = $(this).attr("data-m2");

    //meta.push(meta1, meta2);

    //logic(answer)


   // console.log(meta);
    //add blocks to add variables

    //});

    // function logic(answer) {
var old_back = [
   
];
var new_back = [
   
];
var answers = [
   
];

//breid uit door voor alle vragen die je beantwoordt de waardes op te slaan, wat ook misschien makkelijker maakt om naar ac te sturen
    $('.back-button').click(function() {
        
        
        
        var old_back_lengtharray = old_back.length - 1 ;
        var new_back_lengtharray = new_back.length - 1 ;
        
        
        
        $(new_back[new_back_lengtharray]).fadeOut(500);
        $(old_back[old_back_lengtharray]).delay(600).fadeIn(500);
        
        old_back.pop();
        new_back.pop();

       
    }); 
    
    
    

    //fades in out

    $('.div-block-11 > .btnintro').click(function () {

       // var answer = $(this).attr("data-m1");

        $('#intro').fadeOut(500);
        $('#q1').delay(600).fadeIn(500);
    });

     $('#q1 > .button_wrappler  > .choice-wrapper > .btn').click(function () {

        var answer = $(this).attr("data-m1");

        if (answer == "Male") {
            $('#q1').fadeOut(500);
            $('#q2-male').delay(600).fadeIn(500);
            
            $('#profile_gender').val("M");
            
            $('#body_weight').val("");
            $('#post_menopausal').val("");
            $('#menstrual_cycle_normal').val("");

            
            
            
           /* $('#old_back').val("#q1");
            $('#new_back').val("#q2-male");*/
            
            old_back.push("#q1");
            new_back.push("#q2-male");
            //answers.push()
 
        }
        if (answer == "Female") {
            $('#q1').fadeOut(500);
            $('#q2-female').delay(600).fadeIn(500);
            
            $('#profile_gender').val("F");
            
            $('#talk_schedule').val("");
            $('#fasted_before').val("");
            $('#how_fastfast_sound').val("");

            
         /*   $('#old_back').val("#q1");
            $('#new_back').val("#q2-female");*/
            
            old_back.push("#q1");
            new_back.push("#q2-female");
        }
    });

    $('#q2-female  > .button_wrappler  > .choice-wrapper > .btn').click(function () {
        var answer = $(this).attr("data-m1");
        
        var answer_send = $(this).text();
        $('#body_weight').val(answer_send);
        
        
        
        if (answer == "A") {
            $('#q2-female').fadeOut(500);
            $('#rtwo').delay(1100).fadeIn(500);
            $('#form1').delay(1100).fadeIn(500);
            $('#profile_res').val("Profile B (with warning)");
            
            
            $("#q1 > .button_wrappler  > .choice-wrapper > .btn").val();
            //$('#old_back').val("#q2-female");
            old_back.push("#q2-female");
         }
        if (answer == "B") {
            $('#q2-female').fadeOut(500);
            $('#q4-female').delay(600).fadeIn(500);
            
            
            /*$('#old_back').val("#q2-female");
            $('#new_back').val("#q4-female");*/
            
            old_back.push("#q2-female");
            new_back.push("#q4-female");
        }
        if (answer == "C") {
            $('#q2-female').fadeOut(500);
            $('#q3-female').delay(600).fadeIn(500);
             
            /*$('#old_back').val("#q2-female");
            $('#new_back').val("#q3-female");*/
            
            old_back.push("#q2-female");
            new_back.push("#q3-female");
        }
    });
    $('#q2-male  > .button_wrappler  > .btn').click(function () {
        var answer = $(this).attr("data-m1");

        var answer_send = $(this).text();
        $('#talk_schedule').val(answer_send);
        
        if (answer == "A") {
            $('#q2-male').fadeOut(500);
            $('#q3-male').delay(600).fadeIn(500);
            /*$('#rfour').delay(1100).fadeIn(500);
            $('#form1').delay(1100).fadeIn(500);
            $('#profile_res').val("Profile C");*/
            
          
            
            /*$('#old_back').val("#q2-male");
            $('#new_back').val("#q3-male");*/
            
            old_back.push("#q2-male");
            new_back.push("#q3-male");
        }
        if (answer == "B") {
            $('#q2-male').fadeOut(500);
            $('#q3-male').delay(600).fadeIn(500);
            /*$('#rfour').delay(1100).fadeIn(500);
            $('#form1').delay(1100).fadeIn(500);
            $('#profile_res').val("Profile C");*/
            
            
            
           /* $('#old_back').val("#q2-male");
            $('#new_back').val("#q3-male");*/
            
            old_back.push("#q2-male");
            new_back.push("#q3-male");
        }
        if (answer == "C") {
            $('#q2-male').fadeOut(500);
            //$('#q3-male').delay(600).fadeIn(500);
            $('#rfour').delay(1100).fadeIn(500);
            $('#form1').delay(1100).fadeIn(500);
            $('#profile_res').val("Profile C");
            
             
            //$('#old_back').val("#q2-male");
            
            old_back.push("#q2-male");
         }
    });

    $('#q3-male  > .button_wrappler  > .btn').click(function () {
        var answer = $(this).attr("data-m1");

         var answer_send = $(this).text();
        $('#fasted_before').val(answer_send);
        
        if (answer == "A") {
            $('#q3-male').fadeOut(500);
            $('#rfive').delay(1100).fadeIn(500);
            $('#form1').delay(1100).fadeIn(500);
            $('#profile_res').val("Profile A");
            
             
            //$('#old_back').val("#q3-male");
            
            old_back.push("#q3-male");

         }
        if (answer == "B") {
            $('#q3-male').fadeOut(500);
            $('#q4-male').delay(600).fadeIn(500);
            
       
            
            /*$('#old_back').val("#q3-male");
            $('#new_back').val("#q4-male");*/
            
            old_back.push("#q3-male");
            new_back.push("#q4-male");
        }
        if (answer == "C") {
            $('#q3-male').fadeOut(500);
            $('#q4-male').delay(600).fadeIn(500);
            
        
            
            /*$('#old_back').val("#q3-male");
            $('#new_back').val("#q4-male");*/
            
            old_back.push("#q3-male");
            new_back.push("#q4-male");
        }
    });

    $('#q4-male  > .button_wrappler > .btn').click(function () {
        var answer = $(this).attr("data-m1");

         var answer_send = $(this).text();
        $('#how_fastfast_sound').val(answer_send);
        
        if (answer == "A") {
            $('#q4-male').fadeOut(500);
            $('#rfour').delay(1100).fadeIn(500);
            $('#form1').delay(1100).fadeIn(500);
            $('#profile_res').val("Profile C");
            
             
            //$('#old_back').val("#q4-male");
            
            old_back.push("#q4-male");
          }
        if (answer == "B") {
            $('#q4-male').fadeOut(500);
            $('#rsix').delay(1100).fadeIn(500);
            $('#form1').delay(1100).fadeIn(500);
            $('#profile_res').val("Profile D");
            
            // $('#old_back').val("#q4-male");
            old_back.push("#q4-male");

         }
        if (answer == "C") {
            $('#q4-male').fadeOut(500);
            $('#rsix').delay(1100).fadeIn(500);
            $('#form1').delay(1100).fadeIn(500);
            $('#profile_res').val("Profile D");
            
            // $('#old_back').val("#q4-male");
             old_back.push("#q4-male");

        }
    });


    $('#q3-female  > .button_wrappler  > .choice-wrapper > .btn').click(function () {
        var answer = $(this).attr("data-m1");
        
        var answer_send = $(this).text();
        $('#post_menopausal').val(answer_send);

        if (answer == "Yes") {
            $('#q3-female').fadeOut(500);
            $('#q2-male').delay(600).fadeIn(500);
            
            
            
            /*$('#old_back').val("#q3-female");
            $('#new_back').val("#q2-male");*/
            
            old_back.push("#q3-female");
            new_back.push("#q2-male");
        }
        if (answer == "No") {
            $('#q3-female').fadeOut(500);
            $('#q4-female').delay(600).fadeIn(500);
            
             
            
           /* $('#old_back').val("#q3-female");
            $('#new_back').val("#q4-female");*/
            
            old_back.push("#q3-female");
            new_back.push("#q4-female");
        }
    });

    $('#q4-female  > .button_wrappler  > .choice-wrapper > .btn').click(function () {
        var answer = $(this).attr("data-m1");
        
        var answer_send = $(this).text();
        $('#menstrual_cycle_normal').val(answer_send);

        if (answer == "Yes") {
            $('#q4-female').fadeOut(500);
            $('#rthree').delay(1100).fadeIn(500);
            $('#form1').delay(1100).fadeIn(500);
            $('#profile_res').val("Profile B");
            
             
           // $('#old_back').val("#q4-female");
             old_back.push("#q4-female");

        }
        if (answer == "No") {
            $('#q4-female').fadeOut(500);
            $('#rtwo').delay(1100).fadeIn(500);
            $('#form1').delay(1100).fadeIn(500);
            $('#profile_res').val("Profile B (with warning)");
            
             
            //$('#old_back').val("#q4-female");
            old_back.push("#q4-female");

         }
    });

    /*$('#q5  > .button_wrappler  > .choice-wrapper > .btn').click(function () {
        $('#q5').fadeOut(500);
        $('#q6').delay(600).fadeIn(500);
    });

    $('#q6  > .btn').click(function () {
        $('#q6').fadeOut(500);
        $('#q7').delay(600).fadeIn(500);
    });

    $('#q7  > .btn').click(function () {
        $('#q7').fadeOut(500);
        $('#q8').delay(600).fadeIn(500);
    });

    $('#q8  > .btn').click(function () {
        $('#q8').fadeOut(500);
        $('#q9').delay(600).fadeIn(500);
    });

    $('#q9  > .btn').click(function () {
        $('#q9').fadeOut(500);
        $('#q10').delay(600).fadeIn(500);
    });


    $('#q10  > .btn').click(function () {
        $('#q10').fadeOut(500);
        $('#calc').delay(600).fadeIn(500);
    });*/

    //add questions
/*
    $('#calc  > .submit').click(function () {
        $('#calc').fadeOut(500);
        $('#results').delay(600).fadeIn(500);
    });*/
    //}

    // Restart button

    $('.restart').click(function () {
        location.reload();
    });


    //START RESULTS DISPLAY
/*
    $('#calc .submit').click(function () {

        $('#calc').fadeOut(1000);
        var obj = {};
        obj['One'] = numOfOne;
        obj['Two'] = numOfTwo;
        obj['Three'] = numOfThree;
        obj['Four'] = numOfFour;
        obj['Five'] = numOfFive;
        //add variables

        console.log(obj);
        i = 0;
        var results = [];
        while (i < 1) {
            function whichIsTheGreatest(obj) {

                var max = -Infinity; // calling Math.max with no arguments returns -Infinity

                for (var key in obj) {
                    var num = obj[key];

                    if (num > max) {
                        max = num;
                        maxName = key;
                    }

                    max = (num > max && num) || max;
                }

                return maxName;

            }
            results.push(whichIsTheGreatest(obj));
            // console.log(whichIsTheGreatest(obj)); // 'a'
            delete obj[maxName];
            i++;
        }*/
        /*
                function whichIsTheGreatestTHIRD(obj) {
        
                    var max = -Infinity; // calling Math.max with no arguments returns -Infinity
        
                    for (var key in obj) {
                        var num = obj[key];
        
                        if (num > max) {
                            max = num;
                            maxName = key;
                        }
        
                        max = (num > max && num) || max;
                    }
        
                    return maxName;
        
                }
                var third = (whichIsTheGreatestTHIRD(obj));
                var thirdnum = obj[third];
                var thirdall = [];
                i = 0;
                while (i < 4){
                    function whichAreTHIRD(obj) {
                        var max = -Infinity; // calling Math.max with no arguments returns -Infinity
                        var tn = thirdnum;
        
                        for (var key in obj) {
                            var num = obj[key];
        
                            if (num == tn) {
                                maxNameTwo = key;
                            }
        
                        }
        
                        return maxNameTwo;
        
                    }
                    thirdall.push(whichAreTHIRD(obj));
                    delete obj[maxNameTwo];
                    i++;
                }
        
        
                var uniqueThirdall = [];
                $.each(thirdall, function(i, el){
                    if($.inArray(el, uniqueThirdall) === -1) uniqueThirdall.push(el);
                });
        
        
                var rand = uniqueThirdall[Math.floor(Math.random() * uniqueThirdall.length)];
        
                results.push(rand);
        
        */

       /* if (results.indexOf("One") > -1) {
            $('#rone').delay(1100).fadeIn(500);
        } if (results.indexOf("Two") > -1) {
            $('#rtwo').delay(1100).fadeIn(500);
        } if (results.indexOf("Three") > -1) {
            $('#rthree').delay(1100).fadeIn(500);
        } if (results.indexOf("Four") > -1) {
            $('#rfour').delay(1100).fadeIn(500);
        } if (results.indexOf("Five") > -1) {
            $('#rfive').delay(1100).fadeIn(500);
        }
        //add variables add results
        $('#rintro').delay(1100).fadeIn(500);*/


    //});


});

//END RESULTS DISPLAY
