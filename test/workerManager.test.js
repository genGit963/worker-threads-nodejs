const WorkerManager = require("../src/workerManager");

describe("WorkerManager", () => {
  let manager;

  beforeEach(() => {
    manager = new WorkerManager();
  });

  test("calculates primes correctly", async () => {
    const result = await manager.runTask("primeWorker", { limit: 10 });
    expect(result).toEqual([2, 3, 5, 7]);
  });

  test("handles file processing correctly", async () => {
    const filePath = __dirname + "/test.txt";
    const fs = require("fs");
    fs.writeFileSync(filePath, "hello world hello");

    const result = await manager.runTask("fileWorker", { filePath });
    expect(result).toEqual({ hello: 2, world: 1 });

    fs.unlinkSync(filePath); // Clean up
  });
});
