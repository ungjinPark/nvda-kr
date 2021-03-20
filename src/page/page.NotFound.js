
const PageNotFound = ({pageTitle}) =>{
    return (
        <div className="text center large">
            <p>
                앗... 이런, 페이지를 찾지 못했네요. :(
            </p>
            <a href="/home/aboutPage">홈으로</a>
        </div>
    )       
}

export default PageNotFound;