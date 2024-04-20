export default function Country({country}: {country: string}) {
    const url = `https://flagsapi.com/${country}/flat/64.png`
    console.log(url)
    return (
        <div>
            <h2>{country}</h2>
             <img src={url} alt='country flag'/>
        </div>
)}