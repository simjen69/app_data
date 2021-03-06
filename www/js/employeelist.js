var serviceURL = "http://www.rioestates.com/app_data/services/";

function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
  }
  
var employees;

$('#employeeListPage').bind('pageinit', function(event) {
	getEmployeeList();
});

function getEmployeeList() {
	$.getJSON(serviceURL + 'getemployees_new.php?Category=Country%20House', function(data) {
		$('#employeeList li').remove();
		employees = data.items;
		$.each(employees, function(index, employee) {
			$('#employeeList').append('<li><a href="employeedetails.html?ID=' + employee.ID + '">' +
					'<img src="http://www.rioestates.com/html/galleries/' + employee.RefNo + '/images/1.jpg"/>' +
					'<h4>' + employee.Category + ' in ' + employee.Area + '</h4>' +
					'<p>' + employee.RefNo + ' </p>' +
					'<span class="ui-li-count">' + commaSeparateNumber(employee.Price) + '&#128;</span></a></li>');
		});
		$('#employeeList').listview('refresh');
	});
}


