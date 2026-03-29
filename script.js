const copyIpButton = document.getElementById("copyIpButton");
const serverIp = document.getElementById("serverIp");

if (copyIpButton && serverIp) {
  copyIpButton.addEventListener("click", async () => {
    const originalLabel = copyIpButton.textContent;

    try {
      await navigator.clipboard.writeText(serverIp.textContent.trim());
      copyIpButton.textContent = "Copied";
    } catch (error) {
      copyIpButton.textContent = "Copy Failed";
    }

    window.setTimeout(() => {
      copyIpButton.textContent = originalLabel;
    }, 1800);
  });
}
