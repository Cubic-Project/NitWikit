import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React, { type ReactNode } from "react";
import styles from "./index.module.scss";

function HeroCard() {
    return (
        <div className={`${styles.card} ${styles.cardHero} ${styles.fadeInUp} ${styles.delay1}`}>
            <h1 className={styles.heroTitle}>
                Cubic <span className="text-primary">Wiki</span>
            </h1>
            <p className={styles.heroDesc}>
                主要针对高版本 Java 版和基岩版服务器的开服指南。从零开始，手把手教你搭建和运营 Minecraft 服务器。
            </p>
            <div className={styles.buttonGroup}>
                <Link className={styles.primaryButton} to="/intro">
                    立即开始
                </Link>
                <Link className={styles.secondaryButton} to="/contribution">
                    参与贡献
                </Link>
            </div>
        </div>
    );
}

function FeatureCard({ title, description, to, delay }: { title: string; description: string; to: string; delay: string }) {
    return (
        <Link to={to} className={`${styles.card} ${styles.cardFeature} ${styles.fadeInUp} ${delay}`} style={{ textDecoration: 'none' }}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDesc}>{description}</p>
            <div className={styles.secondaryButton} style={{ width: 'fit-content', marginTop: 'auto' }}>
                阅读文档 →
            </div>
        </Link>
    );
}

function StatsCard() {
    return (
        <div className={`${styles.card} ${styles.cardWide} ${styles.fadeInUp} ${styles.delay3}`}>
            <h3 className={styles.cardTitle}>项目统计</h3>
            <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
                <div>
                    <strong style={{ fontSize: '2rem', color: 'var(--primary)' }}>1200+</strong>
                    <div style={{ color: 'var(--text-secondary)' }}>文档篇章</div>
                </div>
                <div>
                    <strong style={{ fontSize: '2rem', color: 'var(--primary)' }}>50+</strong>
                    <div style={{ color: 'var(--text-secondary)' }}>活跃贡献者</div>
                </div>
            </div>
        </div>
    );
}

export default function Home(): ReactNode {
    const {
        siteConfig: { customFields, tagline },
    } = useDocusaurusContext();
    const { description } = customFields as { description: string };

    return (
        <Layout title={tagline} description={description}>
            <main className={styles.page}>
                <div className={styles.bentoGrid}>
                    <HeroCard />
                    <FeatureCard 
                        title="Java 版核心" 
                        description="高版本 Java 版服务器开服指南，涵盖基础配置与进阶优化。" 
                        to="/docs-java/intro" 
                        delay={styles.delay2}
                    />
                    <FeatureCard 
                        title="基岩版核心" 
                        description="基岩版服务器开服指南，BDS 与 Nukkit 等核心详解。" 
                        to="/docs-bedrock/intro" 
                        delay={styles.delay2}
                    />
                    <StatsCard />
                    <FeatureCard 
                        title="进阶教程" 
                        description="深入了解服务器维护、插件开发与性能调优。" 
                        to="/docs/advance/advance" 
                        delay={styles.delay4}
                    />
                    <FeatureCard 
                        title="关于我们" 
                        description="了解 Cubic Wiki 的历史与贡献者名单。" 
                        to="/docs-about/intro" 
                        delay={styles.delay4}
                    />
                </div>
            </main>
        </Layout>
    );
}
