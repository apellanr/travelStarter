<?php
function debug($message){
    if(!empty($_GET['debug'])) {
        print($message);
    }
}
//check if INTERNAL is true.  If it isn't, or it isn't set, exit the code (die())
if(INTERNAL !== true) {
    die('Error: cannot directly access.');
}

$query = "";

//make a query to read all activities
$result = mysqli_query($conn, $query);

//check if $result is empty
if(empty($result)) {
    //if yes, report the error in the output
    $output['errors'][] = 'error forming query';
    error_log(date('Y-m-d H:i:s'). ' travel starter mysql error on insert: '.mysqli_error($conn));
    //if no,     check if any results were passed in
}else {
    if(mysqli_affected_rows($conn) !== 0){
        //if yes,
        $output['success']= true;
        //set the success to true
        //do a while loop to fetch all the information, put it into an array
        while($row = mysqli_fetch_assoc($result)){
            $output['data'][] = $row;
        }
        //if no, report the error in the output
    }else{
        $output['errors'][]= 'No data.';
    }
}

?>