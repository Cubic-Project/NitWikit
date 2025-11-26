import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";
import styles from "./index.module.scss";

interface Stat {
    label: string;
    value: string;
}

interface NavLink {
    title: string;
    description: string;
    to: string;
}

const Home: React.FC = () => {
    const { siteConfig } = useDocusaurusContext();

    const stats: Stat[] = [
        { label: "文档篇章", value: "1200+" },
        { label: "活跃贡献者", value: "50+" }
    ];

    const quickLinks: NavLink[] = [
        { title: "新手入门", description: "了解教程定位、阅读指引与基础要求", to: "/intro" },
        { title: "Java 版核心", description: "高版本 Java 版服务器开服指南", to: "/Java/intro" },
        { title: "基岩版核心", description: "基岩版服务器开服指南", to: "/Bedrock/intro" }
    ];

    return (
        <Layout>
            <Head>
                <title>{siteConfig.title}</title>
                <meta name="description" content={siteConfig.tagline} />
            </Head>
            <main className={styles.page}>
                {/* 装饰性模糊圆形 */}
                <div className={`${styles.decorCircle} ${styles.decorCircle1}`} />
                <div className={`${styles.decorCircle} ${styles.decorCircle2}`} />
                <div className={`${styles.decorCircle} ${styles.decorCircle3}`} />

                <section className={styles.hero}>
                    <div className={styles.heroCopy}>
                        <h1 className={`${styles.fadeInUp} ${styles.delay1}`}>
                            Cubic <span className="text-primary">Wiki</span>
                        </h1>
                        <p className={`${styles.fadeInUp} ${styles.delay2}`}>
                            主要针对高版本 Java 版和基岩版服务器的开服指南。从零开始，手把手教你搭建和运营 Minecraft
                            服务器。
                        </p>
                        <div className={`${styles.heroButtons} ${styles.fadeInUp} ${styles.delay3}`}>
                            <Link className={styles.primaryButton} to="/intro">
                                立即开始
                            </Link>
                            <Link className={styles.secondaryButton} to="/contribution">
                                参与贡献
                            </Link>
                        </div>
                        <div className={`${styles.heroMetrics} ${styles.fadeInUp} ${styles.delay4}`}>
                            {stats.map((item) => (
                                <div key={item.label}>
                                    <strong>{item.value}</strong>
                                    <span>{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <aside className={`${styles.heroPanel} ${styles.fadeInUp} ${styles.delay3}`}>
                        <div className={styles.panelHeader}>
                            <span>快速导航</span>
                        </div>
                        <ul className={styles.linkList}>
                            {quickLinks.map((item, index) => (
                                <li key={item.title}>
                                    <Link to={item.to}>
                                        <div>
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                        <span>→</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </aside>
                </section>
            </main>
        </Layout>
    );
};

export default Home;
