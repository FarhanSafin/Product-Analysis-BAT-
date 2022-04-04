import axios from "axios";
import { useEffect, useState } from "react"

const useDashboard = () =>{
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('chart.json')
        .then(data=>setData(data.data))
    },[])

    return [data, setData];
}

export default useDashboard;