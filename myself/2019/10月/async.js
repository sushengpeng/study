function testAwait() {
    return new Promise((resolve) => {
        setTimeout(function () {
            console.log("第一个");
            resolve();
        }, 1000);
    });
}
async function helloAsync() {
    await testAwait();
    console.log("第二个");
}
helloAsync();
// https://blog.csdn.net/tcy83/article/details/80544048