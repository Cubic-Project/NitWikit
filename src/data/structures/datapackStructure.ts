import { ExplorerNode } from "@/types/ExplorerNode";

export const datapackStructure: ExplorerNode[] = [
    {
        name: "数据包名",
        type: "folder",
        children: [
            {
                name: "pack.mcmeta",
                type: "file",
                description: "用于识别数据包及存储数据包信息",
            },
            {
                name: "pack.png",
                type: "file",
                description: "数据包的图片 (可选)",
            },
            {
                name: "data",
                type: "folder",
                children: [
                    {
                        name: "advancements",
                        type: "folder",
                        children: [
                            {
                                name: "特定进度名.json",
                                type: "structure",
                                children: [
                                    {
                                        name: "display",
                                        type: "folder",
                                        description: "进度的显示信息",
                                        children: [
                                            {
                                                name: "title",
                                                type: "file",
                                                description: "进度标题",
                                            },
                                            {
                                                name: "description",
                                                type: "file",
                                                description: "进度描述",
                                            },
                                            {
                                                name: "icon",
                                                type: "file",
                                                description: "进度图标",
                                            },
                                        ],
                                    },
                                    {
                                        name: "criteria",
                                        type: "folder",
                                        description: "进度达成条件",
                                        children: [
                                            {
                                                name: "特定条件名.json",
                                                type: "structure",
                                                children: [
                                                    {
                                                        name: "trigger",
                                                        type: "file",
                                                        description: "触发条件类型",
                                                    },
                                                    {
                                                        name: "conditions",
                                                        type: "file",
                                                        description: "具体的条件参数",
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: "loot_tables",
                        type: "folder",
                        children: [
                            {
                                name: "特定物品或实体的战利品表.json",
                                type: "structure",
                                children: [
                                    {
                                        name: "pools",
                                        type: "folder",
                                        description: "战利品池列表",
                                        children: [
                                            {
                                                name: "特定战利品池.json",
                                                type: "structure",
                                                children: [
                                                    {
                                                        name: "rolls",
                                                        type: "file",
                                                        description: "战利品生成次数",
                                                    },
                                                    {
                                                        name: "entries",
                                                        type: "folder",
                                                        description: "战利品条目",
                                                        children: [
                                                            {
                                                                name: "特定条目.json",
                                                                type: "structure",
                                                                children: [
                                                                    {
                                                                        name: "type",
                                                                        type: "file",
                                                                        description:
                                                                            "条目类型，如 item、loot_table 等",
                                                                    },
                                                                    {
                                                                        name: "name",
                                                                        type: "file",
                                                                        description:
                                                                            "物品或战利品表名称",
                                                                    },
                                                                    {
                                                                        name: "functions",
                                                                        type: "folder",
                                                                        description:
                                                                            "可选的函数列表，用于修改战利品",
                                                                        children: [
                                                                            {
                                                                                name: "特定函数.json",
                                                                                    type: "structure",
                                                                                children: [
                                                                                    {
                                                                                        name: "function",
                                                                                        type: "file",
                                                                                        description:
                                                                                            "函数类型，如 set_nbt、enchant_with_levels 等",
                                                                                    },
                                                                                    {
                                                                                        name: "arguments",
                                                                                        type: "file",
                                                                                        description:
                                                                                            "函数参数",
                                                                                    },
                                                                                ],
                                                                            },
                                                                        ],
                                                                    },
                                                                ],
                                                            },
                                                        ],
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: "recipes",
                        type: "folder",
                        children: [
                            {
                                name: "特定合成配方.json",
                                type: "structure",
                                children: [
                                    {
                                        name: "type",
                                        type: "file",
                                        description:
                                            "合成配方类型，如 crafting_shaped、crafting_shapeless 等",
                                    },
                                    {
                                        name: "group",
                                        type: "file",
                                        description: "合成组名 (可选)",
                                    },
                                    {
                                        name: "ingredients",
                                        type: "folder",
                                        description: "合成所需的材料列表",
                                        children: [
                                            {
                                                name: "特定材料.json",
                                                type: "structure",
                                                children: [
                                                    {
                                                        name: "item",
                                                        type: "file",
                                                        description: "物品名称",
                                                    },
                                                    {
                                                        name: "count",
                                                        type: "file",
                                                        description: "物品数量 (可选)",
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        name: "result",
                                        type: "folder",
                                        description: "合成结果",
                                        children: [
                                            {
                                                name: "item",
                                                type: "file",
                                                description: "合成后的物品名称",
                                            },
                                            {
                                                name: "count",
                                                type: "file",
                                                description: "合成后的物品数量 (可选)",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: "tags",
                        type: "folder",
                        children: [
                            {
                                name: "blocks",
                                type: "folder",
                                children: [
                                    {
                                        name: "特定方块标签.json",
                                        type: "structure",
                                        children: [
                                            {
                                                name: "replace",
                                                type: "file",
                                                description: "是否替换已有标签 (可选)",
                                            },
                                            {
                                                name: "values",
                                                type: "file",
                                                description: "方块名称列表",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                name: "fluids",
                                type: "folder",
                                children: [
                                    {
                                        name: "特定流体标签.json",
                                        type: "structure",
                                        children: [
                                            {
                                                name: "replace",
                                                type: "file",
                                                description: "是否替换已有标签 (可选)",
                                            },
                                            {
                                                name: "values",
                                                type: "file",
                                                description: "流体名称列表",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                name: "items",
                                type: "folder",
                                children: [
                                    {
                                        name: "特定物品标签.json",
                                        type: "structure",
                                        children: [
                                            {
                                                name: "replace",
                                                type: "file",
                                                description: "是否替换已有标签 (可选)",
                                            },
                                            {
                                                name: "values",
                                                type: "file",
                                                description: "物品名称列表",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                name: "entity_types",
                                type: "folder",
                                children: [
                                    {
                                        name: "特定实体类型标签.json",
                                        type: "structure",
                                        children: [
                                            {
                                                name: "replace",
                                                type: "file",
                                                description: "是否替换已有标签 (可选)",
                                            },
                                            {
                                                name: "values",
                                                type: "file",
                                                description: "实体类型名称列表",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                name: "functions",
                                type: "folder",
                                children: [
                                    {
                                        name: "特定函数标签.json",
                                        type: "structure",
                                        children: [
                                            {
                                                name: "replace",
                                                type: "file",
                                                description: "是否替换已有标签 (可选)",
                                            },
                                            {
                                                name: "values",
                                                type: "file",
                                                description: "函数名称列表",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                name: "predicates",
                                type: "folder",
                                children: [
                                    {
                                        name: "特定谓词标签.json",
                                        type: "structure",
                                        children: [
                                            {
                                                name: "replace",
                                                type: "file",
                                                description: "是否替换已有标签 (可选)",
                                            },
                                            {
                                                name: "values",
                                                type: "file",
                                                description: "谓词名称列表",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                name: "damage_types",
                                type: "folder",
                                children: [
                                    {
                                        name: "特定伤害类型标签.json",
                                        type: "structure",
                                        children: [
                                            {
                                                name: "replace",
                                                type: "file",
                                                description: "是否替换已有标签 (可选)",
                                            },
                                            {
                                                name: "values",
                                                type: "file",
                                                description: "伤害类型名称列表",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                name: "enchantments",
                                type: "folder",
                                children: [
                                    {
                                        name: "特定附魔标签.json",
                                        type: "structure",
                                        children: [
                                            {
                                                name: "replace",
                                                type: "file",
                                                description: "是否替换已有标签 (可选)",
                                            },
                                            {
                                                name: "values",
                                                type: "file",
                                                description: "附魔名称列表",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                name: "game_events",
                                type: "folder",
                                children: [
                                    {
                                        name: "特定游戏事件标签.json",
                                        type: "structure",
                                        children: [
                                            {
                                                name: "replace",
                                                type: "file",
                                                description: "是否替换已有标签 (可选)",
                                            },
                                            {
                                                name: "values",
                                                type: "file",
                                                description: "游戏事件名称列表",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: "functions",
                        type: "folder",
                        children: [
                            {
                                name: "特定函数文件.mcfunction",
                                type: "file",
                                description: "可以是游戏中的各种命令，用于实现特定的逻辑",
                            },
                        ],
                    },
                    {
                        name: "predicates",
                        type: "folder",
                        children: [
                            {
                                name: "特定谓词.json",
                                type: "structure",
                                children: [
                                    {
                                        name: "condition",
                                        type: "file",
                                        description: "谓词条件",
                                    },
                                    {
                                        name: "result",
                                        type: "file",
                                        description: "谓词结果，通常是布尔值",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: "dimension_types",
                        type: "folder",
                        children: [
                            {
                                name: "特定维度类型.json",
                                type: "structure",
                                children: [
                                    {
                                        name: "effects",
                                        type: "folder",
                                        description: "维度效果列表",
                                        children: [
                                            {
                                                name: "特定效果.json",
                                                type: "structure",
                                                children: [
                                                    {
                                                        name: "特定效果类型",
                                                        type: "file",
                                                        description: "如 fog_color、ambient_light 等",
                                                    },
                                                    {
                                                        name: "值",
                                                        type: "file",
                                                        description: "根据效果类型而定",
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        name: "parameters",
                                        type: "folder",
                                        description: "维度类型参数",
                                        children: [
                                            {
                                                name: "特定参数.json",
                                                type: "structure",
                                                children: [
                                                    {
                                                        name: "名称",
                                                        type: "file",
                                                        description: "参数名称",
                                                    },
                                                    {
                                                        name: "值",
                                                        type: "file",
                                                        description: "参数值",
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: "worldgen",
                        type: "folder",
                        children: [
                            {
                                name: "biome",
                                type: "folder",
                                children: [
                                    {
                                        name: "特定生物群系.json",
                                        type: "structure",
                                        children: [
                                            {
                                                name: "features",
                                                type: "folder",
                                                description: "生物群系特征列表",
                                                children: [
                                                    {
                                                        name: "特定特征.json",
                                                        type: "structure",
                                                        children: [
                                                            {
                                                                name: "特定特征类型",
                                                                type: "file",
                                                                description: "如 lake、flower 等",
                                                            },
                                                            {
                                                                name: "参数",
                                                                type: "file",
                                                                description: "根据特征类型而定",
                                                            },
                                                        ],
                                                    },
                                                ],
                                            },
                                            {
                                                name: "properties",
                                                type: "folder",
                                                description: "生物群系属性",
                                                children: [
                                                    {
                                                        name: "特定属性.json",
                                                        type: "structure",
                                                        children: [
                                                            {
                                                                name: "名称",
                                                                type: "file",
                                                                description: "属性名称",
                                                            },
                                                            {
                                                                name: "值",
                                                                type: "file",
                                                                description: "属性值",
                                                            },
                                                        ],
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                name: "configured_carver",
                                type: "folder",
                                children: [
                                    {
                                        name: "特定雕刻器.json",
                                        type: "structure",
                                        children: [
                                            {
                                                name: "type",
                                                type: "file",
                                                description: "雕刻器类型",
                                            },
                                            {
                                                name: "biomes",
                                                type: "file",
                                                description: "适用的生物群系列表",
                                            },
                                            {
                                                name: "parameters",
                                                type: "folder",
                                                description: "雕刻器参数",
                                                children: [
                                                    {
                                                        name: "特定参数.json",
                                                        type: "structure",
                                                        children: [
                                                            {
                                                                name: "名称",
                                                                type: "file",
                                                                description: "参数名称",
                                                            },
                                                            {
                                                                name: "值",
                                                                type: "file",
                                                                description: "参数值",
                                                            },
                                                        ],
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                name: "configured_feature",
                                type: "folder",
                                children: [
                                    {
                                        name: "特定配置特征.json",
                                        type: "structure",
                                        children: [
                                            {
                                                name: "type",
                                                type: "file",
                                                description: "特征类型",
                                            },
                                            {
                                                name: "placement",
                                                type: "folder",
                                                description: "放置规则",
                                                children: [
                                                    {
                                                        name: "特定放置规则.json",
                                                        type: "structure",
                                                        children: [
                                                            {
                                                                name: "规则类型",
                                                                type: "file",
                                                                description:
                                                                    "如 height_range、on_ground 等",
                                                            },
                                                            {
                                                                name: "参数",
                                                                type: "file",
                                                                description: "根据规则类型而定",
                                                            },
                                                        ],
                                                    },
                                                ],
                                            },
                                            {
                                                name: "parameters",
                                                type: "folder",
                                                description: "特征参数",
                                                children: [
                                                    {
                                                        name: "特定参数.json",
                                                        type: "structure",
                                                        children: [
                                                            {
                                                                name: "名称",
                                                                type: "file",
                                                                description: "参数名称",
                                                            },
                                                            {
                                                                name: "值",
                                                                type: "file",
                                                                description: "参数值",
                                                            },
                                                        ],
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                name: "configured_structure_feature",
                                type: "folder",
                                children: [
                                    {
                                        name: "特定配置结构特征.json",
                                        type: "structure",
                                        children: [
                                            {
                                                name: "type",
                                                type: "file",
                                                description: "结构特征类型",
                                            },
                                            {
                                                name: "placement",
                                                type: "folder",
                                                description: "放置规则",
                                                children: [
                                                    {
                                                        name: "特定放置规则.json",
                                                        type: "structure",
                                                        children: [
                                                            {
                                                                name: "规则类型",
                                                                type: "file",
                                                                description:
                                                                    "如 surface_rule、biome_filter 等",
                                                            },
                                                            {
                                                                name: "参数",
                                                                type: "file",
                                                                description: "根据规则类型而定",
                                                            },
                                                        ],
                                                    },
                                                ],
                                            },
                                            {
                                                name: "parameters",
                                                type: "folder",
                                                description: "结构特征参数",
                                                children: [
                                                    {
                                                        name: "特定参数.json",
                                                        type: "structure",
                                                        children: [
                                                            {
                                                                name: "名称",
                                                                type: "file",
                                                                description: "参数名称",
                                                            },
                                                            {
                                                                name: "值",
                                                                type: "file",
                                                                description: "参数值",
                                                            },
                                                        ],
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                name: "noise",
                                type: "folder",
                                children: [
                                    {
                                        name: "特定噪声设置.json",
                                        type: "structure",
                                        children: [
                                            {
                                                name: "noise_type",
                                                type: "file",
                                                description: "噪声类型",
                                            },
                                            {
                                                name: "parameters",
                                                type: "folder",
                                                description: "噪声参数",
                                                children: [
                                                    {
                                                        name: "特定参数.json",
                                                        type: "structure",
                                                        children: [
                                                            {
                                                                name: "名称",
                                                                type: "file",
                                                                description: "参数名称",
                                                            },
                                                            {
                                                                name: "值",
                                                                type: "file",
                                                                description: "参数值",
                                                            },
                                                        ],
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                name: "processor_list",
                                type: "folder",
                                children: [
                                    {
                                        name: "特定处理器列表.json",
                                        type: "structure",
                                        children: [
                                            {
                                                name: "processors",
                                                type: "folder",
                                                description: "处理器列表",
                                                children: [
                                                    {
                                                        name: "特定处理器.json",
                                                        type: "structure",
                                                        children: [
                                                            {
                                                                name: "type",
                                                                type: "file",
                                                                description: "处理器类型",
                                                            },
                                                            {
                                                                name: "parameters",
                                                                type: "folder",
                                                                description: "处理器参数",
                                                                children: [
                                                                    {
                                                                        name: "特定参数.json",
                                                                        type: "structure",
                                                                        children: [
                                                                            {
                                                                                name: "名称",
                                                                                type: "file",
                                                                                description:
                                                                                    "参数名称",
                                                                            },
                                                                            {
                                                                                name: "值",
                                                                                type: "file",
                                                                                description:
                                                                                    "参数值",
                                                                            },
                                                                        ],
                                                                    },
                                                                ],
                                                            },
                                                        ],
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
];
