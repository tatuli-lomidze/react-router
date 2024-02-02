import kareninaImage from"../Assets/karenina.jpg"
import crimeImage from"../Assets/crime.jpg"
import metamorphosisImage from"../Assets/metamorphosis.jpg"



const MainPage = () => {

    return  <div>
    <h1>Welcome to our library</h1>
    
    <img src={kareninaImage} alt="Anna Karenina" />
    <img src={crimeImage} alt="" />
    <img src={metamorphosisImage} alt="" />

</div>
}

export default MainPage