// named export
// export function  Image(){
//     return <img src=' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2jHmC62fkkyMajumHnCaXrE8IVXNgUashQ5mEa7Dy&s'></img>;
//  }

import Image  from './Image';
  function DogCard(){
    return(
<div>
    <h3>Bark</h3>
{/* <img src=' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2jHmC62fkkyMajumHnCaXrE8IVXNgUashQ5mEa7Dy&s'></img> */}
<Image/>
</div>
);
}
// default export 
export default DogCard;