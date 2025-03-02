class WaterfallBackground {
    constructor() {
        // 获取具有类名 "waterfall-column" 的所有元素
        this.columns = document.querySelectorAll(".waterfall-column");
        // 图片数组，第一个图片 URL 是经过反转处理的
        this.images = [
            "https://img.gicymg/em/r/808/pic/revoc/l/e9/b/346784j_KVqi.jpg", 
            "https://img.cycimg.me/r/800/pic/cover/l/77/c3/454684_ZH5tU.jpg",
            "https://img.cycimg.me/r/800/pic/cover/l/1d/bd/471793_nQ5TT.jpg",
            "https://img.cycimg.me/r/800/pic/cover/l/b8/26/498934_KffF9.jpg",
            "https://img.cycimg.me/pic/cover/l/6f/ab/3302_rEfZV.jpg", 
            "https://img.cycimg.me/pic/cover/l/dd/fa/196773_Y19Yd.jpg",
             "https://img.cycimg.me/pic/cover/l/d0/61/220631_2nNMt.jpg",
             "gpj.QQm2z_049262/bd/aa/l/revoc/cip/em.gmicyc.gmi//:sptth".split("").reverse().join(""),
             "https://img.cycimg.me/pic/cover/l/c9/bb/369768_F05zh.jpg",
             "https://img.cycimg.me/pic/cover/l/13/c5/400602_ZI8Y9.jpg",
             "gpj.9s3D1_932624/fa/73/l/revoc/cip/008/r/em.gmicyc.gmi//:sptth".split("").reverse().join(""),
             "https://img.cycimg.me/pic/cover/l/ba/69/277954_s8qHA.jpg",
             "https://img.cycimg.me/r/800/pic/cover/l/ab/e5/460306_s7Y8n.jpg",
             "https://img.cycimg.me/r/800/pic/cover/l/ec/82/411428_xwKKP.jpg",
             "https://img.cycimg.me/pic/cover/l/20/15/160209_2UzU8.jpg",
             "gpj.o1feF_878381/2e/e1/l/revoc/cip/em.gmicyc.gmi//:sptth".split("").reverse().join(""),
             "gpj.A1ukJ_039344/28/67/l/revoc/cip/008/r/em.gmicyc.gmi//:sptth".split("").reverse().join(""),
             "gpj.6QZY5_036784/d5/8d/l/revoc/cip/008/r/em.gmicyc.gmi//:sptth".split("").reverse().join(""),
             "https://img.cycimg.me/pic/cover/l/5a/69/58015_P8711.jpg",
             "gpj.Y46jL_22219/9e/e7/l/revoc/cip/em.gmicyc.gmi//:sptth".split("").reverse().join(""),
             "https://img.cycimg.me/pic/cover/l/7e/e9/91222_Lj64Y.jpg",
             "https://img.cycimg.me/pic/cover/l/88/1c/7842_Q1rdM.jpg",
             "https://img.cycimg.me/r/800/pic/cover/l/75/c1/431767_Tbvyv.jpg"
        ];
    
        // 调用 init 方法
        this.init();
    }
    
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    init() {
        this.columns.forEach(column => {
            const shuffledImages = this.shuffleArray([...this.images]); // 打乱图片数组
            const wrapper = document.createElement("div"); // 创建第一个 wrapper
            const wrapper2 = document.createElement("div"); // 创建第二个 wrapper
    
            // 设置 wrapper 的类名
            wrapper.className = "column-wrapper"; // "repparw-nmuloc".split("").reverse().join("") 反转后是 "column-wrapper"
            wrapper2.className = "column-wrapper"; // 直接赋值
    
            // 遍历打乱后的图片数组
            shuffledImages.forEach(imgSrc => {
                const img = document.createElement("img"); // 创建图片元素
                img.src = imgSrc; // 设置图片路径
                img.loading = "lazy"; // 设置懒加载
                wrapper.appendChild(img); // 将图片添加到第一个 wrapper
    
                const img2 = img.cloneNode(true); // 克隆图片元素
                wrapper2.appendChild(img2); // 将克隆的图片添加到第二个 wrapper
            });
    
            // 将两个 wrapper 添加到列中
            column.appendChild(wrapper);
            column.appendChild(wrapper2);
    
            // 设置滚动动画
            this.setScrollAnimation(column);
        });
    
        // 添加事件监听器
        document.addEventListener("mousemove", this.handleParallax.bind(this)); // "evomesuom".split("").reverse().join("") 反转后是 "mousemove"
    }
    setScrollAnimation(column) {
        let scrolling = true; // 控制动画启停的标志
    
        const wrappers = column.children;
        const firstWrapper = wrappers[0]; // 第一个图片容器
        const secondWrapper = wrappers[1]; // 第二个图片容器
    
        // 初始化第二个容器的位置，使其紧接在第一个容器下方
        secondWrapper.style.transform = `translateY(${firstWrapper.offsetHeight}px)`;
    
        const animate = () => {
            if (!scrolling) return; // 如果动画已暂停，直接退出
    
            // 更新两个容器的位置（固定位移量 0.5px）
            firstWrapper.style.transform = `translateY(-${window.scrollY * 0.5}px)`; // 向上滚动
            secondWrapper.style.transform = `translateY(${firstWrapper.offsetHeight + window.scrollY * 0.5}px)`; // 向下滚动
    
            // 关键修正：当第一个容器完全滚出视口时，将其重置到底部
            if (-parseInt(firstWrapper.style.transform.split("translateY(")[1]) >= firstWrapper.offsetHeight) {
                firstWrapper.style.transform = `translateY(${secondWrapper.offsetHeight}px)`;
            }
    
            // 关键修正：当第二个容器完全滚出视口时，将其重置到顶部
            if (parseInt(secondWrapper.style.transform.split("translateY(")[1]) >= secondWrapper.offsetHeight) {
                secondWrapper.style.transform = `translateY(-${firstWrapper.offsetHeight}px)`;
            }
    
            requestAnimationFrame(animate); // 递归调用动画
        };
    
        animate(); // 启动动画
    
        // 监听页面可见性变化（切换标签页时暂停动画）
        document.addEventListener("visibilitychange", () => {
            scrolling = !document.hidden;
            if (scrolling) animate();
        });
    }
    
   handleParallax(e) {
        // 计算鼠标在 X 和 Y 方向上的平移量
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;  // 根据鼠标位置计算水平方向的平移
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;  // 根据鼠标位置计算垂直方向的平移
    
        // 遍历所有的列元素，并应用平移效果
        this.columns.forEach(column => {
            column.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    }
    
}
document['addEventListener']("DOMContentLoaded", () => {
    new WaterfallBackground();
});