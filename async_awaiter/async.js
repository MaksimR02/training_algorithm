//https://leetcode.com/problems/sleep/

async function sleep(millis) {
    let promise = new Promise((resolve,reject)=>setTimeout(()=>resolve("finished"),millis));
    let result = await promise;
  return result;
}

let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); 
});