<?php
//$json_file = file_get_contents('fb_user_stringify.json');
//$json_file = file_get_contents('php://input');
//$user_data = json_decode($json_file,true);
//print_r($user_data);
$userInfo = $_POST['response'];
print_r ($userInfo);
require_once('mysql_connect.php');

$first_name= $userInfo['first_name'];
$last_name= $userInfo['last_name'];
$profile_picture= $userInfo['picture']['data']['url'];
//$gallery_pictures= $user_data['gallery_picture'];
$email= $userInfo['email'];
$facebook_id= $userInfo['id'];
//$itinerary_id_list= $user_data['itinerary_id_list'];

$insert_query = "INSERT INTO `users`(`first_name`,`last_name`,`profile_picture`,`email`,`facebook_id`) VALUES ('$first_name','$last_name','$profile_picture','$email','$facebook_id')";
print("QUERY=$insert_query");

$fb_id = $facebook_id;
$check_mysql = "SELECT * FROM `users` WHERE facebook_id='$fb_id'";
$result = mysqli_query($conn,$check_mysql);

if (mysqli_num_rows($result) > 0) {
    //found, keep on that id
    $check_mysql_id = "SELECT id FROM `users` WHERE facebook_id='$fb_id'";
    //might not need to check everything. check to see what profile picture send if there empty.
} else if ($first_name !== "" && $last_name !== "" && $email !== "" && $facebook_id !== "") {
    mysqli_query($conn, $insert_query);

    //make new id
    if (mysqli_affected_rows($conn) > 0) {
        $new_id = mysqli_insert_id($conn);
        $output['success'] = true;
        $output['new_id'] = $new_id;

        print_r(json_encode($output));
        $check_mysql_id = "SELECT id FROM `users` WHERE facebook_id='$fb_id'";
    } else {
        echo 'ERROR!';
    }
}
?>
