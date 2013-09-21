var ctx;
var width = 320;
var height = 320;
var partx;
var party;
var partdx;
var partdy;
var PARTS = 100;
var count = 0;
var ramp = 1;
var interval_id;

var app = {

    circle: function(x,y,r){

    },

    drawStar: function() {
        var self = this;

        ctx.clearStyle = "#000000";
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = "#0000FF";
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = "black";
        for(var i = 0; i < ramp; ++i){

            ctx.beginPath();
            ctx.arc(partx[i], party[i], 2, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fill();

            partx[i] += partdx[i];
            party[i] += partdy[i];
            if(partx[i] > width || partx[i] < 0){
                partx[i] = width / 2;
                party[i] = height / 2;
            }
        }
        if(ramp < 500){
            ramp++;
        }
        //if(count > 600){
        //    clearInterval(interval_id);
        //}
    },

    initialize: function() {
        var self = this;

        count = 0;
        ramp = 1;
        ctx = document.getElementById("view").getContext("2d");

        partx = new Array(PARTS);
        party = new Array(PARTS);
        partdx = new Array(PARTS);
        partdy = new Array(PARTS);

        for(var i = 0; i < PARTS; ++i){
            partx[i] = width / 2;
            party[i] = height / 2;
            partdx[i] = Math.random() * 5 - 5 / 2;
            partdy[i] = Math.random() * 5 - 5 / 2;
        }

        interval_id = setInterval(self.drawStar, 10);
    },

    showAlert: function(message, title) {
        if(navigator.notification){
            navigator.notification.alert(message, null, title, 'OK');
        }
        else{
            alert(title ? (title + ": " + message) : message);
        }
    }
};

app.initialize();