
const usePost = (url, body) => {
    fetch(url, {
            method: "post",
            headers: {'Content-Type':'application/json'},
            body: body
        })
    .then(res => {
        if(!res.ok){
            throw new Error(`Gagal nih`)
        }
        return res.json()
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    })
}
export default usePost