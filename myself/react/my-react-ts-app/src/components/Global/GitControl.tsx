function GitControl() {
    const toGit = () => {
        console.log("toGit");
        window.open("https://github.com/wangyuan389/mall-cook", "_blank");
    }
    return (
        <img
            src="http://110.42.184.128:8090/img/1639557056903.png"
            onClick={toGit}
            style={{
                width: '30px',
                marginRight: '15px',
                cursor: 'pointer'
            }}
        />
    )
}

export default GitControl