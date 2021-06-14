import {useEffect, useState} from "react";
import {deleteCar} from "../../services/Api";

const Comparator = () => {
    const [cars, setCars] = useState({});
    const [tab, setTab] = useState([]);
    const [models, setModels] = useState([]);
    const [keys, setKeys] = useState([]);


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
                let index = t2.indexOf("id");
                if (index !== -1) {
                    t2.splice(index, 1);
                }
                setKeys(t);
                //console.log(data[t[0]]);
                //console.log(data["1"]);
                let tempTab = [];
                let t3=[];
                t3.push('');
                t.forEach(elem=>t3.push(data[elem]["model"]));
                setModels(t3);
                index = t2.indexOf("model");
                if (index !== -1) {
                    t2.splice(index, 1);
                }
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
                <tr>
                {
                    models.map((elem, index) => {
                        return (<th key={index}>{elem}</th>)
                    })
                }
                </tr>
                <tr>
                    <th>{""}</th>
                    {
                        keys.map((elem, index) => {
                            return (<th key={index}>{<button onClick={deleteCar(elem)}>delete</button>}</th>)
                        })
                    }
                </tr>
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
