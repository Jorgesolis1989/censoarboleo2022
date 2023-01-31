// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable();
});
$('#example').dataTable( {
  paging: false,
  searching: false
} );