

// Add to index.js or the first page that loads with your app.
// For Intel XDK and please add this to your app.js.
$(document).ready(function() {
    
//    if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
//        document.addEventListener("deviceready", onDeviceReady, false);
//                alert(" Device ready");
//
//    } else {
//        onDeviceReady();
//                alert(" Device ready not");
//
//    };
    
document.addEventListener("deviceready", onDeviceReady, false);
//        alert(" Device ready");
});
  // Enable to debug issues.
  // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
  function onDeviceReady(){

    var notificationOpenedCallback = function(jsonData) {
//        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    };
//    alert(" Init ready");
//      window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
      window.plugins.OneSignal
        .startInit("8388c0ef-1492-4892-9296-17091773564c")
        .handleNotificationOpened(notificationOpenedCallback)
        .endInit();
      
        OneSignal.push(function() {
                window.plugins.OneSignal.sendTag("entreprise", "amcreatives");
            });
};

//         var OneSignal = window.OneSignal || []; 
//         OneSignal.push(function(){
//               OneSignal.init({
//               appId:"8388c0ef-1492-4892-9296-17091773564c",
//               });
//         });
                //To create tags for user's segmentation
            OneSignal.push(function() {
             alert("Start 1 ..");
              /* These examples are all valid */
//              OneSignal.sendTag("entreprise", "amcreatives").then(function(tagsSent){
//                  alert("Start 2..");
//                   alert("entreprise :" + JSON.stringify(tagsSent)) ;      
//              });
//                var retourner = OneSignal.sendTag("entreprise", "amcreatives").then(function(tagsSent){
                window.plugins.OneSignal.sendTag("entreprise", "amcreatives");
                
//                    .then(function(tagsSent){
////                var retourner = OneSignal.sendTag("entreprise", "amcreatives").then(function(tagsSent){
//                    alert("Start 2..");
//                   alert("entreprise :" + JSON.stringify(tagsSent)) ;      
//              }).catch(function(message){
//                    alert("message :" + message);
//                    console.log(message);
//                }); 
            });

//            OneSignal.push(function() {
//                window.plugins.OneSignal.sendTag("entreprise", "amcreatives");
//            });