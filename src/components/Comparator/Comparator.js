import {useEffect, useState} from "react";
import {deleteCar} from "../../services/Api";
import {CircularProgress} from "@material-ui/core";
import './Comparator.scss'
import { Button} from "@material-ui/core";

const Comparator = () => {
    //const [cars, setCars] = useState({});
    const [tab, setTab] = useState([]);
    const [models, setModels] = useState([]);
    const [keys, setKeys] = useState([]);
    const [links, setLinks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        update();
    }, []);

    function onDelete(id) {
        deleteCar(id).then(() => {
            setLoading(true);
            setKeys([]);
            setModels([]);
            setTab([]);
            setLinks([]);
            update();
        })
    }

    function update() {
        // GET request using fetch inside useEffect React hook
        fetch("https://car-configurator-6b257-default-rtdb.europe-west1.firebasedatabase.app/cars.json")
            .then(response => response.json())
            .then(data => {
                //setCars(data);
                //console.log('get all');
                //console.log(Object.keys(data));
                if (data != null) {
                    let t = Object.keys(data);
                    let t2 = Object.keys(data[t[0]]);
                    let index = t2.indexOf("id");
                    if (index !== -1) {
                        t2.splice(index, 1);
                    }
                    setKeys(t);
                    //console.log(data[t[0]]);
                    //console.log(data["1"]);
                    let tempTab = [];
                    let t3 = [];
                    t3.push('');
                    t.forEach(elem => t3.push(data[elem]["model"]));
                    setModels(t3);
                    index = t2.indexOf("model");
                    if (index !== -1) {
                        t2.splice(index, 1);
                    }
                    t3 = [];
                    t3.push('');
                    t.forEach(elem => t3.push(data[elem]["url"]));
                    setLinks(t3);
                    index = t2.indexOf("url");
                    if (index !== -1) {
                        t2.splice(index, 1);
                    }
                    index = t2.indexOf("basePrize");
                    if (index !== -1) {
                        t2.splice(index, 1);
                    }
                    //console.log(t);
                    //console.log(t2);
                    for (let i = 0; i < t2.length; i++) {
                        t3 = [];
                        t3.push(t2[i])
                        for (let j = 0; j < t.length; j++) {
                            t3.push(data[t[j]][t2[i]]);
                            //console.log(data[t[j]][t2[i]]);
                        }
                        //console.log(t3);
                        tempTab.push(t3)
                    }
                    //t.forEach(elem => tempTab.push(data[elem]));
                    setTab(tempTab)
                }
                setLoading(false);
            });

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }

    return (
        <div className="Main">
            {/*<code>
                <pre>{JSON.stringify(cars, null, 2)}</pre>
            </code>*/}
            {loading ? <CircularProgress className='centered-loader'/> :
                (tab.length == 0 ? <h1>You must add cars to compare</h1> :
                        <div>
                            <h1>Compare your configurations </h1>
                            <table className={'table-container'}>
                                <tbody>
                                <tr>
                                    {
                                        models.map((elem, index) => {
                                            return (<th key={index}>{elem}</th>)
                                        })
                                    }
                                </tr>
                                <tr>
                                    {
                                        links.map((elem, index) => {
                                            return (<th key={index}> {elem && <img className={'table-img'} src={elem}/>}</th>)
                                        })}
                                </tr>
                                <tr>
                                    <th>{""}</th>
                                    {
                                        keys.map((elem, index) => {
                                            return (<th key={index}>{<Button
                                                onClick={() => onDelete(elem)}>delete</Button>}</th>)
                                        })
                                    }
                                </tr>
                                {
                                    tab.map((elem, index) => {
                                        return (<tr className={'content-desc'} key={index}>{
                                            elem.map((elem2, index2) => {

                                                return (<th className={index2 === 0 ? 'titles' : 'values'} key={index2}>{elem2}</th>)
                                            })}</tr>)
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                )
            }
        </div>
    )
}

export default Comparator
