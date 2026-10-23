---
name: cangxiaoyun-print
description: 仓小云印刷。大幅面图像印刷预检、Real-ESRGAN 可选增强、矢量排版、ICC 色彩检查及可交付 PDF。
---

# 仓小云印刷 V1.1

输入图像、成品尺寸、观看距离和印厂规范。执行：尺寸和有效 PPI 检查；必要时通过用户已安装的 Real-ESRGAN 命令行增强图像；独立矢量 PDF 图层叠加；校验嵌入 ICC 与色彩风险；生成生产 PDF 和质检信息。严禁伪称普通插值为 AI 超分；文字或 Logo 不得用生成式方法悄悄重绘；不可伪称未经打样文件已达到印厂要求。

使用仓库中的 `scripts/print_pipeline.py`，参见 README.md。使用前先检查 Real-ESRGAN 依赖、可用 RAM 和图片授权。色彩转换须按印厂输出规范进行，不能依据 RGB 图像猜测 CMYK profile。