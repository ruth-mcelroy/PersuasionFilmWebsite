function linkSizeH()
{
	var bigWriting = document.getElementById('home');			//These change the link to the page we're on to larger writing and red.
	bigWriting.style.fontSize = '200%';
	bigWriting.style.color = 'red';
}
function linkSizeO()
{
	var bigWriting = document.getElementById('overView');
	bigWriting.style.fontSize = '200%';
	bigWriting.style.color = 'red';
}
function linkSizeB()
{
	var bigWriting = document.getElementById('book');
	bigWriting.style.fontSize = '200%';
	bigWriting.style.color = 'red';
}
function linkSizeCa()
{
	var bigWriting = document.getElementById('cast');
	bigWriting.style.fontSize = '200%';
	bigWriting.style.color = 'red';
}

function linkSizeCo()
{
	var bigWriting = document.getElementById('contactUs');
	bigWriting.style.fontSize = '200%';
	bigWriting.style.color = 'red';
}

function hover()
{
	var bigHover = document.getElementById('cast');
	bigWriting.style.fontSize = '200%';
}




 function Check(el)														//This greys out the 'which website' writing until the website button is checked. Citation: https://forums.digitalpoint.com/threads/needed-a-button-is-grayed-out-until-radio-button-or-checkbox-is-checked.2641407/
 {
	var button = document.getElementById("text");

	if ( button.disabled == true )
	{
		button.disabled = false;
	}
	else
	{
		button.disabled = true;
	}
}




$(document).ready(function(){

	$('.popbox').hide();

	$('#emma').mouseover( function(){							//these bring up a new div showing more information about the actor when the actor image is moused over.
		$('#popboxEmma').show();
	});//end mouseover
	$('#emma').mouseout( function(){
		$('.popbox').hide();
	}); //end mouseout


	$('#rupert').mouseover( function(){
		$('#popboxRupert').show();
	});//end mouseover
	$('#rupert').mouseout( function(){
		$('.popbox').hide();
	}); //end mouseout

		$('#anthony').mouseover( function(){
		$('#popboxAnthony').show();
	});//end mouseover
	$('#anthony').mouseout( function(){
		$('.popbox').hide();
	}); //end mouseout

	$('#jennifer').mouseover( function(){
		$('#popboxJennifer').show();
	});//end mouseover
	$('#jennifer').mouseout( function(){
		$('.popbox').hide();
	}); //end mouseout




	$('.required').click(function(){
		if ($(this).val() == "*")										//if there is just a * in the field it clears it before you write in your values.See validation below.
		{
				$(this).val("");
		}
	});

		$('#submit').click(function(){

			var comment= "";														//Changes the alert() depending on whether the fields are valid.
			var toSubmit = new Array("NA","NA","NA"); 								//Goes through all elements of the .required classes and makes sure they are all correct before the form submits
			var allCorrect ="NA";
			var	count;
			var emailCorrect = "NA";												//makes sure the e-mail is correct before the form submits

			count=0;																//to count through the elements in the .each()


			$('.required').each(function(){											//validates each of the fields with a class of 'required'. I can later change what fields are required in the html without changing this function at all.

				if ( $(this).val() =="" || $('.required').val() == null || $('.required').val() == "*")
				{
					$(this).val("*").css("color","red");							//The red * is to show which fields to fill in and when you then click into the field the * disappears.
					comment = "Please Fill in all the required fields";
					$("#form").submit(function(e) { 								// Prevents form re-setting if validation is wrong. Citation: http://stackoverflow.com/questions/19454310/stop-form-refreshing-page-on-submit
						e.preventDefault();
					})
					toSubmit[count]="N";
					count++;
				}
				else
				{
					toSubmit[count]="Y";
					count++;
				}


				if(toSubmit[0]=="Y" && toSubmit[1]=="Y" && toSubmit[2]=="Y" )				//if all required fields correct
				{
					var fname = $('#firstname').val();
					var lname = $('#lastname').val();
					comment ="Thank you " + fname +" " + lname + " for your time";
					allCorrect ="Y";
				}

			});

			if(comment!= "Please Fill in all the required fields")
			{
				var email = $('#email').val();
				var emailAt= email.indexOf("@");
				var emailDot = email.lastIndexOf(".");

				if(emailAt<1 ||emailDot < emailAt+2 || email.length < emailDot+2 )				// validates the e-mail after checking that it is filled in.
				{
					comment= "That is not a valid e-mail address.";
					$('#email').css("color","red");
					$("#form").submit(function(e) { 							// Prevents form re-setting if validation is wrong. Citation: http://stackoverflow.com/questions/19454310/stop-form-refreshing-page-on-submit
							e.preventDefault();
						})
					emailCorrect = "N";
				}
				else
				{
					emailCorrect = "Y";
				}
			}

			alert(comment);													//alert with either "please fill in required", "Invalid e-mail" or "thank you name".

			if(emailCorrect =="Y" && allCorrect =="Y")							//Goes to home page if all the form is correct. ie. All 3 required fields are filled and the email is correct.
			{																//this would usually be done on the ajax post function and if(return true) on this then it will not work because it is trying to submit form and load page at same time(according to stackoverflow). I put in  'return false' in because I thought it was more important to get the user expirence right and add in the ajax later.
			window.location ="index.html";
			return false;
			}
		}); //end validate function

});// end document ready

function openEmma()													//on double click of the actors image their imdb page will open in a new window.
{
	window.open("http://www.imdb.com/name/nm0000668/");
}
function openSally()
{
	window.open("http://www.imdb.com/name/nm1020089/?ref_=nv_sr_1");
}
function openRupert()
{
	window.open("http://www.imdb.com/name/nm0672303/");
}
function openAlice()
{
	window.open("http://www.imdb.com/name/nm0000481/?ref_=nv_sr_1");
}
function openAnthony()
{
	window.open("http://www.imdb.com/name/nm0372117/?ref_=nv_sr_2");
}
function openTobias()
{
	window.open("http://www.imdb.com/name/nm0580014/?ref_=nv_sr_1");
}
function openJennifer()
{
	window.open("http://www.imdb.com/name/nm1264670/?ref_=nv_sr_1");
}
function Clear()													//on clicking into the comment text area the default text already in it will be cleared but if you have written something else in it it won't be cleared.
{
	if (document.getElementById("txtarea").value == "Write your comment here")
	{
		document.getElementById("txtarea").value="";
	}
}


