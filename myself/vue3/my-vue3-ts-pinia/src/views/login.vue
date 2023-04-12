<template>
    <main class="outer">
        <el-form label-position="left" label-width="100px" :model="formLabelAlign">
            <transition-group appear enter-active-class="animate__animated animate__fadeInUp">
                <el-form-item label="Name" key="a">
                    <el-input v-model="formLabelAlign.name" />
                </el-form-item>
                <el-form-item label="Activity zone" key="b">
                    <el-input v-model="formLabelAlign.region" />
                </el-form-item>
                <el-form-item label="Activity form" key="c">
                    <el-input v-model="formLabelAlign.type" />
                </el-form-item>
                <el-row class="flex justify-center top-6" key="d">
                    <el-button type="primary" @click="toIndex">登录</el-button>
                    <el-button @click="getRandomPath">注册</el-button>
                </el-row>
            </transition-group>
        </el-form>
        <!-- <el-button type="primary" @click="getRandomPath">随机</el-button> -->
        <div id="wave-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="var(--el-color-primary)" :fillOpacity="wave.opacity / 100" :d='data.path' />
            </svg>
        </div>
        <!-- <SvgIcon icon-class="wave" class="wave" size="1800" /> -->
    </main>
</template>
<script lang="ts" setup>
import { defineComponent, reactive } from 'vue';
import { scaleLinear } from "d3-scale";
import { range } from "d3-array";
import { area, curveBasis, curveStepBefore, curveLinear } from "d3-shape";
import { setThemeStyle } from '@/utils/theme'
defineOptions({
    name: "login"
})
interface Form {
    name: string
    region: string
    type: string
}
const formLabelAlign = reactive<Form>({
    name: 'name',
    region: 'region',
    type: 'type'
})
let data = reactive({
    path: "",
    showForm: false
})
const width = 1440
const height = 320
const router = useRouter()
const curves = {
    wave: curveBasis,
    step: curveStepBefore,
    peak: curveLinear,
}
let wave = reactive<any>(
    {
        color: "#0099ff",
        complexity: 6,
        curve: "wave",
        data: range(6).map(() => Math.round(Math.random() * 10)),
        direction: "up",
        id: "aabbccddeeff11223344",
        opacity: 100
    }
)
let getRandomPath = () => {
    wave.data = range(6).map(() => Math.round(Math.random() * 10))
    const scaleX = scaleLinear()
        .domain([0, wave.complexity - 1])
        .range([0, width])

    const scaleY = scaleLinear()
        .domain([0, 10])
        .range([0, height])

    const areaGenerator = area()
        .x((d, i) => {
            return scaleX(i)
        })
        .y1((d) => {
            return scaleY(d)
        })

    const d = areaGenerator
        .curve(curves[wave.curve])
        .y0(wave.direction === "up" ? height : 0)(wave.data)

    const roundedD = d.split(/M|Z/).filter(d => d)[0].split(",").map(d => {
        if (d.indexOf("C") !== -1) {
            return d.split("C").map(n => Math.round(n * 10) / 10).join("C")
        }
        else if (d.indexOf("L") !== -1) {
            return d.split("L").map(n => Math.round(n * 10) / 10).join("L")
        }
        else {
            return Math.round(d)
        }
    })
    console.log(data.path)
    data.path = "M" + roundedD.join(",") + "Z"
    console.log(data.path)
}
const toIndex = () => {
    router.push({ path: "/" })
}
onMounted(() => {
    getRandomPath()
    // setTimeout(() => {
    //     setThemeStyle("red")
    // }, 2000)
    // requestAnimationFrame(() => {

    // });
    // setInterval(() => {
    //     wave.data.shift()
    //     wave.data.push(Math.round(Math.random() * 10))
    //     getRandomPath()
    // }, 1000)
})

</script>
<style lang="scss" scoped>
@import 'animate.css';

.outer {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    background: #f7f7f7;
}

// ::v-deep .el-form{
.el-form {
    min-width: 300px;
    height: 300px;
    padding: 30px 50px;
    background: #fff;
    box-shadow: 20px 20px 60px #d2d2d2,
        -20px -20px 60px #ffffff;
    border-radius: 20px;
    position: absolute;
}

@media screen and (max-width:570px) {
    .el-form {
        min-width: 375px;
        max-width: 375px;
        height: 300px;
        padding: 30px 50px;
        right: 0;
        left: 0;
        margin: 0 auto;
        top: 100px;
    }
}

@media screen and (min-width:570px) {
    .el-form {
        min-width: 375px;
        max-width: 375px;
        height: 300px;
        padding: 30px 50px;
        background: #fff;
        box-shadow: 20px 20px 60px #d2d2d2,
            -20px -20px 60px #ffffff;
        border-radius: 20px;
        position: absolute;
        right: 100px;
        top: 100px;
    }
}

#wave-container {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;

    path {
        transition: all 250ms ease 0s;
    }
}
</style>
