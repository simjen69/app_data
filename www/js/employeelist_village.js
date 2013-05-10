var serviceURL = "http://www.rioestates.com/app_data/services/";

function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
  }
  
var employees;

$('#employeeListPagevillage').bind('pageinit', function(event) {
	getEmployeeListvillage();
});

function getEmployeeListvillage() {
	$.getJSON(serviceURL + 'getemployees_new.php?Category=Town%20House', function(data) {
		$('#employeeListvillage li').remove();
		employees = data.items;
		$.each(employees, function(index, employee) {
			$('#employeeListvillage').append('<li><a href="employeedetails.html?ID=' + employee.ID + '">' +
					'<img src="http://www.rioestates.com/html/galleries/' + employee.RefNo + '/images/1.jpg"/>' +
					'<h4>' + employee.Category + ' in ' + employee.Area + '</h4>' +
					'<p>' + employee.RefNo + ' </p>' +
					'<span class="ui-li-count">' + commaSeparateNumber(employee.Price) + '&#128;</span></a></li>');
		});
		$('#employeeListvillage').listview('refresh');
	});
}


