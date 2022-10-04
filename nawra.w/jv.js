$(document).ready(function(){
    $(".bar").click(function(){
        let id = $(this).prop('id');
        let split = id.split('_');
        let id_bar = split[1];

        $(".bar").removeClass('aktif');
        $("#bar_"+id_bar).addClass('aktif');

        $(".bar_home").slideUp();

        $("#fill_1").slideUp();
        $("#fill_2").slideUp();
        $("#fill_3").slideUp();
        $("#fill_4").slideUp();
        $("#fill_5").slideUp();
        $("#fill_"+id_bar).slideToggle();
    });
});