import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

/**
 * A component that conditionally renders its children based on the `IS_CHINA_SITE` environment variable.
 * If `IS_CHINA_SITE` is 'true', the children (typically Markdown content) will not be rendered.
 */
export default function GlobalContent({ children }) {
    if (useDocusaurusContext().siteConfig.customFields.IS_CHINA_SITE) {
        return null; // Do not render children if in the China site context
    }
    return <>{children}</>; // Render children otherwise
}
