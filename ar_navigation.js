var coordinates = {}
$(document).ready(function(){
    get_coordinations()
})


function get_coordinates(){
    var searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has('source')&& searchParams.has('destination')){
        var source = searchParams.get('source')
        var destination = searchParams.get('destination')
        coordinates.source_lat = source.split(';')[0]
        coordinates.source_lon = source.split(';')[1]
        coordinates.destination_lat = destination.split(';')[0]
        coordinates.destination_lon = destination.split(';')[1]
    }
    else{
        alert("coordinates are not selected")
        window.history.back
    }
}