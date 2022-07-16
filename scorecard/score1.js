export let batting = {
  GT: {
    n1: ["Aditya", 7, 5, 1, 0],
    n2: ["Vicky", 9, 11, 2, 0],
    n3: ["Milan", 29, 14, 5, 1],
    n4: ["Vishvraj", 7, 6, 0, 1],
    n5: ["Vaibhav", 0, 0, 0, 0],
    extras: 9,
  },
  CSK: {
    n1: ["Ritesh", 17, 5, 1, 2],
    n2: ["Harshit", 23, 15, 5, 0],
    n3: ["Rishikesh", 16, 13, 3, 0],
    n4: ["Gyanesh", 0, 0, 0, 0],
    n5: ["Arnav", 0, 0, 0, 0],
    extras: 9,
  },
};
export let bowling = {
  GT: {
    n1: ["Aditya", 3, 36, 0, 0],
    n2: ["Vicky", 2.3, 29, 0, 0],
  },
  CSK: {
    n1: ["Harshit", 1, 10, 0, 0],
    n2: ["Rishikesh", 1, 7, 1, 0],
    n3: ["Gyanesh", 2, 24, 0, 0],
    n4: ["Arnav", 2, 20, 1, 0],
  },
};
// Batting
// 1st team
// 1st Batsman
document.getElementById("b1t1").innerHTML = batting.GT.n1[0];
document.getElementById("b1rt1").innerHTML =
  batting.GT.n1[1] + "(" + batting.GT.n1[2] + ")";
document.getElementById("b14t1").innerHTML = batting.GT.n1[3];
document.getElementById("b16t1").innerHTML = batting.GT.n1[4];
document.getElementById("b1srt1").innerHTML = parseFloat(
  (batting.GT.n1[1] * 100) / batting.GT.n1[2]
).toFixed(2);
// 2nd Batsman
document.getElementById("b2t1").innerHTML = batting.GT.n2[0];
document.getElementById("b2rt1").innerHTML =
  batting.GT.n2[1] + "(" + batting.GT.n2[2] + ")";
document.getElementById("b24t1").innerHTML = batting.GT.n2[3];
document.getElementById("b26t1").innerHTML = batting.GT.n2[4];
document.getElementById("b2srt1").innerHTML = parseFloat(
  (batting.GT.n2[1] * 100) / batting.GT.n2[2]
).toFixed(2);
// 3rd Batsman
document.getElementById("b3t1").innerHTML = batting.GT.n3[0];
document.getElementById("b3rt1").innerHTML =
  batting.GT.n3[1] + "(" + batting.GT.n3[2] + ")";
document.getElementById("b34t1").innerHTML = batting.GT.n3[3];
document.getElementById("b36t1").innerHTML = batting.GT.n3[4];
document.getElementById("b3srt1").innerHTML = parseFloat(
  (batting.GT.n3[1] * 100) / batting.GT.n3[2]
).toFixed(2);
// 4th Batsman
document.getElementById("b4t1").innerHTML = batting.GT.n4[0];
document.getElementById("b4rt1").innerHTML =
  batting.GT.n4[1] + "(" + batting.GT.n4[2] + ")";
document.getElementById("b44t1").innerHTML = batting.GT.n4[3];
document.getElementById("b46t1").innerHTML = batting.GT.n4[4];
document.getElementById("b4srt1").innerHTML = parseFloat(
  (batting.GT.n4[1] * 100) / batting.GT.n4[2]
).toFixed(2);
// 5th Batsman
// document.getElementById("b5t1").innerHTML = batting.GT.n5[0];
// document.getElementById("b5rt1").innerHTML = batting.GT.n5[1] + "(" + batting.GT.n5[2] + ")";
// document.getElementById("b54t1").innerHTML = batting.GT.n5[3];
// document.getElementById("b56t1").innerHTML = batting.GT.n5[4];
// document.getElementById("b5srt1").innerHTML = parseFloat((batting.GT.n5[1] * 100) / batting.GT.n5[2]).toFixed(2);
// 6th Batsman
// document.getElementById("b6t1").innerHTML = batting.GT.n6[0];
// document.getElementById("b6rt1").innerHTML = batting.GT.n6[1] + "(" + batting.GT.n6[2] + ")";
// document.getElementById("b64t1").innerHTML = batting.GT.n6[3];
// document.getElementById("b66t1").innerHTML = batting.GT.n6[4];
// document.getElementById("b6srt1").innerHTML = parseFloat((batting.GT.n6[1] * 100) / batting.GT.n6[2]).toFixed(2);

document.getElementById("ert1").innerHTML = batting.GT.extras;
document.getElementById("trt1").innerHTML =
  batting.GT.extras +
  batting.GT.n1[1] +
  batting.GT.n2[1] +
  batting.GT.n3[1] +
  batting.GT.n4[1];
let wt1 =
  bowling.CSK.n1[3] + bowling.CSK.n2[3] + bowling.CSK.n3[3] + bowling.CSK.n4[3];
let ot1 =
  bowling.CSK.n1[1] + bowling.CSK.n2[1] + bowling.CSK.n3[1] + bowling.CSK.n4[1];
document.getElementById("bot1").innerHTML = wt1 + " wkt(s)," + ot1 + " ov";
// Second team
// 1st Batsman
document.getElementById("b1t2").innerHTML = batting.CSK.n1[0];
document.getElementById("b1rt2").innerHTML =
  batting.CSK.n1[1] + "(" + batting.CSK.n1[2] + ")";
document.getElementById("b14t2").innerHTML = batting.CSK.n1[3];
document.getElementById("b16t2").innerHTML = batting.CSK.n1[4];
document.getElementById("b1srt2").innerHTML = parseFloat(
  (batting.CSK.n1[1] * 100) / batting.CSK.n1[2]
).toFixed(2);
// 2nd Batsman
document.getElementById("b2t2").innerHTML = batting.CSK.n2[0];
document.getElementById("b2rt2").innerHTML =
  batting.CSK.n2[1] + "(" + batting.CSK.n2[2] + ")";
document.getElementById("b24t2").innerHTML = batting.CSK.n2[3];
document.getElementById("b26t2").innerHTML = batting.CSK.n2[4];
document.getElementById("b2srt2").innerHTML = parseFloat(
  (batting.CSK.n2[1] * 100) / batting.CSK.n2[2]
).toFixed(2);
// 3rd Batsman
document.getElementById("b3t2").innerHTML = batting.CSK.n3[0];
document.getElementById("b3rt2").innerHTML =
  batting.CSK.n3[1] + "(" + batting.CSK.n3[2] + ")";
document.getElementById("b34t2").innerHTML = batting.CSK.n3[3];
document.getElementById("b36t2").innerHTML = batting.CSK.n3[4];
document.getElementById("b3srt2").innerHTML = parseFloat(
  (batting.CSK.n3[1] * 100) / batting.CSK.n3[2]
).toFixed(2);
// 4th Batsman
// document.getElementById("b4t1").innerHTML = batting.GT.n4[0];
// document.getElementById("b4rt1").innerHTML =
// batting.GT.n4[1] + "(" + batting.GT.n4[2] + ")";
// document.getElementById("b44t1").innerHTML = batting.GT.n4[3];
// document.getElementById("b46t1").innerHTML = batting.GT.n4[4];
// document.getElementById("b4srt1").innerHTML = parseFloat(
// (batting.GT.n4[1] * 100) / batting.GT.n4[2]
// ).toFixed(2);
// 5th Batsman
// document.getElementById("b5t1").innerHTML = batting.GT.n5[0];
// document.getElementById("b5rt1").innerHTML = batting.GT.n5[1] + "(" + batting.GT.n5[2] + ")";
// document.getElementById("b54t1").innerHTML = batting.GT.n5[3];
// document.getElementById("b56t1").innerHTML = batting.GT.n5[4];
// document.getElementById("b5srt1").innerHTML = parseFloat((batting.GT.n5[1] * 100) / batting.GT.n5[2]).toFixed(2);
// 6th Batsman
// document.getElementById("b6t1").innerHTML = batting.GT.n6[0];
// document.getElementById("b6rt1").innerHTML = batting.GT.n6[1] + "(" + batting.GT.n6[2] + ")";
// document.getElementById("b64t1").innerHTML = batting.GT.n6[3];
// document.getElementById("b66t1").innerHTML = batting.GT.n6[4];
// document.getElementById("b6srt1").innerHTML = parseFloat((batting.GT.n6[1] * 100) / batting.GT.n6[2]).toFixed(2);

document.getElementById("ert2").innerHTML = batting.CSK.extras;
document.getElementById("trt2").innerHTML =
  batting.CSK.extras +
  batting.CSK.n1[1] +
  batting.CSK.n2[1] +
  batting.CSK.n3[1] +
  batting.CSK.n4[1];
let wt2 =
  bowling.CSK.n1[3] + bowling.CSK.n2[3] + bowling.CSK.n3[3] + bowling.CSK.n4[3];
let ot2 =
  bowling.CSK.n1[1] + bowling.CSK.n2[1] + bowling.CSK.n3[1] + bowling.CSK.n4[1];
document.getElementById("bot1").innerHTML = wt1 + " wkt(s)," + ot1 + " ov";

// Bowling
// 1st team
// 1st bowler
document.getElementById("n1t2").innerHTML = bowling.CSK.n1[0];
document.getElementById("o1t2").innerHTML = bowling.CSK.n1[1];
document.getElementById("r1t2").innerHTML = bowling.CSK.n1[2];
document.getElementById("m1t2").innerHTML = bowling.CSK.n1[3];
document.getElementById("w1t2").innerHTML = bowling.CSK.n1[4];
document.getElementById("e1t2").innerHTML = parseFloat(
  bowling.CSK.n1[2] / bowling.CSK.n1[1]
).toFixed(2);
// 2nd bowler
document.getElementById("n2t2").innerHTML = bowling.CSK.n2[0];
document.getElementById("o2t2").innerHTML = bowling.CSK.n2[1];
document.getElementById("r2t2").innerHTML = bowling.CSK.n2[2];
document.getElementById("m2t2").innerHTML = bowling.CSK.n2[3];
document.getElementById("w2t2").innerHTML = bowling.CSK.n2[4];
document.getElementById("e2t2").innerHTML = parseFloat(
  bowling.CSK.n2[2] / bowling.CSK.n2[1]
).toFixed(2);
// 3rd bowler
document.getElementById("n3t2").innerHTML = bowling.CSK.n3[0];
document.getElementById("o3t2").innerHTML = bowling.CSK.n3[1];
document.getElementById("r3t2").innerHTML = bowling.CSK.n3[2];
document.getElementById("m3t2").innerHTML = bowling.CSK.n3[3];
document.getElementById("w3t2").innerHTML = bowling.CSK.n3[4];
document.getElementById("e3t2").innerHTML = parseFloat(
  bowling.CSK.n3[2] / bowling.CSK.n3[1]
).toFixed(2);
// 4th bowler
document.getElementById("n4t2").innerHTML = bowling.CSK.n4[0];
document.getElementById("o4t2").innerHTML = bowling.CSK.n4[1];
document.getElementById("r4t2").innerHTML = bowling.CSK.n4[2];
document.getElementById("m4t2").innerHTML = bowling.CSK.n4[3];
document.getElementById("w4t2").innerHTML = bowling.CSK.n4[4];
document.getElementById("e4t2").innerHTML = parseFloat(
  bowling.CSK.n4[2] / bowling.CSK.n4[1]
).toFixed(2);
// 5th bowler
// document.getElementById("n5t2").innerHTML = bowling.CSK.n5[0];
// document.getElementById("o5t2").innerHTML = bowling.CSK.n5[1];
// document.getElementById("r5t2").innerHTML = bowling.CSK.n5[2];
// document.getElementById("m5t2").innerHTML = bowling.CSK.n5[3];
// document.getElementById("w5t2").innerHTML = bowling.CSK.n5[4];
// document.getElementById("e5t2").innerHTML = parseFloat(
// bowling.CSK.n5[2] / bowling.CSK.n5[1]
// ).toFixed(2);
// 2nd team
// 1st bowler
document.getElementById("n1t1").innerHTML = bowling.GT.n1[0];
document.getElementById("o1t1").innerHTML = bowling.GT.n1[1];
document.getElementById("r1t1").innerHTML = bowling.GT.n1[2];
document.getElementById("m1t1").innerHTML = bowling.GT.n1[3];
document.getElementById("w1t1").innerHTML = bowling.GT.n1[4];
document.getElementById("e1t1").innerHTML = parseFloat(
  bowling.GT.n1[2] / bowling.GT.n1[1]
).toFixed(2);
// 2nd bowler
document.getElementById("n2t1").innerHTML = bowling.GT.n2[0];
document.getElementById("o2t1").innerHTML = bowling.GT.n2[1];
document.getElementById("r2t1").innerHTML = bowling.GT.n2[2];
document.getElementById("m2t1").innerHTML = bowling.GT.n2[3];
document.getElementById("w2t1").innerHTML = bowling.GT.n2[4];
document.getElementById("e2t1").innerHTML = parseFloat(
  bowling.GT.n2[2] / bowling.GT.n2[1]
).toFixed(2);
// 3rd bowler
// document.getElementById("n3t2").innerHTML = bowling.CSK.n3[0];
// document.getElementById("o3t2").innerHTML = bowling.CSK.n3[1];
// document.getElementById("r3t2").innerHTML = bowling.CSK.n3[2];
// document.getElementById("m3t2").innerHTML = bowling.CSK.n3[3];
// document.getElementById("w3t2").innerHTML = bowling.CSK.n3[4];
// document.getElementById("e3t2").innerHTML = parseFloat(
// bowling.CSK.n3[2] / bowling.CSK.n3[1]
// ).toFixed(2);
// 4th bowler
// document.getElementById("n4t2").innerHTML = bowling.CSK.n4[0];
// document.getElementById("o4t2").innerHTML = bowling.CSK.n4[1];
// document.getElementById("r4t2").innerHTML = bowling.CSK.n4[2];
// document.getElementById("m4t2").innerHTML = bowling.CSK.n4[3];
// document.getElementById("w4t2").innerHTML = bowling.CSK.n4[4];
// document.getElementById("e4t2").innerHTML = parseFloat(
// bowling.CSK.n4[2] / bowling.CSK.n4[1]
// ).toFixed(2);
// 5th bowler
// document.getElementById("n5t2").innerHTML = bowling.CSK.n5[0];
// document.getElementById("o5t2").innerHTML = bowling.CSK.n5[1];
// document.getElementById("r5t2").innerHTML = bowling.CSK.n5[2];
// document.getElementById("m5t2").innerHTML = bowling.CSK.n5[3];
// document.getElementById("w5t2").innerHTML = bowling.CSK.n5[4];
// document.getElementById("e5t2").innerHTML = parseFloat(
// bowling.CSK.n5[2] / bowling.CSK.n5[1]
// ).toFixed(2);
