import Country from "./Country";

interface PersonProps {
    name: string,
    age: number,
    country: string
}
export default function Person({name, age, country}: PersonProps){
    return(
        <div>
            <p>This is awesome</p>
            <p>{name}</p>
            <p>{age}</p>
            <Country country={country}/>
        </div>
    );
}