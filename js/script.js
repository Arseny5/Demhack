$(window).ready(function () {
    $('#app').css({
        borderRadius: "35px",
        margin: "20px 0px 20px 0px",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        paddingLeft: "0",
        paddingRight: "0",
        width: "220px",
        height: "60px"
    }).css('background-color', 'red').text('salam alekum').css('background-image', 'url(../)');
    // $.get('https://google.com', function(data) {
    //     console.log(data);
    // });
    $('#app').click(function(){
        location.href = "https://google.com";
    });
});