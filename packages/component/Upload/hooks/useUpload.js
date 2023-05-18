import { ref } from "vue"
import Worker from "../worker/upload.worker"
let initData = null
let uploadFlag = ref(0)
let DEFAULT_CHUNK_SIZE = 1 * 1024 * 1024
async function useUpload(e,options = { type: "*" }) {
    initData = options
    const [file] = e.target.files;
    const [, fileType] = file.name.split('.')
    const chechRes = await check(fileType)
    if (!chechRes) return uploadFlag
     createFileChunks(file)
}
function check(fileType) {
    if (!checkType(fileType)) {
        uploadFlag.value = 1 // 类型不匹配
    } else if (checkHasUploadAll()) {
        uploadFlag.value = 2 // 已完全上传
    }
    return uploadFlag.value == 1 || uploadFlag.value == 2
}
/**
 * 类型校验
 * @param {*} type 
 * @returns 
 */
function checkType(type) {
    if(initData.type =="*") return true
    return initData.type.indexOf(type) > -1
}
/**
 * 是否完全已完全上传
 * @returns 
 */
async function checkHasUploadAll() {
    if(initData.checkHasUploadAll){
        return await initData.checkHasUploadAll()
    } else {
        return false
    }
    
}

async function createFileChunks(file){
    const worker = new Worker()
    worker.postMessage({
        file,DEFAULT_CHUNK_SIZE
    })
    worker.onmessage = (res) => {
        console.log(res.data);
      }
} 
export default useUpload