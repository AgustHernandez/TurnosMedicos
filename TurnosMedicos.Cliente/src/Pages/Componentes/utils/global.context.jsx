import { createContext, useContext, useState, useEffect} from "react";

const ContextGlobal = createContext([]);

export const useGlobalContext = () => useContext(ContextGlobal)

/*const getFechaFromStorage = () => {
    const localData = localStorage.getItem("fecha");
    return localData ? JSON.parse(localData) : [];
    };

const setFechaInStorage = (fecha) =>
    localStorage.setItem("fecha", JSON.stringify(fecha));*/

function ContextProvider({ children }) {  

    const guardarTurno = (codTurno) => {
        fetch(`http://localhost:8080/api/turnos/${codTurno}`, {method:'POST'})
        .then((res) => res.json())
        .then((s) => console.log(s));
    }

    /*const [fechaSeleccionada, setFechaSeleccionada] = useState(getFechaFromStorage());

    useEffect(() => {
        setFechaInStorage(fecha);
        }, [fecha]);*/

    const changeFecha = (fecha) => setFechaSeleccionada(fecha);

    const [data, setData] = useState([]);

    const fetchInfo = () => {
        console.log(`Obteniendo turnos para ${legajo}`)
        fetch(`http://localhost:8080/api/especialistas/${legajo}/turnos?fecha=${fechaSeleccionada}`.replace("\"", "").replace("\"", ""))
        .then((res) => res.json())
        .then((s) => setData(s));
    };

    const [legajo, setLegajo] = useState("");
    const [fechaSeleccionada, setFechaSeleccionada] = useState("");

    useEffect(() => {
        fetchInfo();
    }, [legajo, fechaSeleccionada]);

    return (
        <ContextGlobal.Provider value={{guardarTurno, setLegajo, changeFecha, data, legajo, fechaSeleccionada}}>
            {children}
        </ContextGlobal.Provider>
    );
};

export default ContextProvider;