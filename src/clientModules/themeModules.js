/**
 * NitWikit 主题切换动画模块
 * 实现瀑布流涟漪效果
 */
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

if (ExecutionEnvironment.canUseDOM) {
    // 等待 DOM 加载完成
    const init = () => {
        // 查找主题切换按钮
        const colorModeToggle = document.querySelector('button[class*="colorModeToggle"]');
        
        if (colorModeToggle) {
            colorModeToggle.addEventListener('click', handleThemeToggle);
        }

        // 监听 DOM 变化，处理动态加载的按钮
        const observer = new MutationObserver(() => {
            const toggle = document.querySelector('button[class*="colorModeToggle"]');
            if (toggle && !toggle.hasAttribute('data-theme-listener')) {
                toggle.setAttribute('data-theme-listener', 'true');
                toggle.addEventListener('click', handleThemeToggle);
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });
    };

    function handleThemeToggle(e) {
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        
        // 创建涟漪效果
        createRipple(
            rect.left + rect.width / 2,
            rect.top + rect.height / 2
        );

        // 添加瀑布流过渡标记
        document.documentElement.classList.add('theme-transitioning');
        
        // 过渡完成后移除标记
        setTimeout(() => {
            document.documentElement.classList.remove('theme-transitioning');
        }, 600);
    }

    function createRipple(x, y) {
        const ripple = document.createElement('div');
        ripple.className = 'theme-ripple';
        
        // 计算需要覆盖整个视口的大小
        const maxDimension = Math.max(
            window.innerWidth,
            window.innerHeight
        ) * 2;

        // 获取当前主题判断涟漪颜色
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        
        ripple.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: ${maxDimension}px;
            height: ${maxDimension}px;
            margin-left: -${maxDimension / 2}px;
            margin-top: -${maxDimension / 2}px;
            border-radius: 50%;
            background: ${isDark ? 'rgba(248, 250, 252, 0.08)' : 'rgba(2, 6, 23, 0.06)'};
            transform: scale(0);
            pointer-events: none;
            z-index: 9999;
            animation: themeRippleExpand 600ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
        `;

        document.body.appendChild(ripple);

        // 动画结束后移除元素
        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    }

    // 注入动画关键帧样式
    function injectStyles() {
        if (document.getElementById('theme-ripple-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'theme-ripple-styles';
        style.textContent = `
            @keyframes themeRippleExpand {
                0% {
                    transform: scale(0);
                    opacity: 1;
                }
                50% {
                    opacity: 0.8;
                }
                100% {
                    transform: scale(1);
                    opacity: 0;
                }
            }

            /* 瀑布流过渡增强效果 */
            .theme-transitioning .navbar {
                animation: themeCascade 400ms ease-out;
            }

            .theme-transitioning .main-wrapper {
                animation: themeCascade 400ms ease-out 40ms backwards;
            }

            .theme-transitioning article {
                animation: themeCascade 400ms ease-out 80ms backwards;
            }

            .theme-transitioning .footer {
                animation: themeCascade 400ms ease-out 200ms backwards;
            }

            @keyframes themeCascade {
                0% {
                    filter: brightness(1);
                }
                30% {
                    filter: brightness(1.05);
                }
                100% {
                    filter: brightness(1);
                }
            }

            /* 卡片波浪效果 */
            .theme-transitioning .card {
                animation: cardWave 400ms ease-out backwards;
            }

            .theme-transitioning .card:nth-child(1) { animation-delay: 100ms; }
            .theme-transitioning .card:nth-child(2) { animation-delay: 140ms; }
            .theme-transitioning .card:nth-child(3) { animation-delay: 180ms; }
            .theme-transitioning .card:nth-child(4) { animation-delay: 220ms; }
            .theme-transitioning .card:nth-child(5) { animation-delay: 260ms; }
            .theme-transitioning .card:nth-child(6) { animation-delay: 300ms; }

            @keyframes cardWave {
                0% {
                    transform: translateY(0) scale(1);
                }
                40% {
                    transform: translateY(-2px) scale(1.005);
                }
                100% {
                    transform: translateY(0) scale(1);
                }
            }

            /* 尊重减少动画偏好 */
            @media (prefers-reduced-motion: reduce) {
                .theme-ripple,
                .theme-transitioning * {
                    animation: none !important;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // 初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            injectStyles();
            init();
        });
    } else {
        injectStyles();
        init();
    }
}

