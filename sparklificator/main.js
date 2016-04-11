/* when clicking on a sparkline - do an action*/
var flag = 0; 
$(document).ready(function() {
        $('.sparkline').click(function() {
			if (flag<1){
				$('#right-side-element').show();
				flag++;
				console.log(flag);
			}
			else{
				$('#right-side-element').hide();
				flag--;
				console.log(flag);
			}
        });
    });