

AWS.config.loadFromPath('../../.env')

var s3 = new AWS.S3();

var bucketParams = {Bucket: 'profile-pics'}
s3.createBucket(bucketParams)

var s3Bucket = new AWS.S3({ params: {Bucket: 'profile-pics'}})

var data = {Key: imageName, Body: imageFile};
s3Bucket.putObject(data, function(err, data){
  if (err) 
    { console.log('Error uploading data: ', data); 
    } else {
      console.log('succesfully uploaded the image!';
    }
});

var urlParams = {Bucket: 'profile-pics', Key: 'imageName'};
s3Bucket.getSignedUrl('getObject', urlParams, function(err, url){
  console.log('the url of the image is', url);
})