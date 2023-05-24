import { parallel, src, dest } from "gulp"
import less from "gulp-less"
import autoprefixer from "gulp-autoprefixer"
// import sourcemaps from "gulp-sourcemaps"
import cleanCss from "gulp-clean-css"
import path from "path"
import consola from "consola"
import chalk from "chalk"
const curDistPath = path.resolve(__dirname, "dist")
const outDistPath = path.resolve(__dirname, "../../dist/theme-chalk")
// 打包所有less到当前文件dist下
function buildThemeChalk() {
    return src(path.resolve(__dirname, "src/**/*.less"))
        // .pipe(sourcemaps.init()) // 创建sourcemap，便于调试时找到对应文件
        .pipe(less()) // 编译less
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            remove: true //是否去掉不必要的前缀 默认：true 
        })) // 创建前缀
        .pipe(cleanCss({}, (details) => {
            consola.success(`${chalk.cyan(details.name)}: ${chalk.yellow(
                details.stats.originalSize / 1000
            )} KB -> ${chalk.green(details.stats.minifiedSize / 1000)} KB`)
        })) // 压缩css
        // .pipe(sourcemaps.write())
        .pipe(dest(curDistPath))
}

// 打包特殊文件 例如：变量文件

// 复制打包的文件到最外部dist目录下    该dist存放所有的打包文件
function copyToOut(){
    return src(path.resolve(__dirname,"dist/**/*"))
    .pipe(dest(outDistPath))
}

const build = parallel(buildThemeChalk,copyToOut)
export default build