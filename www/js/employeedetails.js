$('#detailsPage').live('pageshow', function(event) {
	var ID = getUrlVars()["ID"];
	$.getJSON(serviceURL + 'getemployee.php?ID='+ID, displayEmployee);
});

function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
  }

function displayEmployee(data) {
	var employee = data.item;
	console.log(employee);
	$('#employeePic').attr('src', 'http://www.rioestates.com/html/galleries/' + employee.RefNo + '/images/1.jpg' );
		$('#employeePic2').attr('src', 'http://www.rioestates.com/html/galleries/' + employee.RefNo + '/images/02.jpg' );
		$('#employeePic3').attr('src', 'http://www.rioestates.com/html/galleries/' + employee.RefNo + '/images/03.jpg' );
			$('#employeePic4').attr('src', 'http://www.rioestates.com/html/galleries/' + employee.RefNo + '/images/04.jpg' );
				$('#employeePic5').attr('src', 'http://www.rioestates.com/html/galleries/' + employee.RefNo + '/images/05.jpg' );
					$('#employeePic6').attr('src', 'http://www.rioestates.com/html/galleries/' + employee.RefNo + '/images/06.jpg' );
						$('#employeePic7').attr('src', 'http://www.rioestates.com/html/galleries/' + employee.RefNo + '/images/07.jpg' );
							$('#employeePic8').attr('src', 'http://www.rioestates.com/html/galleries/' + employee.RefNo + '/images/08.jpg' );
								$('#employeePic9').attr('src', 'http://www.rioestates.com/html/galleries/' + employee.RefNo + '/images/09.jpg' );
									$('#employeePic10').attr('src', 'http://www.rioestates.com/html/galleries/' + employee.RefNo + '/images/10.jpg' );
									$('#employeePic11').attr('src', 'http://www.rioestates.com/html/galleries/' + employee.RefNo + '/images/11.jpg' );
									$('#employeePic12').attr('src', 'http://www.rioestates.com/html/galleries/' + employee.RefNo + '/images/12.jpg' );
									$('#employeePic13').attr('src', 'http://www.rioestates.com/html/galleries/' + employee.RefNo + '/images/13.jpg' );
									$('#employeePic14').attr('src', 'http://www.rioestates.com/html/galleries/' + employee.RefNo + '/images/14.jpg' );
									$('#employeePic15').attr('src', 'http://www.rioestates.com/html/galleries/' + employee.RefNo + '/images/15.jpg' );
									$('#employeePic16').attr('src', 'http://www.rioestates.com/html/galleries/' + employee.RefNo + '/images/16.jpg' );
									$('#employeePic17').attr('src', 'http://www.rioestates.com/html/galleries/' + employee.RefNo + '/images/17.jpg' );
									$('#employeePic18').attr('src', 'http://www.rioestates.com/html/galleries/' + employee.RefNo + '/images/18.jpg' );
									$('#employeePic19').attr('src', 'http://www.rioestates.com/html/galleries/' + employee.RefNo + '/images/19.jpg' );
									$('#employeePic20').attr('src', 'http://www.rioestates.com/html/galleries/' + employee.RefNo + '/images/20.jpg' );
									
	$('#fullName').text(employee.Category + ' in ' + employee.Area);
	$('#employeeTitle').text(employee.Bedrooms + ' Bedrooms, ' + employee.Bathrooms+ ' Bathrooms,');
	$('#city').text(employee.Text);
	$('#HouseSquareMeters').text('Built ' + employee.HouseSquareMeters + ' m2, Land '  + employee.LandSquareMeters + ' m2,');
	$('#city').text(employee.Text);

	$('#price').html(commaSeparateNumber(employee.Price +'&#128;'));
	

	 if (employee.pool=1) {
		$('#pool').text('Swimming pool');
	} 
	
 if (employee.Garage=1) {
		$('#garage').text('Garage');
	} 

	
	
	console.log(employee.Area);

	
    if (employee.Area) {
		$('#actionList').append('<li><a href="gallery.html?ID=' + employee.ID + '"><h3>View Image Gallery</h3>' +
				'<p>' + employee.RefNo + '</p></a></li>');
	}
	if (employee.Area) {
		$('#actionList').append('<li><a href="mailto:info@rioestates.com?subject=' + employee.RefNo + '"><h3>Email</h3>' +
				'<p>more info on ' + employee.RefNo + '</p></a></li>');
	}
	if (employee.RefNo) {
		$('#actionList').append('<li><a href="tel:+34952719502"><h3>Call Office</h3>' +
				'<p> Call +34 952 719 502</p></a></li>');
	}
	$('#actionList').listview('refresh');
	
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

