import { useParams } from "react-router-dom"

const factsData = [
    {id:1, fact: "Anna Karenina is the titular character in Leo Tolstoy's novel, a beautiful and charismatic woman trapped in a tumultuous affair." },
    {id:2, fact: "She is married to Alexei Alexandrovich Karenin, a high-ranking government official, but falls in love with Count Alexei Vronsky, leading to societal scandal." },
    {id:3, fact: "Anna's internal conflict between societal conformity and personal desires drives the novel's exploration of morality and consequences." },
    {id:4, fact: "Her tragic story serves as a poignant commentary on the challenges faced by individuals who defy societal norms in pursuit of happiness." },
    {id:5, fact: " 'Anna Karenina' is considered one of the greatest novels in world literature, renowned for its depth of character and exploration of complex human emotions."}
]

const ParamPage = () => {
    const param = useParams()

    const item = factsData.find(item => item.id == param.id)

    if(!item){
        return <div>fact not found</div>
    }

    return (
        <div>
            <h1>{item.fact}</h1>
        </div>
    )
}

export default ParamPage