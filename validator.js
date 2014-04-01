    var res, sts;

var validateAddress = function () {
    var geocoder = new google.maps.Geocoder();
     var myAddressQuery = document.getElementById("inpAddress").value;
    geocoder.geocode({
        address: myAddressQuery,
        region: 'no'
    }, function (results, status) {
        // result contains an array of hits.
        res = results;
        sts = status;
    });


    document.getElementById("#vldsts").appendChild(document.createTextNode("OK"));
    for (var i= 0;i < res.length;i++)
    {

    }



}
