export default function Post({params}:{params:{postId:string}}){
    return(
        <div>Post {params.postId[2]}</div>
    )
}