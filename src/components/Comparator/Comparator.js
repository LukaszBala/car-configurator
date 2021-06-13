import {useEffect, useState} from "react";

const Comparator = () => {
    const [cars, setCars] = useState({});
    const [tab, setTab] = useState([]);

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch("https://car-configurator-6b257-default-rtdb.europe-west1.firebasedatabase.app/cars.json")
            .then(response => response.json())
            .then(data => {
                setCars(data);
                //console.log('get all');
                //console.log(Object.keys(data));
                let t = Object.keys(data);
                let t2=Object.keys(data[t[0]]);
                //console.log(data[t[0]]);
                //console.log(data["1"]);
                let tempTab = [];
                let t3=[];
                t3.push('');
                t.forEach(elem=>t3.push(elem));
                tempTab.push(t3);
                //console.log(t);
                //console.log(t2);
                for(let i=0;i<t2.length;i++){
                    t3=[];
                    t3.push(t2[i])
                    for(let j=0;j<t.length;j++){
                        t3.push(data[t[j]][t2[i]]);
                        //console.log(data[t[j]][t2[i]]);
                    }
                    //console.log(t3);
                    tempTab.push(t3)
                }
                //t.forEach(elem => tempTab.push(data[elem]));
                setTab(tempTab)
            });

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <div className="Main">
            <code>
                <pre>{JSON.stringify(cars, null, 2)}</pre>
            </code>
            <table>
                <tbody>
                {
                    tab.map((elem, index) => {
                        return (<tr key={index}>{
                            elem.map((elem2, index2) => {

                                return (<th key={index2}>{elem2}</th>)
                            })}</tr>)
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default Comparator
