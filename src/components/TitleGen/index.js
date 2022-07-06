import {useEffect, useState} from 'react'
import {HeroH1} from './TitleGenElements';

const titles =[
    "Discover and get great food.",
    "Fastest Delivery and Easy Pickup",
    "Are you too tired to cook?",
    "Do you want to try something different?"
]

const variants = {
  even: {
      x: ["-40px","0px","-40px"],
      opacity: [0, 1, 0],
      color: ["#fff", "#9433FF", "#fff"]
  },
  odd: {
      x: ["-40px","0px","-40px"],
      opacity: [0, 1, 0],
      color: ["#fff", "#9433FF"]
  }
}

const TitleGen = () => {
  const [currentTitle, setCurrentTitle] = useState({
    title: "Fastest Delivery and Easy Pickup",
    id: 1
  })
  useEffect(
        ()=>{
          
        const funcInterval=  setInterval(()=> {

          setCurrentTitle(
            (prev)=>{
              let newID = prev.id;
              if(newID < titles.length -1){
                  newID += 1;
              }else{
                newID= 0;
              }
              return {
                id: newID,
                title: titles[newID]
              }
            })
          }, 4000);
    return(()=>{clearInterval(funcInterval);})
    }, [])
    
  return (
    <HeroH1
      initial={"odd"}
      animate={currentTitle.id % 2 ? "odd" : "even"}
      transition={{
        type:"spring",
        duration: 4
      }}
      variants={
        variants
      }
    >{currentTitle.title}</HeroH1>
  )
}
export default TitleGen
