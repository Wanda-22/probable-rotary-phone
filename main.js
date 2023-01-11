function start() {
    y=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/fAxx3mLm2/model.json',modelloaded);
}

function modelloaded() {
    console.log("Model is loaded.");
    y.classify(Answer);
}

function Answer(error,result) {
    if (error) {
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById('ear').innerHTML="I can hear - " + result[0].label;
        document.getElementById('acc').innerHTML="Accuracy - " + Math.floor(result[0].confidence*100)+ "%";
        R=Math.floor(Math.random()*255)+1;
        B=Math.floor(Math.random()*255)+1;
        G=Math.floor(Math.random()*255)+1;
        document.getElementById('ear').style.color="rgb("+R+","+B+","+G+")";
        document.getElementById('acc').style.color="rgb("+R+","+B+","+G+")";
        a=document.getElementById('a1');
        b=document.getElementById('a2');
        c=document.getElementById('a3');
        d=document.getElementById('a4');
        if (result[0].label=="Clap") {
            a.src="aliens-01.gif";
            b.src="aliens-02.png";
            c.src="aliens-03.png";
            d.src="aliens-04.png";
        }
        else  if (result[0].label=="Bang") {
            a.src="aliens-01.png";
            b.src="aliens-02.gif";
            c.src="aliens-03.png";
            d.src="aliens-04.png";
        }
        else  if (result[0].label=="Song") {
            a.src="aliens-01.png";
            b.src="aliens-02.png";
            c.src="aliens-03.gif";
            d.src="aliens-04.png";
        }
        else {
            a.src="aliens-01.png";
            b.src="aliens-02.png";
            c.src="aliens-03.png";
            d.src="aliens-04.gif";
        }
    }
}
    