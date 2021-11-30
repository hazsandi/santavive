function animarSVGDraw() {
    var tween1 = KUTE.fromTo('#Pelo_1_',{draw:'90% 105%'}, {draw:'0% 105%'}, {duration: 1500, easing: "easingCubicIn", offset: 250}).start();
    var tween2 = KUTE.fromTo('#Corona_1_',{draw:'0% 10%'}, {draw:'0% 100%'}, {duration: 2500, easing: "easingCubicOut", offset: 250}).start();
    var tween3 = KUTE.fromTo('#Cabeza_1_',{draw:'90% 105%'}, {draw:'0% 105%'}, {duration: 1500, easing: "easingCubicIn", offset: 250}).start();
    var tween4 = KUTE.fromTo('#Rama1_1_',{draw:'0% 15%'}, {draw:'0% 100%'}).start();
    var tween5 = KUTE.fromTo('#Rama2_1_',{draw:'0% 10%'}, {draw:'0% 100%'}).start();
    var tween6 = KUTE.fromTo('#Rama3_1_',{draw:'0% 10%'}, {draw:'0% 100%'}).start();
    var tween7 = KUTE.fromTo('#Cuello',{draw:'0% 5%'}, {draw:'0% 100%'}).start();
    var tween9 = KUTE.fromTo('#Santa_x5F_barbara',{draw:'0% 3%'}, {draw:'90% 100%'},{duration: 3500, easing: "easingExponentialInOut", offset: 250}).start();
    }