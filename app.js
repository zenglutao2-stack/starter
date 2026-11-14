// 一个最小可交互的示例：点按钮累加，页脚显示本地时间。
const ping = document.querySelector("#ping");
const out = document.querySelector("#out");
const clock = document.querySelector("#clock");

let count = 0;

ping?.addEventListener("click", () => {
  count += 1;
  out.textContent = `已经点了 ${count} 次`;
});

function tick() {
  if (!clock) return;
  clock.textContent = new Date().toLocaleTimeString("zh-CN", { hour12: false });
}

tick();
setInterval(tick, 1000);
