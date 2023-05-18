// importScript("spart-md5")
import SparkMD5 from "spark-md5"
onmessage = (res) => {
    let file = res.data.file;
    let DEFAULT_CHUNK_SIZE = res.data.DEFAULT_CHUNK_SIZE;
    let size = file.size,
        chunksCount = Math.ceil(size / DEFAULT_CHUNK_SIZE),
        start = 0,
        end = DEFAULT_CHUNK_SIZE,
        spark = new SparkMD5.ArrayBuffer(),
        chunks = [];
    if (DEFAULT_CHUNK_SIZE > size) {
        end = size - 1
    }

    async function getChunks() {
        while (chunksCount > 0) {
            const curFile = file.slice(start, end)
            spark.append(curFile);
            const fileName = await spark.end()
            console.log(fileName);
            chunks.push({
                file: curFile,
                name: fileName
            })
            start = end
            end = end + DEFAULT_CHUNK_SIZE
            chunksCount--

        }
    }
    getChunks()

    postMessage(chunks)
}