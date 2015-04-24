$(document).ready(function() {
	for (var i = 0; i < 256; i++)
	{
		if (i%16 === 0)
			$('#wrapper').append('<br>');
		
		$('#wrapper').append('<div></div>');
	}
});
