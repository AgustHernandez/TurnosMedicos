import { createContext, useContext, useState, useEffect} from "react";

const ContextGlobal = createContext([]);

export const useGlobalContext = () => useContext(ContextGlobal)


function ContextProvider({ children }) {  

    const [codTurno, setCodTurno] = useState("")

    const guardarTurno = (codTurno) => {
        fetch(`http://localhost:8080/api/turnos/${codTurno}`, {method:'POST'})
        .then((res) => res.json())
        .then((s) => setCodTurno(s));
        console.log(codTurno)
    }

    useEffect(() => {
        guardarTurno();
    }, [codTurno]);

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


    const url = "http://localhost:8080/api/especialistas";

    const fetchInfoLegajo = () => {
        fetch(url)
            .then((res) => res.json())
            .then((s) => {
                setData(s.map(function (elemento) {
                return {
                    value: elemento.legajo,
                    label: elemento.apellido + ', ' + elemento.nombre
                };
                }))
            })
        }

    useEffect(() => {
        fetchInfoLegajo();
    }, [legajo]);

    return (
        <ContextGlobal.Provider value={{guardarTurno, setLegajo, changeFecha, data, legajo, fechaSeleccionada, codTurno}}>
            {children}
        </ContextGlobal.Provider>
    );
};

export default ContextProvider;