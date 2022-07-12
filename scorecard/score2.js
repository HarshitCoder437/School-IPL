let batting = {
  RCB: {
    n1: ["Harshit", 3, 15, 0, 0],
    n2: ["Aditya", 14, 17, 1, 1],
    n3: ["Yagna", 0, 1, 0, 0],
    n4: ["Ritesh", 4, 3, 1, 0],
    n5: ["Gyanesh", 0, 0, 0, 0],
    n6: ["Hitesh", 0, 0, 0, 0],
    extras: 9,
  },
  MI: {
    n1: ["Vishvraj", 16, 13, 0, 2],
    n2: ["Vicky", 1, 7, 0, 0],
    n3: ["Milan", 10, 5, 1, 1],
    n4: ["Rishikesh", 7, 4, 1, 0],
    n5: ["Nishant", 7, 5, 1, 0],
    n6: ["Arnav", 0, 0, 0, 0],
    extras: 9,
  },
};
let bowling = {
  RCB: {
    n1: ["Harshit", 2, 12, 0, 1],
    n2: ["Yagna", 1, 12, 0, 1],
    n3: ["Gyanesh", 1, 9, 0, 0],
    n4: ["Aditya", 1.5, 13, 0, 1],
  },
  MI: {
    n1: ["Vicky", 2, 14, 0, 0],
    n2: ["Milan", 1, 4, 0, 0],
    n3: ["Nishant", 1, 12, 0, 0],
    n4: ["Rishikesh", 1, 4, 0, 1],
    n5: ["Arnav", 1, 8, 0, 1],
  },
};
// Batting
// 1st team
// 1st Batsman
document.getElementById("b1t1").innerHTML = batting.RCB.n1[0];
document.getElementById("b1rt1").innerHTML =
  batting.RCB.n1[1] + "(" + batting.RCB.n1[2] + ")";
document.getElementById("b14t1").innerHTML = batting.RCB.n1[3];
document.getElementById("b16t1").innerHTML = batting.RCB.n1[4];
document.getElementById("b1srt1").innerHTML = parseFloat(
  (batting.RCB.n1[1] * 100) / batting.RCB.n1[2]
).toFixed(2);
// 2nd Batsman
document.getElementById("b2t1").innerHTML = batting.RCB.n2[0];
document.getElementById("b2rt1").innerHTML =
  batting.RCB.n2[1] + "(" + batting.RCB.n2[2] + ")";
document.getElementById("b24t1").innerHTML = batting.RCB.n2[3];
document.getElementById("b26t1").innerHTML = batting.RCB.n2[4];
document.getElementById("b2srt1").innerHTML = parseFloat(
  (batting.RCB.n2[1] * 100) / batting.RCB.n2[2]
).toFixed(2);
// 3rd Batsman
document.getElementById("b3t1").innerHTML = batting.RCB.n3[0];
document.getElementById("b3rt1").innerHTML =
  batting.RCB.n3[1] + "(" + batting.RCB.n3[2] + ")";
document.getElementById("b34t1").innerHTML = batting.RCB.n3[3];
document.getElementById("b36t1").innerHTML = batting.RCB.n3[4];
document.getElementById("b3srt1").innerHTML = parseFloat(
  (batting.RCB.n3[1] * 100) / batting.RCB.n3[2]
).toFixed(2);
// 4th Batsman
document.getElementById("b4t1").innerHTML = batting.RCB.n4[0];
document.getElementById("b4rt1").innerHTML =
  batting.RCB.n4[1] + "(" + batting.RCB.n4[2] + ")";
document.getElementById("b44t1").innerHTML = batting.RCB.n4[3];
document.getElementById("b46t1").innerHTML = batting.RCB.n4[4];
document.getElementById("b4srt1").innerHTML = parseFloat(
  (batting.RCB.n4[1] * 100) / batting.RCB.n4[2]
).toFixed(2);
// 5th Batsman
// document.getElementById("b5t1").innerHTML = batting.RCB.n5[0];
// document.getElementById("b5rt1").innerHTML = batting.RCB.n5[1] + "(" + batting.RCB.n5[2] + ")";
// document.getElementById("b54t1").innerHTML = batting.RCB.n5[3];
// document.getElementById("b56t1").innerHTML = batting.RCB.n5[4];
// document.getElementById("b5srt1").innerHTML = parseFloat((batting.RCB.n5[1] * 100) / batting.RCB.n5[2]).toFixed(2);
// 6th Batsman
// document.getElementById("b6t1").innerHTML = batting.RCB.n6[0];
// document.getElementById("b6rt1").innerHTML = batting.RCB.n6[1] + "(" + batting.RCB.n6[2] + ")";
// document.getElementById("b64t1").innerHTML = batting.RCB.n6[3];
// document.getElementById("b66t1").innerHTML = batting.RCB.n6[4];
// document.getElementById("b6srt1").innerHTML = parseFloat((batting.RCB.n6[1] * 100) / batting.RCB.n6[2]).toFixed(2);

document.getElementById("ert1").innerHTML = batting.RCB.extras;
document.getElementById("trt1").innerHTML =
  batting.RCB.extras +
  batting.RCB.n1[1] +
  batting.RCB.n2[1] +
  batting.RCB.n3[1] +
  batting.RCB.n4[1];
let wt1 =
  bowling.MI.n1[3] + bowling.MI.n2[3] + bowling.MI.n3[3] + bowling.MI.n4[3];
let ot1 =
  bowling.MI.n1[1] + bowling.MI.n2[1] + bowling.MI.n3[1] + bowling.MI.n4[1];
document.getElementById("bot1").innerHTML = wt1 + " wkt(s)," + ot1 + " ov";
// Second team
// 1st Batsman
document.getElementById("b1t2").innerHTML = batting.MI.n1[0];
document.getElementById("b1rt2").innerHTML =
  batting.MI.n1[1] + "(" + batting.MI.n1[2] + ")";
document.getElementById("b14t2").innerHTML = batting.MI.n1[3];
document.getElementById("b16t2").innerHTML = batting.MI.n1[4];
document.getElementById("b1srt2").innerHTML = parseFloat(
  (batting.MI.n1[1] * 100) / batting.MI.n1[2]
).toFixed(2);
// 2nd Batsman
document.getElementById("b2t2").innerHTML = batting.MI.n2[0];
document.getElementById("b2rt2").innerHTML =
  batting.MI.n2[1] + "(" + batting.MI.n2[2] + ")";
document.getElementById("b24t2").innerHTML = batting.MI.n2[3];
document.getElementById("b26t2").innerHTML = batting.MI.n2[4];
document.getElementById("b2srt2").innerHTML = parseFloat(
  (batting.MI.n2[1] * 100) / batting.MI.n2[2]
).toFixed(2);
// 3rd Batsman
document.getElementById("b3t2").innerHTML = batting.MI.n3[0];
document.getElementById("b3rt2").innerHTML =
  batting.MI.n3[1] + "(" + batting.MI.n3[2] + ")";
document.getElementById("b34t2").innerHTML = batting.MI.n3[3];
document.getElementById("b36t2").innerHTML = batting.MI.n3[4];
document.getElementById("b3srt2").innerHTML = parseFloat(
  (batting.MI.n3[1] * 100) / batting.MI.n3[2]
).toFixed(2);
// 4th Batsman
document.getElementById("b4t2").innerHTML = batting.MI.n4[0];
document.getElementById("b4rt2").innerHTML =
  batting.MI.n4[1] + "(" + batting.MI.n4[2] + ")";
document.getElementById("b44t2").innerHTML = batting.MI.n4[3];
document.getElementById("b46t2").innerHTML = batting.MI.n4[4];
document.getElementById("b4srt2").innerHTML = parseFloat(
  (batting.MI.n4[1] * 100) / batting.MI.n4[2]
).toFixed(2);
// 5th Batsman
document.getElementById("b5t2").innerHTML = batting.MI.n5[0];
document.getElementById("b5rt2").innerHTML =
  batting.MI.n5[1] + "(" + batting.MI.n5[2] + ")";
document.getElementById("b54t2").innerHTML = batting.MI.n5[3];
document.getElementById("b56t2").innerHTML = batting.MI.n5[4];
document.getElementById("b5srt2").innerHTML = parseFloat(
  (batting.MI.n5[1] * 100) / batting.MI.n5[2]
).toFixed(2);
// 6th Batsman
// document.getElementById("b6t1").innerHTML = batting.MI.n6[0];
// document.getElementById("b6rt1").innerHTML = batting.MI.n6[1] + "(" + batting.MI.n6[2] + ")";
// document.getElementById("b64t1").innerHTML = batting.MI.n6[3];
// document.getElementById("b66t1").innerHTML = batting.MI.n6[4];
// document.getElementById("b6srt1").innerHTML = parseFloat((batting.MI.n6[1] * 100) / batting.MI.n6[2]).toFixed(2);

document.getElementById("ert2").innerHTML = batting.MI.extras;
document.getElementById("trt2").innerHTML =
  batting.MI.extras +
  batting.MI.n1[1] +
  batting.MI.n2[1] +
  batting.MI.n3[1] +
  batting.MI.n4[1];
let wt2 =
  bowling.MI.n1[3] + bowling.MI.n2[3] + bowling.MI.n3[3] + bowling.MI.n4[3];
let ot2 =
  bowling.MI.n1[1] + bowling.MI.n2[1] + bowling.MI.n3[1] + bowling.MI.n4[1];
document.getElementById("bot1").innerHTML = wt1 + " wkt(s)," + ot1 + " ov";

// Bowling
// 1st team
// 1st bowler
document.getElementById("n1t2").innerHTML = bowling.MI.n1[0];
document.getElementById("o1t2").innerHTML = bowling.MI.n1[1];
document.getElementById("r1t2").innerHTML = bowling.MI.n1[2];
document.getElementById("m1t2").innerHTML = bowling.MI.n1[3];
document.getElementById("w1t2").innerHTML = bowling.MI.n1[4];
document.getElementById("e1t2").innerHTML = parseFloat(
  bowling.MI.n1[2] / bowling.MI.n1[1]
).toFixed(2);
// 2nd bowler
document.getElementById("n2t2").innerHTML = bowling.MI.n2[0];
document.getElementById("o2t2").innerHTML = bowling.MI.n2[1];
document.getElementById("r2t2").innerHTML = bowling.MI.n2[2];
document.getElementById("m2t2").innerHTML = bowling.MI.n2[3];
document.getElementById("w2t2").innerHTML = bowling.MI.n2[4];
document.getElementById("e2t2").innerHTML = parseFloat(
  bowling.MI.n2[2] / bowling.MI.n2[1]
).toFixed(2);
// 3rd bowler
document.getElementById("n3t2").innerHTML = bowling.MI.n3[0];
document.getElementById("o3t2").innerHTML = bowling.MI.n3[1];
document.getElementById("r3t2").innerHTML = bowling.MI.n3[2];
document.getElementById("m3t2").innerHTML = bowling.MI.n3[3];
document.getElementById("w3t2").innerHTML = bowling.MI.n3[4];
document.getElementById("e3t2").innerHTML = parseFloat(
  bowling.MI.n3[2] / bowling.MI.n3[1]
).toFixed(2);
// 4th bowler
document.getElementById("n4t2").innerHTML = bowling.MI.n4[0];
document.getElementById("o4t2").innerHTML = bowling.MI.n4[1];
document.getElementById("r4t2").innerHTML = bowling.MI.n4[2];
document.getElementById("m4t2").innerHTML = bowling.MI.n4[3];
document.getElementById("w4t2").innerHTML = bowling.MI.n4[4];
document.getElementById("e4t2").innerHTML = parseFloat(
  bowling.MI.n4[2] / bowling.MI.n4[1]
).toFixed(2);
// 5th bowler
// document.getElementById("n5t2").innerHTML = bowling.MI.n5[0];
// document.getElementById("o5t2").innerHTML = bowling.MI.n5[1];
// document.getElementById("r5t2").innerHTML = bowling.MI.n5[2];
// document.getElementById("m5t2").innerHTML = bowling.MI.n5[3];
// document.getElementById("w5t2").innerHTML = bowling.MI.n5[4];
// document.getElementById("e5t2").innerHTML = parseFloat(
// bowling.MI.n5[2] / bowling.MI.n5[1]
// ).toFixed(2);
// 2nd team
// 1st bowler
document.getElementById("n1t1").innerHTML = bowling.RCB.n1[0];
document.getElementById("o1t1").innerHTML = bowling.RCB.n1[1];
document.getElementById("r1t1").innerHTML = bowling.RCB.n1[2];
document.getElementById("m1t1").innerHTML = bowling.RCB.n1[3];
document.getElementById("w1t1").innerHTML = bowling.RCB.n1[4];
document.getElementById("e1t1").innerHTML = parseFloat(
  bowling.RCB.n1[2] / bowling.RCB.n1[1]
).toFixed(2);
// 2nd bowler
document.getElementById("n2t1").innerHTML = bowling.RCB.n2[0];
document.getElementById("o2t1").innerHTML = bowling.RCB.n2[1];
document.getElementById("r2t1").innerHTML = bowling.RCB.n2[2];
document.getElementById("m2t1").innerHTML = bowling.RCB.n2[3];
document.getElementById("w2t1").innerHTML = bowling.RCB.n2[4];
document.getElementById("e2t1").innerHTML = parseFloat(
  bowling.RCB.n2[2] / bowling.RCB.n2[1]
).toFixed(2);
// 3rd bowler
document.getElementById("n3t1").innerHTML = bowling.RCB.n3[0];
document.getElementById("o3t1").innerHTML = bowling.RCB.n3[1];
document.getElementById("r3t1").innerHTML = bowling.RCB.n3[2];
document.getElementById("m3t1").innerHTML = bowling.RCB.n3[3];
document.getElementById("w3t1").innerHTML = bowling.RCB.n3[4];
document.getElementById("e3t1").innerHTML = parseFloat(
  bowling.RCB.n3[2] / bowling.RCB.n3[1]
).toFixed(2);
// 4th bowler
document.getElementById("n4t1").innerHTML = bowling.RCB.n4[0];
document.getElementById("o4t1").innerHTML = bowling.RCB.n4[1];
document.getElementById("r4t1").innerHTML = bowling.RCB.n4[2];
document.getElementById("m4t1").innerHTML = bowling.RCB.n4[3];
document.getElementById("w4t1").innerHTML = bowling.RCB.n4[4];
document.getElementById("e4t1").innerHTML = parseFloat(
  bowling.RCB.n4[2] / bowling.RCB.n4[1]
).toFixed(2);
// 5th bowler
// document.getElementById("n5t2").innerHTML = bowling.MI.n5[0];
// document.getElementById("o5t2").innerHTML = bowling.MI.n5[1];
// document.getElementById("r5t2").innerHTML = bowling.MI.n5[2];
// document.getElementById("m5t2").innerHTML = bowling.MI.n5[3];
// document.getElementById("w5t2").innerHTML = bowling.MI.n5[4];
// document.getElementById("e5t2").innerHTML = parseFloat(
// bowling.MI.n5[2] / bowling.MI.n5[1]
// ).toFixed(2);
