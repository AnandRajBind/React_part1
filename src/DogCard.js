// named export
// export function  Image(){
//     return <img src=' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2jHmC62fkkyMajumHnCaXrE8IVXNgUashQ5mEa7Dy&s'></img>;
//  }

import Image  from './Image';
import Name from './Name';
  function DogCard(props){
    let title='this is a dog'
    return(
//<div>
<>
<h2 style={{fontSize:'15px', color:'red'}}>
  {/* jsx curlies */}
  {title}
  {5+10}
</h2>
{/*props passed in the jsx */}
<Name>
    <h3>{props.name}</h3>
</Name>

<Image src={props.image}/>
{/* <Image src='https://thumbs.dreamstime.com/b/dog-love-rose-valentines-jack-russell-looking-staring-you-lying-bed-petal-roses-as-background-holding-77736960.jpg '/>

<Image src='   https://cdn.shopify.com/s/files/1/0981/1436/files/the-dog-holds-a-bouquet-of-roses-in-his-mouth-2021-09-04-09-21-56-utc_1.jpg?v=1644361141 '  /> */}
//</> 
//</div>
);
}
// default export 
export default DogCard;