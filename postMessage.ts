//A打开B A就是B中的window.opener
function sendMessage(action: string) {
  window.opener
    ? window.opener.postMessage(
        {
          action,
        },
        location.origin
      )
    : console.warn("未找到开启此页面的父级页面");
}

function listenMessage(
  action: string,
  callback: () => void
): () => void {
  const listenMessage = (e: any) => {
    if (e.data.action === action && e.origin === location.origin)
      callback && callback();
  };
  window.addEventListener("message", listenMessage);
  return () => window.removeEventListener("message", listenMessage);
}
