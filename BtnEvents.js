export default function Btnevents()
{
    return(
        <Toolbar
        onPlayMovie={()=>alert('playing movie!')}
        onUploadImage={()=>alert('uploading Image!')}
        />
    );
}
function Toolbar({onPlayMovie,onUploadImage}){
    return(
        <div>
             <button onClick={onPlayMovie}>
                play Movie
        </button>
             <button onClick={onUploadImage}>
                Upload Image
        </button>
        </div>
    );
}
function button({onClick,children}){
    return(
        <button onClick={onClick}>
        {children}
        </button>
    );
}