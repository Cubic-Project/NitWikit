/**
 * NitWikit 主题切换动画模块
 * 实现瀑布流涟漪效果
 */
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import "./themeModules.scss";

if (ExecutionEnvironment.canUseDOM) {
    // 常量定义
    const TRANSITION_DURATION = 600;
    const TRANSITION_CLASS = "theme-transitioning";
    const THEME_LISTENER_ATTR = "data-theme-listener";
    const SELECTOR = 'button[class*="colorModeToggle"]';

    let isAnimating = false;
    let transitionTimeout: ReturnType<typeof setTimeout> | null = null;

    // 等待 DOM 加载完成
    const init = (): void => {
        const colorModeToggle = document.querySelector(SELECTOR) as HTMLButtonElement | null;

        if (colorModeToggle) {
            colorModeToggle.addEventListener("click", handleThemeToggle);
        }

        // 监听 DOM 变化，处理动态加载的按钮
        const observer = new MutationObserver((): void => {
            const toggle = document.querySelector(SELECTOR) as HTMLButtonElement | null;
            if (toggle && !toggle.hasAttribute(THEME_LISTENER_ATTR)) {
                toggle.setAttribute(THEME_LISTENER_ATTR, "true");
                toggle.addEventListener("click", handleThemeToggle);
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });
    };

    function handleThemeToggle(e: Event): void {
        // 防抖
        if (isAnimating) return;

        isAnimating = true;
        const button = e.currentTarget as HTMLButtonElement;
        const rect = button.getBoundingClientRect();

        // 创建涟漪效果
        createRipple(rect.left + rect.width / 2, rect.top + rect.height / 2);

        // 添加瀑布流过渡标记
        document.documentElement.classList.add(TRANSITION_CLASS);

        // 清除之前的超时
        if (transitionTimeout) {
            clearTimeout(transitionTimeout);
        }

        // 过渡完成后移除标记和重置状态
        transitionTimeout = setTimeout((): void => {
            document.documentElement.classList.remove(TRANSITION_CLASS);
            isAnimating = false;
            transitionTimeout = null;
        }, TRANSITION_DURATION);
    }

    function createRipple(x: number, y: number): void {
        const ripple = document.createElement("div");
        ripple.className = "theme-ripple";

        const maxDimension = Math.max(window.innerWidth, window.innerHeight) * 2;
        const halfDimension = maxDimension / 2;

        // 主题涟漪颜色
        const isDark = document.documentElement.getAttribute("data-theme") === "dark";
        const bgColor = isDark ? "rgba(248, 250, 252, 0.08)" : "rgba(2, 6, 23, 0.06)";

        // 动态样式
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.style.width = `${maxDimension}px`;
        ripple.style.height = `${maxDimension}px`;
        ripple.style.marginLeft = `-${halfDimension}px`;
        ripple.style.marginTop = `-${halfDimension}px`;
        ripple.style.background = bgColor;

        document.body.appendChild(ripple);

        // 清理
        const removeRipple = (): void => {
            ripple.removeEventListener("animationend", removeRipple);
            ripple.remove();
        };
        ripple.addEventListener("animationend", removeRipple);
    }

    // 注入样式
    function injectStyles(): void {
        if (document.getElementById("theme-ripple-styles")) return;

        const style = document.createElement("style");
        style.id = "theme-ripple-styles";
        document.head.appendChild(style);
    }

    // 初始化
    const setupThemeAnimation = (): void => {
        injectStyles();
        init();
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", setupThemeAnimation);
    } else {
        setupThemeAnimation();
    }
}
