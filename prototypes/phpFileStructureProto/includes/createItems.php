<?php
//check if INTERNAL is true.  If it isn't, or it isn't set, exit the code (die())
if(INTERNAL !== true) {
    die('Error: cannot directly access.');
}

    //$entityBody = file_get_contents('php://input');
    $entityBody = file_get_contents('includes/dummy.json');
    $dataMaster= json_decode($entityBody,true);
    $user_id = $dataMaster['userId'];
    if(!empty($dataMaster['itinId'])){
        $itin_id = $dataMaster['itinId'];
    } else {
        //generate a new itinerary id
    }
    //generate hash of data in json format
    $data = $dataMaster['data'];

    $itemStore = [];
    $itemStore['id_hash'] = md5($entityBody);

    //pull out necessary data out of data array
////['image']['attribution']['attribution_link'];
    $sections = $data['content']['sections'];


    $itemStore['name'] = $data['name'];

    $tags = $data['tags'];
    $city_id = $tags[0]['tag']['location_id'];
    $labels = [];
    $snippets = [];
    foreach($tags as $key=>$single_tag_data){
        if(!empty($single_tag_data['tag']['label'])) {
            $labels[] = $single_tag_data['tag']['label'];
        }
        if(!empty($single_tag_data['tag']['snippet'])){
            $snippets[] = $single_tag_data['tag']['snippet'];
        }
    }
    $itemStore['labels']=$labels;
    $itemStore['snippets'] = $snippets;
    $intro = $data['intro'];
    $itemStore['intro']=$intro;
    $itemStore['latitude'] = $data['coordinates']['latitude'];
    $itemStore['longitude'] = $data['coordinates']['longitude'];
    $facebook_id = $data['facebook_id'];
    $itemStore['facebook_id'] = $facebook_id;
    $images = [];
    foreach($data['images'] as $imageSets){
        foreach($imageSets['sizes'] as $imageData){
            $images[] = $imageData['url'];
        }
    }
    $itemStore['images']=$images;
    $itemStore['place_id']= $data['id'];
    $itemStore['details']= $entityBody;
//    print("<pre>".print_r($itemStore,true)."</pre>");

    //checks database for all existing activities and sends that data
$name = $itemStore['name'];
$place_id = $itemStore['place_id'];
$longitude = $itemStore['longitude'];
$latitude = $itemStore['latitude'];
$images = ''.json_encode($itemStore['images']);
$snippet = ''.json_encode($itemStore['snippets']);
//$hashtags = [];
//$tag_label = ;

$query = "INSERT INTO `activities` SET `name` = $name, `place_id` = $place_id, `city_id` = $city_id, `longitude` = $longitude, `latitude` = $latitude, `images` = '$images', `snippet` = $snippet";

//make a query to read all activities
$result = mysqli_query($conn, $query);
print($query);

//check if $result is empty
if(empty($result)) {
    //if yes, report the error in the output
    $output['errors'][] = 'result variable is empty';
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