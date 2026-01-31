<script setup lang="ts">
import { NTimeline, NTimelineItem, NConfigProvider, darkTheme, type GlobalTheme } from "naive-ui";
import { ref, nextTick, onMounted } from "vue";

const props = defineProps<{
    items: {
        children: string;
        label: string;
        type?: "default" | "info" | "warning" | "error" | "success" | undefined;
    }[];
}>();

const theme = ref<GlobalTheme | null>(null);

async function updateThemeByHtmlAttr() {
    await nextTick();
    const html = document.documentElement;
    const mode = html.getAttribute("data-theme");
    theme.value = mode === "dark" ? darkTheme : null;
}

onMounted(() => {
    void updateThemeByHtmlAttr();
    const observer = new MutationObserver(() => {
        void updateThemeByHtmlAttr();
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
});
</script>

<template>
    <div class="not-content">
        <n-config-provider :theme="theme">
            <n-timeline>
                <n-timeline-item
                    v-for="(item, idx) in props.items"
                    :key="idx"
                    :content="item.children"
                    :time="item.label"
                    :type="item.type"
                />
            </n-timeline>
        </n-config-provider>
    </div>
</template>
