//  function  Image(props)
// Another way access to props
 function  Image({src})
 {
        return (
            <div className='image-box'>
            {/* <img src=' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2jHmC62fkkyMajumHnCaXrE8IVXNgUashQ5mEa7Dy&s'></img>; */}
        {/* <img  src={props.src}/>   */}
        <img  src={src}/>  
        </div>
        );
}

export default  Image;