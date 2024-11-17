// simple implementation of worker worker_threads

const { Worker, workerData, isMainThread } = require("worker_threads");

// threading
let workerThreads = {};
if (isMainThread) {
  console.log(`Main Threads, PID: ${process.pid}`);

  //   1st worker thread
  const workerThread1 = new Worker(__filename, {
    workerData: [5, 6, 6, 3, 52, 524, 55, 0, 1, 4],
  });

  workerThreads.workerThread1 = workerThread1;

  //   2nd worker thread
  const workerThread2 = new Worker(__filename, {
    workerData: [9, 4, 2, 6, 2, 6, 35, 6, 35, 36, 46],
  });

  workerThreads.workerThread2 = workerThread2;
} else {
  console.log(`Worker Threads, PID: ${process.pid}`);
  console.log(
    `Woker threads handling multiple tasks in a parallel way: [${workerData}] sorted is [${workerData.sort()}]`
  );
}
