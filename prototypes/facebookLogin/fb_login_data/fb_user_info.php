<?php
//$json_file = file_get_contents('fb_user_stringify.json');
//$json_file = file_get_contents('php://input');
//$user_data = json_decode($json_file,true);
//print_r($user_data);
$userInfo = $_POST['response'];
//print_r ($userInfo);
require_once('mysql_connect.php');
//$query = "INSERT INTO `users`(`id`,`first_name`,`last_name`,`profile_picture`,`gallery_pictures`,`email`,`facebook_id`,`itinerary_id_list`) VALUES ('" . $id . "', " . $first_name . ", '" . $last_name . "' , '" . $profile_picture . "', '" . $gallery_pictures . "', '" . $email . "', '".$facebook_id."', '". $itinerary_id_list ."')";

$first_name= $userInfo['first_name'];
$last_name= $userInfo['last_name'];
$profile_picture= $userInfo['picture']['data']['url'];
//$gallery_pictures= $user_data['gallery_picture'];
$email= $userInfo['email'];
$facebook_id= $userInfo['id'];
//$itinerary_id_list= $user_data['itinerary_id_list'];

$insert_update_query = "INSERT INTO `users` SET `facebook_id` = '$facebook_id',`first_name` = '$first_name', `last_name` = '$last_name', `profile_picture` = '$profile_picture', `email` = '$email' ON DUPLICATE KEY UPDATE  `first_name` = '$first_name', `last_name` = '$last_name', `profile_picture` = '$profile_picture', `email` = '$email'";

$output = [
    'success'=>false
];
//$fb_id = $facebook_id;

$result = mysqli_query($conn,$insert_update_query);

if (mysqli_affected_rows($conn) > 1) {
//found, keep on that id and update if theres change
    $output['success'];
    $output['status']='updated';

} else if(mysqli_affected_rows($conn) === 1){

    $new_id = mysqli_insert_id($conn);
    $output['success'] = true;
    $output['new_id'] = $new_id;
} else {
    $error = mysqli_error($conn);
    if(empty($error)){
        $output['success']=true;
        $output['status']='updated, no change';
    } else {
        $output['error']=mysqli_error($conn);
    }
}

print(json_encode($output));

?>
