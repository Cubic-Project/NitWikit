<script setup lang="ts">
import { NCard } from "naive-ui";
import { NConfigProvider } from "naive-ui";

import { darkTheme, type GlobalTheme } from "naive-ui";
import { ref, watch, nextTick, onMounted } from "vue";

const props = defineProps<{
    items: {
        name: string;
        amount: number;
        qid: string;
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
    <n-config-provider :theme="theme" class="not-content">
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; align-items: baseline">
            <div v-for="item in props.items" :key="item.qid">
                <n-card
                    size="medium"
                    :title="item.name"
                    content-style="text-align: center; padding: 0.2rem; margin-top: 0;"
                    header-style="text-align: center; padding: 0; margin-top: 0.4rem;"
                >
                    <template #cover>
                        <img :src="`https://q.qlogo.cn/g?b=qq&nk=${item.qid}&s=100`" />
                    </template>
                    ¥{{ item.amount }}
                </n-card>
            </div>
        </div>
    </n-config-provider>
</template>
