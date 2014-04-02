/* ----------- filter-age -------- */
$(document).ready(function(){

        $("#age-slider").slider({
            min: 10,
            max: 100,
            values: [10,100],
            range: true,
            stop: function(event, ui) {
                jQuery("input#minCost").val(jQuery("#age-slider").slider("values",0));
                jQuery("input#maxCost").val(jQuery("#age-slider").slider("values",1));
            },
            slide: function(event, ui){
                jQuery("input#minCost").val(jQuery("#age-slider").slider("values",0));
                jQuery("input#maxCost").val(jQuery("#age-slider").slider("values",1));
            }
        });

/* -------- создание блока для получения данных(возраста) ------------*/
        $("input#minCost").change(function(){
            var value1=jQuery("input#minCost").val();
            var value2=jQuery("input#maxCost").val();

            if(parseInt(value1) > parseInt(value2)){
                value1 = value2;
                jQuery("input#minCost").val(value1);
            }
            jQuery("#slider").slider("values",0,value1);
        });


        $("input#maxCost").change(function(){
            var value1=jQuery("input#minCost").val();
            var value2=jQuery("input#maxCost").val();

            if (value2 > 100) { value2 = 100; jQuery("input#maxCost").val(100)}

            if(parseInt(value1) > parseInt(value2)){
                value2 = value1;
                jQuery("input#maxCost").val(value2);
            }
            jQuery("#slider").slider("values",1,value2);
        });



/* ----------------- filter-age -------------- */
        $("#ladies-filter").slider({
            min: 10,
            max: 100,
            values: [10,100],
            range: true,
            stop: function(event, ui) {
                jQuery("input#minCost-ladies").val(jQuery("#ladies-filter").slider("values",0));
                jQuery("input#maxCost-ladies").val(jQuery("#ladies-filter").slider("values",1));
            },
            slide: function(event, ui){
                jQuery("input#minCost-ladies").val(jQuery("#ladies-filter").slider("values",0));
                jQuery("input#maxCost-ladies").val(jQuery("#ladies-filter").slider("values",1));
            }
        });


        $("input#minCost-ladies").change(function(){
            var value1=jQuery("input#minCost-ladies").val();
            var value2=jQuery("input#maxCost-ladies").val();

            if(parseInt(value1) > parseInt(value2)){
                value1 = value2;
                jQuery("input#minCost-ladies").val(value1);
            }
            jQuery("#slider").slider("values",0,value1);
        });


        $("input#maxCost-ladies").change(function(){
            var value1=jQuery("input#minCost-ladies").val();
            var value2=jQuery("input#maxCost-ladies").val();

            if (value2 > 100) { value2 = 100; jQuery("input#maxCost-ladies").val(100)}

            if(parseInt(value1) > parseInt(value2)){
                value2 = value1;
                jQuery("input#maxCost-ladies").val(value2);
            }
            jQuery("#slider").slider("values",1,value2);
        });


});



