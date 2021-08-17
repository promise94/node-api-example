console.log("run os");
const os = require("os");

function formatMem(num, size = 3) {
  return (num / Math.pow(1024, size)).toFixed(2);
}

function memoryUsage() {
  const free = os.freemem();
  const total = os.totalmem();
  const usage = total - free;
  console.log(
    `剩余内存：${formatMem(free)}G`,
    `使用内存： ${formatMem(usage)}G`,
    `总内存： ${formatMem(total)}G`,
    `占用率： ${(100 - (usage / total) * 100).toFixed(2)}%`
  );
}

setInterval(() => {
  memoryUsage();
}, 2000);
