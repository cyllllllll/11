document.addEventListener("DOMContentLoaded", () => {
  // 1. 主题切换代码
  const htmlElement = document.documentElement;
  let isWarm = false;
  setInterval(() => {
    isWarm = !isWarm;
    htmlElement.classList.toggle("warm-theme", isWarm);
    localStorage.setItem("theme", isWarm ? "warm" : "cool");
  }, 10000);

  // 2. 移动菜单切换代码

 const toggleButton = document.querySelector(".mobile-menu-toggle");
 const mobileMenu = document.querySelector(".mobile-menu-items");

  if (toggleButton && mobileMenu) {
    toggleButton.addEventListener("click", () => {
      
      mobileMenu.classList.toggle("active");
      console.log("button triggered");
    });
  }
  })

  




document.addEventListener('DOMContentLoaded', function() {
    const follower = document.getElementById('follower');
    let mouseX = 0;
    let mouseY = 0;
    let imgX = 0;
    let imgY = 0;
    
    // 鼠标移动事件监听
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // 动画循环
    function animate() {
        // 计算图片与鼠标的距离差
        let distX = mouseX - imgX;
        let distY = mouseY - imgY;
        
        // 添加缓动效果
        imgX += distX / 10;
        imgY += distY / 10;
        
        // 更新图片位置
        follower.style.transform = `translate(${imgX}px, ${imgY}px)`;
        
        requestAnimationFrame(animate);
    }
    
    // 启动动画
    animate();
});


